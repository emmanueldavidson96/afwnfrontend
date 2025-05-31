"use client";
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const images = [
    {
        id:1,
        img:"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740071816/IMG_8897_1_hnpnfe.jpg"
    },
    {
        id:2,
        img:"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740048321/IMG_2873_r5lpvd.jpg"
    },
    {
        id:3,
        img:"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740048322/IMG_2972_u2skki.jpg"
    },
    {
        id:4,
        img:"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740048321/IMG_2250_vhurki.jpg"
    },
    {
        id:5,
        img:"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740048320/IMG_2260_wa3ywt.jpg"
    },
    {
        id:6,
        img:"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740054689/IMG_0523_1_dx3zdz.jpg"
    },
    {
        id:7,
        img:"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740054692/IMG_1218-Pano_1_b2gu9w.jpg"
    },
    {
        id:8,
        img:"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740054693/IMG_8761_1_fgddip.jpg"
    },
    {
        id:9,
        img:"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740054696/IMG_2691_1_gj1wda.jpg"
    },
    {
        id:10,
        img:"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740055727/IMG_2434_1_dzudvt.jpg"
    },
    {
        id:11,
        img:"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740056188/IMG_1271_1_agf61s.jpg"
    },
    {
        id:12,
        img:"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740055723/IMG_1249_1_fumvfv.jpg"
    },
    {
        id:13,
        img:"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740056188/IMG_5097_1_vbgczy.jpg"
    },
    {
        id:14,
        img:"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740057000/IMG_9832_h26esz.jpg"
    },
    {
        id:15,
        img:"https://res.cloudinary.com/dyn1k6wcl/image/upload/v1740056190/IMG_5042_1_y47yya.jpg"
    },

]
export default function page() {
  return (
    <div className=''>
        <Header />
        <div className='h-[400px] w-full bg-black flex gap-5 flex-col items-center justify-center'>
            <h2 className='text-2xl text-center w-[90%] mx-auto lg:text-4xl font-extrabold uppercase text-white mt-8'>Volunteers</h2>
            <hr className='w-[20%] h-1 bg-green-500 '/>
        </div>
        
        <div className='bg-white w-full h-fit py-24'>
            
            <div className='w-[92%] mx-auto flex max-lg:flex-col max-lg:gap-8 justify-between'>
                
                <div className='lg:w-[48%] w-full  flex flex-col gap-4'>
                    <form className='w-full mx-auto flex flex-col gap-6'>
                        <label className='text-2xl lg:text-4xl text-black font-bold uppercase'>Volunteer Form</label>
                        <input type="text" name="" id="" className='w-full px-6 py-3 border-b text-black border-green-500' placeholder='Full Name' />
                        <label htmlFor="" className='text-black'>Gender</label>
                        <select className='w-full px-6 py-3 text-black bg-gray-200'>
                            <option value="">Male</option>
                            <option value="">Female</option>
                        </select>
                        <input type="email" name='' id='' className='w-full px-6 py-3 border-b text-black border-green-500' placeholder='Email'/>
                        <input type="text" name='' id='' className='w-full px-6 py-3 text-black border-b border-green-500' placeholder='Phone'/>
                        <input type="text" name='' id='' className='w-full px-6 py-3 border-b text-black border-green-500' placeholder='Areas of Work You are Interested In'/>
                        
                        <button className='hover:bg-green-600 duration-500 transition-all w-[100%] h-[60px] bg-green-500 rounded-3xl text-white font-semibold tracking-widest text-xl'>
                            Submit
                        </button>
                    </form>
                </div>
                
                <div className='lg:w-[50%] w-full flex lg:justify-end flex-wrap gap-3 max-lg:gap-8 '>
                    {
                        images.map((image, index) => {
                            return (
                                <img 
                                    key={index}
                                    className='w-1/5 max-lg:w-2/5 h-auto object-cover'
                                    src={image.img}
                                    alt=''
                                />
                            )
                        })
                    }                   
                </div>

            </div>

        </div>

        <Footer />

    </div>
  )
}
