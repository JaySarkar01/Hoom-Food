"use client";
import { useState, useEffect, useRef } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaArrowRight,
  FaBars,
  FaTimes,
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
        shopRef.current && !shopRef.current.contains(event.target) &&
        pagesRef.current && !pagesRef.current.contains(event.target)
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
        className={`fixed top-0 w-full bg-red-600 text-white flex justify-between items-center shadow-xl p-3 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ zIndex: 1000 }}
      >
        <div className="flex gap-1">
          <a href="#">Login</a>
          <span>/</span>
          <a href="#">Register</a>
        </div>
        <div className="flex gap-3">
          <span className="text-white">Follow us:</span>
          <FaFacebook className="text-white text-xl hover:text-blue-700" />
          <FaTwitter className="text-white text-xl hover:text-sky-400" />
          <FaLinkedin className="text-white text-xl hover:text-sky-500" />
          <FaYoutube className="text-white text-xl hover:text-red-700" />
        </div>
      </div>

      {/* Bottom Navbar */}
      <div
        className={`fixed shadow-lg ${
          isVisible
            ? "top-[50px] border-none"
            : "top-0 border-t-4 border-b-4 border-red-600 shadow-xl"
        } w-full bg-white text-black flex justify-between items-center p-3 transition-all duration-300`}
        style={{ zIndex: 1000 }}
      >
        <span className="text-xl font-bold">LOGO</span>

        {!isMobile && (
          <div className="flex gap-6 items-center">
            <a href="#" className="hover:text-red-600 transition">Home</a>
            <a href="#" className="hover:text-red-600 transition">About</a>

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
                  <li className="hover:text-red-600 transition">Shop Details</li>
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

            <a href="#" className="hover:text-red-600 transition">Blog</a>
            <a href="#" className="hover:text-red-600 transition">Contact</a>

            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 flex items-center gap-2 rounded-md">
              Order Now <FaArrowRight />
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
                    <li className="hover:text-red-600 transition">Shop Details</li>
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
                    <li className="hover:text-red-600 transition">Reservation</li>
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