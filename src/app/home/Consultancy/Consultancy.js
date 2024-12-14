"use client"
import Image from "next/image";
import photo from "./consultancy.png";
import Link from "next/link";
import React, { useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Consultancy = () => {

  // AOS Animation .........
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section>
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">Consultancy</h4>
          <h2 className="st-section-heading-subtitle">Consultancy</h2>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>
      {/* end Titie  */}

      <div className="container px-8 ">
        <div className="lg:flex lg:items-center md:flex md:items-center	">
          <div className="md:w-1/2 lg:w-1/2">
            <div className="  lg:text-left" data-aos="fade-up" data-aos-duration="500">
              <h1 className="text-4xl py-3">Sharīah Consultancy</h1>
            </div>
            <div className="my-3" data-aos="fade-up" data-aos-duration="800">
              <span className="border border-white rounded-3xl py-2 px-3  text-center mr-4">
                Sharīah Prescription
              </span>
              <span className="border border-white rounded-3xl py-2 px-3  text-center ">
                Family Consultancy
              </span>
            </div>
            <div className="py-3" data-aos="fade-up" data-aos-duration="500">
              <p className="text-justify">
                Our Sharīah Consultancy offers expert guidance and solutions
                tailored to meet your specific needs within the framework of
                Islamic law. We understand the importance of adhering to Sharīah
                principles and ensuring compliance in all aspects of your
                personal, professional, and financial affairs. Our team of
                seasoned Sharīah consultants brings a wealth of knowledge and
                experience in Islamic jurisprudence. Whether you are an
                individual, a business, or an organization, we are here to
                assist you in navigating the complexities of Sharīah law and its
                application.
              </p>
            </div>
            <div className="st-hero-btn" data-aos="fade-up" data-aos-duration="500">
              <Link
                href="/consultancy"
                className="st-btn st-style1 st-color1 st-smooth-move">
                Ask Question
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/2" data-aos="fade-left" data-aos-duration="800">
            <Image src={photo} alt="Consultancy"></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultancy;
