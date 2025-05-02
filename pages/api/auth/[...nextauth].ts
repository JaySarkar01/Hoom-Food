import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/app/utils/userSchema";
import connect from "@/app/utils/db";
import bcrypt from "bcryptjs";

import { Account, User as AuthUser } from "next-auth";

interface Credentials {
  email: string;
  password: string;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: Credentials | undefined) {
        if (!credentials || !credentials.email || !credentials.password) {
          throw new Error("Email and password are required!");
        }

        await connect();
        try {
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isPasswordCorrect) {
              return { id: user._id.toString(), email: user.email };
            }
          }
          return null;
        } catch (err) {
          console.error("Authorize error:", err);
          throw new Error("Something went wrong during authorization.");
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }: { user: AuthUser; account: Account | null }) {
      if (!account) return false;
      if (account.provider === "credentials") {
        return true;
      }
      if (account.provider === "github") {
        await connect();
        try {
          const existingUser = await User.findOne({ email: user.email });
          if (!existingUser) {
            const newUser = new User({
              email: user.email,
            });

            await newUser.save();
          }
          return true;
        } catch (err) {
          console.error("Error saving GitHub user:", err);
          return false;
        }
      }
      return false;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
export default handler;
