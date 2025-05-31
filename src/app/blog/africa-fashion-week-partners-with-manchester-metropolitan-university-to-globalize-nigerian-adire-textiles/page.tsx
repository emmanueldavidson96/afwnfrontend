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
                    src='/assets/blogs/blog_one/facilities-buildings-rooms-spaces-tile-1.jpg'
                    className='w-screen h-auto'
                />
                <div className='flex flex-col gap-5 bg-black top-0 left-0 bottom-0 px-12 pt-36 absolute opacity-80 w-full'>
                    <h2 className='text-white text-5xl max-lg:text-2xl font-semibold capitalize ' style={{ fontFamily: "'Anton', sans-serif" }}>africa fashion week partners with manchester metropolitan university to globalize nigerian adire textiles</h2>
                    <p className='text-white text-lg tracking-widest'>March 1, 2025</p>                
                </div>
            </div>
            <div className='bg-white flex flex-col gap-6 h-fit px-24 py-16 max-lg:px-8'>
                    <p className='text-black text-base'>Africa Fashion Week London (AFWL), a leader in showcasing African fashion on the global stage, 
                        has partnered with Manchester Metropolitan University to elevate Nigerian Adire textiles to new heights. 
                        This collaboration, which includes Queen Ronke Ademiluyi-Ogunwusi's Adire Hub Nigeria, underscores the commitment to 
                        blending rich African cultural heritage with the innovation of British fashion education.</p>
                    <p className='text-black text-base'>
                        Adire, a traditional Nigerian fabric celebrated for its intricate patterns and vibrant colors, 
                        has long been a symbol of African creativity and craftsmanship. Through this partnership, students 
                        from Africa and the UK will join forces to design cutting-edge garments featuring Adire fabrics. 
                        These collaborative designs will demonstrate the versatility of Adire, 
                        bridging traditional African artistry with contemporary global fashion trends.
                    </p>
                    <p className='text-black text-base'>
                        As part of this initiative, Africa Fashion Week London aims to empower African creative entrepreneurs by 
                        providing them with a platform to showcase their talent and contribute to the global narrative of sustainable and 
                        ethical fashion. The partnership aligns with AFWL's mission to spotlight African fashion and its creators at 
                        prestigious events like London Fashion Week and Lagos Fashion Week.
                    </p>
                    <img 
                        src='/assets/blogs/blog_one/facilities-buildings-rooms-spaces-tile-3.jpg'
                        className='w-[60%] max-lg:w-full h-auto'
                    />
                    <p className='text-black text-base'>
                        The collaboration also reinforces the idea of African fashion as a driving force in the global creative economy. 
                        By integrating Adire into modern fashion collections, this initiative not only highlights the fabric's beauty 
                        but also positions it as a cultural and economic asset, 
                        fostering opportunities for funding and growth for African creative entrepreneurs.
                    </p>
                    <p className='text-black text-base'>
                        "We are thrilled to embark on this journey with Manchester Metropolitan University," 
                        said Queen Ronke Ademiluyi-Ogunwusi. "Adire is more than just a fabric—it is a story of African heritage and resilience. 
                        This partnership will allow us to bring that story to the world stage, 
                        while also creating new pathways for young designers and artisans."
                    </p>
                    <p className='text-black text-base'>
                        Africa Fashion Week London 2025 will feature the fruits of this collaboration, offering a platform for the world to 
                        witness the fusion of African heritage and British innovation. This event will not only showcase the best of African 
                        fashion but also solidify Adire's place in the modern fashion lexicon.
                    </p>
                    <p className='text-black text-base'>
                        Stay tuned for updates as we continue to explore the endless possibilities of incorporating Adire into global fashion, 
                        empowering African creative entrepreneurs, 
                        and building a stronger creative economy for the continent.
                    </p>

            </div>

        </div>
        <Footer />

    </div>
  )
}
