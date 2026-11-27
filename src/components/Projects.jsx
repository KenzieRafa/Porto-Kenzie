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
              viewport={{ once: true, amount: 0.1 }}
              className="w-full lg:w-2/5 flex justify-center lg:justify-start flex-shrink-0"
            >
              <img
                src={project.image}
                alt={project.title}
                className={`h-auto object-cover rounded-xl shadow-lg border border-neutral-800 ${
                  project.mobile
                    ? "w-full max-w-[180px] sm:max-w-[220px]"
                    : "w-full max-w-[320px] sm:max-w-[380px]"
                }`}
              />
            </motion.div>
            <motion.div
              whileInView={{opacity: 1, x: 0}}
              initial={{opacity: 0, x: 50}}
              transition={{duration: 0.5}}
              viewport={{ once: true, amount: 0.1 }}
              className="w-full lg:w-3/5 text-center lg:text-justify"
            >
              <h6 className="mb-2 text-base sm:text-lg font-semibold text-white">
                {project.title}
              </h6>
              <p className="mb-4 text-xs sm:text-sm md:text-base leading-relaxed text-neutral-400 text-justify">
                {project.description}
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-1.5 sm:gap-2 mb-4">
                {project.technologies.map((technology, index) => (
                  <span
                    key={index}
                    className="inline-block rounded-md bg-itb-blue px-2.5 py-1 text-xs sm:text-sm font-medium text-itb-gold shadow-sm"
                  >
                    {technology}
                  </span>
                ))}
              </div>
              {project.link && (
                <div className="flex justify-center lg:justify-start">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-itb-mid hover:bg-itb-light text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-itb-light/30 border border-itb-light/30 hover:border-itb-light"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Visit Website
                  </a>
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;