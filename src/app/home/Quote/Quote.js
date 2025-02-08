"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import mokhter from "./mokhter.png";
import quote from "./quote.png";
import AOS from "aos";
import "aos/dist/aos.css";


// Bangla Font 
import localFont from "next/font/local";
const HindSiliguri = localFont({ src: "../../fonts/HindSiliguri-Light.ttf" });
const AkhandBengali = localFont({ src: "../../fonts/AkhandBengali-Extrabold.ttf" });

// slider
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Quote = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    // Fetch API data
    const fetchQuotes = async () => {
      try {
        const response = await fetch("https://mokhter-ahmad-backend-portfolio.vercel.app/quotes/all");
        const data = await response.json();
        setQuotes(data);
      } catch (error) {
        console.error("Error fetching quotes:", error);
      }
    };

    fetchQuotes();
  }, []);

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
      
      {/* Slide Section */}
      <div className="container px-5 lg:px-0">
        <div className="lg:flex lg:gap-3 ">
          <div className="lg:w-4/6 py-5" data-aos="fade-up" data-aos-duration="800">    
            <Swiper autoplay={{ delay: 5000, }} modules={[Autoplay, EffectFade]} >      
              {quotes.map((quoteItem) => (
                <SwiperSlide key={quoteItem.id}>
                  <div>
                  <p className={`text-xl text-slate-200 ${HindSiliguri.className}`}>{quoteItem.text}</p>  
                  <h3 className={`text-2xl text-white-400 ${AkhandBengali.className}`}> - {quoteItem.name}</h3 > 
                  </div> 
                </SwiperSlide>
              ))}
            </Swiper>

              <Image src={quote} alt="quote" className="w-40 " />

          </div>
          <div className="lg:w-2/6 py-4" data-aos="fade-left" data-aos-duration="800">
            <Image src={mokhter} alt="Prof. Mokhter Ahmad" />
          </div>
        </div>
      </div>

      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
  );
};

export default Quote;


