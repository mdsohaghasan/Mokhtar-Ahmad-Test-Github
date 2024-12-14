"use client"
import React, { useEffect, useState } from 'react'
import { redirect } from "next/navigation";
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Page = ({params}) => {
  const { updatepost } = params;

  // function getToken() {
  //   return localStorage.getItem('username');
  // }
  // const token = getToken();
  // console.log(token);

  // if (!token) {
  //   redirect("/admin/signin");
  // }
  

  // Blog Post default form value in form ...

  const [blogData, setBlog] = useState([]);

  useEffect(() => {
    const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/blog/${updatepost}`;
    fetch(url, {
      // headers: {
      //   authorization: `Bearer ${token}`,
      // },
    })
    .then((res) => res.json())
    .then((data) => setBlog(data))
    .catch((error) => {
      console.error("Error fetching program data:", error);
    });
  }, [updatepost]);

  console.log(blogData);


  // Blog Post update ...

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

    const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/blog/update/${updatepost}`;
    fetch(url, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(blogInfo)
    })
    .then((res) => res.json())
    .then((result) => {
      console.log("Post er data Paichi", result);
      if (result) {
        toast.success("Yah! Post Updated Successfully");
        reset();
      } else {
        toast.error("Ohh!, Post is Not Updated, Again..");
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
          <h4 className="st-section-heading-title">Update Post</h4>
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
              <input defaultValue={blogData.title} type="text"{...register("title" , { required: true })} />
               {errors.title && <p className='text-red'>title is required.</p>}
              </div>

              <div className="st-form-field">
              <input defaultValue={blogData.author} type="text"{...register("author" , { required: true })} />
               {errors.author && <p className='text-red'>author is required.</p>}                
              </div>
              
              <div className="st-form-field">
              <input defaultValue={blogData.category} type="text"{...register("category" , { required: true })} />
               {errors.category && <p className='text-red'>Category is required.</p>}
              </div>

              <div className="st-form-field">
              <input defaultValue={blogData.url} type="text"{...register("url" , { required: true })} />
               {errors.url && <p className='text-red'>Thumbnail is required.</p>}
                
              </div>

              <div className="st-form-field">             
                <textarea cols="30" rows="10" defaultValue={blogData.des} type="text"{...register("des" , { required: true })}></textarea>
                {errors.des && <p className='text-red'>Description is required.</p>}
              </div>

              <button className="st-btn st-style1 st-color1" type="submit" id="submit" name="submit">Update Post</button>
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