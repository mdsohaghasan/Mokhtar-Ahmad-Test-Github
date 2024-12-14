"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Plyr = dynamic(() => import("plyr-react"), { ssr: false });
import "plyr-react/plyr.css";
import AOS from "aos";
import "aos/dist/aos.css";

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

    // AOS Animation .........
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);

  return (
    <div>
      <div className="container lg:px-24 lg:py-8  md:px-24 md:py-8  px-24 py-8">
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-3 lx:grid-cols-3 gap-3">
        {Lecture.map((lecture) => (
          <div className="border-2 border-white rounded-md  bg-slate-800" key={lecture._id} data-aos="zoom-out-up" data-aos-duration="800" data-aos-delay="300">
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
      </div>
    </div>
  );
};

export default Lecture;
