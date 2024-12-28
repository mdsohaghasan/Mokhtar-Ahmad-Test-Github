"use client"
import React, { useState } from 'react'
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
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm();


  const onSubmit = data => {
    const blogInfo = {
      title: data.title,
      author: data.author,
      date: "10-10-2022",
      category: data.category,
      url: data.url,
      des: data.des,
    };
    console.log(blogInfo)

    const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/blog/add`;
    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(blogInfo)
    })
    .then((res) => res.json())
    .then((result) => {
      console.log("Post er data Paichi", result);
      if (result) {
        toast.success("Yah! Post Added Successfully");
        reset();
      } else {
        toast.error("Ohh!, Something went wrong, Again..");
      }
    });
};

  return (
    
    <div>
      <div>
      <section id="contact" className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">Add Post</h4>
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
              <input placeholder='Post Title' type="text"{...register("title" , { required: true })} />
               {errors.title && <p className='text-red'>title is required.</p>}
              </div>

              <div className="st-form-field">
              <input placeholder='Post Author' type="text"{...register("author" , { required: true })} />
               {errors.author && <p className='text-red'>author is required.</p>}                
              </div>
              
              <div className="st-form-field">
              <input placeholder='Post Category' type="text"{...register("category" , { required: true })} />
               {errors.category && <p className='text-red'>Category is required.</p>}
              </div>

              <div className="st-form-field">
              <input placeholder='Post Thumbnail' type="text"{...register("url" , { required: true })} />
               {errors.url && <p className='text-red'>Thumbnail is required.</p>}
                
              </div>

              <div className="st-form-field">             
                <textarea cols="30" rows="10" placeholder='Post Description' type="text"{...register("des" , { required: true })}></textarea>
                {errors.des && <p className='text-red'>Description is required.</p>}
              </div>

              <button className="st-btn st-style1 st-color1" type="submit" id="submit" name="submit">Submit Post</button>
            </form>
          </div>
          <div className='basis-2/12	'></div>
          <div className="st-height-b0 st-height-lg-b30"></div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
    </div>
    <ToastContainer />
    </div>
  )
}

export default Page



