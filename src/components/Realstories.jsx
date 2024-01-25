import iconimg1 from '../assets/images/stories-1.webp'
import iconimg2 from '../assets/images/stories-2.webp'
import iconimg3 from '../assets/images/stories-3.webp'

import { Storiesmain, Storiessmall } from './Icon'
const Realstories = () => {
    return (
        <div className='container mx-auto max-w-[1220px] py-5 mt-[40px] sm:py-10 px-3 overflow-hidden' id='account'>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-10 sm:my-16 lg:my-20 gap-4 sm:gap-6 lg:gap-[30px]'>
                <div className='flex flex-col lg:items-end lg:pl-[100px]'>
                    <div className='relative max-sm:pl-4  max-lg:pl-[100px]'   data-aos="fade-right">
                        <h2 className='text-[#18191F] text-[32px] xs:text-[40px] sm:text-5xl font-extrabold sm:!leading-[64px] font-["inter"] sm:max-w-[445px]'>Real Stories from Real Customers</h2>
                        <p className='text-[#18191F] text-lg font-["inter"] font-normal leading-[32px] max-w-[573px] mt-2 sm:mt-3'>Get inspired by these stories.</p>
                        <span className=' absolute top-0 left-0 max-sm:translate-x-0 lg:-translate-x-[67%] -translate-y-[40%] sm:-translate-y-[46%]'><Storiesmain /></span>
                    </div>
                    <div className='bg-white shadow-[0_10px_20px_0_rgba(41,41,42,0.07)] rounded-lg lg:max-w-[350px] w-full mt-4 lg:mt-6'   data-aos="flip-left">
                        <div className='py-2 sm:px-6 px-1 md:px-8 flex gap-4'>
                            <span className='mt-20'><Storiessmall /></span>
                            <div className='flex flex-col'>
                                <div><img src={iconimg1} alt='Icon' /></div>
                                <p className=' font-["inter"] font-normal text-black text-base leading-[32px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
                                <p className=' font-["inter"] font-bold text-[#18191F] text-lg leading-7 mt-6'>Floyd Miles</p>
                                <p className=' font-["inter"] font-medium text-[#969BAB] text-sm leading-6 mb-5 sm:mb-12 md:mb-16 lg:mb-20'>Vice President, CLI</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col mt-[0rem] sm:mt-[4.8rem]'>
                    <div className='bg-white shadow-[0_10px_20px_0_rgba(41,41,42,0.07)] rounded-lg lg:max-w-[445px] w-full mt-6'  data-aos="flip-up">
                        <div className='py-2 sm:px-6 px-1 md:px-8 flex gap-4'>
                            <span className='mt-20'><Storiessmall /></span>
                            <div className='flex flex-col'>
                                <div><img src={iconimg2} alt='Icon' /></div>
                                <p className=' font-["inter"] font-normal text-black text-base leading-[32px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
                                <p className=' font-["inter"] font-bold text-[#18191F] text-lg leading-7 mt-6'>Jane Cooper</p>
                                <p className=' font-["inter"] font-medium text-[#969BAB] text-sm leading-6 mb-2'>CEO, JPNL</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white shadow-[0_10px_20px_0_rgba(41,41,42,0.07)] rounded-lg lg:max-w-[350px] w-full mt-10'  data-aos="flip-right">
                        <div className='py-2 sm:px-6 px-1 md:px-8 flex gap-4'>
                            <span className='mt-20'><Storiessmall /></span>
                            <div className='flex flex-col'>
                                <div><img src={iconimg3} alt='Icon' /></div>
                                <p className=' font-["inter"] font-normal text-black text-base mt-1 leading-[32px]'>LemonWares saved our time in Hosting my company page.</p>
                                <p className=' font-["inter"] font-bold text-[#18191F] text-lg leading-7 mt-[26px]'>Kristin Watson</p>
                                <p className=' font-["inter"] font-medium text-[#969BAB] text-sm leading-6 mb-8'>Co-Founder, LeeveOn Branding</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Realstories