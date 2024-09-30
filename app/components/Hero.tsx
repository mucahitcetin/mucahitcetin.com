"use client";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="py-16 mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Sol kısım: Başlık, paragraf ve buton */}
        <div>
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-black bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptuous.
          </p>
          <button className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
              Download CV
            </span>
          </button>
        </div>

        {/* Sağ kısım: Resim */}
        <div className="flex justify-center lg:justify-end">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              src="/image/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
