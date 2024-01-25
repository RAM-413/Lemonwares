import React from 'react'
import './App.css'
import Truecloud from './components/Truecloud'
import Map1 from './components/Map1'
import Serve from './components/Serve'
import Website from './components/Website'
import Footer from './components/Footer'
import Tab1 from './components/Tab1'
import Back from './components/Back'
import Preloader from './components/Preloader'
import Basicplans from './components/Basicplans'
import Realstories from './components/Realstories'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 1500,
        disable: 'mobile',
      }
    );
  })
  return (
    <>
      <Tab1 />
      <Truecloud />
      <Map1 />
      <Basicplans/>
      <Realstories/>
      <Serve />
      <Website />
      <Footer />
      <Back/>
      <Preloader/>
    </>
  )
}

export default App
