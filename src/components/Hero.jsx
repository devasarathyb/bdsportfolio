import React from "react";
import AboutDeva from "../assets/about_deva.jpg";
import { AiOutlineLinkedin, AiOutlineInstagram, AiOutlineGithub} from "react-icons/ai";

const Hero = () => {
  const config = {
    line1:"Designated Associated Engineer cum Front End Developer",
    link:{
      linkedin:"https://www.linkedin.com/in/devasarathy-b-250542170",
      git:"https://github.com/devasarathyb",
      insta:"https://www.instagram.com/bdev_sarathy/"
    }
  }
  return (
    <section className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-center">
      <div className="md:w-1/2 flex flex-col">
      <h1 className="text-white text-6xl font-hero-font">
        Hai, <br /> I'm Devasarathy
        <p className="text-2xl">{config.line1}</p>
      </h1>
      <div className="flex py-10">
          <a href={config.link.linkedin} className="pr-5 hover:text-white"><AiOutlineLinkedin size={40}/></a>
          <a href={config.link.insta} className="pr-5 hover:text-white"><AiOutlineInstagram size={40}/></a>
          <a href={config.link.git} className="hover:text-white"><AiOutlineGithub size={40}/></a>
      </div>
      </div>
      <div className="w-1/3 heroimg">
        <div className="content">
          <img className="md:w-1/3" src={AboutDeva} alt="" />
          <h2>A Passionate <br/><span>Front End Develper</span></h2>
          <a href="#">Hire Me</a>

        </div>
      </div>
    </section>
  );
};

export default Hero;
