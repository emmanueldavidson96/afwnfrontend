"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logoImage from "../../../public/assets/AFWN - white.png"
import { fadeIn } from "../../../lib/variants";
import { ImGift } from "react-icons/im";

export default function Banner() {
  return (
    <section className="w-screen h-[130vh] relative overflow-hidden flex items-center justify-center px-4">
      {/* Background Video */}
      <video
        controls={false}
        src="/assets/videos/WhatsApp Video 2025-05-08 at 02.04.22_8c22cef9.mp4"
        loop
        muted
        playsInline
        autoPlay
        className="absolute w-full h-full object-cover object-top brightness-50"
      />

      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>

      {/* Content Wrapper */}
      <div className="absolute bottom-[40%] left-10 lg:left-24 text-left max-w-[80%] lg:max-w-[900px] flex flex-col gap-6 items-start">
        {/* Title Section */}
        <motion.div
          className="relative text-white uppercase font-extrabold flex flex-col gap-8 leading-[4rem] text-[12vw] md:text-[5em] tracking-widest"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
            <motion.img
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.3}}
                src={"/assets/AFWN - white.png"}
                alt="afwn logo"
                className="w-[125px] lg:w-[200px] h-auto object-cover "
            />   
            <motion.h2 
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once:false, amount:0.3}}
              className="text-3xl lg:text-5xl font-extrabold text-white uppercase lg:leading-[3rem]">
                The World's Largest & Longest-Running Showcase of African Design.  
            </motion.h2>     

        </motion.div>        
      </div>
    </section>
  );
}
