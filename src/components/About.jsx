import aboutImg from "../assets/AboutImage.jpg";
import { DESCRIPTION } from "../assets/constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-12">
      <h1 className="my-12 sm:my-16 md:my-20 text-center text-3xl sm:text-4xl font-bold">About Me</h1>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        <motion.div 
            whileInView={{opacity: 1, x: 0}} 
            initial={{opacity: 0, x: -50}} 
            transition={{duration: 0.5}} 
            className="w-full lg:w-1/2 flex justify-center"
        >
            <img 
                className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl object-cover shadow-xl border border-neutral-800" 
                src={aboutImg} 
                alt="about" 
            />
        </motion.div>
        <motion.div 
            whileInView={{opacity: 1, x: 0}} 
            initial={{opacity: 0, x: 50}} 
            transition={{duration: 0.5}} 
            className="w-full lg:w-1/2"
        >
            <div className="flex justify-center lg:justify-start">
                <p className="my-2 max-w-xl py-2 sm:py-4 text-sm sm:text-base leading-relaxed text-neutral-300 text-center lg:text-left whitespace-pre-line">
                    {DESCRIPTION}
                </p>
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
