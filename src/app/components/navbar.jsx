"use client";
import { useState, useEffect, useRef } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaArrowRight,
  FaBars,
  FaTimes,
  FaUser,
} from "react-icons/fa";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  let lastScrollTop = 0;

  const shopRef = useRef(null);
  const pagesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop === 0 || scrollTop < lastScrollTop);
      lastScrollTop = scrollTop;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleShopToggle = () => {
    setIsShopOpen(!isShopOpen);
    setIsPagesOpen(false); // Close pages dropdown if shop is toggled
  };

  const handlePagesToggle = () => {
    setIsPagesOpen(!isPagesOpen);
    setIsShopOpen(false); // Close shop dropdown if pages is toggled
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        shopRef.current &&
        !shopRef.current.contains(event.target) &&
        pagesRef.current &&
        !pagesRef.current.contains(event.target)
      ) {
        setIsShopOpen(false);
        setIsPagesOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      {/* Upper Navbar */}
      <div
        className={`fixed border-b-4 border-[#FFFDD0] top-0 w-full bg-red-600 text-white flex flex-wrap justify-between items-start shadow-xl p-3 sm:p-6 lg:p-4 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ zIndex: 1000 }}
      >
        {/* Left Section - Login/Register */}
        <div className="flex gap-2 sm:gap-3 items-center text-sm sm:text-lg lg:text-2xl">
          <FaUser className="text-lg sm:text-xl lg:text-2xl" />
          <a href="#" className="hover:underline">
            Login
          </a>
          <span>/</span>
          <a href="#" className="hover:underline">
            Register
          </a>
        </div>

        {/* Right Section - Social Icons */}
        <div className="flex gap-3 sm:gap-5 items-center">
          <span className="text-white text-sm sm:text-lg lg:text-xl">
            Follow us:
          </span>
          <FaFacebook className="text-white text-xl sm:text-2xl lg:text-3xl hover:text-blue-700 transition duration-300" />
          <FaTwitter className="text-white text-xl sm:text-2xl lg:text-3xl hover:text-sky-400 transition duration-300" />
          <FaLinkedin className="text-white text-xl sm:text-2xl lg:text-3xl hover:text-sky-600 transition duration-300" />
          <FaYoutube className="text-white text-xl sm:text-2xl lg:text-3xl hover:text-red-700 transition duration-300" />
        </div>
      </div>

      {/* Bottom Navbar */}
      <div
        className={`fixed text-2xl ${
          isVisible ? "top-[65px] border-none" : "top-0"
        } w-full bg-white text-black flex justify-between md:justify-between lg:justify-stretch items-center p-5 md:p-4 transition-all duration-300
`}
        style={{ zIndex: 1000 }}
        
      >
        {/* logo start  */}
        <span className="flex flex-col items-start">
          <span>
            <span className="text-3xl sm:text-3xl lg:text-4xl font-bold font-serif text-rose-600">
              Hoom
            </span>
            <span className="text-3xl sm:text-4xl lg:text-5xl font-serif">
              Food
            </span>
            <span className="text-3xl sm:text-4xl lg:text-5xl text-rose-500">
              .
            </span>
          </span>
          <span className="text-sm sm:text-base lg:text-xl font-mono tracking-wide ml-1">
            Best <span className="ml-2"></span> Foods
          </span>
        </span>


        {/* logo end */}
        <svg className="absolute top-24 left-0 w-full" viewBox="0 0 1440 50">
          <path
            fill="none"
            stroke="red"
            strokeWidth="14"
            d="M0,20 Q30,46 64,20 T120,20 T180,20 T240,20 T300,20 T360,20 T420,20 T480,20 T540,20 T600,20 T660,20 T720,20 T780,20 T840,20 T900,20 T960,20 T1020,20 T1080,20 T1140,20 T1200,20 T1260,20 T1320,20 T1380,20 T1440,20 V0 H0 Z"
          ></path>

          <path
            fill="white"
            d="M0,20 Q30,42 66,20 T120,20 T180,20 T240,20 T300,20 T360,20 T420,20 T480,20 T540,20 T600,20 T660,20 T720,20 T780,20 T840,20 T900,20 T960,20 T1020,20 T1080,20 T1140,20 T1200,20 T1260,20 T1320,20 T1380,20 T1440,20 V0 H0 Z"
          ></path>
        </svg>
        {!isMobile && (
          <div className="flex gap-6 items-center">
            <a href="#" className="hover:text-red-600 transition">
              Home
            </a>
            <a href="#" className="hover:text-red-600 transition">
              About
            </a>

            {/* Shop Dropdown */}
            <div className="relative" ref={shopRef}>
              <button
                onClick={handleShopToggle}
                className="hover:text-red-600 transition flex items-center"
              >
                Shop
              </button>
              {isShopOpen && (
                <ul className="absolute left-0 top-full bg-white shadow-md rounded-md p-2 space-y-1 w-40">
                  <li className="hover:text-red-600 transition">Shop</li>
                  <li className="hover:text-red-600 transition">
                    Shop Details
                  </li>
                  <li className="hover:text-red-600 transition">Cart</li>
                  <li className="hover:text-red-600 transition">Checkout</li>
                </ul>
              )}
            </div>

            {/* Pages Dropdown */}
            <div className="relative" ref={pagesRef}>
              <button
                onClick={handlePagesToggle}
                className="hover:text-red-600 transition flex items-center"
              >
                Pages
              </button>
              {isPagesOpen && (
                <ul className="absolute left-0 top-full bg-white shadow-md rounded-md p-2 space-y-1 w-40">
                  <li className="hover:text-red-600 transition">Menu</li>
                  <li className="hover:text-red-600 transition">Reservation</li>
                  <li className="hover:text-red-600 transition">Services</li>
                  <li className="hover:text-red-600 transition">Our Chef</li>
                  <li className="hover:text-red-600 transition">Gallery</li>
                  <li className="hover:text-red-600 transition">FAQ</li>
                </ul>
              )}
            </div>

            <a href="#" className="hover:text-red-600 transition">
              Blog
            </a>
            <a href="#" className="hover:text-red-600 transition">
              Contact
            </a>

            <button className="bg-red-600 border-2 border-red-600 hover:bg-slate-50 
  text-white hover:text-red-600 px-4 py-2 flex items-center gap-2 rounded-md 
  transition-colors duration-300">
  <span className="font-sans font-bold text-lg">ORDER NOW</span> 
  <FaArrowRight className="border rounded-md text-2sm p-1 bg-slate-50 text-red-500 
    hover:text-white hover:bg-red-500 transition-colors duration-300"/>
</button>


          </div>
        )}
        {isMobile && (
          <FaBars
            className="text-xl cursor-pointer ml-2"
            onClick={() => setIsSidebarOpen(true)}
          />
        )}
      </div>

      {/* Sidebar (Only Mobile View) */}
      {isMobile && (
        <>
          {/* Overlay */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black opacity-50 z-[140]" // Keeps overlay behind sidebar
              onClick={() => setIsSidebarOpen(false)}
            ></div>
          )}

          <div
            className={`fixed right-0 top-0 h-full w-[280px] bg-white text-black p-5 border-l-4 border-red-600 shadow-lg transform transition-transform duration-300 z-[1100] ${
              isSidebarOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Sidebar Header */}
            <div className="flex justify-between items-center">
              <img src="/logo.png" alt="Logo" className="h-10" />
              <FaTimes
                className="text-xl cursor-pointer"
                onClick={() => setIsSidebarOpen(false)}
              />
            </div>

            {/* Sidebar Menu */}
            <ul className="mt-6 space-y-4">
              <li className="hover:text-red-600 transition">Home</li>
              <li className="hover:text-red-600 transition">About</li>

              {/* Shop Dropdown */}
              <li>
                <div
                  className="flex justify-between cursor-pointer hover:text-red-600 transition"
                  onClick={handleShopToggle}
                >
                  <span>Shop</span>
                </div>
                {isShopOpen && (
                  <ul className="ml-4 text-sm bg-red-100 p-2 rounded">
                    <li className="hover:text-red-600 transition">Shop</li>
                    <li className="hover:text-red-600 transition">
                      Shop Details
                    </li>
                    <li className="hover:text-red-600 transition">Cart</li>
                    <li className="hover:text-red-600 transition">Checkout</li>
                  </ul>
                )}
              </li>

              {/* Pages Dropdown */}
              <li>
                <div
                  className="flex justify-between cursor-pointer hover:text-red-600 transition"
                  onClick={handlePagesToggle}
                >
                  <span>Pages</span>
                </div>
                {isPagesOpen && (
                  <ul className="ml-4 text-sm bg-red-100 p-2 rounded">
                    <li className="hover:text-red-600 transition">Menu</li>
                    <li className="hover:text-red-600 transition">
                      Reservation
                    </li>
                    <li className="hover:text-red-600 transition">Services</li>
                    <li className="hover:text-red-600 transition">Our Chef</li>
                    <li className="hover:text-red-600 transition">Gallery</li>
                    <li className="hover:text-red-600 transition">FAQ</li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </>
      )}

      {/* Page Content */}

      <div className="pt-16"></div>
    </>
  );
}
