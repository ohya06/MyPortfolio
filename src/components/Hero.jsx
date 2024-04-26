// import React, { useRef } from 'react'
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { AvatarCanvas } from "./canvas"
// import useOnScreen from '../hooks/useOnScreen';
import AnimatedSVG from './animatedSvg';

const Hero = () => {
  // const ref = useRef();  // Define the ref
  // const isVisible = useOnScreen(ref);  // Use the custom hook to check visibility

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          {/* Purple dot  */}
          <div className='w-5 h-5 rounded-full bg-[#3c92d7]' />
          {/* Purple Line  */}
          <div 
            className='w-1 sm:h-80 h-40' 
            style={{background: 'linear-gradient(#3c92d7, #a3cdef)'}}/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {/* &apos; is for */}
            {/* Hello World, I&apos;m <span className='text-[#3c92d7]'>Yaechan</span> */}
            Hello!
            {/* Insert the SVG here */}
            <AnimatedSVG />
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a software developer, <br className='sm:block hidden' />web
            designer, <br className='sm:block hidden' /> musician, <br className='sm:block hidden' />
            foodie. <br className='sm:block hidden' /> 
            
          </p>
        </div>
      </div>

      {/* <div ref={ref} style={{ height: '500px', width: '80%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 0 }}> Attach the ref here */}
        {/* {isVisible && <ComputersCanvas />} */}
      {/* </div> */}

      {/* <ComputersCanvas/> */}
      <AvatarCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
