import { FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import VercelLogo from "../assets/vercel.svg";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-3 px-4 sm:px-6 md:px-8 bg-black/80 backdrop-blur-md border-b border-neutral-900/60">
            {/* Social Icons */}
            <div className="flex items-center gap-3 sm:gap-4 text-lg sm:text-xl md:text-2xl text-white">
                <a href="https://www.linkedin.com/in/kenzie-steik-itb" target="_blank" rel="noopener noreferrer" className="hover:text-itb-light transition-colors" aria-label="LinkedIn">
                    <FaLinkedin />
                </a>
                <a href="https://vercel.com/KenzieR" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="Vercel">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex items-center justify-center bg-white rounded-full">
                        <img src={VercelLogo} alt="Vercel Logo" className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                    </div>
                </a>
                <a href="mailto:kenzieraffa0709@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-itb-light transition-colors" aria-label="Email">
                    <FaEnvelope />
                </a>
                <a href="https://www.instagram.com/kenzierffa?igsh=aDBreDZiNmFhbmt1" target="_blank" rel="noopener noreferrer" className="hover:text-itb-light transition-colors" aria-label="Instagram">
                    <FaInstagram />
                </a>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm md:text-base font-medium text-white">
                <a href="#hero" className="hover:text-itb-gold transition-colors duration-200">Home</a>
                <a href="#experience" className="hover:text-itb-gold transition-colors duration-200">Experience</a>
                <a href="#projects" className="hover:text-itb-gold transition-colors duration-200">Projects</a>
                <a href="#skills" className="hover:text-itb-gold transition-colors duration-200">Skills</a>
            </div>
        </nav>
    );
};

export default Navbar;