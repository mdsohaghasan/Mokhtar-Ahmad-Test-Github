"use client";
import React, { useEffect} from "react";
import dynamic from "next/dynamic";
const Plyr = dynamic(() => import("plyr-react"), { ssr: false });
import "plyr-react/plyr.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Live = () => {

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
          <h4 className="st-section-heading-title">Live</h4>
          <h2 className="st-section-heading-subtitle">Live Session</h2>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>

      {/* <!-- Iconbox Container --> */}

      <div className="container lg:px-0">

      <div className="container px-8 ">

        <div className="lg:flex lg:items-center md:flex md:items-center	">

          {/* First Collum  */}
          <div className="md:w-1/2 lg:w-1/2 gap-3">

            <div className="  lg:text-left" data-aos="fade-up" data-aos-duration="500">
              <h1 className="text-4xl py-3 text-amber-400">Our Live Session</h1>
            </div>

            <div className="my-3" data-aos="fade-up" data-aos-duration="800">
            
              <span className="border border-white rounded-3xl py-2 px-3  text-center mr-4">
                LIve Icon .
              </span>
            </div>
            
            <div className="py-3" data-aos="fade-up" data-aos-duration="500">
              <p className="text-justify">
                Our live sessions are designed to provide you with a dynamic and interactive experience. Join us for a series of live sessions where we will discuss various topics related to Islamic spirituality, including prayer, fasting, Hajj, and more. These sessions are open to all, regardless of your level of knowledge or experience. We believe in the power of community and the importance of sharing knowledge and experiences.
              </p>
            </div>
          </div>


            {/* seconds Collum  */}
          <div className="md:w-1/2 lg:w-1/2 gap-3 ms-5">
             <div >
            <Plyr
              source={{
                type: "video",
                sources: [{ src: "https://youtu.be/RiKF0e8wtSQ?si=OrSPsHwmRdwLlWQd", provider: "youtube" }],
              }}
            />
          </div>
          </div>



        </div>
      </div>




          
            
         

         

        
      </div>
      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
  );
};

export default Live;
