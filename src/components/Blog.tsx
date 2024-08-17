import {
  ChatBubbleLeftRightIcon,
  UserCircleIcon,
} from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Blog = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[4rem]">
      <p className="heading">
        My <span className="text-[#B266FF]">BLOG</span>
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[80%] mx-auto">
        {/* Blog Card : 1 */}
        <div>
          <motion.div
            initial={{
              y: -200,
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            className="w-[100%] relative h-[400px]"
          >
            <Image
              src="/images/blog3.jpg"
              alt="BLOG"
              layout="fill"
              className="object-cover"
            />
          </motion.div>
          <Link href="/">
            <div className="w-[90%] text-center mx-auto bg-[#0a0f14] relative p-[2rem] mt-[1rem] cursor-pointer">
              <div className="w-fit px-[2rem] py-[1rem] bg-[#B266FF] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
                December 10,2023
              </div>
              <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
                <div className="flex items-center space-x-3">
                  <UserCircleIcon className="w-[1.5rem] mx-auto h-[2rem] text-[#B266FF]" />
                  <p className="text-[#ADB7BE]">By Basit</p>
                </div>
                <div className="flex items-center space-x-3">
                  <ChatBubbleLeftRightIcon className="w-[1.5rem] mx-auto h-[2rem] text-[#B266FF]" />
                  <p className="text-[#ADB7BE]">Comments(2)</p>
                </div>
              </div>
              <p className="mt-[1rem] text-[#ADB7BE] text-sm md:text-[18px] font-bold">
                Next.Js Fullstack Development
              </p>
            </div>
          </Link>
        </div>
        {/* Blog Card : 2 */}
        <div>
          <motion.div
            initial={{
              y: -200,
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            className="w-[100%] relative h-[400px]"
          >
            <Image
              src="/images/blog2.jpg"
              alt="BLOG"
              layout="fill"
              className="object-cover"
            />
          </motion.div>
          <Link href="/">
            <div className="w-[90%] text-center mx-auto bg-[#0a0f14] relative p-[2rem] mt-[1rem] cursor-pointer">
              <div className="w-fit px-[2rem] py-[1rem] bg-[#B266FF] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
                December 15,2023
              </div>
              <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
                <div className="flex items-center space-x-3">
                  <UserCircleIcon className="w-[1.5rem] mx-auto h-[2rem] text-[#B266FF]" />
                  <p className="text-[#ADB7BE]">By Malik</p>
                </div>
                <div className="flex items-center space-x-3">
                  <ChatBubbleLeftRightIcon className="w-[1.5rem] mx-auto h-[2rem] text-[#B266FF]" />
                  <p className="text-[#ADB7BE]">Comments(8)</p>
                </div>
              </div>
              <p className="mt-[1rem] text-[#ADB7BE] text-sm md:text-[18px] font-bold">
                React New Features
              </p>
            </div>
          </Link>
        </div>
        {/* Blog Card : 2 */}
        <div>
          <motion.div
            initial={{
              y: -200,
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            className="w-[100%] relative h-[400px]"
          >
            <Image
              src="/images/blog1.jpg"
              alt="BLOG"
              layout="fill"
              className="object-cover"
            />
          </motion.div>
          <Link href="/">
            <div className="w-[90%] text-center mx-auto bg-[#0a0f14] relative p-[2rem] mt-[1rem] cursor-pointer">
              <div className="w-fit px-[2rem] py-[1rem] bg-[#B266FF] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
                December 20,2023
              </div>
              <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
                <div className="flex items-center space-x-3">
                  <UserCircleIcon className="w-[1.5rem] mx-auto h-[2rem] text-[#B266FF]" />
                  <p className="text-[#ADB7BE]">By Abdul</p>
                </div>
                <div className="flex items-center space-x-3">
                  <ChatBubbleLeftRightIcon className="w-[1.5rem] mx-auto h-[2rem] text-[#B266FF]" />
                  <p className="text-[#ADB7BE]">Comments(8)</p>
                </div>
              </div>
              <p className="mt-[1rem] text-[#ADB7BE] text-sm md:text-[18px] font-bold">
                Next.Js New Features
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
