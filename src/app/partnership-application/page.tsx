"use client";
import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { base_afwn_partnership } from '../../../api/base';
import { toast } from 'react-toastify';

const images = [
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
    },
    {
        id:11,
        img:"/assets/slider_section/IMG_0935.jpg",
    },
    {
        id:12,
        img:"/assets/slider_section/IMG_2260.jpg",
    },
    {
        id:13,
        img:"/assets/slider_section/IMG_1324.jpg"
    },
    {
        id:14,
        img:"/assets/slider_section/IMG_1331.jpg"
    },
    {
        id:15,
        img:"/assets/AFWN_2024_Highlights/Runway/IMG_2072.jpg"
    },

]
export default function page() {

    const [BrandName, setBrandName] = useState("");
    const [ContactName, setContactName] = useState("");
    const [Email, setEmail]= useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [ContactAddress, setContactAddress] = useState("");
    const [BrandWebsiteURL, setBrandWebsiteURL] = useState("");
    const [FormofPartnership, setFormofPartnership] = useState("");
        

    const handle_submit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        base_afwn_partnership("Partnerships").create({
            BrandName, ContactName, Email, PhoneNumber, ContactAddress, BrandWebsiteURL, FormofPartnership
        }, function (err:unknown, _record:any){
            if(err){
                console.log(err);
                return
            }
            toast("Form submitted successfully!");
        })
    }

  return (
    <div className=''>
        <Header />
        <div className='h-[400px] w-full bg-black flex gap-5 flex-col items-center justify-center'>
            <h2 className='text-2xl text-center w-[90%] mx-auto lg:text-4xl font-extrabold uppercase text-white mt-8'>Partnerships</h2>
            <hr className='w-[20%] h-1 bg-green-500 '/>
        </div>
        
        <div className='bg-white w-full h-fit py-24'>
            
            <div className='w-[92%] mx-auto flex max-lg:flex-col max-lg:gap-8 justify-between'>
                
                <div className='lg:w-[48%] w-full  flex flex-col gap-4'>
                    <form className='w-full mx-auto flex flex-col gap-6' onSubmit={handle_submit}>
                        <label className='text-2xl lg:text-4xl text-black font-bold uppercase'>Partnership Form</label>
                        <input type="text" name="" id="" className='w-full px-6 py-3 border-b text-black border-green-500' placeholder='Brand Name' onChange={(e) => setBrandName(e.target.value)}/>
                        <input type="email" name='' id='' className='w-full px-6 py-3 border-b text-black border-green-500' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                        <input type="text" name='' id='' className='w-full px-6 py-3 text-black border-b border-green-500' placeholder='Contact Name' onChange={(e) => setContactName(e.target.value)}/>
                        <input type="text" name='' id='' className='w-full px-6 py-3 border-b text-black border-green-500' placeholder='Phone Number' onChange={(e) => setPhoneNumber(e.target.value)}/>
                        <input type="text" name='' id='' className='w-full px-6 py-3 text-black border-b border-green-500' placeholder='Contact Address' onChange={(e) => setContactAddress(e.target.value)}/>
                        <input type="text" name='' id='' className='w-full px-6 text-black py-3 border-b border-green-500' placeholder='Brand Website / URL' onChange={(e) => setBrandWebsiteURL(e.target.value)}/>
                        <input type="text" name='' id='' className='w-full px-6 text-black py-3 border-b border-green-500' placeholder='Form of Partnership' onChange={(e) => setFormofPartnership(e.target.value)}/>                      
                                                
                        <button type='submit' className='hover:bg-green-600 duration-500 transition-all w-[100%] h-[60px] bg-green-500 rounded-3xl text-white font-semibold tracking-widest text-xl'>
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
