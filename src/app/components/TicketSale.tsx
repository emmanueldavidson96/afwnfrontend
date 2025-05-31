"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../lib/variants'
import { useRouter } from 'next/navigation';

export default function TicketSale() {
    const router = useRouter();
  return (
    <div className='w-screen h-fit py-24 flex flex-col items-center justify-center gap-5 p-5'>
        <motion.h2 
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.3}}
            style={{ fontFamily: "'Anton', sans-serif" }}
            className='lg:text-6xl text-3xl font-extrabold uppercase text-center text-white'>AFWN2025 Entry & Ticket Purchase</motion.h2>
        
        <motion.h3 
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.3}}
            className='lg:text-3xl text-base text-center font-extrabold text-white'>Friday 12th December - Sunday 14th November</motion.h3>
        {/* <motion.h4 className='lg:text-3xl text-lg  font-extrabold mt-10'>Early Bird Ticket Sales </motion.h4> */}
        {/* <motion.h4 
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.3}}
            className='lg:text-3xl text-lg font-extrabold text-center'>All Prices Include Entry to Exhibition Shopping & Food Halls</motion.h4> */}
        {/* <div className='flex max-lg:flex-col max-lg:gap-2 w-[85%] mx-auto items-center justify-between'>
            
            <motion.div 
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.3}}
                className='w-full lg:w-[31%] flex flex-col gap-3 h-[200px] items-center py-16'>
                <h2 className='text-6xl font-bold '>$15</h2>
                <p className='text-center'>Entry to ONE DAY Exhibition & ONE Catwalk Show (Saturday OR Sunday)</p>
            </motion.div>

            <motion.div 
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.3}} 
                className='w-full lg:w-[31%] flex flex-col gap-3 h-[200px] items-center py-16'>
                <h2 className='text-6xl font-bold '>$25</h2>
                <p className='text-center'>Entry to ONE DAY Exhibition & ALL Catwalk Show (Saturday OR Sunday)</p>
            </motion.div>

            <motion.div 
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount:0.3}} 
                className='w-full lg:w-[31%] flex flex-col gap-3 h-[200px] items-center py-16' >
                <h2 className='text-6xl font-bold '>$15</h2>
                <p className='text-center'>Entry to ONE DAY Exhibition & ONE Catwalk Show (Saturday OR Sunday)</p>
            </motion.div>

        </div> */}

        <motion.button 
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.3}} 
            onClick={() => router.push("/register-to-attend")}
            className='border-2 border-green-500 text-white mt-10 tracking-widest w-fit h-fit px-16 py-8 rounded-3xl font-semibold hover:bg-green-500 transition-all duration-500'>Register to Attend</motion.button>
    </div>
  )
}
