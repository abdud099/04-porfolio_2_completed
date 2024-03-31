import {
  CodeBracketSquareIcon,
  CommandLineIcon,
  RocketLaunchIcon,
} from "@heroicons/react/16/solid";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem]">
      <p className="heading">
        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#954CE2] to-[#00005A]">Services</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
        {/* Services Card: 1 */}
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
        >
          <div className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
            <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem] ">
              Frontend
            </h1>
            <p className="text-sm md:text-[18.5px] text-[#d3d2d2] font-normal">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
              consectetur explicabo error. Nisi esse, suscipit accusantium
              soluta nam dolorum! Ab.
            </p>
          </div>
        </motion.div>
        {/* Services Card: 2 */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
          }}
        >
          <div className="bg-orange-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem]">
            <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Backtend
            </h1>
            <p className="text-sm md:text-[18.5px] text-[#d3d2d2] font-normal">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
              consectetur explicabo error. Nisi esse, suscipit accusantium
              soluta nam dolorum! Ab.
            </p>
          </div>
        </motion.div>
        {/* Services Card: 3 */}
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
        >
          <div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
            <CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Full Stack
            </h1>
            <p className="text-sm md:text-[18.5px] text-[#d3d2d2] font-normal">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
              consectetur explicabo error. Nisi esse, suscipit accusantium
              soluta nam dolorum! Ab.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
