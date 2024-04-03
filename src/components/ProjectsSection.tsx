"use client";

import { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectsTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Full-stack Movix Website From React",
    description:
      "Using: React, Vite, Javascript, SCSS, Redux, Movie Database(TMDB), Vercel, NPM packages",
    image: "/images/Movix.png",
    tag: ["All", "React"],
    previewUrl: "https://movix-delta-tawny.vercel.app/",
  },
  {
    id: 2,
    title: "Full-stack Ecommerce Website From Next.Js",
    description:
      "Using: Next.Js, React, Typescripe, Tailwind Css, lucide-react, Stripe, Shadcn/Radix ui, Backent(Sanity), Vercel, NPM packages ",
    image: "/images/E-Commerce.png",
    tag: ["All", "Next.Js"],
    previewUrl: "https://e-commerce-ten-henna.vercel.app/",
  },
  {
    id: 3,
    title: "Full-stack Portfolio Website From Next.Js",
    description:
      "Using: Next.Js, React, Typescript, Tailwind CSS, Framer-motion, Vercel, Resend, NPM packages",
    image: "/images/Portfolio.png",
    tag: ["All", "Next.Js"],
    previewUrl: "https://portfolio-rho-bay-80.vercel.app/",
  },
  {
    id: 4,
    title: "Full-stack Spotify Website From Next.Js",
    description:
      "Using: Next.Js, React, Typescript, TailwindCss, Stripe, Database(Supabase), Vercel, NPM packages ",
    image: "/images/Spotify_clone.png",
    tag: ["All", "Next.Js"],
    previewUrl: "https://spotify-clone-hazel-nine.vercel.app/",
  },
  {
    id: 5,
    title: "Photo Album Website From Next.Js",
    description:
      "Using: Next.Js, React, TailwindCSS, Typescript, Shadcn, Database(Cloudinary), Vercel, NPM packages",
    image: "/images/Album.png",
    tag: ["All", "Next.Js"],
    previewUrl: "https://album-three-wheat.vercel.app/",
  },
  {
    id: 6,
    title: "Chat GPT Clone From Next.Js",
    description: "Using: Next.Js",
    image: "/images/G-P-T.png",
    tag: ["All", "Next.Js"],
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: any) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <div className="pt-[4rem] md:pt-[8rem] pb-[1rem]">
        <h1 className="heading">
          All{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#954CE2] to-[#00005A]">
            Project
          </span>
        </h1>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Next.Js"
            isSelected={tag === "Next.Js"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="React"
            isSelected={tag === "React"}
          />
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
