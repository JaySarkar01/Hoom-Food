import { useEffect, useState } from "react";
import Image from "next/image";
import Foodie from "@/app/pages/foods";
import ContactUs from "@/app/pages/contactus"
import { FaArrowRight } from "react-icons/fa";
export default function HeroSection() {
  const texts = [
    <>Savor flavors, enjoy life!</>,
    <span className="text-6xl font-extrabold">Fresh ingredients, bold taste!</span>,
    <>Every bite, pure delight!</>,
    <>Made with love, served fresh!</>,
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-3 flex flex-col min-h-screen pt-24">
      {/* Main Content Section */}
      <main className="flex flex-col justify-between min-h-screen">
        {/* Hero Section */}
        <section className="relative flex flex-col md:flex-row justify-evenly items-center bg-amber-100 md:pl-24 md:space-x- max-md:space-y-6">
          {/* Background Images */}
          <div className="absolute top-0 right-0 w-[20%] h-[20%] bg-[url('/img/banner-vector-3.png')] bg-no-repeat bg-contain"></div>
          <div className="absolute top-0 left-0 w-[25%] h-[25%] bg-[url('/img/banner-vector-1.png')] bg-no-repeat bg-contain"></div>
          <div className="absolute bottom-0 right-0 w-[20%] h-[20%] bg-[url('/img/banner-vector-3.png')] bg-no-repeat bg-contain"></div>

          {/* ✅ Image Section First on Tablets (iPad Mini) */}
          <div className="relative w-full md:w-[55%] h-[25vh] md:h-[65vh] flex justify-start order-1 max-md:order-1 md:order-2 overflow-hidden">
            <div className="bg-[#e60023] w-[95%] md:w-[85%] h-full rounded-l-full absolute right-0 flex justify-start items-center">
              <img
                src="/img/banner-img-1.png"
                alt="Hero Image"
                className="w-[55%] md:w-[88%] h-[85%] ml-3 object-contain justify-start translate-x-3 md:translate-x-6 animate-wiggle"
                style={{ animationDuration: "5s" }}
              />
            </div>
          </div>

          {/* ✅ Shuffling Text Section Second on Tablets */}
          <div className="justify-center text-3xl items-center p-6 flex-1 text-center md:text-left space-y-6 md:space-y-4 order-2 max-md:order-2 md:order-1">
            {/* Title */}
            <span className="text-red-500 text-2xl md:text-4xl font-kranky leading-tight">
              Good Food, Good Mood.
            </span>

            {/* Animated Text */}
            <div className="relative h-auto min-h-[70px] md:min-h-[120px] lg:min-h-[130px] flex items-center">
              {texts.map((text, i) => (
                <h1
                  key={i}
                  className={`absolute w-full text-4xl md:text-4xl lg:text-7xl font-raleway font-bold text-gray-800 transition-opacity duration-500 leading-loose ${
                    i === index
                      ? "opacity-100 top-1/2 -translate-y-1/2"
                      : "opacity-0"
                  }`}
                >
                  {text}
                </h1>
              ))}
            </div>

            {/* Description */}
            <p className="text-gray-800 max-w-md text-lg md:text-lg leading-relaxed md:leading-loose">
              Order now and experience the best taste with premium quality.
            </p>

            {/* Background Image */}
            <div className="absolute bottom-0 left-0 w-[25%] h-[18%] bg-[url('/img/banner-vector-2.png')] bg-no-repeat bg-contain "></div>

            {/* Button */}
            <button
              className="relative z-10 bg-[#e60023] border-2 border-[#e60023] hover:bg-slate-50 
      text-white hover:text-red-600 px-4 py-2 flex items-center gap-2 rounded-md 
      transition-colors duration-300"
            >
              <span className="font-sans font-bold text-xl">ORDER NOW</span>
              <FaArrowRight
                className="border rounded-md text-2sm p-1 bg-slate-50 text-[#e60023] 
          hover:text-white hover:bg-red-500 transition-colors duration-300"
              />
            </button>
          </div>
        </section>

        {/* About Section */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 p-6 md:p-11 ml-11 mr-11 text-xl bg-[url('/about-bg.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-white/60"></div>

          {/* Image Section */}
          <div className="relative w-full md:w-1/3 z-10">
            <div className="absolute inset-0">
              <Image
                src="/img/bg-img-2.jpg"
                alt="bg-about"
                layout="fill"
                objectFit="cover"
                className="opacity-70 rounded-lg"
              />
            </div>
            <Image
              src="/img/about-img-2.jpg"
              alt="img-about"
              width={430}
              height={555}
              className="relative rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 space-y-6 relative z-10">
            <span className="text-[#e60023] font-extrabold flex gap-4 uppercase text-sm md:text-xl">
            <Image src="/food.png" alt="Download Icon" width={24} height={24} />
              ABOUT US
            </span>
            <h1 className="text-3xl font-bold">
              Variety of flavours from American cuisine
            </h1>
            <p className="text-gray-600 text-sm">
              Every dish is not just prepared; it's crafted with utmost
              precision and a deep understanding of flavor harmony.
            </p>

            {/* Features Section */}
            <div className="relative border-t border-b border-gray-300 py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                <div className="flex items-start space-x-3 relative pb-4 md:pb-0 md:border-r md:pr-6 border-gray-300">
                  <Image
                    src="/cloche.png"
                    alt="cloche"
                    width={40}
                    height={40}
                  />
                  <div>
                    <h2 className="font-bold text-lg">Super Quality Food</h2>
                    <p className="text-gray-600 text-sm">
                      Served our Tasty Food & good food by friendly
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Image src="/chef.png" alt="chef" width={40} height={40} />
                  <div>
                    <h2 className="font-bold text-lg">Qualified Chef</h2>
                    <p className="text-gray-600 text-sm">
                      Served our Tasty Food & good food by friendly
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CEO Section */}
            <div className="flex items-center space-x-4 mt-4">
              <Image
                src="/real-estate-agent.png"
                alt="CEO"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <span className="text-gray-600 text-sm">Kitchen, CEO</span>
                <p className="font-bold mr-4 text-lg">Jay Sarkar</p>
              </div>
              <Image
                src="/signature.png"
                alt="Signature"
                width={70}
                height={40}
              />
            </div>
          </div>
        </div>
      </main>

      {/* food container */}

      <section className="justify-center">
        <Foodie />
      </section>

      {/* food container end */}
      {/* bottom banner starts */}
      <section className="flex flex-col items-center py-16 bg-gray-100">
  {/* Main Content */}
  <div className="container mx-auto lg:ml-60 lg:mr-60 flex flex-wrap lg:flex-nowrap items-stretch gap-8 bg-[#FFE9C8] rounded-3xl overflow-hidden">
    {/* Left Side - Text Content */}
    <div className="flex-1 space-y-4 flex flex-col justify-center items-start p-6 md:p-12 lg:p-16">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
        Special offer for catering events.
      </h1>

      <p className="text-gray-500 text-sm lg:text-lg">
        The mouth-watering aroma of sizzling burgers now fills the streets
        thanks to the passionate pursuit of three brothers.
      </p>

      <button
        className="relative z-10 bg-[#e60023] border-2 border-[#e60023] hover:bg-slate-50 
        text-white hover:text-red-600 px-6 py-3 flex items-center gap-2 rounded-md 
        transition-colors duration-300"
      >
        <span className="font-sans font-bold text-sm lg:text-xl">
          ORDER NOW
        </span>
        <FaArrowRight
          className="border rounded-md text-2xl p-1 bg-slate-50 text-[#e60023]
          hover:text-white hover:bg-red-500 transition-colors duration-300"
        />
      </button>
    </div>

    {/* Right Side - Image */}
    <div className="relative flex justify-center items-center w-full md:w-1/2 lg:w-auto bg-[#FFE9C8] rounded-2xl overflow-hidden px-4 md:px-0">
      {/* Main Image with srcSet */}
      <Image
        src="/img/bottom-banners/cta-img.jpg"
        alt="main-image"
        width={500}
        height={600}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="w-full h-full object-cover rounded-t-full rounded-b-lg md:rounded-l-full md:rounded-r-lg"
        priority
      />

      {/* Smaller Overlapping Image */}
      <Image
        src="/img/bottom-banners/cta-img-1.png"
        alt="small-image"
        width={120}
        height={120}
        className="absolute bottom-12 left-4 w-[35%] md:w-[25%] lg:w-[28%] h-auto object-cover rounded-full border-4 border-white shadow-lg"
      />
    </div>
  </div>

  <section className="relative bg-gray-100 py-5 lg:px-10 md:px-16 w-full m-10 lg:ml-60 lg:mr-60">
  <div className="max-w-[85%] mx-auto flex flex-col md:flex-row items-center gap-10 bg-white shadow-lg relative overflow-hidden rounded-tl-[80px] rounded-br-[80px]">
    {/* Left Side: Text & Buttons */}
    <div className="flex-1 space-y-4 p-6 md:p-16 text-center md:text-left">
      {/* Heading Section */}
      <div className="flex justify-center md:justify-start items-center gap-2 text-[#e60023] font-semibold text-lg uppercase tracking-wide">
        <Image src="/food.png" alt="Download Icon" width={24} height={24} />
        <span>Download App</span>
        <Image src="/food.png" alt="Download Icon" width={24} height={24} />
      </div>
      <div className="absolute bottom-0 left-0 w-[40%] md:w-[20%] h-[20%] bg-[url('/img/bottom-banners/ad-vector-2.png')] bg-no-repeat bg-contain"></div>
      {/* Main Title */}
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
        Download food app <br className="hidden md:block" /> Order today!
      </h1>

      {/* Download Buttons */}
      <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
        {/* App Store Button */}
        <button className="flex items-center gap-3 px-5 py-1 border-2 border-red-500 font-semibold rounded-full hover:bg-red-100 transition">
          <Image src="/img/bottom-banners/play-button-arrowhead.png" alt="Play Icon" width={20} height={20} />
          <span className="text-gray-400">Get in on <br /><strong className="text-lg font-poppins lg:text-xl text-black">Apps Store</strong></span>
        </button>

        {/* Google Play Button */}
        <button className="flex items-center gap-3 px-5 py-1 border-2 border-red-500 font-semibold rounded-full hover:bg-red-100 transition">
          <Image src="/img/bottom-banners/play-button-arrowhead.png" alt="Play Icon" width={20} height={20} />
          <span className="text-gray-400">Get in on <br /><strong className="text-lg lg:text-xl text-black">Google Play</strong></span>
        </button>
      </div>


      
    </div>

    {/* Right Side: Mobile Screens with Background */}
    <div className="relative w-full md:w-[50%] flex justify-center items-center">
      {/* Orange Background - Adjusted for All Screens */}
      <div className="absolute bottom-0 right-0 w-full md:w-[85%] h-[100%] bg-[#FE7A00] rounded-tl-[80px] rounded-br-[80px] bg-pattern z-0"></div>

      {/* Top Right Decorative Background */}
      <div className="absolute top-0 right-[-15] w-[30%] md:w-[20%] h-[30%] bg-[url('/img/bottom-banners/app-ad-vector-3.png')] bg-no-repeat bg-contain"></div>

      {/* Mobile Screens */}
      <div className="relative flex items-end z-10">
        {/* Back Mobile Image (65% Visible) */}
        <Image
          src="/img/bottom-banners/app-ad-ss-1.png"
          alt="Small App Screen"
          width={200}
          height={400}
          className="absolute left-[-40px] md:left-[-96px] bottom-0 opacity-80"
        />

        {/* Front Mobile Image */}
        <Image
          src="/img/bottom-banners/app-ad-ss-2.png"
          alt="Main App Screen"
          width={220}
          height={450}
          className="relative shadow-xl"
        />

        {/* Discount Badge */}
        <div className="absolute top-0 left-0 bg-red-600 text-white text-lg font-bold px-4 py-2 rounded-full shadow-md">
          45% Off
        </div>
      </div>
    </div>
  </div>
</section>
</section>
<section>
  <ContactUs/>
</section>
    </div>
  );
}
