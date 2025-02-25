"use client";
import Index from "@/app/pages/index";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <Index />
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* About Section */}
            <div>
              <h3 className="text-2xl font-bold text-[#e60023]">Hoom Food.</h3>
              <p className="mt-2 text-gray-400">
                Your favorite dishes, freshly prepared and delivered to your doorstep. Quality food made with love.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="hover:text-[#e60023] transition">Home</a></li>
                <li><a href="#food-section" className="hover:text-[#e60023] transition">Menu</a></li>
                <li><a href="#contact-us" className="hover:text-[#e60023] transition">Contact</a></li>
                <li><a href="#about-section" className="hover:text-[#e60023] transition">About Us</a></li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold text-white">Follow Us</h4>
              <div className="flex justify-center md:justify-start gap-4 mt-3">
                <a href="#" className="text-xl text-gray-400 hover:text-[#e60023] transition"><FaFacebook /></a>
                <a href="#" className="text-xl text-gray-400 hover:text-[#e60023] transition"><FaInstagram /></a>
                <a href="#" className="text-xl text-gray-400 hover:text-[#e60023] transition"><FaTwitter /></a>
                <a href="#" className="text-xl text-gray-400 hover:text-[#e60023] transition"><FaYoutube /></a>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Cloud Kitchen, the Hoom Food. All rights reserved. | Made with ❤️ by Jay Sarkar
          </div>
        </div>
      </footer>
    </main>
  );
}
