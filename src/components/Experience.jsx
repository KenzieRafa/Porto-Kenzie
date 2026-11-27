import React from 'react';
import { EXPERIENCES } from "../assets/constants";
import { motion } from 'framer-motion';

const renderBold = (text) =>
  text.split(/(\*\*.*?\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**")
      ? <strong key={i} className="text-white font-semibold">{part.slice(2, -2)}</strong>
      : part
  );

const Experience = () => {
  return (
    <div id="experience" className="relative border-b border-neutral-900 pb-16 overflow-hidden">
      {/* Ambient Blue Glow Effect */}
      <div className="absolute top-1/3 right-0 -z-10 w-72 sm:w-96 h-72 sm:h-96 bg-itb-mid/20 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 -z-10 w-64 h-64 bg-itb-blue/20 rounded-full blur-[100px] pointer-events-none"></div>

      <motion.h1 
        whileInView={{opacity: 1, y: 0}} 
        initial={{opacity: 0, y: -50}} 
        transition={{duration: 0.5}} 
        className="my-12 sm:my-16 md:my-20 text-center text-3xl sm:text-4xl font-bold text-white"
      >
        Work <span className="text-itb-light">Experience</span>
      </motion.h1>
      <div className="flex flex-col items-center gap-6">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: 30}}
            transition={{duration: 0.5}}
            viewport={{ once: true, amount: 0.1 }}
            className="w-full max-w-5xl rounded-2xl bg-itb-blue/10 border border-itb-blue/30 hover:border-itb-light/60 p-5 sm:p-7 shadow-xl hover:shadow-[0_0_25px_rgba(0,85,165,0.25)] transition-all duration-300 flex flex-col lg:flex-row justify-between gap-4 lg:gap-8 backdrop-blur-sm"
          >
            <div className="w-full lg:w-1/4">
              <span className="inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-itb-blue/60 border border-itb-light/40 text-itb-gold shadow-sm">
                {experience.year}
              </span>
            </div>
            <div className="w-full lg:w-3/4">
              <h6 className="mb-2 text-base sm:text-lg font-bold text-white">
                {experience.role} -{" "}
                <span className="text-sm sm:text-base text-itb-light font-semibold">{experience.company}</span>
              </h6>
              <p style={{ textAlign: "justify" }} className="mb-4 text-xs sm:text-sm md:text-base leading-relaxed text-neutral-300">
                {renderBold(experience.description)}
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {experience.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-block rounded-md bg-itb-blue border border-itb-light/30 px-2.5 py-1 text-xs sm:text-sm font-medium text-itb-gold shadow-sm hover:border-itb-gold transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;