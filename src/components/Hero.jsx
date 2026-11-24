import { HERO_CONTENT } from "../assets/constants/index";
import profilePic from "../assets/kenzie.png";
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {x:0, opacity: 1, transition: { duration: 0.5, delay: delay}}
});

const Hero = () => {
  return (
    <div id="hero" className="mt-4 sm:mt-8 border-b border-neutral-900 pb-12 px-2 sm:px-4 md:px-8 mb-12 lg:mb-24">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <motion.h1 
                        variants={container(0)} 
                        initial="hidden" 
                        animate="visible" 
                        className="pb-2 sm:pb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white"
                    >
                        Hi, I'm <span className="text-itb-gold">Kenzie</span>
                    </motion.h1>
                    <motion.span 
                        variants={container(0.5)} 
                        initial="hidden" 
                        animate="visible" 
                        className="bg-gradient-to-r from-itb-gold via-itb-mid to-itb-light bg-clip-text text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-transparent"
                    >
                        Information Systems Technology at ITB
                    </motion.span>
                    <motion.p 
                        variants={container(1)} 
                        initial="hidden" 
                        animate="visible" 
                        className="my-3 max-w-xl py-2 sm:py-4 text-sm sm:text-base font-light tracking-normal text-neutral-300 leading-relaxed"
                    >
                        {HERO_CONTENT}
                    </motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center items-center">
                <motion.img 
                    initial={{x: 50, opacity: 0}} 
                    animate={{x: 0, opacity: 1}} 
                    transition={{duration: 0.8, delay: 0.6}} 
                    src={profilePic} 
                    alt="Kenzie" 
                    className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-2xl border-2 border-itb-blue/50"
                />
            </div>
        </div>
    </div>
  );
};

export default Hero;
