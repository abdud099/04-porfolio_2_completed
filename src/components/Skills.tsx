import SkillsItem from "./SkillsItem";
import SkillsLanguage from "./SkillsLanguage";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

const Skills = ({ directionLeft }: Props) => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] ">
      <h1 className="heading">
        Education &{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#954CE2] to-[#00005A]">
          Skill&apos;s
        </span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
         <div>
           {/* Education Section */}
           <SkillsItem
             title="React Developer"
             year="2022 - 2023"
             description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, magni?"
           />
           <SkillsItem
             title="MERN Stack Developer"
             year="2020 - 2021"
             description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, magni"
           />
         </div>
         <div>
           {/* Education Section */}
           <SkillsItem
             title="Next.Js Developer"
             year="2023 - 2024"
             description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, magni!"
           />
           <SkillsItem
             title="Node.Js Developer"
             year="2022 - 2023"
             description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, magni."
           />
       </div>
     </div>
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
        className="flex relative flex-col text-center pt-[4rem] md:pt-[8rem] md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
      >
        <div className="grid grid-cols-3 md:grid-cols-4 gap-5">
          {/* HTML LOGO */}
          <div className="group relative flex cursor-pointer">
            <motion.img
              initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
              }}
              transition={{
                duration: 1,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              src="/assets/Html.png"
              alt="Htlm Image"
              className="rounded-full object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
              <div className="flex items-center justify-center h-full">
                <p className="text-sm font-bold text-black opacity-100">
                  HTML-90%
                </p>
              </div>
            </div>
          </div>

          {/* CSS LOGO */}
          <div className="group relative flex cursor-pointer">
            <motion.img
              initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
              }}
              transition={{
                duration: 1,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              src="/assets/CSS.png"
              alt=""
              className="rounded-full object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
              <div className="flex items-center justify-center h-full">
                <p className="text-sm font-bold text-black opacity-100">
                  CSS-90%
                </p>
              </div>
            </div>
          </div>

          {/* Javascript LOGO */}
          <div className="group relative flex cursor-pointer">
            <motion.img
              initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
              }}
              transition={{
                duration: 1,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              src="/assets/Javascript.png"
              alt=""
              className="rounded-full object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
              <div className="flex items-center justify-center h-full">
                <p className="text-sm font-bold text-black opacity-100">
                  Javascript-90%
                </p>
              </div>
            </div>
          </div>

          {/* Typescript LOGO */}
          <div className="group relative flex cursor-pointer">
            <motion.img
              initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
              }}
              transition={{
                duration: 1,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              src="/assets/Typescript.png"
              alt=""
              className="rounded-full object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
              <div className="flex items-center justify-center h-full">
                <p className="text-sm font-bold text-black opacity-100">
                  Typescript-95%
                </p>
              </div>
            </div>
          </div>

          {/* Next.Js LOGO */}
          <div className="group relative flex cursor-pointer">
            <motion.img
              initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
              }}
              transition={{
                duration: 1,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              src="/assets/Next_js.png"
              alt=""
              className="rounded-full object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
              <div className="flex items-center justify-center h-full">
                <p className="text-sm font-bold text-black opacity-100">
                  Next.Js-85%
                </p>
              </div>
            </div>
          </div>

          {/* Supabase LOGO */}
          <div className="group relative flex cursor-pointer">
            <motion.img
              initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
              }}
              transition={{
                duration: 1,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              src="/assets/supabase.png"
              alt=""
              className="rounded-full object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
              <div className="flex items-center justify-center h-full">
                <p className="text-sm font-bold text-black opacity-100">
                  Supabase-85%
                </p>
              </div>
            </div>
          </div>

          {/* Versel LOGO */}
          <div className="group relative flex cursor-pointer">
            <motion.img
              initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
              }}
              transition={{
                duration: 1,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              src="/assets/Versel.png"
              alt=""
              className="rounded-full object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
              <div className="flex items-center justify-center h-full">
                <p className="text-sm font-bold text-black opacity-100">
                  Versel-85%
                </p>
              </div>
            </div>
          </div>

          {/* Tailwind Css LOGO */}
          <div className="group relative flex cursor-pointer">
            <motion.img
              initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
              }}
              transition={{
                duration: 1,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              src="/assets/Tailwind.png"
              alt=""
              className="rounded-full object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
              <div className="flex items-center justify-center h-full">
                <p className="text-sm font-bold text-black opacity-100">
                  TailwindCss-95%
                </p>
              </div>
            </div>
          </div>

          {/* React LOGO */}
          <div className="group relative flex cursor-pointer">
            <motion.img
              initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
              }}
              transition={{
                duration: 1,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              src="/assets/React_js.png"
              alt=""
              className="rounded-full object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
              <div className="flex items-center justify-center h-full">
                <p className="text-sm font-bold text-black opacity-100">
                  React-75%
                </p>
              </div>
            </div>
          </div>

          {/* Firebase LOGO */}
          <div className="group relative flex cursor-pointer">
            <motion.img
              initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
              }}
              transition={{
                duration: 1,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              src="/assets/Firebase.png"
              alt=""
              className="rounded-full object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
              <div className="flex items-center justify-center h-full">
                <p className="text-sm font-bold text-black opacity-100">
                  Firebase-60%
                </p>
              </div>
            </div>
          </div>

          {/* Reduc Ui LOGO */}
          <div className="group relative flex cursor-pointer">
            <motion.img
              initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
              }}
              transition={{
                duration: 1,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              src="/assets/Reduc_Ui.png"
              alt=""
              className="rounded-full object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
              <div className="flex items-center justify-center h-full">
                <p className="text-sm font-bold text-black opacity-100">
                  Reduc Ui-50%
                </p>
              </div>
            </div>
          </div>

          {/* MongoDb LOGO */}
          <div className="group relative flex cursor-pointer">
            <motion.img
              initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
              }}
              transition={{
                duration: 1,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              src="/assets/MongoDB.png"
              alt=""
              className="rounded-full object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
              <div className="flex items-center justify-center h-full">
                <p className="text-sm font-bold text-black opacity-100">
                  MongoDb-70%
                </p>
              </div>
            </div>
          </div>

          {/* AI LOGO */}
          <div className="group relative flex cursor-pointer">
            <motion.img
              initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
              }}
              transition={{
                duration: 1,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              src="/assets/Generative_ai.png"
              alt=""
              className="rounded-full  object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
              <div className="flex items-center justify-center h-full">
                <p className="text-sm font-bold text-black opacity-100">
                  AI-75%
                </p>
              </div>
            </div>
          </div>

          {/* Python LOGO */}
          <div className="group relative flex cursor-pointer">
            <motion.img
              initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
              }}
              transition={{
                duration: 1,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              src="/assets/Python.png"
              alt=""
              className="rounded-full  object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
              <div className="flex items-center justify-center h-full">
                <p className="text-sm font-bold text-black opacity-100">
                  Python-75%
                </p>
              </div>
            </div>
          </div>

          {/* Docker LOGO */}
          <div className="group relative flex cursor-pointer">
            <motion.img
              initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
              }}
              transition={{
                duration: 1,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              src="/assets/Docker.png"
              alt=""
              className="rounded-full object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
              <div className="flex items-center justify-center h-full">
                <p className="text-sm font-bold text-black opacity-100">
                  Docker-75%
                </p>
              </div>
            </div>
          </div>

          {/* FastApi LOGO */}
          <div className="group relative flex cursor-pointer">
            <motion.img
              initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
              }}
              transition={{
                duration: 1,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              src="/assets/FastAPI.png"
              alt=""
              className="rounded-full object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
              <div className="flex items-center justify-center h-full">
                <p className="text-sm font-bold text-black opacity-100">
                  FastApi-75%
                </p>
              </div>
            </div>
          </div>

          {/* Kafka LOGO */}
          <div className="group relative flex cursor-pointer">
            <motion.img
              initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
              }}
              transition={{
                duration: 1,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              src="/assets/Kafka.png"
              alt=""
              className="rounded-full object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
              <div className="flex items-center justify-center h-full">
                <p className="text-sm font-bold text-black opacity-100">
                  Kafka-75%
                </p>
              </div>
            </div>
          </div>

          {/* MicroServices LOGO */}
          <div className="group relative flex cursor-pointer">
            <motion.img
              initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
              }}
              transition={{
                duration: 1,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              src="/assets/Micro_services.png"
              alt=""
              className="rounded-full object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
              <div className="flex items-center justify-center h-full">
                <p className="text-sm font-bold text-black opacity-100">
                  Microservic-75%
                </p>
              </div>
            </div>
          </div>

          {/* Neon ServerLess LOGO */}
          <div className="group relative flex cursor-pointer">
            <motion.img
              initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
              }}
              transition={{
                duration: 1,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              src="/assets/Neon.png"
              alt=""
              className="rounded-full object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
              <div className="flex items-center justify-center h-full">
                <p className="text-sm font-bold text-black opacity-100">
                  NeonServer-75%
                </p>
              </div>
            </div>
          </div>

          {/* NG Rock LOGO */}
          <div className="group relative flex cursor-pointer">
            <motion.img
              initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
              }}
              transition={{
                duration: 1,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              src="/assets/NG_Rock.png"
              alt=""
              className="rounded-full object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
              <div className="flex items-center justify-center h-full">
                <p className="text-sm font-bold text-black opacity-100">
                  NG Rock-75%
                </p>
              </div>
            </div>
          </div>

          {/* Terraform LOGO */}
          <div className="group relative flex cursor-pointer">
            <motion.img
              initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
              }}
              transition={{
                duration: 1,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              src="/assets/Terraform.png"
              alt=""
              className="rounded-full object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
              <div className="flex items-center justify-center h-full">
                <p className="text-sm font-bold text-black opacity-100">
                  Terraform-75%
                </p>
              </div>
            </div>
          </div>

          {/* Postgre SQl LOGO */}
          <div className="group relative flex cursor-pointer">
            <motion.img
              initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
              }}
              transition={{
                duration: 1,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              src="/assets/Postgre_SQL.png"
              alt=""
              className="rounded-full object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
              <div className="flex items-center justify-center h-full">
                <p className="text-sm font-bold text-black opacity-100">
                  Postgre SQL-75%
                </p>
              </div>
            </div>
          </div>

          {/* Prisma LOGO */}
          <div className="group relative flex cursor-pointer">
            <motion.img
              initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
              }}
              transition={{
                duration: 1,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              src="/assets/Prisma.png"
              alt=""
              className="rounded-full object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
              <div className="flex items-center justify-center h-full">
                <p className="text-sm font-bold text-black opacity-100">
                  Prisma-60%
                </p>
              </div>
            </div>
          </div>

          {/* Node Js LOGO */}
          <div className="group relative flex cursor-pointer">
            <motion.img
              initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
              }}
              transition={{
                duration: 1,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              src="/assets/Node_js.png"
              alt=""
              className="rounded-full object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
              <div className="flex items-center justify-center h-full">
                <p className="text-sm font-bold text-black opacity-100">
                  Node.Js-45%
                </p>
              </div>
            </div>
          </div>

          {/* Shopify LOGO */}
          <div className="group relative flex cursor-pointer">
            <motion.img
              initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
              }}
              transition={{
                duration: 1,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              src="/assets/Shopify.png"
              alt=""
              className="rounded-full  object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
              <div className="flex items-center justify-center h-full">
                <p className="text-sm font-bold text-black opacity-100">
                  Shopify-60%
                </p>
              </div>
            </div>
          </div>

          {/* Sanity LOGO */}
          <div className="group relative flex cursor-pointer">
            <motion.img
              initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
              }}
              transition={{
                duration: 1,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              src="/assets/Sanity.png"
              alt=""
              className="rounded-full object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
              <div className="flex items-center justify-center h-full">
                <p className="text-sm font-bold text-black opacity-100">
                  Sanity-75%
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
