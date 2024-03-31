import { FaMapMarkerAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-[8rem] pb-[4rem]">
      <h1 className="heading">
        Contact{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#954CE2] to-[#00005A]">
          Me
        </span>
      </h1>
      <div className="grid pt-[4rem] md:pt-[8rem] border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto gap-[3rem]">
        {/* Footer card: 1 */}
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[4rem] h-[4rem] flex items-center justify-center rounded-full bg-[#FE0039]">
            <FaMapMarkerAlt className="md:w-[4rem] md:h-[4rem] w-[3rem] h-[3rem] text-black" />
          </div>
          <div>
            <h1 className="text-lg md:text-[25px] mb-[0.2rem] font-semibold text-white">
              Address
            </h1>
            <p className=" text-sm md:text-[17px] w-[90%] text-white opacity-60">
              offlice no : 221 PECHS Karachi Pakistan
            </p>
          </div>
        </div>
        {/* Footer card: 2 */}
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[4rem] h-[4rem] flex items-center justify-center rounded-full bg-[#FE0039]">
            <FaWhatsapp className="md:w-[4rem] md:h-[4rem] w-[3rem] h-[3rem] text-black" />
          </div>
          <div>
            <h1 className="text-lg md:text-[25px] mb-[0.2rem] font-semibold text-white">
              WhatsApp
            </h1>
            <p className=" text-sm md:text-[17px] w-[90%] text-white opacity-60">
              +923327394491 <br />
            </p>
          </div>
        </div>
        {/* Footer card: 3 */}
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[4rem] h-[4rem] flex items-center justify-center rounded-full bg-[#FE0039]">
            <SiGmail className="md:w-[4rem] md:h-[4rem] w-[3rem] h-[3rem] text-black" />
          </div>
          <div>
            <h1 className="text-lg md:text-[25px] mb-[0.2rem] font-semibold text-white">
              Send us Email
            </h1>
            <p className=" text-sm md:text-[17px] w-[90%] text-white opacity-60">
              abdud099@gmail.com <br /> abdud099@outlook.com
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between">
        <div className="text-sm md:text-[16px] mb-[2rem] md:mb-0 text-white opacity-20">
          Basit Malik 2023 | All Rights Reserved
        </div>
        <div className="flex items-center space-x-10">
          <p className="text-sm md:text-[16px] text-white opacity-20">
            Terms & Condition
          </p>
          <p className="text-sm md:text-[16px] text-white opacity-20">
            Privacy Policy
          </p>
          <p className="text-sm md:text-[16px] text-white opacity-20">
            Sitemap
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
