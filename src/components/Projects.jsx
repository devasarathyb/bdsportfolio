import React from "react";
import hc1 from "../assets/hc1.jpg";
import hc2 from "../assets/hc2.jpg";
import quiz1 from "../assets/quiz1.jpg";
import quiz2 from "../assets/quiz2.jpg";

const Projects = () => {
  return (
    <section className="flex flex-col py-20 px-5 justify-center bg-primary text-white" id='project'>
      <div>
        <div className="flex flex-col px-10 py-5">
          <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">
            Projects
          </h1>
          <p>These are the projects I have done while working on Virtusa Consulting Service with React.js, JavaScript, Tailwind CSS and Next JS. Please have a pointer a image to see details.</p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row px-10 gap-5">
            <div className="relative">
              <img className="h-[200px] w-[300px]" src={hc1} alt="" />

              <img className="h-[200px] w-[300px]" src={hc2} alt="" />

              <div className="absolute left-0 right-0 bottom-0 top-0 bg-secondary opacity-0 duration-500 hover:opacity-100">
                <p className="text-center px-5 py-5">
                  I have worked with the client of AstraZeneca on ROW-DASHBOARD.
                  In that I'm mentioning the major part I have worked on
                  developing UI for share pop-up and business logic mobile
                  number verification.
                </p>
              </div>
            </div>
          </div>
          <div className="flex px-10 gap-5">
            <div className="relative">
              <img className="h-[200px] w-[300px]" src={quiz1} alt="" />
              <img className="h-[200px] w-[300px]" src={quiz2} alt="" />
              <div className="absolute left-0 right-0 bottom-0 top-0 bg-secondary opacity-0 duration-500 hover:opacity-100">
                <p className="text-center px-5 py-5">
                  This is an internal project for new recruitees to check their
                  skill level after entering into organization. In that I have
                  worked on results display part with chart based visual and
                  able to download the report based on domain via scores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
