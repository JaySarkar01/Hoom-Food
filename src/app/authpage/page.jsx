"use client"
import { useState } from "react";

const ContactUs = () => {
  // State for login form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginErrors, setLoginErrors] = useState({ email: "", password: "" });

  // State for register form
  const [username, setUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registerErrors, setRegisterErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Validate login form
  const validateLogin = () => {
    let errors = { email: "", password: "" };
    if (!email) errors.email = "Email is required.";
    if (!password) errors.password = "Password is required.";
    setLoginErrors(errors);
    return Object.values(errors).every((error) => error === "");
  };

  // Validate register form
  const validateRegister = () => {
    let errors = { username: "", email: "", password: "", confirmPassword: "" };
    if (!username) errors.username = "Username is required.";
    if (!registerEmail) errors.email = "Email is required.";
    if (!registerPassword) errors.password = "Password is required.";
    if (registerPassword !== confirmPassword)
      errors.confirmPassword = "Passwords do not match.";
    setRegisterErrors(errors);
    return Object.values(errors).every((error) => error === "");
  };

  // Handle login form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (validateLogin()) {
      // Proceed with login logic
      console.log("Login form submitted");
    }
  };

  // Handle register form submission
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (validateRegister()) {
      // Proceed with registration logic
      console.log("Register form submitted");
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col md:flex-col lg:flex-row gap-6 items-center justify-center bg-[url('/wallpaperflare.com_wallpaper.jpg')] bg-no-repeat bg-cover bg-center p-6 md:p-8 lg:p-12">
      {/* Background Blur Overlay */}
      <div className="absolute inset-0 bg-black/40 "></div>

      {/* Contact & Map Container */}
      <div className="relative flex flex-col md:flex-row w-full max-w-5xl bg-white/10 backdrop-blur-md shadow-2xl rounded-3xl overflow-hidden ">
        {/* Login section */}
        <div className="flex-1 p-6 md:p-8 text-white">
          {/* Section Heading */}
          <h2 className="text-xl md:text-3xl font-bold text-[#e60023] text-center md:text-left">
            Login
          </h2>
          <p className="md:text-lg text-gray-200 text-center md:text-left mt-2">
            Welcome back buddy!
          </p>

          {/* Login Form */}
          <form className="space-y-4 mt-6" onSubmit={handleLoginSubmit}>
            <p>Email :</p>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg bg-white/20 backdrop-blur-md text-white placeholder-gray-300 focus:outline-none focus:border-[#e60023] transition"
            />
            {loginErrors.email && (
              <p className="text-red-500 text-sm">{loginErrors.email}</p>
            )}

            <p>Password :</p>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg bg-white/20 backdrop-blur-md text-white placeholder-gray-300 focus:outline-none focus:border-[#e60023] transition"
            />
            {loginErrors.password && (
              <p className="text-red-500 text-sm">{loginErrors.password}</p>
            )}

            <button
              type="submit"
              className="w-full bg-[#e60023] text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-red-700 transition shadow-lg"
            >
              Login
            </button>
          </form>
        </div>

        {/* Register Section */}
        <div className="flex-1 p-6 md:p-8 bg-white/10 backdrop-blur-md border-t md:border-t-0 md:border-l border-[#e60023] shadow-2xl rounded-3xl">
          <div className="flex-1 p-6 md:p-8 text-white ">
            {/* Section Heading */}
            <h2 className="text-xl md:text-3xl font-bold text-[#e60023] text-center md:text-left">
              Register
            </h2>
            <p className="md:text-lg text-gray-200 text-center md:text-left mt-2">
              We’d love to join you!
            </p>

            {/* Register Form */}
            <form className="space-y-4 mt-6" onSubmit={handleRegisterSubmit}>
              <p>Username :</p>
              <input
                type="text"
                placeholder="Enter your name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg bg-white/20 backdrop-blur-md text-white placeholder-gray-300 focus:outline-none focus:border-[#e60023] transition"
              />
              {registerErrors.username && (
                <p className="text-red-500 text-sm">{registerErrors.username}</p>
              )}

              <p>Email :</p>
              <input
                type="email"
                placeholder="Enter your email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                className="w-full px-4 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg bg-white/20 backdrop-blur-md text-white placeholder-gray-300 focus:outline-none focus:border-[#e60023] transition"
              />
              {registerErrors.email && (
                <p className="text-red-500 text-sm">{registerErrors.email}</p>
              )}

              <p>Password :</p>
              <input
                type="password"
                placeholder="Enter password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                className="w-full px-4 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg bg-white/20 backdrop-blur-md text-white placeholder-gray-300 focus:outline-none focus:border-[#e60023] transition"
              />
              {registerErrors.password && (
                <p className="text-red-500 text-sm">{registerErrors.password}</p>
              )}

              <p>Confirm Password :</p>
              <input
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg bg-white/20 backdrop-blur-md text-white placeholder-gray-300 focus:outline-none focus:border-[#e60023] transition"
              />
              {registerErrors.confirmPassword && (
                <p className="text-red-500 text-sm">{registerErrors.confirmPassword}</p>
              )}

              <button
                type="submit"
                className="w-full bg-[#e60023] text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-red-700 transition shadow-lg"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;