import React from "react";
import resume from "../assets/resume.jpg";

const Contact = () => {
  return (
    <section className="flex flex-col bg-primary px-5 py-32 text-white" id='contact'>
      
      <div className="flex flex-col items-center">
       
          <h1 className="text-4xl border-b-4  border-secondary  mb-5 w-[140px] font-bold">Contact</h1>
          <p className="pb-5">To discuss more in detail</p>
          <p className="py-2"><span className="font-bold"> Email: </span>devabalagurusamy@gmail.com</p>
          <p className="py-2"><span className="font-bold"> Phone: </span>+91 6379182265</p>
         
        </div>
     
    </section>
  );
};

export default Contact;
