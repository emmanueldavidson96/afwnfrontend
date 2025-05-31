"use client";
import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'
import { motion } from 'framer-motion';
import { fadeIn } from '../../../lib/variants';

const gallery2024 = [
    {
        id:1,
        imageCategory: "exhibition",
        imageFiles:[
            {
                id:1,
                img: "/assets/AFWN_2024_Highlights/Runway/IMG_0536.jpg"
            },
            {
                id:2,
                img: "/assets/AFWN_2024_Highlights/Runway/IMG_0553.jpg"
            },
            {
                id:3,
                img: "/assets/AFWN_2024_Highlights/Runway/IMG_0582.jpg"
            },
            {
                id:4,
                img: "/assets/AFWN_2024_Highlights/Runway/IMG_0878.jpg"
            },
            {
                id:5,
                img: "/assets/AFWN_2024_Highlights/Runway/IMG_1324.jpg"
            },
            {
                id:6,
                img: "/assets/AFWN_2024_Highlights/Runway/IMG_1331.jpg"
            },
            {
                id:7,
                img: "/assets/AFWN_2024_Highlights/Runway/IMG_1518.jpg"
            },
            {
                id:8,
                img: "/assets/AFWN_2024_Highlights/Runway/IMG_1542.jpg"
            },
            {
                id:9,
                img: "/assets/AFWN_2024_Highlights/Runway/IMG_2072.jpg"
            },
            {
                id:10,
                img: "/assets/AFWN_2024_Highlights/Runway/IMG_2096.jpg"
            },
            {
                id:11,
                img: "/assets/AFWN_2024_Highlights/Runway/IMG_2239.jpg"
            },
            {
                id:12,
                img: "/assets/AFWN_2024_Highlights/Runway/IMG_2250.jpg"
            },
            {
                id:13,
                img: "/assets/AFWN_2024_Highlights/Runway/IMG_2260.jpg"
            },
            {
                id:14,
                img: "/assets/AFWN_2024_Highlights/Runway/IMG_2860.jpg"
            },
            {
                id:15,
                img: "/assets/AFWN_2024_Highlights/Runway/IMG_2873.jpg"
            },
            {
                id:16,
                img: "/assets/AFWN_2024_Highlights/Runway/IMG_2887.jpg"
            },
            {
                id:17,
                img: "/assets/AFWN_2024_Highlights/Runway/IMG_2906.jpg"
            },
            {
                id:18,
                img: "/assets/AFWN_2024_Highlights/Runway/IMG_2972.jpg"
            },
            {
                id:19,
                img: "/assets/AFWN_2024_Highlights/Runway/IMG_4069.jpg"
            },
            {
                id:20,
                img: "/assets/AFWN_2024_Highlights/Runway/IMG_3603.jpg"
            },
            {
                id:21,
                img: "/assets/AFWN_2024_Highlights/Runway/IMG_3616.jpg"
            },
        ]
    },
    {
        id:2,
        imageCategory: "guests",
        imageFiles:[
            {
                id:1,
                img:"/assets/AFWN_2024_Highlights/Guests/IMG_0523.jpg"
            },
            {
                id:2,
                img:"/assets/AFWN_2024_Highlights/Guests/IMG_1218-Pano.jpg"
            },
            {
                id:3,
                img:"/assets/AFWN_2024_Highlights/Guests/IMG_2691.jpg"
            },
            {
                id:4,
                img:"/assets/AFWN_2024_Highlights/Guests/IMG_8761.jpg"
            }
        ]
    },
    {
        id:3,
        imageCategory: "backstage",
        imageFiles:[
            {
                id:1,
                img:"/assets/AFWN_2024_Highlights/Backstage/IMG_1249.jpg"
            },
            {
                id:2,
                img:"/assets/AFWN_2024_Highlights/Backstage/IMG_1253.jpg"
            },
            {
                id:3,
                img:"/assets/AFWN_2024_Highlights/Backstage/IMG_2434.jpg"
            }
        ]
    },
    {
        id:4,
        imageCategory: "exhibition",
        imageFiles:[
            {
                id:1,
                img:"/assets/AFWN_2024_Highlights/Exhibition/IMG_1271.jpg"
            },
            {
                id:2,
                img:"/assets/AFWN_2024_Highlights/Exhibition/IMG_5042.jpg"
            },
            {
                id:3,
                img:"/assets/AFWN_2024_Highlights/Exhibition/IMG_5053.jpg"
            },
            {
                id:4,
                img:"/assets/AFWN_2024_Highlights/Exhibition/IMG_5097.jpg"
            },
        ]
    },
    {
        id:5,
        imageCategory: "fitting",
        imageFiles:[
            {
                id:1,
                img:"/assets/AFWN_2024_Highlights/Fitting/Fittings (49).jpg"
            },
            {
                id:2,
                img:"/assets/AFWN_2024_Highlights/Fitting/IMG_9820.jpg"
            },
            {
                id:3,
                img:"/assets/AFWN_2024_Highlights/Fitting/IMG_9828.jpg"
            },
            {
                id:4,
                img:"/assets/AFWN_2024_Highlights/Fitting/IMG_9832.jpg"
            },

        ]
    }

]

export default function page() {
    const [galleryImg, setGalleryImg] = useState<string | null>("runway")

  return (
    <div className='h-fit w-screen'>
        <Header />
        <div className='w-screen h-[350px] pt-24 bg-black flex relative items-center justify-center overflow-hidden'>
            <h2 className='lg:text-5xl text-xl text-center max-w-[90%] mx-auto uppercase text-white font-extrabold absolute bottom-24 '>AFWN 2024 Gallery Highlights</h2>
        </div>
        
        <div className='h-[100px] bg-[#141414] flex items-center justify-center gap-8'>
            <h4 className={`${galleryImg === "runway" ? "text-green-500" :"text-white"} max-lg:text-xs cursor-pointer`} onClick={() => setGalleryImg("runway")}>Runway</h4>
            <h4 className={`${galleryImg === "exhibition" ? "text-green-500" :"text-white"} max-lg:text-xs cursor-pointer`} onClick={() => setGalleryImg("exhibition")}>Exhibition</h4>
            <h4 className={`${galleryImg === "guests" ? "text-green-500" :"text-white"} max-lg:text-xs cursor-pointer`} onClick={() => setGalleryImg("guests")}>Guests</h4>
            <h4 className={`${galleryImg === "fitting" ? "text-green-500" :"text-white"} max-lg:text-xs cursor-pointer`} onClick={() => setGalleryImg("fitting")}>Fitting</h4>
            <h4 className={`${galleryImg === "backstage" ? "text-green-500" :"text-white"} max-lg:text-xs cursor-pointer`} onClick={() => setGalleryImg("backstage")}>Backstage</h4>
        </div>
        
        <div className='bg-white flex items-center h-fit py-24'>
            <div className='w-[95%] mx-auto flex flex-wrap justify-between gap-6'>
                
                {
                    galleryImg === "runway" && gallery2024[0].imageFiles.map((gallery, index) => {
                        return (
                            <motion.div 
                                variants={fadeIn("up", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{once:false, amount:0.3}} 
                                className='lg:w-[23%] w-[46%] h-[500px] max-lg:h-[350px] overflow-hidden' key={index}>
                                <img
                                    src={gallery.img}
                                    alt=''
                                    className='w-full h-full object-cover hover:scale-150 duration-500 transition-all '
                                    loading='lazy'
                                />
                            </motion.div>
                        )
                    })
                }

                {
                    galleryImg === "guests" && gallery2024[1].imageFiles.map((gallery, index) => {
                        return (
                            <motion.div 
                                variants={fadeIn("up", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{once:false, amount:0.3}}  
                                className='lg:w-[32%] w-[100%]  h-[400px] max-lg:h-[350px] overflow-hidden' key={index}>
                                <img
                                    src={gallery.img}
                                    alt=''
                                    className='w-full h-full object-cover hover:scale-125 duration-500 transition-all '
                                    loading='lazy'
                                />
                            </motion.div>
                        )
                    })
                } 

                {
                    galleryImg === "backstage" && gallery2024[2].imageFiles.map((gallery, index) => {
                        return (
                            <motion.div 
                                variants={fadeIn("up", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{once:false, amount:0.3}}  
                                className='lg:w-[32%] w-[100%]  h-[400px] max-lg:h-[350px] overflow-hidden' key={index}>
                                <img
                                    src={gallery.img}
                                    alt=''
                                    className='w-full h-full object-cover hover:scale-125 duration-500 transition-all '
                                    loading='lazy'
                                />
                            </motion.div>
                        )
                    })
                } 

                {
                    galleryImg === "exhibition" && gallery2024[3].imageFiles.map((gallery, index) => {
                        return (
                            <motion.div 
                                variants={fadeIn("up", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{once:false, amount:0.3}}  
                                className='lg:w-[32%] w-[100%]  h-[400px] max-lg:h-[350px] overflow-hidden' key={index}>
                                <img
                                    src={gallery.img}
                                    alt=''
                                    className='w-full h-full object-cover hover:scale-125 duration-500 transition-all '
                                    loading='lazy'
                                />
                            </motion.div>
                        )
                    })
                } 

                {
                    galleryImg === "fitting" && gallery2024[4].imageFiles.map((gallery, index) => {
                        return (
                            <motion.div 
                                variants={fadeIn("up", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{once:false, amount:0.3}}  
                                className='lg:w-[32%] w-[100%]  h-[400px] max-lg:h-[350px] overflow-hidden' key={index}>
                                <img
                                    src={gallery.img}
                                    alt=''
                                    className='w-full h-full object-cover hover:scale-125 duration-500 transition-all '
                                    loading='lazy'
                                />
                            </motion.div>
                        )
                    })
                }             
            </div>
        </div>
        <Footer />
    </div>
  )
}
