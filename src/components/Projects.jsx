import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../assets/assets";


const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.05 }}
      id="projects"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          My
          <span className="text-purple"> Projects</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          A selection Of My Recent Projects
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/*Project Card*/}
          {
           projects.map((project, index)=>(
            <ProjectCard key={index} {...project}/>
           ))
          }
        </div>
      </div>
      <div className="text-center mt-12 ">
        <a href="https://github.com/salmanameer2" className="inline-flex items-center px-6 py-4 border border-purple rounded-lg font-medium hover:bg-purple/20 transition duration-300">
          <span>View More</span>
        </a>
      </div>
    </motion.div>
  );
};

export default Projects;
