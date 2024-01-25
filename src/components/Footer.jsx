import React from 'react';
import footerlogo from "../assets/images/footer-logo.webp"

const Footer = () => {
    return (
        <>
            <div className='bg-red-700 overflow-hidden' id='contact'>
                <div className='max-w-[1244px] mx-auto px-3 md:py-[80px] sm:py-[50px] py-[40px]'>
                    <div className='flex flex-wrap flex-row -mx-3'>
                        <div className=' lg:w-1/3 w-full px-3' data- aos="fade-right">
                            <img src={footerlogo} alt="footerlogo" />
                            <p className="lg:max-w-[296px] text-neutral-200 text-base font-normal font-['Inter'] leading-loose pt-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
                        </div>
                        <div className='lg:w-2/3 w-full pt-10 px-3 lg:px-0' da ta-aos="fade-left">
                            <div className='flex flex-wrap flex-row -mx-3'>
                                <ul className='w-1/2 md:w-1/4 px-3'>
                                    <li className='text-white sm:text-base text-[14px] font-bold font-["Inter"] leading-normal'>Service</li>
                                    <li className="pt-3 sm:pt-6"><a href="#" className='text-neutral-200 sm:text-base text-[14px] font-normal font-["Inter"] leading-loose after:duration-500 duration-300 hover:after:w-full after:w-0 after:absolute relative after:left-[50%] hover:after:left-0 after:bottom-[-4px]  after:h-[2px] after:rounded-full hover:after:bg-[#FFF] '>Domain</a></li>
                                    <li className="pt-3 sm:pt-6"><a href="#" className='text-neutral-200 sm:text-base text-[14px] font-normal font-["Inter"] leading-loose after:duration-500 duration-300 hover:after:w-full after:w-0 after:absolute relative after:left-[50%] hover:after:left-0 after:bottom-[-4px]  after:h-[3px] after:rounded-full hover:after:bg-[#FFF] '>Shared Hosting</a></li>
                                    <li className="pt-3 sm:pt-6"><a href="#" className='text-neutral-200 sm:text-base text-[14px] font-normal font-["Inter"] leading-loose after:duration-500 duration-300 hover:after:w-full after:w-0 after:absolute relative after:left-[50%] hover:after:left-0 after:bottom-[-4px]  after:h-[2px] after:rounded-full hover:after:bg-[#FFF] '>Cloud Hosting</a></li>
                                    <li className="pt-3 sm:pt-6"><a href="#" className='text-neutral-200 sm:text-base text-[14px] font-normal font-["Inter"] leading-loose after:duration-500 duration-300 hover:after:w-full after:w-0 after:absolute relative after:left-[50%] hover:after:left-0 after:bottom-[-4px]  after:h-[2px] after:rounded-full hover:after:bg-[#FFF] '>Private Hosting</a></li>
                                 
                                </ul>
                                <ul className='w-1/2 md:w-1/4 px-3'>
                                <li className='text-white sm:text-base text-[14px] font-bold font-["Inter"] leading-normal'>Hosting</li>
                                    <li className="sm:pt-6 pt-3"><a href="#" className='text-neutral-200 sm:text-base text-[14px] font-normal font-["Inter"] leading-loose after:duration-500 duration-300 hover:after:w-full after:w-0 after:absolute relative after:left-[50%] hover:after:left-0 after:bottom-[-4px]  after:h-[2px] after:rounded-full hover:after:bg-[#FFF] '>Cheap Hosting</a></li>
                                    <li className="sm:pt-6 pt-3"><a href="#" className='text-neutral-200 sm:text-base text-[14px] font-normal font-["Inter"] leading-loose after:duration-500 duration-300 hover:after:w-full after:w-0 after:absolute relative after:left-[50%] hover:after:left-0 after:bottom-[-4px]  after:h-[3px] after:rounded-full hover:after:bg-[#FFF] '>Hosting Wordpress</a></li>
                                    <li className="sm:pt-6 pt-3"><a href="#" className='text-neutral-200 sm:text-base text-[14px] font-normal font-["Inter"] leading-loose after:duration-500 duration-300 hover:after:w-full after:w-0 after:absolute relative after:left-[50%] hover:after:left-0 after:bottom-[-4px]  after:h-[2px] after:rounded-full hover:after:bg-[#FFF] '>Email Hosting</a></li>
                                    <li className="sm:pt-6 pt-3"><a href="#" className='text-neutral-200 sm:text-base text-[14px] font-normal font-["Inter"] leading-loose after:duration-500 duration-300 hover:after:w-full after:w-0 after:absolute relative after:left-[50%] hover:after:left-0 after:bottom-[-4px]  after:h-[2px] after:rounded-full hover:after:bg-[#FFF] '>Hosting Unlimited</a></li>
                                </ul>
                                <ul className='w-1/2 md:w-1/4 px-3  pt-8 md:pt-0    '>
                                <li className='text-white sm:text-base text-[14px] font-bold font-["Inter"] leading-normal'>Company</li>
                                    <li className=" pt-3 sm:pt-6"><a href="#" className='text-neutral-200 sm:text-base text-[14px] font-normal font-["Inter"] leading-loose after:duration-500 duration-300 hover:after:w-full after:w-0 after:absolute relative after:left-[50%] hover:after:left-0 after:bottom-[-4px]  after:h-[2px] after:rounded-full hover:after:bg-[#FFF] '>About</a></li>
                                    <li className=" pt-3 sm:pt-6"><a href="#" className='text-neutral-200 sm:text-base text-[14px] font-normal font-["Inter"] leading-loose after:duration-500 duration-300 hover:after:w-full after:w-0 after:absolute relative after:left-[50%] hover:after:left-0 after:bottom-[-4px]  after:h-[3px] after:rounded-full hover:after:bg-[#FFF] '>Career</a></li>
                                    <li className=" pt-3 sm:pt-6"><a href="#" className='text-neutral-200 sm:text-base text-[14px] font-normal font-["Inter"] leading-loose after:duration-500 duration-300 hover:after:w-full after:w-0 after:absolute relative after:left-[50%] hover:after:left-0 after:bottom-[-4px]  after:h-[2px] after:rounded-full hover:after:bg-[#FFF] '>Contact Us</a></li>
                                </ul>
                                <ul className='w-1/2 md:w-1/4 px-3 pt-8 md:pt-0 '>
                                <li className='text-white sm:text-base text-[14px] font-bold font-["Inter"] leading-normal'>Help</li>
                                    <li className=" pt-3 sm:pt-6"><a href="#" className='text-neutral-200 sm:text-base text-[14px] font-normal font-["Inter"] leading-loose after:duration-500 duration-300 hover:after:w-full after:w-0 after:absolute relative after:left-[50%] hover:after:left-0 after:bottom-[-4px]  after:h-[2px] after:rounded-full hover:after:bg-[#FFF] '>FAQ</a></li>
                                    <li className=" pt-3 sm:pt-6"><a href="#" className='text-neutral-200 sm:text-base text-[14px] font-normal font-["Inter"] leading-loose after:duration-500 duration-300 hover:after:w-full after:w-0 after:absolute relative after:left-[50%] hover:after:left-0 after:bottom-[-4px]  after:h-[3px] after:rounded-full hover:after:bg-[#FFF] '>Help support</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <p className='text-white text-[12px] sm:text-base font-normal font-["Inter"] leading-loose flex items-center sm:pt-[70px] pt-[50px] md:pt-[90px]' >Built by Jeremiah with &#129293; in Lagos. Copyright 2024</p>
                </div>
            </div>
        </>
    )
}

export default Footer;