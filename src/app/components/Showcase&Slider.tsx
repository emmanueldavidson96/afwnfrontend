"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import { IoCloseCircle } from 'react-icons/io5'
import { IoArrowRedo, IoArrowUndoSharp } from "react-icons/io5";
import { MdArrowBackIos,MdArrowForwardIos} from "react-icons/md";
import { motion } from 'framer-motion'
import { fadeIn } from '../../../lib/variants'

const gallery = [
    {
        id:1,
        img:"/assets/slider_section/IMG_0536.jpg",
    },
    {
        id:2,
        img:"/assets/slider_section/IMG_0935.jpg",
    },
    {
        id:3,
        img:"/assets/slider_section/IMG_2260.jpg",
    },
    {
        id:4,
        img:"/assets/slider_section/IMG_1324.jpg"
    },
    {
        id:5,
        img:"/assets/slider_section/IMG_1331.jpg"
    },
    {
        id:6,
        img:"/assets/AFWN_2024_Highlights/Runway/IMG_2072.jpg"
    },
    {
        id:7,
        img:"/assets/AFWN_2024_Highlights/Runway/IMG_2860.jpg"
    },
    {
        id:8,
        img:"/assets/AFWN_2024_Highlights/Runway/IMG_3616.jpg"
    },
    {
        id:9,
        img:"/assets/AFWN_2024_Highlights/Runway/IMG_3630.jpg"
    },
    {
        id:10,
        img:"/assets/AFWN_2024_Highlights/Runway/IMG_4069.jpg"
    }
]


export default function ShowcaseSlider() {
    const [selectedImg, setSelectedImg] = useState<number>(0);
    const [imgPop, setImgPop] = useState<boolean>(false);

    const swipeImg = (moveType:string) => {
        if(moveType == "prv"){
            if(selectedImg == 0){
                setSelectedImg(gallery.length -1)
            }else{
                setSelectedImg(selectedImg -1)
            }
        }
        if(moveType== "nxt"){
            if(selectedImg == gallery.length - 1){
                setSelectedImg(0)
            }else{
                setSelectedImg(selectedImg +1)
            }
        }
    }

  return (
    <div className='w-screen h-[800px] py-16 bg-white'>
        <div className='w-[94%] mx-auto h-full flex max-lg:flex-col items-center justify-between gap-6'>
            
            <div className='w-[50%] max-lg:w-full h-full gap-6 flex justify-between cursor-pointer'>
                <div className='w-[50%] h-full overflow-hidden'>
                    <motion.img
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once:false, amount:0.3}}
                        src={"/assets/slider_section/IMG_0536.jpg"}
                        alt=''
                        className='w-full object-cover h-full '
                        onClick={() => setImgPop(true)}
                    />
                </div>
                <div className='w-[50%] h-full overflow-hidden'>
                    <motion.img
                        variants={fadeIn("up", 0.4)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once:false, amount:0.3}}
                        src={"/assets/slider_section/IMG_0935.jpg"}
                        alt=''
                        className='w-full object-cover h-full'
                        onClick={() => setImgPop(true)}
                    />
                </div>
            </div>

            <div className='w-[50%] max-lg:w-full h-full gap-6 flex justify-between items-center cursor-pointer'>
                
                <div className='w-[50%] h-full gap-6 flex flex-col justify-between'>                   
                    
                    <div className='w-full h-[50%] overflow-hidden'>
                        <motion.img
                            variants={fadeIn("up", 0.4)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{once:false, amount:0.3}}
                            src={"/assets/slider_section/IMG_2260.jpg"}
                            alt=''
                            className='w-full object-cover h-full object-top'
                            onClick={() => setImgPop(true)}
                        />
                    </div>

                    <div className='w-full h-[50%] overflow-hidden'>
                        <motion.img
                            variants={fadeIn("up", 0.6)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{once:false, amount:0.3}}
                            src={"/assets/slider_section/IMG_1324.jpg"}
                            alt=''
                            className='w-full object-cover h-full object-top'
                            onClick={() => setImgPop(true)}
                        />
                    </div>

                </div>

                <div className='w-[50%] h-full overflow-hidden'>
                    <motion.img
                        variants={fadeIn("up", 0.6)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once:false, amount:0.3}}
                        src={"/assets/slider_section/IMG_1331.jpg"}
                        alt=''
                        className='w-full object-cover h-full'
                        onClick={() => setImgPop(true)}
                    />
                </div>

            </div>

        </div>
        {imgPop && (                       
            <div className='left-0 right-0 bottom-0 bg-black bg-opacity-95 z-50 flex justify-between w-full items-center fixed top-0 '>
                               
                <IoCloseCircle size={40} className='cursor text-green-500 pointer absolute top-2 right-2 cursor-pointer' onClick={() => setImgPop(!imgPop)}/>                
                
                <div className="bg-green-500 max-lg:absolute max-lg:left-2 max-lg:bottom-[45%]  ml-2 rounded-full hover:translate-x-3 transition-all ease-linear cursor-pointer p-2" onClick={() => swipeImg("prv")}>
                    <MdArrowBackIos size={20} className='cursor-pointer text-white '/>
                </div>
                <img 
                    src={gallery[selectedImg].img}
                    alt={""}
                    className='lg:max-w-[600px] w-full h-auto'
                /> 
                <div className="bg-green-500 rounded-full mr-2 max-lg:absolute max-lg:right-2 max-lg:bottom-[45%] hover:-translate-x-3 transition-all ease-linear cursor-pointer p-2" onClick={() => swipeImg("nxt")}>
                    <MdArrowForwardIos size={20} className='cursor-pointer text-white'/>
                </div>
            </div>
            
        )}

    </div>
  )
}
