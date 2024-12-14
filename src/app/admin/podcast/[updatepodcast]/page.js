"use client"
import React, { useEffect, useState } from 'react'
import { redirect } from "next/navigation";
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = ({params}) => {
const   { updatepodcast } = params;
  // function getToken() {
  //   return localStorage.getItem('username');
  // }
  // const token = getToken();
  // console.log(token);

  // if (!token) {
  //   redirect("/admin/signin");
  // }

    // podcast Post default form value in form ...

    const [podcast, setpodcast] = useState([]);

    useEffect(() => {
      const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/podcast/details/${updatepodcast}`;
      fetch(url, {
        // headers: {
        //   authorization: `Bearer ${token}`,
        // },
      })
      .then((res) => res.json())
      .then((data) => setpodcast(data))
      .catch((error) => {
        console.error("Error fetching program data:", error);
      });
    }, [updatepodcast]);
  
    console.log(podcast);
  
  
    // podcast Post update ...
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = data => {
    const podcastInfo = {
      title: data.title,
      lecturer: data.lecturer,
      date: data.date,
      audio: data.audio,
      url: data.url,
    };
    console.log(podcastInfo)

    const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/podcast/update/${updatepodcast}`;
    fetch(url, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(podcastInfo)
    })
    .then((res) => res.json())
    .then((result) => {
      console.log("Podcast er data Paichi", result);
      if (result) {
        toast.success("Yah! Podcast is Added  Successfully");
        reset();
      } else {
        toast.error("Ohh! Something went wrong, Again..");
      }
    });
};

    

  return (
    
    <div>
      <div>
      <section id="contact" className="st-dark-bg">
      <div className="container">
      <div className="st-height-b100 st-height-lg-b80"></div>
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">Update Podcast</h4>
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
              <input defaultValue={podcast.title} type="text"{...register("title" , { required: true })} />
               {errors.title && <p className='text-red'>title is required.</p>}
              </div>

              <div className="st-form-field">
              <input defaultValue={podcast.audio} type="text"{...register("audio" , { required: true })} />
               {errors.audio && <p className='text-red'>audio is required.</p>}                
              </div>

              <div className="st-form-field">
              <input defaultValue={podcast.lecturer} type="text"{...register("lecturer" , { required: true })} />
               {errors.lecturer && <p className='text-red'>lecturer is required.</p>}                
              </div>

              <div className="st-form-field">
              <input defaultValue={podcast.url} type="text"{...register("url" , { required: true })} />
               {errors.url && <p className='text-red'>thumbnail is required.</p>} 
              </div>

              <div className="st-form-field">
              <input defaultValue={podcast.date} type="date"{...register("date" , { required: true })} />
               {errors.date && <p className='text-red'>date is required.</p>} 
              </div>

              <button className="st-btn st-style1 st-color1" type="submit" id="submit" name="submit">Update Podcast</button>
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
