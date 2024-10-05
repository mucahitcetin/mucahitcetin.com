"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="py-16 mt-10 pt-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Sol kısım: Başlık, paragraf ve buton */}
        <div className="max-lg:text-center">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold ">
            <span className="text-primary bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Mücahit",
                1300,
                "Frontend Developer",
                1300,
                "Web Developer",
                1300,
                "Mobile Developer",
                1300,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="bg-gradient-to-r from-[#2D7A82] to-[#FC8B4F] bg-clip-text text-transparent whitespace-nowrap"
            />

          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptuous.
          </p>
          <button className="px-1 inline-block py-1 w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:opacity-85 text-white mt-3">
            <span className="block  bg-gradient-to-r from-[#2D7A82] to-[#FC8B4F]  rounded-full px-5 py-2">
              Download CV
            </span>
          </button>
        </div>

        {/* Sağ kısım: Resim */}
        <div className="flex justify-center lg:justify-end">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              src="/image/hero.webp"
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
