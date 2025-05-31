"use client";
import React from 'react';
import {motion} from "framer-motion";
import { fadeIn } from '../../../lib/variants';


export default function Announcements() {
  return (
    <div className='h-fit w-full flex items-center py-16 md:py-24'>
      <div className='flex flex-col md:flex-row justify-between w-[90%] max-w-[85%] mx-auto'>
        {/* Left Section */}
        <div className='flex flex-col gap-6 w-full md:w-[48%] text-center md:text-left'>
          <motion.h2 
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.3}}
            style={{ fontFamily: "'Anton', sans-serif" }}
            className='text-3xl font-black uppercase tracking-[0.4em] text-[#32de84]'>
            Welcome
          </motion.h2>
          <motion.h4 
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.3}}
            className={`text-4xl md:text-6xl uppercase font-semibold text-white`}
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Africa Fashion Week Nigeria
          </motion.h4>
          <motion.p 
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.3}}
            className='text-base tracking-widest text-white'>
            The Largest global showcase of emerging African creatives.
          </motion.p>
        </div>

        {/* Right Section */}
        <motion.div 
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount:0.3}}
          className='flex flex-col gap-8 w-full md:w-[48%] text-center md:text-left'>
          <p className='text-base  tracking-widest leading-8 md:leading-10 text-white'>
            Africa Fashion Week Nigeria is the premier platform celebrating the vibrant world of African fashion. 
            As the largest global showcase of emerging African creatives, AFWN unites designers, models, 
            and fashion enthusiasts to highlight the richness of African heritage, 
            innovation, and craftsmanship. From bold prints to contemporary designs, 
            this event bridges tradition and modernity, putting African fashion on the global stage.
          </p>
          
          <p className='text-base tracking-widest leading-8 md:leading-10 text-white'>
            AFWN empowers the next generation of African talent through runway shows, exhibitions, and networking opportunities. 
            It&apos;s a space for emerging designers to shine and for industry leaders to discover the future of African fashion. 
            Join us in celebrating the creativity, diversity, 
            and beauty of African design. 
          </p>
        </motion.div>
      </div>
    </div>
  );
}
