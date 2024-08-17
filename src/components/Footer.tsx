import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import logo from "../../public/logo1.png";

import Image from "next/image";

const Footer = () => {
  return (
    <div className="mb-8 mt-20">
      <div className="flex items-center justify-center">
        <figure>
          <Image src={logo} alt="LOGO" width={200} className="mb-2" />
          <div className="h-1 w-3/12 bg-[#B266FF] text-white rounded-full"></div>
          <div className="text-white my-3 text-xl font-bold">
            Email: abdud099@gmail.com
          </div>
        </figure>
      </div>
      <div className="flex text-xl md:text-2xl lg:text-3xl items-center justify-center gap-8">
        <a href="https://github.com/abdud099" className="text-white">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/abdul-basit-248146286/"
          className="text-[#0077B5]"
        >
          <FaLinkedin />
        </a>
      </div>
      <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
        &copy;compileTab. All rights reserver.
      </p>
    </div>
  );
};

export default Footer;
