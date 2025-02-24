import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="relative bg-red-50 py-16 px-6 md:px-20 overflow-hidden">
      {/* Decorative SVG */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#e60023] opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#e60023] opacity-10 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden">
        {/* Heading */}
        <div className="bg-[#e60023] text-white text-center py-10 px-6 animate-fade-in">
          <h2 className="text-4xl font-bold">Contact Us</h2>
          <p className="text-lg mt-2">We’d love to hear from you!</p>
        </div>

        {/* Contact Form and Details */}
        <div className="flex flex-col md:flex-row">
          {/* Left - Contact Form */}
          <div className="w-full md:w-1/2 p-8 animate-slide-in-left">
            <h3 className="text-2xl font-semibold text-[#e60023] mb-4">Send us a message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border-2 border-red-300 rounded-lg focus:outline-none focus:border-[#e60023] transition duration-300 shadow-sm"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border-2 border-red-300 rounded-lg focus:outline-none focus:border-[#e60023] transition duration-300 shadow-sm"
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-3 border-2 border-red-300 rounded-lg focus:outline-none focus:border-[#e60023] transition duration-300 shadow-sm"
              />
              <button
                type="submit"
                className="w-full bg-[#e60023] text-white py-3 rounded-lg font-semibold hover:bg-red-800 transition duration-300 shadow-lg transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right - Contact Details */}
          <div className="w-full md:w-1/2 p-8 bg-red-100 flex flex-col justify-center animate-slide-in-right">
            <h3 className="text-2xl font-semibold text-[#e60023] mb-4">Get in Touch</h3>
            <div className="space-y-6 text-red-900">
              <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
                <FaPhoneAlt className="text-[#e60023] text-xl" />
                <p className="text-lg">+91 98765 43210</p>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
                <FaEnvelope className="text-[#e60023] text-xl" />
                <p className="text-lg">contact@cloudkitchen.com</p>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
                <FaMapMarkerAlt className="text-[#e60023] text-xl" />
                <p className="text-lg">123, Food Street, Mumbai, India</p>
              </div>
            </div>

            {/* Google Map */}
            <div className="mt-6 animate-fade-in">
              <iframe
                className="w-full h-40 rounded-lg shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.385362019912!2d-122.41941568468226!3d37.77492977975979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808cbbb6a99b%3A0xcbb59e0b6c2b18f3!2sCloud%20Kitchen!5e0!3m2!1sen!2sin!4v1628678645327"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
