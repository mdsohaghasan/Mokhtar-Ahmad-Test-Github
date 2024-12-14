import React from "react";
import ProgramForm from "./ProgramForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const applyProgram = () => {
  return (
    <div>
      <section id="contact" className="st-dark-bg">
        <div className="st-height-b100 st-height-lg-b80"></div>
        <div className="container">
          <div className="st-section-heading st-style1">
            <h4 className="st-section-heading-title">Apply Program</h4>
            <h2 className="st-section-heading-subtitle">Program</h2>
          </div>
          <div className="st-height-b25 st-height-lg-b25"></div>
        </div>

        {/* <!-- Contact Container --> */}

        <div className="container">
          <div className="flex justify-center	">
            <div className="lg:basis-2/12	md:basis-2/12 basis-0/12"></div>
            <div className="lg:basis-8/12 md:basis-8/12 basis-12/12">
              <div id="st-alert"></div>
              <ProgramForm></ProgramForm>
            </div>
            <div className="lg:basis-2/12	md:basis-2/12 basis-0/12"></div>
            <div className="st-height-b0 st-height-lg-b30"></div>
          </div>
        </div>
        <div className="st-height-b100 st-height-lg-b80"></div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default applyProgram;
