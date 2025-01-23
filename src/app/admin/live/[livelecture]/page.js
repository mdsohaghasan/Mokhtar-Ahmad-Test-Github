"use client"
import React, { useEffect, useState } from 'react'
import { redirect } from "next/navigation";
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Page = ({params}) => {
  const { updatelive } = params;

  // function getToken() {
  //   return localStorage.getItem('username');
  // }
  // const token = getToken();
  // console.log(token);

  // if (!token) {
  //   redirect("/admin/signin");
  // }


    // Blog Post default form value in form ...
  
    const [live, setlive] = useState([]);

    useEffect(() => {
      const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/live/details/${updatelive}`;
      fetch(url, {
        // headers: {
        //   authorization: `Bearer ${token}`,
        // },
      })
      .then((res) => res.json())
      .then((data) => setlive(data))
      .catch((error) => {
        console.error("Error fetching program data:", error);
      });
    }, [updatelive]);
  
    console.log(live);

  // Blog Post update ...
  const { register, handleSubmit,  reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    const liveInfo = {
      title: data.title,
      url: data.liveUrl,
      // category: data.category,
      // date: "10-10-2022",
    };
    console.log(liveInfo)

    const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/live/update/${updatelive}`;
    fetch(url, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(liveInfo)
    })
    .then((res) => res.json())
    .then((result) => {
      console.log("Post er data Paichi", result);
      if (result) {
        toast.success("Yah! Live Video Updated Successfully");
        reset();
      } else {
        toast.error("Ohh!, Live is Not Updated Again..");
      }
    });
};


  return (
    <div>
      <section id="contact" className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">Update Live</h4>
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
              <input defaultValue={live.title} type="text"{...register("title" , { required: true })} />
               {errors.title && <p className='text-red'>live title is required.</p>}
              </div>

              <div className="st-form-field">
              <input defaultValue={live.url} type="text"{...register("liveUrl" , { required: true })} />
               {errors.url && <p className='text-red'>live url is required.</p>}
              </div>

              {/* <div className="st-form-field">
              <input defaultValue={live.category} type="text"{...register("category" , { required: true })} />
               {errors.category && <p className='text-red'>live category is required.</p>}
              </div> */}

              <button className="st-btn st-style1 st-color1" type="submit" id="submit" name="submit">Update Live</button>
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


