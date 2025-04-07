import connectDB from "../../../src/lib/dbConnect";
import User from "../../../src/models/User";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'; // You'll need to install this package

export default async function handler(req, res) {
  // Only allow POST requests for authentication
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    await connectDB();
    
    const { email, password } = req.body;
    
    // Validate required fields
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }
    
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    
    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    
    // Create JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    
    // Return token and basic user info (without password)
    return res.status(200).json({ 
      token,
      user: {
        id: user._id,
        email: user.email,
        username: user.username
      }
    });
    
  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(500).json({ 
      message: "Internal server error",
      error: process.env.NODE_ENV === "development" ? error.message : undefined
    });
  }
}