"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ContactUs = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginErrors, setLoginErrors] = useState({ email: "", password: "" });

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

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const containerRef = useRef(null);

  // Reset messages after 5 seconds
  useEffect(() => {
    if (successMessage || errorMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
        setErrorMessage("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [successMessage, errorMessage]);

  const validateLogin = () => {
    let errors = { email: "", password: "" };
    if (!email) errors.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(email)) errors.email = "Email is invalid.";
    if (!password) errors.password = "Password is required.";
    else if (password.length < 6) errors.password = "Password must be at least 6 characters.";
    setLoginErrors(errors);
    return Object.values(errors).every((error) => error === "");
  };

  const validateRegister = () => {
    let errors = { username: "", email: "", password: "", confirmPassword: "" };
    if (!username) errors.username = "Username is required.";
    if (!registerEmail) errors.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(registerEmail)) errors.email = "Email is invalid.";
    if (!registerPassword) errors.password = "Password is required.";
    else if (registerPassword.length < 6) errors.password = "Password must be at least 6 characters.";
    if (registerPassword !== confirmPassword)
      errors.confirmPassword = "Passwords do not match.";
    setRegisterErrors(errors);
    return Object.values(errors).every((error) => error === "");
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");
    if (validateLogin()) {
      setLoading(true);
      try {
        const res = await fetch("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        if (!res.ok) throw new Error("Login failed");

        setSuccessMessage("Login successful! Redirecting...");
        setEmail("");
        setPassword("");
      } catch (err) {
        setErrorMessage("Login failed. Please check your credentials.");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");
    if (validateRegister()) {
      setLoading(true);
      try {
        const res = await fetch("/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username,
            email: registerEmail,
            password: registerPassword,
          }),
        });

        if (!res.ok) throw new Error("Registration failed");

        setSuccessMessage("Registration successful! You can now login.");
        setUsername("");
        setRegisterEmail("");
        setRegisterPassword("");
        setConfirmPassword("");
        setActiveTab("login");
      } catch (err) {
        setErrorMessage("Registration failed. Try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  const switchTab = (tab) => {
    setActiveTab(tab);
    // Reset errors when switching tabs
    if (tab === "login") {
      setRegisterErrors({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      setLoginErrors({ email: "", password: "" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[url('/wallpaperflare.com_wallpaper.jpg')] bg-no-repeat bg-cover bg-center p-4 md:p-8">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      <div 
        ref={containerRef}
        className="relative w-full max-w-md md:max-w-2xl bg-white/10 backdrop-blur-lg shadow-2xl rounded-3xl overflow-hidden border border-white/20"
      >
        {/* Tab Selector */}
        <div className="flex border-b border-white/20">
          <button
            onClick={() => switchTab("login")}
            className={`flex-1 py-4 font-bold transition-all duration-300 ${
              activeTab === "login"
                ? "text-[#e60023] bg-white/10"
                : "text-gray-300 hover:text-white hover:bg-white/5"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => switchTab("register")}
            className={`flex-1 py-4 font-bold transition-all duration-300 ${
              activeTab === "register"
                ? "text-[#e60023] bg-white/10"
                : "text-gray-300 hover:text-white hover:bg-white/5"
            }`}
          >
            Register
          </button>
        </div>

        <div className="relative h-[500px] overflow-hidden">
          <AnimatePresence mode="wait">
            {activeTab === "login" ? (
              <motion.div
                key="login"
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                className="absolute inset-0 p-6 md:p-8 text-white"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-[#e60023]">Welcome Back!</h2>
                <p className="text-gray-200 mt-2">Login to continue your journey</p>

                <form onSubmit={handleLoginSubmit} className="space-y-4 mt-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e60023] focus:border-transparent transition-all"
                    />
                    {loginErrors.email && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-xs mt-1"
                      >
                        {loginErrors.email}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <input
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e60023] focus:border-transparent transition-all"
                    />
                    {loginErrors.password && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-xs mt-1"
                      >
                        {loginErrors.password}
                      </motion.p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-[#e60023] text-white font-bold rounded-lg hover:bg-[#d5001f] transition-all flex items-center justify-center disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Logging in...
                      </>
                    ) : "Login"}
                  </button>
                </form>

                <div className="mt-4 text-center text-sm text-gray-300">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => switchTab("register")}
                    className="text-[#e60023] hover:underline focus:outline-none"
                  >
                    Register here
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="register"
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                className="absolute inset-0 p-6 md:p-8 text-white overflow-y-auto"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-[#e60023]">Join Us!</h2>
                <p className="text-gray-200 mt-2">Create your account in seconds</p>

                <form onSubmit={handleRegisterSubmit} className="space-y-4 mt-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">Username</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e60023] focus:border-transparent transition-all"
                    />
                    {registerErrors.username && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-xs mt-1"
                      >
                        {registerErrors.username}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={registerEmail}
                      onChange={(e) => setRegisterEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e60023] focus:border-transparent transition-all"
                    />
                    {registerErrors.email && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-xs mt-1"
                      >
                        {registerErrors.email}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <input
                      type="password"
                      placeholder="Enter password"
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e60023] focus:border-transparent transition-all"
                    />
                    {registerErrors.password && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-xs mt-1"
                      >
                        {registerErrors.password}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Confirm Password</label>
                    <input
                      type="password"
                      placeholder="Confirm password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e60023] focus:border-transparent transition-all"
                    />
                    {registerErrors.confirmPassword && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-xs mt-1"
                      >
                        {registerErrors.confirmPassword}
                      </motion.p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-[#e60023] text-white font-bold rounded-lg hover:bg-[#d5001f] transition-all flex items-center justify-center disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Registering...
                      </>
                    ) : "Register"}
                  </button>
                </form>

                <div className="mt-4 text-center text-sm text-gray-300">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => switchTab("login")}
                    className="text-[#e60023] hover:underline focus:outline-none"
                  >
                    Login here
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Notification Section */}
      <AnimatePresence>
        {(successMessage || errorMessage) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center"
          >
            {successMessage ? (
              <>
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p className="text-green-600 font-semibold">{successMessage}</p>
              </>
            ) : (
              <>
                <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <p className="text-red-600 font-semibold">{errorMessage}</p>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContactUs;