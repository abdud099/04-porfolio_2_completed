import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const About = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[3rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold uppercase text-[#B266FF] mb-[1rem]">
            About Me
          </h1>
          <h2 className="text-lg md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-[#d3d2d2]">
            Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#954CE2] to-[#00005A]">Visions</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-[#954CE2] rounded-sm"></span>
            <p className="text-sm md:text-[18.5px] text-[#d3d2d2] w-[80%]">
              I am a full stack web developer with a passion for creating
              interactive and responsive web application.I have experience
              working with JavaScript, React.js, Node.js, Next.js, TypeScript,
              Tailwind CSS, HTML, CSS, Spotify, Python and Generative ai. I am a
              quick learner and I am always looking to expand my knowledge and
              skill set. I am a team player and I am excited to work with others
              to create amazing application.
            </p>
          </div>
          <Link href="/">
            <button
              className="px-4 py-3 md:px-5 md:py-4  hover:bg-black hover:text-[#B266FF] transition-all duration-200 text-sm md:text-[18px]
            font-bold uppercase bg-[#d3d2d2] text-[#3D008E] flex items-center space-x-2 rounded-full"
            >
              <p> Download CV </p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem]" />
            </button>
          </Link>
        </div>
        <motion.div
          initial={{
            x: 200,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative"
        >
          <Image
            src="/images/about.png"
            alt="Abot Image"
            width={500}
            height={500}
            className="relative z-[11] w-[100%] h-[100%] object-contain"
          />
          <div className="absolute w-[100%] h-[100%] z-10 bg-[#7831C5] top-[-2rem] right-[-2rem]" />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
