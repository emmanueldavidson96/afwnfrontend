"use client"
import React, { useState } from 'react'
import { IoIosContacts } from "react-icons/io";
import { MdQuestionAnswer } from "react-icons/md";
import Header from '../components/Header';
import { base_afwn_contacts } from '../../../api/base';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../lib/variants';

export default function page() {
  const [Name, setBrandName] = useState("");
  const [ContactEmailAddress, setContactEmailAddress] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Yourinquiresorrequest, setYourinquiresorrequest] = useState("");
        
  const handle_submit = (event:React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      base_afwn_contacts("Contacts").create({
          Name, ContactEmailAddress, PhoneNumber, Yourinquiresorrequest
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
      <section className="w-screen h-[100vh] relative overflow-hidden flex items-center justify-center px-4">
        {/* Background Video */}
        <video
          controls={false}
          src="https://res.cloudinary.com/dyn1k6wcl/video/upload/v1739996427/ejiro_amos_tafiri_online-video-cutter.com_mjy5xs.mp4"
          loop
          muted
          playsInline
          autoPlay
          className="absolute w-full h-full object-cover brightness-50"
        />

        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>

        {/* Content Wrapper */}
        <motion.div 
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount:0.3}} 
          className="absolute bottom-[20%] max-lg:bottom-[5%] left-10 lg:left-[20%] text-left max-w-[80%] lg:max-w-[70%] flex max-lg:flex-col gap-12 items-start">
          <form className='flex flex-col gap-3 max-lg:gap-1 w-[50%] max-lg:w-full' onSubmit={handle_submit}>
            <label className='text-4xl max-lg:text-xl text-green-500 uppercase font-bold tracking-widest'>Contact Us</label>
            <input type="text" className='text-white w-full border-b border-white bg-transparent p-3 max-lg:p-2' onChange={(e) => setBrandName(e.target.value)} placeholder='Name' />            
            <input type="email" className='text-white w-full border-b border-white bg-transparent p-3 max-lg:p-2' placeholder='Email' onChange={(e) => setContactEmailAddress(e.target.value)} />
            <input type="text" className='text-white w-full border-b border-white bg-transparent p-3 max-lg:p-2' placeholder='Phone' onChange={(e) => setPhoneNumber(e.target.value)}/>
            <textarea className='text-white w-full border-b border-white bg-transparent p-3 h-[150px] max-lg:h-[80px] max-lg:p-2' placeholder='Comment' onChange={(e) => setYourinquiresorrequest(e.target.value)}/>
            <button className='text-white bg-green-500 px-8 py-3 rounded-xl mt-8 max-lg:mt-4' type='submit'>Submit</button>
          </form>   
          {/* Title Section */}
          <div className='flex flex-col gap-4 max-lg:gap-1 w-[45%] max-lg:w-full '>
            
            <div className='flex gap-4 max-lg:gap-2 items-center'>
              <MdQuestionAnswer 
                size={30}
                className='text-green-500 '
              />

              <p className='text-white text-xl max-lg:text-sm'>info@africafashionweeknigeria.com</p>
            </div>

            <div className='flex gap-4 items-center'>
              <IoIosContacts 
                size={30}
                className='text-green-500'
              />

              <p className='text-white text-xl max-lg:text-sm'>designers@africafashionweeknigeria.com</p>
            </div>
            <h3 className='text-white text-lg mt-8 max-lg:mt-3 max-lg:text-sm' >Simply send us an email anytime you want. We are open to all suggestions, ideas and partnerships from all.</h3>
          </div> 
          
        </motion.div>
      </section>
    </div>
  )
}
