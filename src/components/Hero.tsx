import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

const Hero = () => {
  return (
    <div className="h-[88vh] bg-black bg-cover bg-center'">
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[31px] md:text-[45.3px] text-[#d3d2d2] font-bold">
            Hi, I&apos;M <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#954CE2] to-[#00005A]">Abdul Basit !</span>
          </h1>
          <TextEffect />
          <p className="mt-[1.5rem] font-mono text-sm md:text-[16px] lg:text-[17.5px] text-[#d3d2d2]">
            I am a full stack web developer with a passion for creating
            interactive and responsive web application
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <Link href="#contact">
              <button
                className="hidden md:px-5 md:py-4 hover:bg-black hover:text-[#B266FF] transition-all duration-200 text-sm md:text-[18px]
            font-bold bg-[#d3d2d2] text-[#3D008E] md:flex items-center space-x-2 rounded-full"
              >
                <p> Heair me </p>
                <ChatBubbleLeftRightIcon className="w-[1.6rem] h-[1.7rem]" />
              </button>
            </Link>

            <button className="flex items-center space-x-2" >
              <SocialIcon url="https://www.linkedin.com/in/abdul-basit-248146286/" />
              <Link href="https://www.linkedin.com/in/abdul-basit-248146286/">
                <p className="text-sm md:text-[20px] font-semibold text-[#3D008E]">
                  Linkedin
                </p>
              </Link>
            </button>
          </div>
        </div>
        <div className="w-[500px]  hidden relative lg:flex items-center rounded-full h-[500px]">
          <Image
            src="/images/u1.png"
            alt="Hero Image"
            height={500}
            width={500}
            className=" object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
