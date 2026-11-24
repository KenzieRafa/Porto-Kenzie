import React from 'react';
import { EXPERIENCES } from "../assets/constants";
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <div id="experience" className="border-b border-neutral-900 pb-12">
      <motion.h1 
        whileInView={{opacity: 1, y: 0}} 
        initial={{opacity: 0, y: -50}} 
        transition={{duration: 0.5}} 
        className="my-12 sm:my-16 md:my-20 text-center text-3xl sm:text-4xl font-bold"
      >
        Experience
      </motion.h1>
      <div className="flex flex-col items-center">
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-10 flex w-full max-w-5xl flex-col lg:flex-row justify-between gap-2 lg:gap-8">
            <motion.div 
              whileInView={{opacity: 1, x: 0}} 
              initial={{opacity: 0, x: -50}} 
              transition={{duration: 0.5}} 
              className="w-full lg:w-1/4"
            >
              <p className="mb-1 text-xs sm:text-sm font-semibold text-itb-gold lg:text-neutral-400">
                {experience.year}
              </p>
            </motion.div>
            <motion.div 
              whileInView={{opacity: 1, x: 0}} 
              initial={{opacity: 0, x: 50}} 
              transition={{duration: 0.5}} 
              className="w-full lg:w-3/4"
            >
              <h6 className="mb-2 text-base sm:text-lg font-semibold text-white">
                {experience.role} -{" "}
                <span className="text-sm sm:text-base text-itb-light font-medium">{experience.company}</span>
              </h6>
              <p className="mb-4 text-xs sm:text-sm md:text-base leading-relaxed text-neutral-400">
                {experience.description}
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {experience.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-block rounded-md bg-itb-blue px-2.5 py-1 text-xs sm:text-sm font-medium text-itb-gold shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;