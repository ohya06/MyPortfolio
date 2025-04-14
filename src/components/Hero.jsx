import { motion } from "framer-motion";
import { styles } from "../styles";
import { AvatarCanvas } from "./canvas";
import AnimatedSVG from "./animatedSvg";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto overflow-hidden">
      {/* Left side text */}
      <div
        className={`absolute inset-0 top-[80px] sm:top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row flex-wrap items-start gap-5`}
      >
        {/* Blue dot and line */}
        <div className="flex-shrink-0 flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#3c92d7]" />
          <div
            className="w-1 sm:h-80 h-40"
            style={{ background: "linear-gradient(#3c92d7, #a3cdef)" }}
          />
        </div>

        {/* Text block */}
        <div className="flex-1 min-w-[250px] mt-6">
          <h1 className={`${styles.heroHeadText} text-white`}>Hello!</h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 hidden sm:block`}>
            I'm a software developer, <br />
            web designer, <br />
            musician, <br />
            foodie.
          </p>
          <p className={`${styles.heroSubText} mt-2 text-white-100 sm:hidden block`}>
            I'm a software developer, <br />
            web designer, <br />
            musician, <br />
            foodie.
          </p>
        </div>
      </div>

      {/* Animated SVG Name */}
      <div className="absolute w-full left-1/2 -translate-x-1/2 top-[45%] sm:top-[38%] flex justify-center pointer-events-none px-4">
        <div className="w-full max-w-[600px]">
          <AnimatedSVG />
        </div>
      </div>

      {/* AvatarCanvas positioned under the Animated SVG */}
      {/* <div className="absolute w-full left-1/2 -translate-x-1/2 top-[52%] sm:top-[38%] flex justify-center pointer-events-none px-4">
        <div className="w-full max-w-[2000px]">
          <AvatarCanvas />
        </div>
      </div> */}

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[30px] h-[55px] sm:w-[35px] sm:h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
