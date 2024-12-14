"use client"
import React, { useEffect, useState } from 'react'
import { redirect } from "next/navigation";
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Page = ({params}) => {
  const { updatelecture } = params;

  // function getToken() {
  //   return localStorage.getItem('username');
  // }
  // const token = getToken();
  // console.log(token);

  // if (!token) {
  //   redirect("/admin/signin");
  // }


    // Blog Post default form value in form ...
  
    const [lecture, setlecture] = useState([]);

    useEffect(() => {
      const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/lecture/details/${updatelecture}`;
      fetch(url, {
        // headers: {
        //   authorization: `Bearer ${token}`,
        // },
      })
      .then((res) => res.json())
      .then((data) => setlecture(data))
      .catch((error) => {
        console.error("Error fetching program data:", error);
      });
    }, [updatelecture]);
  
    console.log(lecture);

  // Blog Post update ...
  const { register, handleSubmit,  reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    const lectureInfo = {
      title: data.title,
      url: data.lectureUrl,
      category: data.category,
      date: "10-10-2022",
    };
    console.log(lectureInfo)

    const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/lecture/update/${updatelecture}`;
    fetch(url, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(lectureInfo)
    })
    .then((res) => res.json())
    .then((result) => {
      console.log("Post er data Paichi", result);
      if (result) {
        toast.success("Yah! Lecture Video Updated Successfully");
        reset();
      } else {
        toast.error("Ohh!, Lecture is Not Updated Again..");
      }
    });
};


  return (
    <div>
      <section id="contact" className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">Update Lecture</h4>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>
  
      {/* <!-- Contact Container --> */}
  
      <div className="container">
        <div className="flex">
        <div className='basis-2/12	'></div>
          <div className="basis-8/12">
            <div id="st-alert"></div>
            <form onSubmit={handleSubmit(onSubmit)} action="#" method="PUT" className="st-contact-form" id="contact-form">
              
              <div className="st-form-field">
              <input defaultValue={lecture.title} type="text"{...register("title" , { required: true })} />
               {errors.title && <p className='text-red'>lecture title is required.</p>}
              </div>

              <div className="st-form-field">
              <input defaultValue={lecture.url} type="text"{...register("lectureUrl" , { required: true })} />
               {errors.url && <p className='text-red'>lecture url is required.</p>}
              </div>

              <div className="st-form-field">
              <input defaultValue={lecture.category} type="text"{...register("category" , { required: true })} />
               {errors.category && <p className='text-red'>lecture category is required.</p>}
              </div>

              <button className="st-btn st-style1 st-color1" type="submit" id="submit" name="submit">Update Lecture</button>
              </form>
          </div>
          <div className='basis-2/12	'></div>
          <div className="st-height-b0 st-height-lg-b30"></div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
    <ToastContainer />
    </div>
  )
}

export default Page
