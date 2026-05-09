import React from "react";
import { motion } from "framer-motion";
import { aboutInfo, assets } from "../assets/assets";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.05 }}
      id="about"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        {/*Heading*/}
        <h2 className="text-2xl font-bold text-center mb-4">
          About
          <span className="text-3xl text-purple"> Me</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Learn More About My Coding Passion
        </p>
        {/*Image + My Journey Section*/}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/*image Area*/}
          <div className=" md:w-1/2 rounded-4xl overflow-hidden">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-full h-full object-cover"
              src={assets.profileImg2}
              alt="ProfileImage"
            />
          </div>
          {/*About Text Area*/}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="rounded-2xl p-8">
              <h3 className="text-4xl text-white font-bold mb-6">
                My <span className="text-purple">Journey</span>
              </h3>
              <p className="text-gray-400 mb-12">
                {" "}
                I'm a Certified Mern-Stack Developer in my Learning Phase .I
                Started my MERN Stack Journey by Learning basics About HTML, CSS
                and JAVASCRIPT and crafting responsive websites using modern
                frameworks as REACT.JS. Making Backend Projects By Using Express
                JS and Integrating with MONGODB as Backend{" "}
              </p>
              {/*Card*/}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                {aboutInfo.map((data, index) => (
                  <div
                    key={index}
                    className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                  >
                    <div className="text-purple text-4xl mb-4">
                      <data.icon />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{data.title}</h3>
                    <p className="text-gray-400 "> {data.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
