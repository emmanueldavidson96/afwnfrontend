import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import React from 'react'


export default function page() {
  return (
    <div className='bg-black w-screen h-fit'>
        <Header />
        <div className='h-fit w-full'>
            <div className='h-[500px] max-lg:h-[400px] w-full overflow-hidden flex flex-col gap-3 justify-center mt-[80px] py-12 relative'>
                <img 
                    src='/assets/blogs/blog_four/IMG_0503.jpg'
                    className='w-screen h-auto'
                />
                <div className='flex flex-col gap-5 bg-black top-0 left-0 bottom-0 px-12 pt-36 absolute opacity-80 w-full'>
                    <h2 className='text-white text-5xl font-semibold capitalize max-lg:text-2xl' style={{ fontFamily: "'Anton', sans-serif" }}>How Africa Fashion Week Empowers Emerging Designers</h2>
                    <p className='text-white text-lg tracking-widest'>March 1, 2025</p>                
                </div>
            </div>
            <div className='bg-white flex flex-col gap-6 h-fit px-24 py-16 max-lg:px-8'>
                <p className='text-black text-base'>In the competitive world of fashion, emerging designers often struggle to gain recognition 
                    and access to resources. Africa Fashion Week (AFW) is changing that narrative by serving as a powerful 
                    platform for African creative entrepreneurs and designers to 
                    showcase their talents on both local and global stages.
                </p>
                <h2 className='text-lg font-semibold text-black' style={{ fontFamily: "'Anton', sans-serif" }}>A Launchpad for Talent</h2>
                <p className='text-black text-base'>
                    Since its inception, Africa Fashion Week has been committed to discovering and promoting the next generation of African fashion talents. 
                    By providing a stage for designers to present their work, AFW offers them an invaluable 
                    opportunity to connect with industry leaders, buyers, and international audiences.
                </p>
                <p className='text-black text-base'>
                    The Emerging Designers Competition, a flagship initiative of AFW, has become a premier event for spotting fresh talent. 
                    Designers who participate not only gain exposure but also receive mentorship and resources to refine their craft. 
                    Winners of this competition are often granted opportunities such as showcasing at 
                    Africa Fashion Week London, giving them a global platform to shine.
                </p>
                <img 
                    src='/assets/blogs/blog_four/IMG_0528.jpg'
                    className='w-[60%] max-lg:w-full h-auto'
                />
                <h2 className='text-lg font-semibold text-black' style={{ fontFamily: "'Anton', sans-serif" }}>Building a Community</h2>
                <p className='text-black text-base'>
                    One of the unique aspects of Africa Fashion Week is its ability to foster a sense of community among designers, 
                    artisans, and other stakeholders. Events like Lagos Fashion Week and Africa Fashion Week 
                    London bring together a diverse mix of participants, 
                    creating a collaborative environment where ideas and resources are exchanged.
                </p>
                <p className='text-black text-base'>
                    This sense of community is particularly beneficial for emerging designers, who often lack access to the networks and partnerships that are crucial for success. 
                    By connecting them with established names in the industry, AFW helps bridge the gap between potential and opportunity.
                </p>
                <h2 className='text-lg font-semibold text-black' style={{ fontFamily: "'Anton', sans-serif" }}>Empowering Through Education</h2>
                <p className='text-black text-base'>
                    Africa Fashion Week's commitment to empowering designers goes beyond the runway. 
                    Through workshops, seminars, and masterclasses, AFW provides emerging designers with 
                    the knowledge and skills they need to thrive in the fashion industry. Topics such as 
                    sustainable fashion, digital marketing, and brand building are frequently covered, 
                    equipping designers to navigate the complexities of the modern fashion landscape.
                </p>
                <h2 className='text-lg font-semibold text-black' style={{ fontFamily: "'Anton', sans-serif" }}>A Catalyst for Change</h2>
                <p className='text-black text-base'>
                    By focusing on emerging designers, Africa Fashion Week is not only shaping the future of African fashion but 
                    also contributing to the continent's economic development. The platform creates jobs, supports local artisans, 
                    and promotes the use of African textiles like Adire, boosting the local textile industry.
                </p>
                    <p className='text-black text-base'>
                    Through its efforts, AFW is positioning African fashion as a key player in the global fashion scene, proving that 
                    creativity and innovation from the continent are second to none.
                    </p>
                    <p className='text-black text-base'>
                    Stay tuned to Africa Fashion Week to discover how we're empowering emerging designers and shaping the future of fashion in Africa and beyond.
                    </p>
            </div>
        </div>
        <Footer />
    </div>
  )
}
