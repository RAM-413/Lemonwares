import React, { useState } from 'react'
import heroimg from "../assets/images/hero-sectionimg.webp";
import Nav from './Nav';
import { Left,Right1 } from './Icon';


const Tab1 = () => {
    const [first, setFirst] = useState("tab1")
    function tabs(tab) {
        setFirst(tab);
    }
    return (
        <div>
            <Nav />
            <div className=' max-w-[1240px] mx-auto px-3 my-[20px] sm:my-[80px] overflow-hidden'>
                <div className=' flex md:flex-row flex-wrap -mx-3 flex-col-reverse'>
                    <div className=' w-full md:w-1/2 px-3'  data-aos="fade-down-right">
                        <div className=' flex items-center relative after:absolute after:w-full after:h-[1px] after:bg-[#E5E5E5] after:left-0 after:bottom-[-5px] after:max-w-[242px]'>
                            <span onClick={() => tabs('tab1')} className={`${first === "tab1" ? "!text-[#B00000] relative after:absolute after:w-[80%] after:h-[1px] after:left-[8%] after:bottom-[-5px] after:bg-[#B00000] after:z-[1] " : ""} font-["poppins"] font-semibold text-[15px] text-[#d6d4d4e0] mr-[23px] leading-[normal] cursor-pointer`}>Hosting</span>
                            <span onClick={() => tabs('tab2')} className={`${first === "tab2" ? "!text-[#B00000] relative after:absolute after:w-[80%] after:h-[1px] after:left-[8%] after:bottom-[-5px] after:bg-[#B00000] after:z-[1]" : ""} font-["poppins"] font-semibold text-[15px] text-[#d6d4d4e0] mr-[18px] leading-[normal] cursor-pointer`}>Domain</span>
                            <span onClick={() => tabs('tab3')} className={`${first === "tab3" ? "!text-[#B00000] relative after:absolute after:w-[80%] after:h-[1px] after:left-[8%] after:bottom-[-5px] after:bg-[#B00000] after:z-[1]" : ""} font-["poppins"] font-semibold text-[15px] text-[#d6d4d4e0] mr-[15px] leading-[normal] cursor-pointer`}>SEO</span>
                            <span onClick={() => tabs('tab4')} className={`${first === "tab4" ? "!text-[#B00000] relative after:absolute after:w-[80%] after:h-[1px] after:left-[8%] after:bottom-[-5px] after:bg-[#B00000] after:z-[1]" : ""} font-["poppins"] font-semibold text-[15px] text-[#d6d4d4e0] leading-[normal] cursor-pointer`}>Email</span>
                        </div>
                        { first === 'tab1' && <p className=' font-["poppins"] text-[24px] leading-10 sm:text-[43px] min-[800px]:text-[50px] min-[900px]:text-[58px] 992:text-[64px] font-bold sm:leading-[62.5px]  min-[900px]:leading-[77.5px] text-[#2E2E2E] pt-[10px] min-[800px]:pt-[30px] max-w-[608px]'>Premium Web Hosting for Your Website</p>}
                        { first === 'tab2' && <p className=' font-["poppins"] text-[24px] sm:text-[43px] min-[800px]:text-[50px] min-[900px]:text-[58px] 992:text-[64px] font-bold leading-10 sm:leading-[62.5px]  min-[900px]:leading-[77.5px] text-[#2E2E2E] pt-[10px] min-[800px]:pt-[30px] max-w-[608px]'>Premium Web Domain for Your Website</p>}
                        { first === 'tab3' && <p className=' font-["poppins"] text-[24px] sm:text-[43px] min-[800px]:text-[50px] min-[900px]:text-[58px] 992:text-[64px] font-bold leading-10 sm:leading-[62.5px]  min-[900px]:leading-[77.5px] text-[#2E2E2E] pt-[10px] min-[800px]:pt-[30px] max-w-[608px]'>Premium Web for Your devlopers website</p>}
                        { first === 'tab4' && <p className=' font-["poppins"] text-[24px] sm:text-[43px] min-[800px]:text-[50px] min-[900px]:text-[58px] 992:text-[64px] font-bold leading-10 sm:leading-[62.5px]  min-[900px]:leading-[77.5px] text-[#2E2E2E] pt-[10px] min-[800px]:pt-[30px] max-w-[608px]'>Premium Web Email for  Website devlopers</p>}
                        <p className=' font-inter text-[14px] sm:text-[16px] font-normal text-[#808080] leading-[20px]   mt-[10px] md:max-w-[448px] sm:leading-7'>Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.</p>
                        <div className=' flex items-center min-[900px]:pt-[25px] pt-[20px] lg:pt-[50px] gap-[16px] sm:gap-[24px]'>
                            <button className=' font-["poppins"] text-[14px] font-normal leading-[24px] text-[#000] p-[7px_5px] sm:p-[12px_13.5px] rounded-[8px] border-[1px] border-[#000] hover:text-[#fff] hover:shadow-[0px_0px_64px_0px_#b000004d] duration-300 hover:border-transparent hover:bg-[#B00000]'>Create an Account</button>
                            <button className=' font-["poppins"] text-[14px] font-normal leading-[24px] text-[#000] p-[8px_5px] sm:p-[12px_18px] rounded-[8px] border-[1px] border-[#000] hover:text-[#fff] hover:shadow-[0px_0px_64px_0px_#b000004d] duration-300 hover:border-transparent hover:bg-[#B00000]'>Choose your plan</button>
                        </div>
                    </div>
                    <div className=' w-full md:w-1/2 px-3 pt-[17px] flex items-center relative'  data-aos="fade-down-left">
                        <img className=' max-w-[501px] max-h-[504px] mx-auto 992:ms-auto w-full ' src={heroimg} alt="heroimg" />
                        <span className=' absolute xl:start-[6%] lg:start-[3%] md:start-[-1%] sm:start-[13%] hidden sm:block bottom-[36%]'><Left/></span>
                        {/* <span className='top-[20%] absolute xl:end-[6%] lg:end-[3%] md:end-[-1%] sm:end-[13%] hidden sm:block'><Right1/></span> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tab1