"use client"
import React from 'react'
import { redirect } from "next/navigation";
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Page = () => {

  // function getToken() {
  //   return localStorage.getItem('username');
  // }
  // const token = getToken();
  // console.log(token);

  // if (!token) {
  //   redirect("/admin/signin");
  // }



  const { register, handleSubmit,  reset, formState: { errors } } = useForm();


  const onSubmit = data => {

    const liveInfo = {
      title: data.title,
      url: data.liveUrl,
      // category: data.category,
      // date: "10-10-2022",
    };
    console.log(liveInfo)

       const url = `http://localhost:5000/live/add`;
    // const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/live/add`;
    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(liveInfo)
    })
    .then((res) => res.json())
    .then((result) => {
      console.log("Live Added Successfully", result);
      if (result) {
        toast.success("Yah! Live Video Added Successfully");
        reset();
      } else {
        toast.error("Ohh!, Live is Not Added. Again..");
      }
    });
};


  return (
    <div>
     
      <section id="contact" className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">Add Live</h4>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>
  
      {/* <!-- Contact Container --> */}
  
      <div className="container">
        <div className="flex">
        <div className='basis-2/12	'></div>
          <div className="basis-8/12">
            <div id="st-alert"></div>
            <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST" className="st-contact-form" id="contact-form">
              
              <div className="st-form-field">
              <input placeholder='Live Title' type="text"{...register("title" , { required: true })} />
               {errors.title && <p className='text-red'>live title is required.</p>}
              </div>

              <div className="st-form-field">
              <input placeholder='Live URL' type="text"{...register("liveUrl" , { required: true })} />
               {errors.liveUrl && <p className='text-red'>live url is required.</p>}
              </div>

              {/* <div className="st-form-field">
              <input placeholder='Live Category' type="text"{...register("category" , { required: true })} />
               {errors.category && <p className='text-red'>live category is required.</p>}
              </div> */}

              <button className="st-btn st-style1 st-color1" type="submit" id="submit" name="submit">Submit Live</button>
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
