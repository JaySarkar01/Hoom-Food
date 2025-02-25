"use client";
import Index from "@/app/pages/index";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

export default function Home() {
  return (
    <main>
      <Index />
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-4">
          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* About Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#e60023]">
                Hoom Food<span className="text-3xl font-spice">.</span>
              </h2>
              <p className="text-gray-400 pb-6 border-b border-gray-700">
                Your favorite dishes, freshly prepared and delivered to your doorstep. Quality food made with love.
              </p>
            </div>

            {/* Quick Links and Contact Section */}
            <div className="grid grid-cols-2 gap-6">
              {/* Quick Links */}
               {/* Quick Links */}
  <div className="space-y-4">
    <h3 className="text-xl font-semibold text-[#e60023]">Quick Links</h3>
    <ul className="space-y-2">
      {[
        { name: "Home", id: "" },
        { name: "Menu", id: "food-section" },
        { name: "Contact", id: "contact-us" },
        { name: "About Us", id: "about-section" },
      ].map(({ name, id }) => (
        <li key={id}>
          <a
            href={`#${id}`}
            className="text-gray-400 hover:text-[#e60023] transition-colors cursor-pointer"
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  </div>

              {/* Contact Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#e60023]">Contact Us</h3>
                <div className="space-y-2 text-gray-400">
                  <p className="flex items-center gap-2">
                    <MdLocationOn className="text-xl text-[#e60023]" />
                    <span>123, Rudrapur, India</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <MdEmail className="text-xl text-[#e60023]" />
                    <span>support@hoomfood.com</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <MdPhone className="text-xl text-[#e60023]" />
                    <span>+91 98765 43210</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & Copyright */}
          <div className="mt-8 text-center">
            {/* Social Media Icons */}
            <div className="flex justify-center gap-6 mb-4">
              {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-300 hover:text-[#e60023] transition-transform transform hover:scale-110 cursor-pointer text-2xl"
                >
                  <Icon />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © 2025 Cloud Kitchen, the Hoom Food. All rights reserved. | Made with ❤️ by Jay Sarkar
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}