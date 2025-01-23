"use client"
import React, { useEffect, useState } from 'react'
import { redirect } from "next/navigation";
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Page = ({params}) => {
  const { updatequotes } = params;

  // function getToken() {
  //   return localStorage.getItem('username');
  // }
  // const token = getToken();
  // console.log(token);

  // if (!token) {
  //   redirect("/admin/signin");
  // }


    // Blog Post default form value in form ...
  
    const [quotes, setquotes] = useState([]);

    useEffect(() => {
      const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/quotes/details/${updatequotes}`;
      fetch(url, {
        // headers: {
        //   authorization: `Bearer ${token}`,
        // },
      })
      .then((res) => res.json())
      .then((data) => setquotes(data))
      .catch((error) => {
        console.error("Error fetching program data:", error);
      });
    }, [updatequotes]);
  
    console.log(quotes);

  // Blog Post update ...
  const { register, handleSubmit,  reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    const quotesInfo = {
      url: data.quotesUrl,
      text: data.text,
      name: data.name,
      // date: "10-10-2022",
    };
    console.log(quotesInfo)

    const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/quotes/update/${updatequotes}`;
    fetch(url, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(quotesInfo)
    })
    .then((res) => res.json())
    .then((result) => {
      console.log("Post er data Paichi", result);
      if (result) {
        toast.success("Yah! Quotes Video Updated Successfully");
        reset();
      } else {
        toast.error("Ohh!, Quotes is Not Updated Again..");
      }
    });
};


  return (
    <div>
      <section id="contact" className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">Update Quotes</h4>
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
              <textarea cols="30" rows="10" defaultValue={quotes.text} type="text"{...register("text" , { required: true })} />
               {errors.text && <p className='text-red'>quotes title is required.</p>}
              </div>

              <div className="st-form-field">
              <input defaultValue={quotes.url} type="text"{...register("quotesUrl" , { required: true })} />
               {errors.url && <p className='text-red'>quotes photo url is required.</p>}
              </div>

              <div className="st-form-field">
              <input defaultValue={quotes.name} type="text"{...register("name" , { required: true })} />
               {errors.name && <p className='text-red'>quotes name is required.</p>}
              </div>

              <button className="st-btn st-style1 st-color1" type="submit" id="submit" name="submit">Update Quotes</button>
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
