import React from 'react';
import serve1 from "../assets/images/serve1.webp";
import serve2 from "../assets/images/serve2.webp";
import serve3 from "../assets/images/serve3.webp";
import serve4 from "../assets/images/serve4.webp";
import serve5 from "../assets/images/serve5.webp";
import serve6 from "../assets/images/serve6.webp";

const Serve = () => {
    return (
        <>
            <div className=' max-w-[1280px] mx-auto px-3 sm:py-7 py-3 md:py-10 container overflow-hidden' id='blognews'>
                <div className='flex flex-wrap flex-row -mx-3'>
                    <div className='w-full lg:w-1/2 px-3'  data-aos="flip-right">  
                    <h2 className="lg:max-w-[445px] text-zinc-900 text-3xl sm:text-5xl font-extrabold font-['Inter'] leading-10 sm:leading-[64px]">We serve over 100 Nigerian Websites</h2>
                        <p className="lg:max-w-[573px] text-zinc-900 text-lg font-normal font-['Inter'] leading-7 sm:leading-[32px] pt-5">True Cloud Web Hosting All of the hosting packages we offer are deployed instantly on our SSD powered cloud. We don’t use dedicated servers that operate on single pieces of hardware. Our entire infrastructure is built to be reliable, secure, and scalable.<br /><br /></p>

                    </div>
                    <div className='w-full lg:w-1/2 px-3'  data-aos="flip-left">
                        <div className='flex flex-wrap flex-row -mx-3 pt-0 sm:pt-6 justify-center'>
                            <div className='sm:w-1/3 w-1/2 px-3'>
                                <img className='max-[576px]:w-[100px] max-[576px]:h-[80px]' src={serve1} alt="cloud1" />
                            </div>
                            <div className='sm:w-1/3 w-1/2 px-3'>
                                <img className='max-[576px]:w-[100px] max-[576px]:h-[80px]' src={serve2} alt="cloud1" />
                            </div>
                            <div className='sm:w-1/3 w-1/2 px-3'>
                                <img className='max-[576px]:w-[100px] max-[576px]:h-[80px]' src={serve3} alt="cloud1" />
                            </div>
                            <div className='sm:w-1/3 w-1/2 px-3'>
                                <img className='max-[576px]:w-[100px] max-[576px]:h-[80px]' src={serve4} alt="cloud1" />
                            </div>
                            <div className='sm:w-1/3 w-1/2 px-3'>
                                <img className='max-[576px]:w-[100px] max-[576px]:h-[80px]' src={serve5} alt="cloud1" />
                            </div>
                            <div className='sm:w-1/3 w-1/2 px-3'>
                                <img className='max-[576px]:w-[100px] max-[576px]:h-[80px]' src={serve6} alt="cloud1" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Serve;3