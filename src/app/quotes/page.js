"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import quote from "./quote.png";


// import localFont from "next/font/local";
// const HindSiliguri = localFont({ src: "../../quotes/HindSiliguri-Light.ttf" });
// const HindSiliguri = localFont({ src: "../../fonts/HindSiliguri-Light.ttf" });
// const AkhandBengali = localFont({ src: "../../fonts/AkhandBengali-Extrabold.ttf" });

const Quotes = () => {
  const [Quotes, setQuotes] = useState([]);

  useEffect(() => {
    // const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/quotes/all`;
    const url = `http://localhost:5000/quotes/All`;
    fetch(url, {
      // headers: {
      //   authorization: `Bearer ${token}`,
      // },
    })
      .then((res) => res.json())
      .then((data) => setQuotes(data))
      .catch((error) => {
        console.error("Error fetching program data:", error);
      });
  }, []);

  console.log(Quotes);

     // AOS Animation .........
     useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);

  return (
    <div className="container">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">Quotes</h4>
          <h2 className="st-section-heading-subtitle">Quotes</h2>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2  gap-1 pb-5">
        {Quotes.map((quotes) => (
          <div className="flex gap-3 p-3 m-3 rounded-lg bg-slate-900" key={quotes.id} data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
            <div className="w-full">
            <Image src={quote} alt="quote" className="w-8"/>
              <p className="text-xl text-slate-200">{quotes.text}</p> 
              {/* <p className={`text-xl text-slate-200 ${HindSiliguri.className}`}>{quotes.text}</p>  */}
              <h3 className="text-xl text-amber-400">{quotes.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quotes;