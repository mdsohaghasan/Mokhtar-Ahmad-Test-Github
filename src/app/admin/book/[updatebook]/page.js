"use client"
import React, { useEffect, useState } from 'react'
import { redirect } from "next/navigation";
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = ({params}) => {
    const { updatebook } = params;
  // function getToken() {
  //   return localStorage.getItem('username');
  // }
  // const token = getToken();
  // console.log(token);

  // if (!token) {
  //   redirect("/admin/signin");
  // }
  
  // Blog Post default form value in form ...

  const [book, setBook] = useState([]);

  useEffect(() => {
    const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/book/details/${updatebook}`;
    fetch(url, {
      // headers: {
      //   authorization: `Bearer ${token}`,
      // },
    })
    .then((res) => res.json())
    .then((data) => setBook(data))
    .catch((error) => {
      console.error("Error fetching program data:", error);
    });
  }, [updatebook]);

  console.log(book);


  // Blog Post update ...

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = data => {

    const bookInfo = {
      title: data.title,
      url: data.url,
      author: data.author,
    };
    console.log(bookInfo)

    const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/book/update/${updatebook}`;
    fetch(url, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(bookInfo)
    })
    .then((res) => res.json())
    .then((result) => {
      console.log("Book er data Paichi", result);
      if (result) {
        toast.success("Yah! Book is Updated Successfully");
        reset();
      } else {
        toast.error("Ohh! Something went wrong, Again..");
      }
    });
};

  return (
    
    <div>
      <section id="contact" className="st-dark-bg">
      <div className="container">
        <div className="st-height-b100 st-height-lg-b80"></div>
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">Update Book</h4>
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
              <input defaultValue={book.title} type="text"{...register("title" , { required: true })} />
               {errors.title && <p className='text-red'>title is required.</p>}
              </div>

              <div className="st-form-field">
              <input defaultValue={book.url} type="text"{...register("url" , { required: true })} />
               {errors.url && <p className='text-red'>thumbnail is required.</p>}
              </div>

              <div className="st-form-field">
              <input defaultValue={book.author} type="text"{...register("author" , { required: true })} />
               {errors.author && <p className='text-red'>author is required.</p>}
              </div>

              <button className="st-btn st-style1 st-color1" type="submit" id="submit" name="submit">Update Book</button>
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
