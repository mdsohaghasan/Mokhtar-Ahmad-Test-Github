
"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Plyr = dynamic(() => import("plyr-react"), { ssr: false });
import "plyr-react/plyr.css";
import AOS from "aos";
import "aos/dist/aos.css";


import localFont from "next/font/local";
// const AkhandBengali = localFont({ src: "../../fonts/AkhandBengali-Extrabold.ttf" });
const HindSiliguri = localFont({ src: "../../fonts/HindSiliguri-Light.ttf" });

const Stream = () => {

  const [Stream, setStream] = useState([]);

  useEffect(() => {
    // const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/live/all`;
    const url = `http://localhost:5000/lecture/all`;
    fetch(url, {
      // headers: {
      //   authorization: `Bearer ${token}`,
      // },
    })
    .then((res) => res.json())
    .then((data) => setStream(data))
    .catch((error) => {
      console.error("Error fetching program data:", error);
    });
  }, []);

  const slicedStream = Stream.slice(-1);

  console.log(slicedStream);

    // AOS Animation .........
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);

  return (
    
      <div className="container my-3">
        
        
          <div className="border-2 border-white rounded-md  bg-slate-800 " data-aos="zoom-out-up" data-aos-duration="1400" data-aos-delay="800">
          <h4 className={`text-amber-300 ${HindSiliguri.className}`}>{slicedStream.title}</h4>
            <div className="hover:scale-40 transition-transform duration-300">
              <Plyr
                source={{
                  type: "video",
                  sources: [{ src: "https://www.youtube.com/watch?v=3ymlpZAMKsg", provider: "youtube" }],
                }}
              />
            </div>
          </div>
       
        
      </div>
    
  );
};

export default Stream;


