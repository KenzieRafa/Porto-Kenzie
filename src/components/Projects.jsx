import { PROJECTS } from "../assets/constants";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div id="projects" className="border-b border-neutral-900 pb-12">
      <motion.h1 
        whileInView={{opacity: 1, y: 0}} 
        initial={{opacity: 0, y: -50}} 
        transition={{duration: 0.5}} 
        className="my-12 sm:my-16 md:my-20 text-center text-3xl sm:text-4xl font-bold"
      >
        Projects
      </motion.h1>
      <div className="flex flex-col items-center">
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-12 flex w-full max-w-5xl flex-col lg:flex-row items-center lg:items-start justify-between gap-6 lg:gap-8">
            <motion.div 
              whileInView={{opacity: 1, x: 0}} 
              initial={{opacity: 0, x: -50}} 
              transition={{duration: 0.5}} 
              className="w-full lg:w-1/4 flex justify-center lg:justify-start flex-shrink-0"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full max-w-[240px] sm:max-w-[280px] h-auto object-cover rounded-xl shadow-lg border border-neutral-800" 
              />
            </motion.div>
            <motion.div 
              whileInView={{opacity: 1, x: 0}} 
              initial={{opacity: 0, x: 50}} 
              transition={{duration: 0.5}} 
              className="w-full lg:w-3/4 text-center lg:text-left"
            >
              <h6 className="mb-2 text-base sm:text-lg font-semibold text-white">
                {project.title}
              </h6>
              <p className="mb-4 text-xs sm:text-sm md:text-base leading-relaxed text-neutral-400">
                {project.description}
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-1.5 sm:gap-2">
                {project.technologies.map((technology, index) => (
                  <span
                    key={index}
                    className="inline-block rounded-md bg-itb-blue px-2.5 py-1 text-xs sm:text-sm font-medium text-itb-gold shadow-sm"
                  >
                    {technology}
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

export default Project;