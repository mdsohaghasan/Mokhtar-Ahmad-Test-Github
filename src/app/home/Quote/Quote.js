"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import mokhter from "./mokhter.png";
import quote from "./quote.png";
import AOS from "aos";
import "aos/dist/aos.css";

// slider
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// const res = [
//    {
//      id: 1,
//      quote: "Quotes 1 : There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
//      author: "-Prof. Mokhter Ahmad",
//      img: quote,
//    },
//    {
//      id: 2,
//      quote: "Quotes 2 : It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
//      author: "-Prof. Mokhter Ahmad",
//      img: quote,
//    },
//    {
//      id: 3,
//      quote: "Quotes 3 :It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose",
//      author: "-Prof. Mokhter Ahmad",
//      img: quote,
//    },

//  ];

// AOS Animation .........


const Quote = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section id="quote">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">Quote</h4>
          <h2 className="st-section-heading-subtitle">Quote</h2>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>
      {/* end titiel */}

      <div className="container px-5 lg:px-0">
        <div className="lg:flex  lg:gap-3 ">
          <div className="lg:w-4/6 py-5" data-aos="fade-up" data-aos-duration="800">
            {/* slide section  */}
            <Swiper
              //  effect={'fade'}
              autoplay={{
                delay: 1000,
              }}
              modules={[Autoplay, EffectFade]}>
              <Image src={quote} alt="quote" className="w-40 " />

              <SwiperSlide>
                <div>
                  <p>
                    Quotes 1 : Here in the United States our Muslim citizens are
                    making many contributions in business, science and law,
                    medicine and education, and in other fields. Muslim members
                    of our Armed Forces and of my administration are serving
                    their fellow Americans with distinction,
                  </p>
                  <h4>-Prof. Mokhter Ahmad</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <p>
                    Quotes 2 : Here in the United States our Muslim citizens are
                    making many contributions in business, science and law,
                    medicine and education, and in other fields. Muslim members
                    of our Armed Forces and of my administration are serving
                    their fellow Americans with distinction,
                  </p>
                  <h4>-Prof. Mokhter Ahmad</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <p>
                    Quotes 3 : Here in the United States our Muslim citizens are
                    making many contributions in business, science and law,
                    medicine and education, and in other fields. Muslim members
                    of our Armed Forces and of my administration are serving
                    their fellow Americans with distinction,
                  </p>
                  <h4>-Prof. Mokhter Ahmad</h4>
                </div>
              </SwiperSlide>
            </Swiper>

            {/* slide section  */}
          </div>

          <div className="lg:w-2/6  py-4" data-aos="fade-left" data-aos-duration="800">
            <Image src={mokhter} alt="quote" />
          </div>
        </div>
      </div>

      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
  );
};

export default Quote;
