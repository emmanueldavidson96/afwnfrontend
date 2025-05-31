"use client";
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../lib/variants';


export default function page() {
    const router = useRouter();
  return (
    <div className='bg-black w-screen h-fit'>
        <Header />
        <div className='flex flex-col gap-5 py-24 h-fit lg:w-[70%] mx-auto mt-16 max-lg:px-6'>
            <h2 className='text-white uppercase font-bold text-2xl lg:text-5xl' style={{ fontFamily: "'Anton', sans-serif" }}>Blogs</h2>
            <div className='mt-8 flex flex-col gap-8 '>
                
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.3}}  
                    onClick={() => router.push("/blog/africa-fashion-week-partners-with-manchester-metropolitan-university-to-globalize-nigerian-adire-textiles")}                
                className='flex max-lg:flex-col max-lg:gap-6 items-center w-full justify-between border-b border-white pb-12 cursor-pointer'>
                    <img 
                        src='/assets/blogs/blog_one/facilities-buildings-rooms-spaces-tile-1.jpg'
                        className='lg:w-[45%] w-full h-auto object-cover rounded-xl overflow-hidden hover:scale-105 duration-500 transition-all'
                        alt=''
                    />

                    <div className='flex flex-col gap-4 w-[45%] max-lg:w-full'>
                        <h2 className='text-white lg:text-2xl text-lg font-semibold uppercase' style={{ fontFamily: "'Anton', sans-serif" }}>Africa Fashion Week Partners with Manchester Metropolitan University to Globalize Nigerian Adire Textiles</h2>
                        <p className='text-white text-base leading-10 '>
                            Africa Fashion Week London (AFWL), a leader in showcasing African fashion on the global stage, 
                            has partnered with Manchester Metropolitan University to elevate Nigerian Adire textiles to new heights. 
                            This collaboration, which includes Queen Ronke Ademiluyi-Ogunwusi's Adire Hub Nigeria, underscores the commitment to blending rich 
                            African cultural heritage with the innovation of British fashion education.
                        </p>
                        <button className='text-white bg-green-500 w-fit h-fit px-8 py-3 text-sm'>Read More</button>
                    </div>
                </motion.div>

                <motion.div
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.3}} 
                    onClick={() => router.push("/blog/how-adire-oodua-textile-hub-is-empowering-obafemi-awolowo-university-students-with-valuable-opportunities")}
                    className='flex max-lg:flex-col max-lg:gap-6 items-center w-full justify-between py-12 border-b cursor-pointer border-white'>
                    <img                         
                        src='/assets/blogs/blog_two/1323758975.jpg'
                        className='lg:w-[45%] w-full h-auto object-cover rounded-xl overflow-hidden hover:scale-105 duration-500 transition-all'
                        alt=''
                    />

                    <div className='flex flex-col gap-4 w-[45%] max-lg:w-full'>
                        <h2 className='text-white lg:text-2xl text-lg font-semibold uppercase' style={{ fontFamily: "'Anton', sans-serif" }}>How Adire Oodua Textile Hub is Empowering Obafemi Awolowo University Students with Valuable Opportunities</h2>
                        <p className='text-white text-base leading-10'>
                        The Adire Oodua Textile Hub continues to redefine the future of African fashion by equipping young 
                        creative entrepreneurs with practical skills and opportunities to excel in the African textiles industry. 
                        Recently, a group of students from Obafemi Awolowo University (OAU) 
                        approached Queen Ronke Ademiluyi-Ogunwusi with an exciting proposal: an internship program at the Adire Oodua Textile Hub.
                        </p>
                        <button className='text-white bg-green-500 w-fit h-fit px-8 py-3 text-sm'>Read More</button>
                    </div>
                </motion.div>


                <motion.div 
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.3}} 
                    onClick={() => router.push("/blog/the-global-rise-of-adire-textiles-in-african-fashion")}                
                    className='flex max-lg:flex-col max-lg:gap-6 items-center w-full justify-between py-12 cursor-pointer border-b border-white'
                >                
                    <img 
                        src='/assets/blogs/blog_three/773034387.jpg'
                        className='lg:w-[45%] w-full h-auto object-cover rounded-xl overflow-hidden hover:scale-105 duration-500 transition-all'
                        alt=''
                    />

                    <div className='flex flex-col gap-4 w-[45%] max-lg:w-full'>
                        <h2 className='text-white lg:text-2xl text-lg font-semibold uppercase' style={{ fontFamily: "'Anton', sans-serif" }}>The Global Rise of Adire Textiles in African Fashion</h2>
                        <p className='text-white text-base leading-10'>
                        In the world of African fashion, Adire textiles have emerged as a cultural icon and a symbol of heritage,
                         creativity, and innovation. Originating from Nigeria, Adire—which means “tied and dyed” in Yoruba—is a centuries-old textile art that continues to captivate global audiences. Its bold patterns, vibrant colors, 
                        and intricate designs have transformed it from a traditional craft into a sought-after material in modern fashion.
                        </p>
                        <button className='text-white bg-green-500 w-fit h-fit px-8 py-3 text-sm'>Read More</button>
                    </div>
                </motion.div>


                <motion.div 
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.3}} 
                    onClick={() => router.push("/blog/how-africa-fashion-week-empowers-emerging-designers")}                
                    className='flex max-lg:flex-col max-lg:gap-6 items-center w-full justify-between py-12 border-b cursor-pointer border-white'>
                    <img 
                        src='/assets/blogs/blog_four/IMG_0503.jpg'
                        className='lg:w-[45%] w-full h-auto object-cover rounded-xl overflow-hidden hover:scale-105 duration-500 transition-all'
                        alt=''
                    />

                    <div className='flex flex-col gap-4 w-[45%] max-lg:w-full'>
                        <h2 className='text-white lg:text-2xl text-lg font-semibold uppercase' style={{ fontFamily: "'Anton', sans-serif" }}>How Africa Fashion Week Empowers Emerging Designers</h2>
                        <p className='text-white text-base leading-10'>
                        In the competitive world of fashion, emerging designers often struggle to gain recognition and access to resources. 
                        Africa Fashion Week (AFW) is changing that narrative by serving as a powerful platform for African creative entrepreneurs 
                        and designers to showcase their talents on both local and global stages.
                        </p>
                        <button className='text-white bg-green-500 w-fit h-fit px-8 py-3 text-sm'>Read More</button>
                    </div>
                    
                </motion.div>


                <motion.div
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once:false, amount:0.3}} 
                    onClick={() => router.push("/blog/10-must-know-nigerian-textile-innovations-changing-global-fashion")}
                    className='flex max-lg:flex-col max-lg:gap-6 items-center w-full justify-between py-12 cursor-pointer'>
                    <img 
                        src='/assets/blogs/blog_five/IMG_3605-1.jpg'
                        className='lg:w-[45%] w-full h-auto object-cover rounded-xl overflow-hidden hover:scale-105 duration-500 transition-all'
                        alt=''
                    />

                    <div className='flex flex-col gap-4 w-[45%] max-lg:w-full'>
                        <h2 className='text-white lg:text-2xl text-lg font-semibold uppercase' style={{ fontFamily: "'Anton', sans-serif" }}>10 Must-Know Nigerian Textile Innovations Changing Global Fashion</h2>
                        <p className='text-white text-base leading-10'>
                        Nigerian textiles have long been celebrated for their beauty, diversity, and cultural significance.
                         In recent years, innovations in textile design and production have positioned Nigeria as a global leader in fashion. 
                         Here are 10 must-know Nigerian 
                        textile innovations that are making waves in the global fashion industry
                        </p>
                        <button className='text-white bg-green-500 w-fit h-fit px-8 py-3 text-sm'>Read More</button>
                    </div>
                </motion.div>

            </div>
        </div>
        <Footer />

    </div>
  )
}
