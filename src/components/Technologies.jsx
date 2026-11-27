import { SiPython, SiCplusplus, SiC, SiHaskell, SiTailwindcss, SiNextdotjs, SiMongodb, SiMongoose, SiPrisma, SiTypescript, SiFirebase, SiJava } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { RiReactjsLine } from "react-icons/ri";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [10,-10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
})

const Technologies = () => {
  return (
    <div id="skills" className="border-b border-neutral-800 pb-16 sm:pb-24">
      <motion.h1 
        whileInView={{opacity: 1, y: 0}} 
        initial={{opacity: 0, y: -50}} 
        transition={{duration: 0.8}} 
        className="my-12 sm:my-16 md:my-20 text-center text-3xl sm:text-4xl font-bold"
      >
        Skills
      </motion.h1>
      <motion.div
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -50}}
        transition={{duration: 0.8}}
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 md:gap-5 lg:gap-6 px-2"
      >
        <motion.a
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          href="https://link-to-python-certificate.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl sm:rounded-2xl border-2 sm:border-4 border-itb-blue p-2.5 sm:p-3 md:p-4 hover:border-itb-gold transition-colors"
        >
          <SiPython className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-yellow-400" />
        </motion.a>
        <motion.a
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          href="https://www.sololearn.com/certificates/CC-B4ZPRVID"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl sm:rounded-2xl border-2 sm:border-4 border-itb-blue p-2.5 sm:p-3 md:p-4 hover:border-itb-gold transition-colors"
        >
          <SiC className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-itb-light" />
        </motion.a>
        <motion.a
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          href="https://www.sololearn.com/en/certificates/CC-ILAPZIQD"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl sm:rounded-2xl border-2 sm:border-4 border-itb-blue p-2.5 sm:p-3 md:p-4 hover:border-itb-gold transition-colors"
        >
          <SiCplusplus className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-itb-mid" />
        </motion.a>
        <motion.a
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          href="https://link-to-haskell-certificate.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl sm:rounded-2xl border-2 sm:border-4 border-itb-blue p-2.5 sm:p-3 md:p-4 hover:border-itb-gold transition-colors"
        >
          <SiHaskell className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-itb-gold" />
        </motion.a>
        <motion.a
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          href="https://progate.com/course_certificate/c7c2f23fsg3ajw"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl sm:rounded-2xl border-2 sm:border-4 border-itb-blue p-2.5 sm:p-3 md:p-4 hover:border-itb-gold transition-colors"
        >
          <AiOutlineConsoleSql className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-itb-light" />
        </motion.a>
        <motion.a
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl sm:rounded-2xl border-2 sm:border-4 border-itb-blue p-2.5 sm:p-3 md:p-4 hover:border-itb-gold transition-colors"
        >
          <SiTypescript className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-blue-500" />
        </motion.a>
        <motion.a
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          href="https://progate.com/course_certificate/640c0c8fsfvrto"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl sm:rounded-2xl border-2 sm:border-4 border-itb-blue p-2.5 sm:p-3 md:p-4 hover:border-itb-gold transition-colors"
        >
          <RiReactjsLine className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-itb-light" />
        </motion.a>
        <motion.a
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          href="https://link-to-tailwind-certificate.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl sm:rounded-2xl border-2 sm:border-4 border-itb-blue p-2.5 sm:p-3 md:p-4 hover:border-itb-gold transition-colors"
        >
          <SiTailwindcss className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-itb-light" />
        </motion.a>
        <motion.a
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl sm:rounded-2xl border-2 sm:border-4 border-itb-blue p-2.5 sm:p-3 md:p-4 hover:border-itb-gold transition-colors"
        >
          <SiNextdotjs className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white" />
        </motion.a>
        <motion.a
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl sm:rounded-2xl border-2 sm:border-4 border-itb-blue p-2.5 sm:p-3 md:p-4 hover:border-itb-gold transition-colors"
        >
          <SiFirebase className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-orange-400" />
        </motion.a>
        <motion.a
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl sm:rounded-2xl border-2 sm:border-4 border-itb-blue p-2.5 sm:p-3 md:p-4 hover:border-itb-gold transition-colors"
        >
          <SiMongodb className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-green-500" />
        </motion.a>
        <motion.a
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl sm:rounded-2xl border-2 sm:border-4 border-itb-blue p-2.5 sm:p-3 md:p-4 hover:border-itb-gold transition-colors"
        >
          <SiMongoose className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-itb-light" />
        </motion.a>
        <motion.a
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl sm:rounded-2xl border-2 sm:border-4 border-itb-blue p-2.5 sm:p-3 md:p-4 hover:border-itb-gold transition-colors"
        >
          <SiPrisma className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-itb-light" />
        </motion.a>
        <motion.a
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl sm:rounded-2xl border-2 sm:border-4 border-itb-blue p-2.5 sm:p-3 md:p-4 hover:border-itb-gold transition-colors"
        >
          <SiJava className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-red-500" />
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Technologies;
