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
                    src='/assets/blogs/blog_five/IMG_3605-1.jpg'
                    className='w-screen h-auto object-contain'
                />
                <div className='flex flex-col gap-5 bg-black top-0 left-0 bottom-0 px-12 pt-36 absolute opacity-80 w-full'>
                    <h2 className='text-white text-5xl font-semibold capitalize max-lg:text-2xl' style={{ fontFamily: "'Anton', sans-serif" }}>10 Must-Know Nigerian Textile Innovations Changing Global Fashion</h2>
                    <p className='text-white text-lg tracking-widest'>March 1, 2025</p>                
                </div>
            </div>
            <div className='bg-white flex flex-col gap-6 h-fit px-24 py-16 max-lg:px-8'>
                    <p className='text-black text-base '>Nigerian textiles have long been celebrated for their beauty, diversity, and cultural significance. 
                    In recent years, innovations in textile design and production have positioned Nigeria as a global leader in fashion. 
                    Here are 10 must-know Nigerian textile 
                    innovations that are making waves in the global fashion industry:</p>
                    <img 
                        src='/assets/blogs/blog_five/-1197161080.jpg'
                        className='w-[60%] max-lg:w-full h-auto'
                    />
                    <div className='w-[100%] mx-auto flex flex-col gap-5'>
                        <h2 className='font-semibold text-black' style={{ fontFamily: "'Anton', sans-serif" }}>1. Adire Textiles</h2>
                        <p className='text-black'>Known for its intricate tie-dye patterns, Adire has evolved into a modern fashion staple. 
                            Designers are now blending traditional techniques with contemporary designs to appeal to global markets.</p>
                        <h2 className='font-semibold text-black' style={{ fontFamily: "'Anton', sans-serif" }}>2. Aso Oke Revamped</h2>
                        <p className='text-black'>Traditionally used for ceremonial attire, Aso Oke has been reimagined by designers to create everyday wear, 
                        accessories, and even footwear, making it a versatile fabric for modern fashion.</p>  
                        <h2 className='font-semibold text-black' style={{ fontFamily: "'Anton', sans-serif" }}>3. Kampala Fabrics</h2>
                        <p className='text-black'>Often mistaken for Adire, Kampala uses wax-resistant dyeing techniques to produce vibrant patterns. 
                            Its affordability and adaptability make it a favorite among designers.</p> 
                        <h2 className='font-semibold text-black' style={{ fontFamily: "'Anton', sans-serif" }}>4. Handwoven Textiles</h2>
                        <p className='text-black'>Nigerian artisans are reviving the art of handweaving to produce unique fabrics that combine sustainability with craftsmanship.</p>
                        <h2 className='font-semibold text-black' style={{ fontFamily: "'Anton', sans-serif" }}>5. Eco-Dyed Fabrics</h2>
                        <p className='text-black'>With a focus on sustainability, eco-dyed fabrics use natural dyes derived from plants 
                            and other organic materials, reducing the environmental impact of textile production.</p>
                        <h2 className='font-semibold text-black' style={{ fontFamily: "'Anton', sans-serif" }}>6. Batik Innovations</h2>
                        <p className='text-black'>Batik's wax-resist dyeing method has been modernized to create more intricate and 
                            colorful designs, appealing to both local and international markets.</p>
                        <h2 className='font-semibold text-black' style={{ fontFamily: "'Anton', sans-serif" }}>7. Embroidered George Fabric</h2>
                        <p className='text-black'>Popular in Eastern Nigeria, George fabrics with intricate embroidery 
                            are now being used in contemporary fashion collections, adding a touch of elegance.</p>                      

                    </div>
                    
                    <div className='w-[100%] mx-auto flex flex-col gap-5'>
                        <h2 className='font-semibold text-black' style={{ fontFamily: "'Anton', sans-serif" }}>8. Velvet Asoebi</h2>
                        <p className='text-black'>A luxurious take on traditional attire, velvet Asoebi fabrics are trending in Nigerian weddings and gaining attention globally.</p>
                        <h2 className='font-semibold text-black' style={{ fontFamily: "'Anton', sans-serif" }}>9. Digital Printing on Ankara</h2>
                        <p className='text-black'>Modern technology has allowed designers to create customized Ankara prints, adding a new level of personalization to this iconic fabric.</p>
                        <h2 className='font-semibold text-black' style={{ fontFamily: "'Anton', sans-serif" }}>10. Fusion of Textiles</h2>
                        <p className='text-black'>Designers are now combining multiple Nigerian fabrics, such as Adire and Aso Oke, 
                            in single garments to create unique, hybrid designs that tell a story.</p>

                        <p className='text-black'>
                        These innovations are not just transforming Nigerian fashion but also influencing global trends. 
                        By embracing both tradition and innovation, Nigerian textiles are proving that they have a place on the world stage.

                        </p>
                        <p className='text-black'>
                            Follow Africa Fashion Week to stay updated on how Nigerian textiles are reshaping global fashion and inspiring creativity worldwide.
                        </p>
                    </div>
                    

            </div>

        </div>
        <Footer />

    </div>
  )
}
