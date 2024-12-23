import React from "react";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import CoinMarket from "./CoinMarket";
import { FaBtc } from "react-icons/fa";
import { IoAnalyticsOutline } from "react-icons/io5";

const HeroOne = () => {
  
  return (
    <div className="bg-[#2d2a27] text-white pb-8  ">
      <div className="grid grid-cols-6 md:grid-cols-12 gap-3 md:gap-8">
        <div className="relative flex flex-col justify-center items-center gap-10 sm:gap-16 py-28 col-span-1 md:col-span-1 w-full your-div ">
          {/* 17% width on mobile, 12% width on medium and above */}
          <div>
            {" "}
            <Link href={"https://www.linkedin.com/in/tayyab-ilyas-ai-engineer/"}>
              {" "}
              <FaLinkedinIn className='hover:text-[#e09800]'/>
            </Link>
          </div>
          <div>
            {" "}
            <Link href={"https://www.facebook.com/vcraker.ilyas"}>
              {" "}
              <FaFacebookF className='hover:text-[#e09800]'/>
            </Link>
          </div>
          <div>
            {" "}
            <Link href={"https://www.instagram.com/syco_king9935/"}>
              {" "}
              <FaInstagram className='hover:text-[#e09800]'/>
            </Link>
          </div>
          <div>
            {" "}
            <Link href={"/"}>
              {" "}
              <FaXTwitter className='hover:text-[#e09800]'/>
            </Link>
          </div>
        </div>
        <div className=" flex justify-center items-center flex-col gap-5 pt-14 col-span-5 md:col-span-11 w-full ">
          {/* 83% width on mobile, 88% width on medium and above */}

          {/* Heading 1 */}
          <div className="pr-2 sm:w-[80%] m-auto">
            <h1 className="text-4xl sm:text-7xl sm:px-12 font-black sm:font-bold sm:roboto text-center">
              Updated Crypto Currency Rates Are Here.
            </h1>
          </div>
   {/* left Icon Image */}
           <div className="text-4xl text-[#8973434e] absolute sm:top-[48%] left-[28%] -rotate-45 ">
            <FaBtc/>
           </div>

             {/* right Icon Image */}
           <div className="text-7xl text-[#5e471547] absolute top-[30%] sm:top-[48%] right-[5%] -rotate-6 ">
            <IoAnalyticsOutline/>
           </div>

          {/* Register btn */}
          <div className="text-center py-3 font-semibold text-[#cac2ba] hover:hover:text-[#e09800]">
            <Link href={"/"}> Register</Link>
          </div>

         {/* rates sesction */}

         <CoinMarket/>
        </div>
      </div>
    </div>
  );
};

export default HeroOne;
