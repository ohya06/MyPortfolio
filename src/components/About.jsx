import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  // Define the icon size based on the title, inside the function body before returning JSX.
  const iconSize = (title === "Full Stack Engineer" || title === "Software Engineer") ? 'w-25 h-20' : 'w-16 h-16';

  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt={title}
            className={`${iconSize} object-contain`} // Apply the dynamically set class here
          />

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Hello! My name is Yaechan Oh. I was born in South Korea, but I grew up just outside Chicago. I recently graduated from the University of Michigan with my Bachelor's in 
        Computer Science (Dec '23), and I'm currently living in Ann Arbor, MI. I'm passionate 
        about people, sports, music, the great outdoors, and I'm always ready to try a new hobby!  
        As a friendly extravert, I excel at bringing people together and creating lasting relationships. 
        I’m interested in using technology to solve real-world problems and 
        mentoring the next generation of developers while learning from the previous one. I have a new profound interest in the world of AI
        and am starting my journey to become a master of it!
        Here, you’ll find projects showcasing my skills in software development, 
        from web systems to mobile app development. 
        Thank you for visiting, and I hope you find my work inspiring!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
