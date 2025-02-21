import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const texts = [
    <>Savor flavors, <span className="text-red-500">indulge bliss</span></>,
    <>A symphony of taste, crafted with passion <Image src="/img/banner-txt-img.jpg" alt="Icon" width={120} height={120} className="inline rounded-full" /> perfection.</>,
    <>Every bite tells a <Image src="/img/banner-txt-img.jpg" alt="Icon" width={120} height={120} className="inline rounded-full" /> delicious story.</>,
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-7 flex flex-col min-h-screen">
      {/* Main Content Section */}
      <main className="flex flex-col justify-between min-h-screen">
        {/* Hero Section */}
        <section className="relative flex flex-col md:flex-row justify-between items-center bg-amber-100">
          {/* Background Images */}
          <div className="absolute top-0 right-0 w-[20%] h-[20%] bg-[url('/img/banner-vector-3.png')] bg-no-repeat bg-contain"></div>
          <div className="absolute top-0 left-0 w-[25%] h-[25%] bg-[url('/img/banner-vector-1.png')] bg-no-repeat bg-contain animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[20%] h-[20%] bg-[url('/img/banner-vector-2.png')] bg-no-repeat bg-contain animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-[20%] h-[20%] bg-[url('/img/banner-vector-3.png')] bg-no-repeat bg-contain"></div>
          {/* Shuffling Text Section */}
          <div className="justify-center items-center p-6 flex-1 text-center md:text-left space-y-7 order-2 md:order-1">
            <span className="text-red-500">Good Food, Good Mood. </span>
            <div className="relative h-[80px] md:h-[100px] flex items-center">
              {texts.map((text, i) => (
                <h1
                  key={i}
                  className={`absolute w-full text-3xl md:text-5xl font-bold text-gray-800 transition-opacity duration-500 ${
                    i === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {text}
                </h1>
              ))}
            </div>
            <p className="text-gray-600 max-w-md">
              Order now and experience the best taste with premium quality.
            </p>
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg mt-4 hover:bg-red-700 transition">
              Order Now
            </button>
          </div>

          {/* Image Section */}
          <div className="relative w-full md:w-[60%] h-[37vh] md:h-[60vh] flex justify-end order-1 md:order-2 overflow-hidden">
            <div className="bg-red-600 w-[90%] md:w-[85%] h-full rounded-l-full absolute right-0 flex justify-start items-center">
              <img
                src="/img/banner-img-1.png"
                alt="Hero Image"
                className="w-[90%] md:w-[80%] h-[90%] ml-3 object-contain justify-start translate-x-3 md:translate-x-6 animate-wiggle"
                style={{ animationDuration: "5s" }}
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 p-6 md:p-12 ml-6 mr-6 text-sm bg-[url('/about-bg.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-white/60"></div>

          {/* Image Section */}
          <div className="relative w-full md:w-1/2 z-10">
            <div className="absolute inset-0">
              <Image
                src="/img/bg-img-2.jpg"
                alt="bg-about"
                layout="fill"
                objectFit="cover"
                className="opacity-50 rounded-lg"
              />
            </div>
            <Image
              src="/img/about-img-2.jpg"
              alt="img-about"
              width={400}
              height={500}
              className="relative rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 space-y-6 relative z-10">
            <span className="text-red-600 font-semibold uppercase">
              ABOUT US
            </span>
            <h1 className="text-3xl font-bold">
              Variety of flavours from American cuisine
            </h1>
            <p className="text-gray-600">
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
                    <h2 className="font-bold">Super Quality Food</h2>
                    <p className="text-gray-600">
                      Served our Tasty Food & good food by friendly
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Image src="/chef.png" alt="chef" width={40} height={40} />
                  <div>
                    <h2 className="font-bold">Qualified Chef</h2>
                    <p className="text-gray-600">
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
                <span className="text-gray-600">Kitchen, CEO</span>
                <p className="font-bold">Jay Sarkar</p>
              </div>
              <Image
                src="/signature.png"
                alt="Signature"
                width={100}
                height={40}
              />
            </div>
          </div>
        </div>
        {/*  */}
      </main>
    </div>
  );
}
