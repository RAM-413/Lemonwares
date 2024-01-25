import React, { useState } from 'react'
import navlogo from "../assets/images/nav-logo.webp";
import { Contacts } from './Icon';

const Nav = () => {
    const [show, setShow] = useState(false)
    function mobile() {
        setShow(!show)
        if (show === false) {
            document.body.classList.add('overflow_hidden')
        }
        else {
            document.body.classList.remove('overflow_hidden')
        }
    }
    return (
        <>
            <nav className=' max-w-[1224px] mx-auto px-3 mt-[25px] sm:mt-[41px]'>
                <div className=' flex items-center justify-between'>
                    <div className=' flex items-center gap-[65.19px] '>
                        <img className='max-[576px]:max-w-[70px] max-[576px]:w-full cursor-pointer' src={navlogo} alt="navlogo" />
                        <a onClick={mobile} href="#services" className='hidden lg:block font-["poppins"] text-[15px] text-[#000] font-semibold leading-[normal] relative after:absolute after:w-0 after:h-[2px] after:bg-[#B00000] after:left-[50%] after:bottom-[-4px] hover:after:w-[80%] hover:after:left-[8%] after:duration-300'>Our Services</a>
                    </div>
                    <div className=' flex items-center gap-[33px] min-[992px]:gap-[70px] min-[1200px]:gap-[170px]'>
                        <ul className={`${show === true ? "left-0" : "left-[-100%]"} flex items-center gap-[33px] mobile-view max-[991px]:absolute max-[991px]:top-0 max-[991px]:h-full max-[991px]:justify-center max-[991px]:flex-col max-[991px]:w-full max-[991px]:duration-300 max-[991px]:z-[4] max-[991px]:bg-white`}>
                            <li>
                                <a onClick={mobile}  href="#services" className=' block lg:hidden font-["poppins"] text-[15px] text-[#000] font-semibold leading-[normal] relative after:absolute after:w-0 after:h-[2px] after:bg-[#B00000] after:left-[50%] after:bottom-[-4px] hover:after:w-[80%] hover:after:left-[8%] after:duration-300'>Our Services </a>
                            </li>
                            <li>
                                <a onClick={mobile} href="#about" className=' font-["poppins"] text-[15px] text-[#000] font-semibold leading-[normal] relative after:absolute after:w-0 after:h-[2px] after:bg-[#B00000] after:left-[50%] after:bottom-[-4px] hover:after:w-[80%] hover:after:left-[8%] after:duration-300'>About </a>
                            </li>
                            <li>
                                <a onClick={mobile}  href="#blognews" className=' font-["poppins"] text-[15px] text-[#000] font-semibold leading-[normal] relative after:absolute after:w-0 after:h-[2px] after:bg-[#B00000] after:left-[50%] after:bottom-[-4px] hover:after:w-[80%] hover:after:left-[8%] after:duration-300'>Blog&News </a>
                            </li>
                            <li>
                                <a onClick={mobile} href="#contact" className=' font-["poppins"] text-[15px] text-[#000] font-semibold leading-[normal] relative after:absolute after:w-0 after:h-[2px] after:bg-[#B00000] after:left-[50%] after:bottom-[-4px] hover:after:w-[80%] hover:after:left-[8%] after:duration-300'>Contact</a>
                            </li>
                            <li>
                                <a onClick={mobile} href="#account" className=' block 576:hidden font-["poppins"] text-[15px] text-[#000] font-semibold leading-[normal] relative after:absolute after:w-0 after:h-[2px] after:bg-[#B00000] after:left-[50%] after:bottom-[-4px] hover:after:w-[80%] hover:after:left-[8%] after:duration-300 '>Account</a>
                            </li>
                            <li className=' flex gap-[11px] 576:hidden'><Contacts />
                                <a href="tel:+2349067322844" className=' font-["poppins"] text-[15px] text-[#000] font-semibold leading-[normal] relative after:absolute after:w-0 after:h-[2px] after:bg-[#B00000] after:left-[50%] after:bottom-[-4px] hover:after:w-[80%] hover:after:left-[8%] after:duration-300 '>
                                    +2349067322844
                                </a>
                            </li>
                        </ul>
                        <ul className=' items-center gap-[30px] pr-[62px] hidden 576:flex'>
                            <li>
                                <a onClick={mobile} href="#account" className=' font-["poppins"] text-[15px] text-[#000] font-semibold leading-[normal] relative after:absolute after:w-0 after:h-[2px] after:bg-[#B00000] after:left-[50%] after:bottom-[-4px] hover:after:w-[80%] hover:after:left-[8%] after:duration-300 '>Account</a>
                            </li>
                            <li className=' flex gap-[11px] border-l border-l-[#000] pl-4'><Contacts />
                                <a href="tel:+2349067322844" className=' font-["poppins"] text-[15px] text-[#000] font-semibold leading-[normal] relative after:absolute after:w-0 after:h-[2px] after:bg-[#B00000] after:left-[50%] after:bottom-[-4px] hover:after:w-[80%] hover:after:left-[8%] after:duration-300 '>
                                    +2349067322844
                                </a>
                            </li>
                        </ul>
                        <button onClick={mobile} className={`${show === false ? "rotate-90 text-black" : "rotate-360 text-black"} d_none relative z-[6] font-bold text-[27px]   duration-300`}>{show === false ? "|||" : "X "}</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav
