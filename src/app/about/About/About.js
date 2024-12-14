"use client";
import React, { useEffect } from "react";
import photo from "./about.png";
import Image from "next/image";
import mark1 from "./mark-1.png";
import mark2 from "./mark-2.png";
import AOS from "aos";
import "aos/dist/aos.css";

import localFont from "next/font/local";
const myFont = localFont({ src: "../../fonts/KaushanScript-Regular.ttf" });
const myFont2 = localFont({ src: "../../fonts/Griggs-LightSerif.otf" });

const About = () => {

      // AOS Animation .........
      useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

  return (
    <section id="about" className="st-about-wrap ">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">ABOUT</h4>
          <h2 className="st-section-heading-subtitle">ABOUT</h2>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>
      <div className="container p-5 md:p-8 lg:p-12 ">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-center	">
          <div data-aos="fade-right" data-aos-duration="800">
            <div className="st-about-img-wrap  aboutImg p-5">
              <Image
                className="st-about-img st-dynamic-bg st-bg grayscale hover:grayscale-0 over:blur"
                src={photo}
                alt="mokhter ahmad"
                width={570} height={514}
              />
            </div>
            <div className="st-height-b0 st-height-lg-b30"></div>
          </div>
            <div className="st-vertical-middle" data-aos="fade-left" data-aos-duration="800">
              <div className="st-vertical-middle-in">
                <div className="st-text-block st-style1">
                  <h2 className={`text-4xl px-4  ${myFont2.className}`}>
                    Torch Bearer of the Quran In The Land of Bengal
                  </h2>
                  <div className="st-text-block-text ">
                    <p className="text-justify italic p-4">
                      As ignorance & innovation in the name of religion spread
                      over the land of Bengal, people from all walks of life
                      were craving for an enlightened soul who would enlighten
                      the mass Muslim of the land with the real teachings of the
                      Quran & Sunnah. That is our beloved Shaykh, Professor
                      Mokhter Ahmad, the Torch Bearer of the Quran In The Land
                      of Bengal & ‘Founder Chairman’ of the “Tarbiyah Education
                      Network”, the largest online-based Islamic educational
                      platform in Bangladesh.
                    </p>
                    <div className="pl-10 pt-8">
                      <Image
                        src={mark1}
                        alt="mark"
                        width={45}
                        height={45}
                        className="mark1"
                      />
                      <p
                        className={` sirqoute1 text-2xl text-slate-200 ${myFont.className}`}
                      >
                        An endless journy has begun
                      </p>
                      <p
                        className={` sirqoute2 text-2xl text-slate-200 ${myFont.className}`}
                      >
                        for the sake of humanity
                      </p>
                      <Image
                        src={mark2}
                        alt="mark"
                        width={45}
                        height={45}
                        className="mark2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div> 
        </div>
        <div>
        <div data-aos="fade-up" data-aos-duration="800">
          <p className="text-justify pt-4">
              Born in 80s, Professor Mokhter Ahmad completed his graduation from
              the most revered institution in Bangladesh, University of Dhaka. He
              then dedicated himself towards the fullfilment of his dream to repel
              the ignorance about Quran. He served as a faculty in the leading
              institutions like IUT, IIUC, Asian University of Bangladesh (AUB).
              Under his guidance & supervision, he served as the Director of
              Daffodil Islamic Centre (DIC) under the umbrella of Daffodil
              International University.
            </p>

            <p className="text-justify">
              Professor Mokhter Ahmad preached Quranic knowledge & authentic
              Sunnah throughout his life, but felt a need for space where people
              from all over the world can be benefitted from his pearls of wisdom
              & knowledge. To materialize that long cherished dream, “Tarbiyah
              Education Network” has come into reality. Now, thousands of people
              from all the five continents are studying under the umbrella of
              “Tarbiyah Education Network”.
            </p>

            <p className="text-justify">
              His dream is to build up an Ummah, free from the ignorance of basic
              understandings of Quran. He established Tarbiyah Academy for the
              Adults, Tarbiyah Online Madrasa for the Teens around the world
              operating in both Bangla & English version simultaneously, Tarbiyah
              Institute for teaching Quranic Exegis & Grammar & Madrasatut
              Tarbiyah for kids blending Cambridge Curriculum & Islamic Sciences.
            </p>

            <p className="text-justify">
              Professor Mokhter Ahmad, a revolutionist of our age, is working day
              & night to regenerate the Ummah tirelessly. He is a rare glimpse of
              hope revered among all the spheres of society.
            </p>
        </div>
        </div>
      </div>
    </section>
  );
};

export default About;
