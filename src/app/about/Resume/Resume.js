"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import education from "./resume-icon2.png";
import experience from "./resume-icon1.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Resume = () => {

 // AOS Animation .........
 useEffect(() => {
  AOS.init();
  AOS.refresh();
}, []);

  return (
    <section id="resume" className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">Academic</h4>
          <h2 className="st-section-heading-subtitle">Academic</h2>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>
      <div className="container">
        <div className="row">
          {/* <!-- Education --> */}
          <div className="col-lg-6" data-aos="fade-right" data-aos-duration="800">
            <div className="st-height-b0 st-height-lg-b50"></div>
            <div className="st-resume-wrap">
              <div className="st-resume-heading">
                <Image src={education} alt="resume-icon" />
                <h2 className="st-resume-heading-title">Education</h2>
              </div>
              <div className="st-height-b50 st-height-lg-b30"></div>

              <div className="st-resume-timeline-wrap">
                <div className="st-resume-timeline">
                  <h3 className="st-resume-timeline-title">PhD </h3>
                  <div className="st-resume-timeline-duration">On Going</div>
                  <h4 className="st-resume-timeline-subtitle">
                    University of Dhaka, Islamic Studies on Zakat Management
                  </h4>
                  <div className="st-resume-timeline-text">
                    <p>A Sustainable Approach for Poverty Alleviation</p>
                  </div>
                </div>
                {/* <!-- st-resume-timeline --> */}
                <div className="st-height-b50 st-height-lg-b30"></div>
                <div className="st-resume-timeline">
                  <h3 className="st-resume-timeline-title">
                    Master of Arts (M.A.)
                  </h3>
                  <div className="st-resume-timeline-duration">1999 CE</div>
                  <h4 className="st-resume-timeline-subtitle">
                    University of Dhaka, Islamic Studies
                  </h4>
                  <div className="st-resume-timeline-text">
                    <p>First Class 5th</p>
                  </div>
                </div>
                {/* <!-- st-resume-timeline --> */}
                
                {/* <!-- st-resume-timeline --> */}
                <div className="st-height-b50 st-height-lg-b30"></div>
                <div className="st-resume-timeline">
                  <h3 className="st-resume-timeline-title">Kamil</h3>
                  <div className="st-resume-timeline-duration">1996 CE</div>
                  <h4 className="st-resume-timeline-subtitle">
                    Bangladesh Madrasah Education Board.{" "}
                  </h4>
                  <div className="st-resume-timeline-text">
                    <p>First Class, Major in Hadith</p>
                  </div>
                </div>
                {/* <!-- st-resume-timeline --> */}
          
                {/* <!-- st-resume-timeline --> */}
                <div className="st-height-b50 st-height-lg-b30"></div>
                <div className="st-resume-timeline">
                  <h3 className="st-resume-timeline-title">Dakhil</h3>
                  <div className="st-resume-timeline-duration">1990 CE</div>
                  <h4 className="st-resume-timeline-subtitle">
                    Bangladesh Madrasah Education Board
                  </h4>
                  <div className="st-resume-timeline-text">
                    <p>First Class</p>
                  </div>
                </div>
                {/* <!-- st-resume-timeline --> */}
              </div>
            </div>
          </div>

          {/* <!-- Experience --> */}
          <div className="col-lg-6" data-aos="fade-left" data-aos-duration="800">
            <div className="st-resume-wrap">
              <div className="st-resume-heading">
                <Image src={experience} alt="resume-icon" />
                <h2 className="st-resume-heading-title">Experience</h2>
              </div>

              <div className="st-height-b50 st-height-lg-b30"></div>

              <div className="st-resume-timeline-wrap">
                {/* <!-- st-resume-timeline --> */}
                <div className="st-resume-timeline">
                  <h3 className="st-resume-timeline-title">
                    International Islamic University Chittagong
                  </h3>
                  <div className="st-resume-timeline-duration">2001-2017</div>
                  <h4 className="st-resume-timeline-subtitle">
                    Worked as ‘Associate Professor & Coordinator’{" "}
                  </h4>
                  <div className="st-resume-timeline-text">
                    <p>CENURC, BBA & MBA Program </p>
                  </div>
                </div>
                {/* <!-- st-resume-timeline --> */}
                <div className="st-height-b50 st-height-lg-b30"></div>
                <div className="st-resume-timeline">
                  <h3 className="st-resume-timeline-title">
                    Islamic University of Technology (IUT)
                  </h3>
                  <div className="st-resume-timeline-duration">2006-2022</div>
                  <h4 className="st-resume-timeline-subtitle">
                    Worked as Guest Professor{" "}
                  </h4>
                  <div className="st-resume-timeline-text">
                    <p> Department Of Technical & Vocational Education (TVE)</p>
                  </div>
                </div>
                {/* <!-- st-resume-timeline --> */}
                <div className="st-height-b50 st-height-lg-b30"></div>
                <div className="st-resume-timeline">
                  <h3 className="st-resume-timeline-title">
                    Asian University of Bangladesh
                  </h3>
                  <div className="st-resume-timeline-duration">2017-2020</div>
                  <h4 className="st-resume-timeline-subtitle">
                    Worked as Professor
                  </h4>
                  <div className="st-resume-timeline-text">
                    <p>Islamic Studies Department</p>
                  </div>
                </div>
                {/* <!-- st-resume-timeline --> */}
                <div className="st-height-b50 st-height-lg-b30"></div>
                <div className="st-resume-timeline">
                  <h3 className="st-resume-timeline-title">
                    Daffodil International University
                  </h3>
                  <div className="st-resume-timeline-duration">2018-2023</div>
                  <h4 className="st-resume-timeline-subtitle">
                    Working as Director and Professor
                  </h4>
                  <div className="st-resume-timeline-text">
                    <p>Daffodil Islamic Center</p>
                  </div>
                </div>
                {/* <!-- st-resume-timeline --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
  );
};

export default Resume;
