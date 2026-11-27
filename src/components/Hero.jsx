import heroBg from "../assets/hero-bg.png";
import profileMobile from "../assets/profile-mobile.png";
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {x:0, opacity: 1, transition: { duration: 0.5, delay: delay}}
});

const Hero = () => {
  return (
    <div id="hero" className="relative w-full min-h-screen pt-28 sm:pt-36 pb-12 sm:pb-16 px-6 sm:px-12 md:px-16 lg:px-24 flex items-center md:items-end justify-end md:justify-start mb-12 lg:mb-20">
        {/* Mobile background — portrait photo */}
        <div
            className="md:hidden absolute inset-0 -z-10 bg-cover bg-top bg-no-repeat"
            style={{ backgroundImage: `url(${profileMobile})` }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30" />
        </div>

        {/* Desktop background — landscape photo */}
        <div
            className="hidden md:block absolute inset-0 -z-10 bg-cover bg-center md:bg-right bg-no-repeat"
            style={{ backgroundImage: `url(${heroBg})` }}
        ></div>

        {/* Transparent Glassmorphism Box wrapped around text */}
        <div className="w-fit max-w-[150px] sm:max-w-xs md:max-w-xl lg:max-w-2xl bg-black/30 backdrop-blur-md px-3 sm:px-6 md:px-8 py-2 sm:py-4 md:py-6 rounded-xl md:rounded-3xl shadow-2xl border border-white/20">
            <motion.h1
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="pb-0.5 md:pb-2 text-sm sm:text-3xl md:text-6xl font-extrabold tracking-tight text-white"
            >
                Hi, I'm <span className="text-itb-gold">Kenzie</span>
            </motion.h1>
            <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="text-itb-gold font-bold text-[9px] sm:text-base md:text-3xl tracking-tight block leading-tight"
            >
                Information Systems Technology at ITB
            </motion.span>
        </div>
    </div>
  );
};

export default Hero;
