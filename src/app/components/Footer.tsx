"use client"
import Image from 'next/image'
import React from 'react'
import logoImage from "../../../public/assets/AFWN - white.png";
import { motion } from 'framer-motion';
import { fadeIn } from '../../../lib/variants';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='w-full relative lg:h-[90vh] h-[1000px]'>
        <video
            controls={false}
            src="/assets/videos/WhatsApp Video 2025-05-08 at 02.04.22_f007b747.mp4"
            loop
            muted            
            playsInline
            autoPlay
            className="absolute w-full h-full object-cover brightness-50"
        />

        <div className='absolute top-[4%] left-[4%] w-[90%] mx-auto flex max-md:flex-col max-md:gap-6 justify-between py-8 border-b border-white h-[350px]'>
            
            <motion.div 
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.3}} 
                className='flex flex-col gap-4 w-[45%] max-md:w-full h-full'>
                <h3 className='lg:text-4xl text-lg uppercase font-extrabold text-white' style={{ fontFamily: "'Anton', sans-serif" }}>STAY UPDATED, JOIN OUR MAILING LIST</h3>
                <p className='max-lg:text-sm text-white'>Sign up to be the first to find out when we add new events and share African Fashion Week Nigeria news and more.</p>
                <p className='max-lg:text-sm text-white'>We respect your privacy and will never share your information with third-party vendors.</p>
            </motion.div>

            <div className='flex items-center justify-end w-[45%] max-md:w-full h-full'>
                <div className='flex w-fit max-lg:w-full h-[60px]'>
                    <input type="email" placeholder='Email Address' className='p-4 h-full w-[350px] max-lg:w-[75%] text-black text-sm max-lg:text-xs' />
                    <button className='bg-green-500 text-sm max-lg:text-xs text-white p-4 hover:bg-green-600 h-full transition-all duration-500 '>Sign Up</button>
                </div>
            </div>
        </div>

        <div className='flex justify-between py-8 w-[85%] max-md:flex-col max-md:gap-10 mx-auto absolute bottom-[15%] max-lg:bottom-[9%] left-[4%]'>
            
            <motion.div 
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.3}} 
                className='flex flex-col gap-4 max-md:w-full'>
                <h3 className='md:text-4xl text-xl uppercase text-white font-bold' style={{ fontFamily: "'Anton', sans-serif" }}>Support</h3>
                <p className='d:text-base text-sm text-white'>Terms and Conditions</p>
                <p className='d:text-base text-sm text-white'>Privacy Policy</p>
                <p className='d:text-base text-sm text-white'>FAQs</p>
            </motion.div>

            <motion.div 
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.3}} 
                className='flex flex-col gap-4 md:items-center  max-md:w-full'>
                <img 
                    src={"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1741014374/AFWN_-_white_uokqzm.png"}
                    alt=''
                    className='lg:w-[150px] w-[80px] h-auto bg-cover '
                /> 
                <h2 className='uppercase font-bold text-base lg:text-3xl text-white' style={{ fontFamily: "'Anton', sans-serif" }}>Africa Fashion Week Nigeria</h2>
            </motion.div>

            
            <motion.div 
                variants={fadeIn("up", 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.3}} 
                className='flex flex-col gap-4 max-md:w-full' >
                <h3 className='md:text-4xl text-xl uppercase text-white font-bold' style={{ fontFamily: "'Anton', sans-serif" }}>Contact</h3>
                <Link href={"/contact-us"} className='d:text-base text-sm text-white cursor-pointer'>Contact Us</Link>
                <Link href={"/press-media-pass"} className='d:text-base text-sm text-white cursor-pointer' >Press </Link>
                
            </motion.div>

           

        </div>

    </footer>
  )
}
