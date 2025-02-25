import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-col lg:flex-row gap-6 items-center justify-center bg-[url('/wallpaperflare.com_wallpaper.jpg')] bg-no-repeat bg-cover bg-center p-6 md:p-8 lg:p-12">
      {/* Background Blur Overlay */}
      <div className="absolute inset-0 bg-black/40 "></div>

      {/* Contact & Map Container */}
      <div className="relative flex flex-col md:flex-row w-full max-w-5xl bg-white/10 backdrop-blur-md shadow-2xl rounded-3xl overflow-hidden">
        
        {/* Contact Form & Details */}
        <div className="flex-1 p-6 md:p-8 text-white">
          {/* Section Heading */}
          <h2 className="text-xl md:text-3xl font-bold text-[#e60023] text-center md:text-left">Contact Us</h2>
          <p className="md:text-lg text-gray-200 text-center md:text-left mt-2">We’d love to hear from you!</p>

          {/* Contact Form */}
          <form className="space-y-4 mt-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg bg-white/20 backdrop-blur-md text-white placeholder-gray-300 focus:outline-none focus:border-[#e60023] transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg bg-white/20 backdrop-blur-md text-white placeholder-gray-300 focus:outline-none focus:border-[#e60023] transition"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white/20 backdrop-blur-md text-white placeholder-gray-300 focus:outline-none focus:border-[#e60023] transition"
            />
            <button
              type="submit"
              className="w-full bg-[#e60023] text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-red-700 transition shadow-lg"
            >
              Send Message
            </button>
          </form>

          {/* Contact Details */}
          <div className="space-y-4 text-gray-200 mt-6">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-[#e60023] text-xl" />
              <p className="text-sm md:text-xl">+91 98765 43210</p>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-[#e60023] text-xl" />
              <p className="text-sm md:text-xl">contact@cloudkitchen.com</p>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-[#e60023] text-xl" />
              <p className="text-sm md:text-xl">123, Food Street, Mumbai, India</p>
            </div>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="flex-1 p-6 md:p-8 bg-white/10 backdrop-blur-md border-t md:border-t-0 md:border-l border-[#e60023] shadow-2xl rounded-3xl">
          <h3 className="text-xl md:text-3xl font-bold text-[#ffffff] text-center mb-4">Our Location</h3>
          <iframe
            className="w-full h-[280px] md:h-[500px] rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2251.503340677129!2d79.3970345!3d28.9751593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390b676a1a93f3b7%3A0x2d6932f3b8c6ea5f!2sYour%20Location!5e0!3m2!1sen!2sin!4v1708765432109"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
