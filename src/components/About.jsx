import aboutImg from "../assets/AboutImage.jpg";
import { DESCRIPTION } from "../assets/constants";
import { motion } from "framer-motion";

const renderBold = (text) =>
  text.split(/(\*\*.*?\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**")
      ? <strong key={i} className="text-white font-semibold">{part.slice(2, -2)}</strong>
      : part
  );

const About = () => {
  return (
    <div id="about" className="relative border-b border-neutral-900 pb-16 overflow-hidden">
      {/* Ambient Blue Glow Effect */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 w-72 sm:w-96 h-72 sm:h-96 bg-itb-mid/15 rounded-full blur-[120px] pointer-events-none"></div>

      <h1 className="my-12 sm:my-16 md:my-20 text-center text-3xl sm:text-4xl font-bold text-white">
        About <span className="text-itb-light">Me</span>
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        <motion.div 
            whileInView={{opacity: 1, x: 0}} 
            initial={{opacity: 0, x: -50}} 
            transition={{duration: 0.5}} 
            className="w-full lg:w-1/2 flex justify-center"
        >
            <div className="relative group">
                {/* Glow ring behind image */}
                <div className="absolute -inset-1 bg-gradient-to-r from-itb-blue via-itb-mid to-itb-light rounded-3xl blur-md opacity-40 group-hover:opacity-75 transition duration-500"></div>
                <img
                    className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] rounded-2xl object-cover shadow-2xl border-2 border-itb-blue/80"
                    src={aboutImg}
                    alt="about"
                />
            </div>
        </motion.div>
        <motion.div 
            whileInView={{opacity: 1, x: 0}} 
            initial={{opacity: 0, x: 50}} 
            transition={{duration: 0.5}} 
            className="w-full lg:w-1/2"
        >
            <div className="flex justify-center lg:justify-start">
                <div className="max-w-xl py-4 sm:py-6 px-5 sm:px-6 rounded-2xl bg-itb-blue/10 border border-itb-blue/30 backdrop-blur-sm shadow-xl">
                    {DESCRIPTION.split("\n\n").map((para, i) => (
                      <p key={i} className="text-sm sm:text-base leading-relaxed text-neutral-200 text-center lg:text-left mb-3 last:mb-0">
                        {renderBold(para)}
                      </p>
                    ))}
                </div>
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
