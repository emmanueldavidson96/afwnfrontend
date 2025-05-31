import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import React from 'react'

export default function page() {
  return (
    <div className='bg-black w-screen h-fit'>
        <Header />
        <div className='h-fit w-full'>
            <div className='h-[500px] max-lg:h-[400px] overflow-hidden flex flex-col gap-3 justify-center mt-[80px] py-12 relative'>
                <img 
                    src='/assets/blogs/blog_two/1323758975.jpg'
                    className='w-screen h-auto bg-top'
                />
                <div className='flex flex-col gap-5 bg-black top-0 left-0 bottom-0 px-12 pt-36 absolute opacity-80 w-full'>
                    <h2 className='text-white text-5xl font-semibold capitalize max-lg:text-2xl' style={{ fontFamily: "'Anton', sans-serif" }}>africa fashion week partners with manchester metropolitan university to globalize nigerian adire textiles</h2>
                    <p className='text-white text-lg tracking-widest'>March 1, 2025</p>                
                </div>
            </div>
            <div className='bg-white flex flex-col gap-6 h-fit px-24 py-16 max-lg:px-8'>
                    <p className='text-black text-base'>The Adire Oodua Textile Hub continues to redefine the future of African fashion 
                    by equipping young creative entrepreneurs with practical skills and opportunities to excel in the African textiles industry. 
                    Recently, a group of students from Obafemi Awolowo University (OAU) approached Queen Ronke Ademiluyi-Ogunwusi 
                    with an exciting proposal: an internship program at the Adire Oodua Textile Hub.</p>
                    <p className='text-black text-base'>
                    These passionate students expressed their eagerness to immerse themselves in the art of Adire-making, 
                    learning both the creative processes and the business acumen behind African textiles. 
                    Their interest underscores a growing movement among young Nigerians to connect with their cultural 
                    heritage—not just in theory but through hands-on experience.
                    </p>
                    <p className='text-black text-base'>
                    At the core of the Adire Oodua Textile Hub's mission is the preservation and sustainability of Nigerian 
                    arts through innovative educational programs. The hub offers workshops and internships designed for adults and children, creating awareness around Adire production 
                    while empowering participants with practical, marketable skills.
                    </p>

                    <img 
                        src='/assets/blogs/blog_two/1323758975.jpg'
                        className='w-[50%] max-lg:w-full  h-auto'
                    />
                    
                    <p className='text-black text-base'>
                    This partnership with Obafemi Awolowo University students is a testament to the rising influence of the African creative economy. 
                    By fostering collaborations between educational institutions and cultural hubs, the Adire Oodua Textile 
                    Hub is shaping the next generation of African creative entrepreneurs. 
                    These students are gaining the tools they need to champion African fashion and establish themselves as key players 
                    in the global marketplace.
                    </p>
                    <p className='text-black text-base'>
                    The Adire Oodua Textile Hub aligns perfectly with the vision of Africa Fashion Week, which has long been at the 
                    forefront of promoting African fashion and textiles on the global stage. By providing such opportunities, 
                    the hub strengthens its role as a creative bank for African talent, 
                    ensuring the legacy of Nigerian arts thrives for generations to come.
                    </p>
                    <p className='text-black text-base'>
                    For the students of Obafemi Awolowo University, this experience offers more than just skill development—it 
                    provides a gateway to becoming ambassadors for African culture. Through initiatives like this, the 
                    Adire Oodua Textile Hub and Africa Fashion Week are 
                    jointly paving the way for sustainable growth in the African fashion industry.
                    </p>
                    <p className='text-black text-base'>
                    Stay tuned as Africa Fashion Week continues to celebrate the creativity and innovation of African textiles, 
                    ensuring that Nigerian arts and Adire production remain central to the global conversation on fashion.
                    </p>

            </div>

        </div>
        <Footer />

    </div>
  )
}

