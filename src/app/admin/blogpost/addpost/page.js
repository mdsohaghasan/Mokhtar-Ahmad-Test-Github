// "use client"
// import React, { useState } from 'react'
// import { redirect } from "next/navigation";
// import { useForm } from 'react-hook-form';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Page = () => {

//   // function getToken() {
//   //   return localStorage.getItem('username');
//   // }
//   // const token = getToken();
//   // console.log(token);

//   // if (!token) {
//   //   redirect("/admin/signin");
//   // }
  
//   const { register, handleSubmit, reset, formState: { errors } } = useForm();


//   const onSubmit = data => {
//     const blogInfo = {
//       title: data.title,
//       author: data.author,
//       date: "10-10-2022",
//       category: data.category,
//       url: data.url,
//       des: data.des,
//     };
//     console.log(blogInfo)

//     const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/blog/add`;
//     fetch(url, {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(blogInfo)
//     })
//     .then((res) => res.json())
//     .then((result) => {
//       console.log("Post er data Paichi", result);
//       if (result) {
//         toast.success("Yah! Post Added Successfully");
//         reset();
//       } else {
//         toast.error("Ohh!, Something went wrong, Again..");
//       }
//     });
// };

//   return (
    
//     <div>
//       <div>
//       <section id="contact" className="st-dark-bg">
//       <div className="st-height-b100 st-height-lg-b80"></div>
//       <div className="container">
//         <div className="st-section-heading st-style1">
//           <h4 className="st-section-heading-title">Add Post</h4>
//         </div>
//         <div className="st-height-b25 st-height-lg-b25"></div>
//       </div>
  
//       {/* <!-- Contact Container --> */}
  
//       <div className="container">
//         <div className="flex">
//         <div className='basis-2/12	'></div>
//           <div className="basis-8/12">
//             <div id="st-alert"></div>
//             <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST" className="st-contact-form" id="contact-form">
//               <div className="st-form-field">
//               <input placeholder='Post Title' type="text"{...register("title" , { required: true })} />
//                {errors.title && <p className='text-red'>title is required.</p>}
//               </div>

//               <div className="st-form-field">
//               <input placeholder='Post Author' type="text"{...register("author" , { required: true })} />
//                {errors.author && <p className='text-red'>author is required.</p>}                
//               </div>
              
//               <div className="st-form-field">
//               <input placeholder='Post Category' type="text"{...register("category" , { required: true })} />
//                {errors.category && <p className='text-red'>Category is required.</p>}
//               </div>

//               <div className="st-form-field">
//               <input placeholder='Post Thumbnail' type="text"{...register("url" , { required: true })} />
//                {errors.url && <p className='text-red'>Thumbnail is required.</p>}
                
//               </div>

//               <div className="st-form-field">             
//                 <textarea cols="30" rows="10" placeholder='Post Description' type="text"{...register("des" , { required: true })}></textarea>
//                 {errors.des && <p className='text-red'>Description is required.</p>}
//               </div>

//               <button className="st-btn st-style1 st-color1" type="submit" id="submit" name="submit">Submit Post</button>
//             </form>
//           </div>
//           <div className='basis-2/12	'></div>
//           <div className="st-height-b0 st-height-lg-b30"></div>
//         </div>
//       </div>
//       <div className="st-height-b100 st-height-lg-b80"></div>
//     </section>
//     </div>
//     <ToastContainer />
//     </div>
//   )
// }

// export default Page


// ***********************************************************
// ***********************  Header 2  ************************
// ***********************************************************

"use client";
import React from "react";
import Image from "next/image";
import photo from "./mokhter.png";
import board from "./wabsite-bord.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// Ripple Water Effect .....
import $ from "jquery";
// import parse from 'html-react-parser';
// import WaterWave from 'react-water-wave';
import dynamic from 'next/dynamic';

// water effect .........
// const WaterWave = dynamic(
//   () => {
//     return import('react-water-wave');
//   },
//   { ssr: false },
// );

// Particles Depandency .....
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Link from "next/link";

const Header = () => {
  
  //  Social Button Hover .........
  useEffect(() => {
    $(".st-social-btn").hover(function () {
      $(this).addClass("active").siblings().removeClass("active");
    });
  }, []);

  
   // Particles Function ....
  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
  }, []);

  // AOS Animation .........
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section
      id="tsparticles" className=" flex  bg-[#070d1b]  relative  lg:h-[850px] sm:h-[600px]">
      <Particles
        className="bg-image"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          particles: {
            number: {
              value: 355,
              density: {
                enable: true,
                value_area: 789.1476416322727,
              },
            },
            color: {
              value: "#ffffff",
            },
            fullScreen: {
              enable: false,
              zIndex: -1,
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                // height: "auto",
              },
            },
            opacity: {
              value: 0.48927153781200905,
              random: false,
              anim: {
                enable: true,
                speed: 0.6,
                opacity_min: 0,
                sync: false,
              },
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: true,
                speed: 5,
                size_min: 0,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.2,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          defaultThemes: {},
          delay: 0,
          fullScreen: {
            enable: false,
            zIndex: -1,
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 83.91608391608392,
                size: 1,
                duration: 3,
                opacity: 1,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      /> 


{/* //// water effect ......... */}

        {/* <WaterWave className="cs-hero_bg cs-bg cs-ripple_version cs-center">
          {() => (
            <h1>Water Effect</h1>
          )}
        </WaterWave> */}


<Image className="wow fadeInRight md:block lg:block ml-[150px] mt-[-50px] w-auto h-[900px] z-40" src={board} alt="Hero" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="0"/>




  <div className="st-height-b80 st-height-lg-b80"></div>
  <section className="container st-hero-wrap st-parallax">

  

    <div className="st-hero st-style1 st-ripple-version" >
      <div className="">
      
        {/* <div className="">
          <h3 className="text-3xl text-[#F6C544]" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">Assalamu Alaikum, <br/>I am Professor</h3>
          <h1 className="text-7xl md:text-9xl lg:text-9xl font-black" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">Mokhter <br /> Ahmad</h1>
          <h2 className="text-4xl" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">Public Figure</h2>
          <div className="flex my-6">
              <div className="st-hero-btn" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                <Link
                  href="/about"
                  target="_blank"
                  className="st-btn st-style1 st-color1 st-smooth-move">
                  Get About
                </Link>
              </div>
              <div className="wrapper" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                <div className="icon-wrapper">
                  <Link href="/lecture" target="_blank">
                    <i className="bi bi-play-circle"></i>
                  </Link>
                </div>
              </div>
            </div>
        </div> */}
      </div>
    </div>
    {/* <!-- Hero Image - Social Link Group --> */}

    <div className="st-hero-img st-to-right ">
    
      <Image className="wow fadeInRight md:hidden ml-[-150px] lg:block z-30"  src={photo} alt="Hero" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="0"/>
      <div className="st-social-group wow fadeInLeft md:hidden lg:block py-[12px]" data-aos="fade-left" data-aos-duration="800" data-aos-delay="500">
        <div className="st-social-link">
          <Link href="https://www.facebook.com/professormokhterahmad"
              target="_blank" className="st-social-btn active" >
            <span className="st-social-icon"><i className="bi bi-facebook"></i></span>
            <span className="st-icon-name">Facebook</span>
          </Link>
          <Link href="https://www.youtube.com/@mokhterahmad"
              target="_blank" className="st-social-btn">
            <span className="st-social-icon">  <i className="bi bi-youtube"></i></span>
            <span className="st-icon-name">Youtube</span>
          </Link>
          <Link href="https://twitter.com/mokhterahmad"
              target="_blank" className="st-social-btn">
            <span className="st-social-icon"><i className="bi bi-twitter"></i></span>
            <span className="st-icon-name">Twitter</span>
          </Link>
          <Link href="https://www.instagram.com/mokhter.ahmad"
              target="_blank" className="st-social-btn">
            <span className="st-social-icon"><i className="bi bi-instagram"></i></span>
            <span className="st-icon-name">Instagram</span>
          </Link>
          <Link  href="https://www.linkedin.com/in/mokhter-ahmad-b77ba257/?originalSubdomain=bd"
              target="_blank" className="st-social-btn">
            <span className="st-social-icon"><i className="bi bi-linkedin"></i></span>
            <span className="st-icon-name">LinkedIn</span>
          </Link>
        </div>
      </div>
    </div>
    
  </section>


    </section>
  );
};

export default Header;


