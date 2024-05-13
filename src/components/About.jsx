import React from "react";
import AboutDeva from "../assets/about.png";

const About = () => {
  return (
    <section className="flex flex-col  md:flex-row bg-secondary px-5" id='about'>
      <div className=" py-5 md:w-1/2">
        <img src={AboutDeva} alt=""/>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold">About Me</h1>
          <p className="pb-5">Hai! This is Devasarathy currently developing myself as a developer by building websites and application.</p>
          <p className="pb-5">I'm proficient in Frontend skills like React.js, Javascript, Redux Toolkit, Axios ,HTML5, CSS3, Tailwind CSS, SCSS and so on.</p>
          <p>Currently pursuing the learning curve to be as MERN Stack developer with MongoDB and Node.js</p>
        </div>
      </div>
    </section>
  );
};

export default About;
