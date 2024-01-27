import React, { useState, useEffect } from 'react';

const Back = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 200) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  return (
    <>
 <button
      className={`${
        isVisible ? 'opacity-100' : 'opacity-0'
      } fixed z-50 bottom-8 right-2 sm:right-6 p-2 border-[2px] border-white  rounded-full bg-[#B00000]   ease-in-out focus:outline-none`}
      onClick={scrollToTop}
    >
     <span><svg  width="22" height="22" fill="#ffff" viewBox="0 0 16 16"><path fillRule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"></path><path fillRule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"></path></svg></span>
    </button>
    </>
  )
}

export default Back