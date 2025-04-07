import connectDB from "../../../src/lib/dbConnect";
import User from "../../../src/models/User";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    await connectDB();
    
    const { username, email, password } = req.body;
    
    // Validate required fields
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create and save new user
    const user = new User({ 
      username, 
      email, 
      password: hashedPassword 
    });
    
    await user.save();
    
    return res.status(201).json({ 
      message: "User registered successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email
        // Don't return password hash
      }
    });
    
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({ 
      message: "Internal server error",
      error: process.env.NODE_ENV === "development" ? error.message : undefined
    });
  }
}