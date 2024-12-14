"use client"
import React, { useEffect, useState } from 'react'
import { redirect } from "next/navigation";
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = ({params}) => {
   const { updategallery } = params;

  // function getToken() {
  //   return localStorage.getItem('username');
  // }
  // const token = getToken();
  // console.log(token);

  // if (!token) {
  //   redirect("/admin/signin");
  // }

    // Gallery Post default form value in form ...

    const [gallery, setGallery] = useState([]);

    useEffect(() => {
      const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/gallery/details/${updategallery}`;
      fetch(url, {
        // headers: {
        //   authorization: `Bearer ${token}`,
        // },
      })
      .then((res) => res.json())
      .then((data) => setGallery(data))
      .catch((error) => {
        console.error("Error fetching Gallery data:", error);
      });
    }, [updategallery]);
  
    console.log(gallery);
  
  
    // Gallery Post update ...
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm();


  const onSubmit = data => {

    const galleryInfo = {
      url: data.url,
      caption: data.caption,
    };
    console.log(galleryInfo)

    const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/gallery/update/${updategallery}`;
    fetch(url, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(galleryInfo)
    })
    .then((res) => res.json())
    .then((result) => {
      console.log("Post er data Paichi", result);
      if (result) {
        toast.success("Yah! Gallery is Updated Successfully");
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
          <h4 className="st-section-heading-title">Update Gallery</h4>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>
  
      {/* <!-- Contact Container --> */}
  
      <div className="container">
        <div className="flex">
        <div className='basis-2/12	'></div>
          <div className="basis-8/12">
            <div id="st-alert"></div>
            <form onSubmit={handleSubmit(onSubmit)} method="PUT" className="st-contact-form" id="contact-form">
              
              <div className="st-form-field">
              <input defaultValue={gallery.url} type="text"{...register("url" , { required: true })} />
               {errors.url && <p className='text-red'>gallery is required.</p>}
              </div>

              <div className="st-form-field">
              <input defaultValue={gallery.caption} type="text"{...register("caption" , { required: true })} />
               {errors.caption && <p className='text-red'>caption is required.</p>}
              </div>

              <button className="st-btn st-style1 st-color1" type="submit" id="submit" name="submit">Update Gallery</button>
            </form>
          </div>
          <div className='basis-2/12'></div>
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
