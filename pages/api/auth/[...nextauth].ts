import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/app/utils/userSchema";
import connect from "@/app/utils/db";
import bcrypt from "bcryptjs";

import { Account, User as AuthUser } from "next-auth";


export const authOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
            throw new Error("Email and password are required!");
          }
          
        await connect();
        try {
          const user = await User.findOne({ email: credentials.email});
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isPasswordCorrect) {
              return { id: user._id, email: user.email };
          
            }
          }
          return null;
        } catch (err: any) {
          throw new Error(err);
        }
      },
    }),
    // add more provider here 
  ],
  callbacks:{
    async signIn({user, account}:{user: AuthUser , account: Account}){
      if(account?.provider == "credentials"){
        return true;
      }
      if(account?.provider == "github"){
        await connect();
        try{
          const existingUser = await User.findOne({email: user.email});
          if(!existingUser){
            const newUser = new User({
              email: user.email
            });

            await newUser.save();
            return true;

          }
          return true;
        }
        catch (err){
          console.log("Error saving user", err);
          return false;
        }
      }
    }
  }
};

export const handler = NextAuth(authOptions);
export default handler;
