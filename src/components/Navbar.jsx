import { FaLinkedin } from "react-icons/fa";
//import { FaGithub } from "react-icons/fa";
import VercelLogo from "../assets/vercel.svg";
import { FaEnvelope } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-6 px-8 bg-black opacity-80">
            <div className="flex items-center justify-center gap-4 text-2xl text-white">
                <a href="https://www.linkedin.com/in/kenzie-steik-itb" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                {/* <a href="https://github.com/fliegenhaan" target="_blank" rel="noopener noreferrer"><FaGithub /></a> */}
                <a href="https://vercel.com/KenzieR" target="_blank" rel="noopener noreferrer">
                    <div className="w-7 h-7 flex items-center justify-center bg-white rounded-full">
                        <img src={VercelLogo} alt="Vercel Logo" className="w-4 h-4" />
                    </div>
                </a>
                <a href="mailto:kenzieraffa0709@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope />
                </a>
                <a href="https://www.instagram.com/kenzierffa?igsh=aDBreDZiNmFhbmt1" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
                </a>
            </div>
            <div className="flex items-center gap-6 text-xl text-white">
                <a href="#hero" className="hover:text-itb-gold transition-colors duration-200">Home</a>
                <a href="#projects" className="hover:text-itb-gold transition-colors duration-200">Projects</a>
                <a href="#skills" className="hover:text-itb-gold transition-colors duration-200">Skills</a>
                <a href="#experience" className="hover:text-itb-gold transition-colors duration-200">Experience</a>
            </div>
        </nav>
    );
};

export default Navbar;