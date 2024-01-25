import React from 'react';
import cloud1 from "../assets/images/cloud1.webp";
import cloud2 from "../assets/images/cloud2.webp";
import cloud3 from "../assets/images/cloud3.webp";
import cloud4 from "../assets/images/cloud4.webp";
import cloud5 from "../assets/images/cloud5.webp";
import cloud6 from "../assets/images/cloud6.webp";

const Truecloud = () => {
    return (
        <>
            <div className=' max-w-[1280px] mx-auto px-3 container overflow-hidden' id='about'>
                <div className='flex flex-wrap flex-row -mx-3'>
                    <div className='w-full lg:w-1/2 px-3' data-aos="fade-right">
                        <h2 className=" text-zinc-900 sm:text-[35px] text-[30px] md:text-[40px] lg:text-5xl font-extrabold font-['Inter'] leading-[40px] sm:leading-[64px]">True Cloud Web  Hosting</h2>
                        <p className="lg:max-w-[573px] text-zinc-900 text-[15px] sm:text-lg font-normal font-['Inter'] leading-[30px] sm:leading-loose pt-7">True Cloud Web Hosting All of the hosting packages we offer are deployed instantly on our SSD powered cloud. We don’t use dedicated servers that operate on single pieces of hardware. Our entire infrastructure is built to be reliable, secure, and scalable.</p>

                    </div>
                    <div className='w-full lg:w-1/2 px-3' data-aos="fade-left">
                        <div className='grid grid-col-2 sm:grid-cols-3 max-sm:grid-cols-2 lg:grid-cols-3  -mx-3 sm:gap-[30px] gap-[15px] md:gap-[59px] mt-[25px]  '>
                            <div className='span-col-2 flex lg:justify-end justify-center  items-center px-3'>
                                <img src={cloud1} alt="cloud1" />
                            </div>
                            <div className='span-col-2 flex lg:justify-end justify-center  items-center px-3'>
                                <img src={cloud2} alt="cloud1" />
                            </div>
                            <div className='span-col-2 flex lg:justify-end justify-center  items-center px-3'>
                                <img src={cloud3} alt="cloud1" />
                            </div>
                            <div className='span-col-2 flex lg:justify-end justify-center  items-center px-3'>
                                <img src={cloud4} alt="cloud1" />
                            </div>
                            <div className='span-col-2 flex lg:justify-end justify-center  items-center px-3'>
                                <img src={cloud5} alt="cloud1" />
                            </div>
                            <div className='span-col-2 flex lg:justify-end justify-center items-center px-3'>
                                <img src={cloud6} alt="cloud1" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Truecloud