// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import React, { useRef, useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, CodeLanguages, Works, StarsCanvas, Preloadpage } from "./components";
// import useOnScreen from './hooks/useOnScreen';


const App = () => {
  // const ref = useRef();
  // const isVisible = useOnScreen(ref);

  // console.log("StarsCanvas visible:", isVisible);
  // const [isLoading, setIsLoading] = useState(true);

  return (
    <BrowserRouter>
      {/* {isLoading ? <preLoader /> : null} */}
      {/* <Preloadpage/> */}
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <CodeLanguages />
        <Works />
        {/* <Feedbacks /> IWILLWORK ON LATER */}
        
        {/* <div className='relative z-0' ref={ref}>
          <Contact />
          {isVisible && <StarsCanvas />}
        </div> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App
