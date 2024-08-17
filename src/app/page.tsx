"use client";

import About from "@/components/About";
import Blog from "@/components/Blog";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Nav";
import ProjectsSection from "@/components/ProjectsSection";
import Services from "@/components/Services";
import Skills from "@/components/Skills";

import { useState } from "react";

export default function Home() {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className="overflow-x-hidden bg-black">
      <div>
        {/* Navbar Section */}
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />

        {/* Hero Section */}
        <Hero />

        <div className="relative z-30 ">
          {/* About Section */}
          <section id="about">
            <About />
          </section>

          {/* Servies Section */}
          <section id="service">
            <Services />
          </section>

          {/* Skills Section */}
          <Skills />

          {/* Projects Section */}
          <section id="project">
            <ProjectsSection />
          </section>

          {/* Blog Section */}
          <section id="blog">
            <Blog />
          </section>

          {/* contactFrom Section */}
          <section id="contact">
            <ContactForm />
          </section>

          {/* Footer Section */}
          <section id="footer">
            <Footer />
          </section>
        </div>
      </div>
    </div>
  );
}
