"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Plyr = dynamic(() => import("plyr-react"), { ssr: false });
import "plyr-react/plyr.css";
import AOS from "aos";
import "aos/dist/aos.css";


import localFont from "next/font/local";
// const HindSiliguri = localFont({ src: "../../fonts/HindSiliguri-Light.ttf" });

const Stream = () => {

  const [Stream, setStream] = useState([]);

  useEffect(() => {
    const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/live/all`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
       // If there are items in the data list then the latest video
        if (Array.isArray(data) && data.length > 0) {
          setStream(data[data.length - 1]); // Last Video Set
        }
      })
      .catch((error) => {
        console.error("Error fetching program data:", error);
      });
  }, []);


    // AOS Animation .........
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);

  return (
    
      <div>
        <div >
                <Plyr
                  source={{
                    type: "video",
                    sources: [{ src: Stream.url, provider: "youtube" }],
                  }}
                />
            </div>
        
          {/* <h4 className={`text-amber-300 ${HindSiliguri.className}`}>{Stream.title}</h4>
          <div className="border-2 border-white rounded-md  bg-slate-800 " data-aos="zoom-out-up" data-aos-duration="1400" data-aos-delay="800">
            <div className="hover:scale-40 transition-transform duration-300">
              <Plyr
                source={{
                  type: "video",
                  sources: [{ src: Stream.url, provider: "youtube" }],
                }}
              />
            </div>
          </div> */}
       
        
      </div>
    
  );
};

export default Stream;
