"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import dynamic from "next/dynamic";
const Plyr = dynamic(() => import("plyr-react"), { ssr: false });
import "plyr-react/plyr.css";
import { useEffect, useState } from "react";

const Lecture = () => {

    const [Lecture, setLecture] = useState([]);

    useEffect(() => {
      const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/lecture/all`;
      fetch(url, {
        // headers: {
        //   authorization: `Bearer ${token}`,
        // },
      })
      .then((res) => res.json())
      .then((data) => setLecture(data))
      .catch((error) => {
        console.error("Error fetching program data:", error);
      });
    }, []);
  
    console.log(Lecture);

    const slicedLecture = Lecture.slice(-6);


    // AOS Animation .........
      useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

  return (
    <div className="py-8">
      {/* start Title */}
      <div className="container ">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">lecture</h4>
          <h2 className="st-section-heading-subtitle">lecture</h2>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>
      {/* End Title */}
     
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-center px-10 lg:px-32" data-aos="zoom-in-up" data-aos-duration="800">
            <span className="border border-white rounded-2xl py-1 px-3 text-center">
              #Lectures
            </span>
            <span className="border border-white rounded-2xl py-1 px-3 text-center">
              #Halaqah
            </span>
            <span className="border border-white rounded-2xl py-1 px-3 text-center">
              #Hajj&Omrah
            </span>
            <span className="border border-white rounded-2xl py-1 px-3 text-center">
              #Mahfil
            </span>
            <span className="border border-white rounded-2xl py-1 px-3 text-center">
              #JummaKhutba
            </span>
            <span className="border border-white rounded-2xl py-1 px-3 text-center">
              #Podcast
            </span>
            <span className="border border-white rounded-2xl py-1 px-3 text-center">
              #Seminer
            </span>
            <span className="border border-white rounded-2xl py-1 px-3 text-center">
              #Nasihah
            </span>
          </div>
        </div>
     

     {/* ------------- */}

     <div className="container lg:px-5 py-8 ">
        <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3 lx:grid-cols-3 gap-4 ">
        {slicedLecture.map((lecture) => (
          <div className="border-2 border-white rounded-md bg-slate-800  " key={lecture._id} data-aos="zoom-out-up" data-aos-duration="800" data-aos-delay="300">
            <div className="hover:scale-110 transition-transform duration-300">
            <Plyr
              source={{
                type: "video",
                sources: [{ src: lecture.url, provider: "youtube" }],
              }}
            />
          </div>
          </div>
           ))}
        </div>

            <div className="flex justify-center py-4" data-aos="fade-up" data-aos-duration="800">
              <Link
                href="/lecture"
                className="st-btn st-style1 st-color1 st-smooth-move">
                See Lecture
              </Link>
            </div>

      </div>
     {/* ------------- */}

      
    </div>
  );
};

export default Lecture;
