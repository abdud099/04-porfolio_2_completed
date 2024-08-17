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
        My
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#954CE2] to-[#00005A]">
          Services
        </span>
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
          <div className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 font-semibold text-center p-[2rem]">
            <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem] ">
              Frontend
            </h1>
            <p className="text-sm md:text-[18.5px] text-[#d3d2d2] font-mono">
              A Frontend Developer specializes in designing and implementing the
              user interface of websites and web applications. They focus on
              creating responsive, visually appealing, and interactive user
              experiences using HTML, CSS, JavaScript, and modern frameworks
              like React, Next.js or Vue.js. Their role bridges the gap between
              design and backend functionality, ensuring seamless, user-friendly
              interfaces.
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
          <div className="bg-orange-700 hover:scale-110 transform transition-all duration-300 font-semibold text-center p-[2rem]">
            <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Backend
            </h1>
            <p className="text-sm md:text-[18.5px] text-[#d3d2d2] font-mono">
              A Backend Developer is responsible for building and maintaining
              the server-side logic, databases, and APIs that power web
              applications. They focus on ensuring efficient data processing,
              secure transactions, and seamless integration with frontend
              components. Proficient in languages like Python, Fastapi, or
              Kafka, they manage the application&apos;s core functionality and
              performance behind the scenes.
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
          <div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 font-semibold text-center p-[2rem]">
            <CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              FullStack
            </h1>
            <p className="text-sm md:text-[18.5px] text-[#d3d2d2] font-mono">
              A FullStack Developer is skilled in both frontend & backend
              development, capable of handling the entire process of building
              web applications. They design user interfaces, manage server-side
              logic, work with databases, and ensure seamless integration
              between all components. Proficient in multiple languages and
              frameworks, they bring a holistic approach to developing complete
              and functional web solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
