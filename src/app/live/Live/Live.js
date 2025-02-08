"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Plyr = dynamic(() => import("plyr-react"), { ssr: false });
import "plyr-react/plyr.css";
import AOS from "aos";
import "aos/dist/aos.css";


import localFont from "next/font/local";
const HindSiliguri = localFont({ src: "../../fonts/HindSiliguri-Light.ttf" });




const Live = () => {

  const [Live, setLive] = useState([]);

  useEffect(() => {
    const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/live/all`;
    fetch(url, {
      // headers: {
      //   authorization: `Bearer ${token}`,
      // },
    })
    .then((res) => res.json())
    .then((data) => setLive(data))
    .catch((error) => {
      console.error("Error fetching program data:", error);
    });
  }, []);

  console.log(Live);

    // AOS Animation .........
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);

  return (
    <div>
      <div className="container lg:px-24 lg:py-8  md:px-24 md:py-8  px-24 py-8">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 lx:grid-cols-2 gap-3">
        {Live.map((live) => (
        <div className="bg-[#0a1e3b] p-3 m-2 rounded-lg" data-aos="zoom-out-up" data-aos-duration="800" data-aos-delay="300" key={live._id}> 
            <h4 className={`text-amber-300 ${HindSiliguri.className}`}>{live.title}</h4>  
          <div className="border-2 border-white rounded-md  bg-slate-800"  >
            <div className="hover:scale-110 transition-transform duration-300">
              <Plyr
                source={{
                  type: "video",
                  sources: [{ src: live.url, provider: "youtube" }],
                }}
              />
            </div>  
          </div>
           <span className="text-[#fec544] my-3"> Streamed Date :
               {new Date(live.createdOn).toLocaleDateString("en-GB")}
           </span>
        </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Live;


