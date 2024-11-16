import React from 'react'
import Link from 'next/link';
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
        <footer className="bg-black text-gray-400 text-sm py-6">
      <div className="container mx-auto flex flex-col items-center md:flex-row justify-around px-4">
        {/* Logo and Links */}
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
            {/* Logo */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-yellow-500"></div>
           <Link href={'/'}>
           <span className="text-white font-semibold text-lg"><span className='text-[#e09800]'>EX</span>Crypto</span>
           </Link>
          </div>
        <div className="flex flex-col items-center md:items-start">
          
          <ul className="flex gap-4 text-gray-400">
            <li >
              <a href="#how-it-works" className="hover:text-white">How it works</a>
            </li>
            <li >
              <a href="#exchange-otc" className="hover:text-white">Exchange & OTC</a>
            </li>
            <li>
              <a href="#community" className="hover:text-white">Community</a>
            </li>
            <li>
              <a href="#faq" className="hover:text-white">FAQ</a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex text-xl space-x-4 mt-4 md:mt-0">
          <a href="https://www.linkedin.com/in/tayyab-ilyas-ai-engineer/" className="hover:text-[#e09800]">
            <i className="fab fa-linkedin"> 
                <FaLinkedin/>
            </i>
          </a>
          <a href="https://www.facebook.com/vcraker.ilyas" className="hover:text-[#e09800]">
            <i className="fab fa-facebook"> 
                <FaFacebook/>
            </i>
          </a>
          <a href="https://www.instagram.com/syco_king9935/" className="hover:text-[#e09800]">
            <i className="fab fa-instagram"> 
                <FaInstagram/>
            </i>
          </a>
          <a href="#twitter" className="hover:text-[#e09800]">
            <i className="fab fa-twitter"> 
                <FaTwitter/>
            </i>
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className=''>
      <div className="mt-6 text-center border-t border-gray-600 pt-4">
        <p className="text-gray-500 hover:text-white">
          © 2024 <Link href={'https://portfolio-tayyab-ilyas.netlify.app/'}><span className="text-[#e09800] font-medium">Made By Tayyab </span> Click to see portfolio</Link>
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#terms" className="hover:text-white">Terms & Condition</a>
          <span>|</span>
          <a href="#privacy-policy" className="hover:text-white">Privacy policy</a>
        </div>
      </div>
      </div>

    </footer>
    </div>
  )
}

export default Footer
