"use client";
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../lib/variants'

export default function page() {
  return (
    <div className='w-screen h-fit bg-black'>
        
        <Header />

        <div className='w-full flex items-center justify-center h-fit bg-black py-24 mt-[80px]'>
            <div className='bg-black h-fit flex max-lg:flex-col-reverse max-lg:gap-6 justify-between w-[90%] mx-auto '>
                <motion.div     
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.3}} 
                    className='flex flex-col gap-5 lg:w-[45%] w-full '
                >
                    <h2 className='lg:text-7xl text-3xl text-white font-black'>About</h2>
                    <p className='text-white leading-8 text-sm lg:text-lg lg:leading-10'>
                    In 2011, African Fashion Week London was created by Queen Ronke Ademiluyi-Ogunwusi to increase the visibility, 
                    awareness and sustainability of African and Black fashion brands through catwalk showcases, exhibitions and education.
                    </p>
                    <p className='text-white leading-8 text-sm lg:text-lg lg:leading-10'>
                    Queen Ronke is also the founder of Africa Fashion Week London, the Adire Oodua Textile Hub in Nigeria and co-founder of Africa Fashion Week Brazil.
                    </p>
                    <p className='text-white leading-8 text-sm lg:text-lg lg:leading-10'>
                    Our annual event is the world's largest, longest-running showcase of African and African-inspired fashion and design. 
                    </p>
                    <p className='text-white leading-8 text-sm lg:text-lg lg:leading-10'>
                    We have hosted 14 editions of catwalk and exhibition events, and have curated and participated in other major events.
                    </p>
                    <p className='text-white leading-8 text-sm lg:text-lg lg:leading-10'>
                    We have hosted 1700 emerging designers and exhibitors from across the globe including Africa, Europe and America to 90,000 visitors including buyers, retailers and industry professionals.
                    </p>
                </motion.div>

                <motion.div  
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.3}} 
                    className='lg:w-[45%] w-full h-fit flex items-center justify-center'
                >
                    <img 
                        src={'/assets/about/O2.jpg'}
                        alt='Olori Aderonke Ogunwusi'
                        className='lg:w-[80%] w-[90%] h-auto object-cover'
                        loading='lazy'
                    />
                </motion.div>
            </div>
        </div>
        


        {/* What Sets Us Apart */}
        <div className='w-full flex items-center justify-center h-fit bg-white py-24'>
            <div className='bg-white h-fit flex justify-between w-[90%] mx-auto max-lg:flex-col max-lg:gap-6'>
                <motion.div 
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.3}} 
                    className='lg:w-[45%] w-full h-fit flex items-center justify-center'
                >
                    <img 
                        src={'/assets/AFWN_2024_Highlights/Guests/IMG_2691.jpg'}
                        alt=''
                        className='w-[100%] h-auto object-cover'
                        loading='lazy'
                    />
                </motion.div>
                <motion.div 
                    variants={fadeIn("up", 0.6)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.3}} 
                    className='flex flex-col gap-5 lg:w-[45%] w-full'>
                    <h2 className='lg:text-5xl text-2xl text-black font-black'>What Sets Us Apart</h2>
                    <p className='text-black leading-8 text-sm lg:text-lg lg:leading-10'>
                    Africa Fashion Week Nigeria is seen as the beacon of African fashion and design outside the African continent.  We highlight and nurture sustainability, social enterprise and entrepreneurship through international visibility. 
                    </p>
                    <p className='text-black leading-8 text-sm lg:text-lg lg:leading-10'>
                    We support market expansion of indigenous craftsmanship, traditional textile manufacturing, local business development and cross-cultural engagement.
                    </p>
                    <p className='text-black leading-8 text-sm lg:text-lg lg:leading-10'>
                    Over the past 15 years we have built a significant track record in working collaboratively with the African Diaspora.
                    </p>                
                </motion.div>
            </div>
        </div>

        {/* Who We Represent */}
        <div className='w-full flex items-center justify-center h-fit bg-black py-24'>
            <div className='bg-black h-fit flex justify-between w-[90%] mx-auto max-lg:flex-col-reverse max-lg:gap-8'>
                <motion.div 
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.3}} 
                    className='flex flex-col gap-5 lg:w-[45%] w-full'>
                    <h2 className='lg:text-5xl text-2xl text-white font-black'>Who We Represent</h2>
                    <p className='text-white leading-8 text-sm lg:text-lg lg:leading-10'>
                    Our primary market is emerging African heritage designers and SMEs who are typically ignored by the major fashion events and, if not, are tokenised. 
                    </p>
                    <p className='text-white leading-8 text-sm lg:text-lg lg:leading-10'>
                    At AFWN, we make sure our designers are afforded the same promotional opportunities, access to buyers and showcased in a world-class venue. We support and nurture the sustainable design and apparel manufacturing industry. Our goal is to make African-inspired fashion, not only a high-street staple but also a force to rival established fashion houses. 
                    </p>
                    <p className='text-white leading-8 text-sm lg:text-lg lg:leading-10'>
                    Similarly, we make sure 90% of our workforce is made up of POC, fashion students and marginalised communities, giving the experience of working for a major fashion showcasing event.
                    </p>                
                </motion.div>
                <motion.div 
                    variants={fadeIn("up", 0.6)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.3}} 
                    className='lg:w-[45%] w-full h-fit flex items-center justify-center'>
                    <img 
                        src={'/assets/AFWN_2024_Highlights/Guests/IMG_8761.jpg'}
                        alt=''
                        className='w-[100%] h-auto object-cover'
                        loading='lazy'
                    />
                </motion.div>
            </div>
        </div>

        <Footer />


    </div>
  )
}
