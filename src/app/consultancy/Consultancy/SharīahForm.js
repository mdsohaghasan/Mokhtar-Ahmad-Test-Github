"use client"
import React from 'react'
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SharīahForm = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

// sharīahSubmit
const sharīahSubmit = data => {

    const consultancyInfo = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      category: "Sharīah Prescription",
      subject: data.subject,
      message: data.message,
    };
    console.log(consultancyInfo)

    const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/consultancy/add`;
    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(consultancyInfo)
    })
    .then((res) => res.json())
    .then((result) => {
      console.log("consultancy er data Paichi", result);
      if (result) {
        toast.success("Sabbas: consultancy add hoise Successfully");
        reset();
      } else {
        toast.error("consultancy Add Hoy Nai, Abar..");
      }
    });
};



  return (
    <div>
       <form onSubmit={handleSubmit(sharīahSubmit)} action="#" method="POST" className="st-contact-form">
              <div className="st-form-field">
                <input placeholder='Your Name' type="text"{...register("name" , { required: true })} />
                {errors.name && <p className='text-red-500'>name is required.</p>}
              </div>

              <div className="st-form-field">
                <input placeholder='Your Mobile Number' type="number"{...register("phone" , { required: true })} />
                {errors.phone && <p className='text-red-500'>number is required.</p>}
              </div>

              <div className="st-form-field">
                <input placeholder='Your Email' type="email" 
                  {...register("email", {pattern: {value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, message: 'Provide a valid Email' } })}  />                  
                  {errors.email && <p className='text-red-500'>email is required.</p>}
                  {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
              </div>

              <div className="st-form-field">
                <input placeholder='Your subject' type="text"{...register("subject" , { required: true })} />
                {errors.subject && <p className='text-red-500'>subject is required.</p>}
              </div>

              <div className="st-form-field">
                <textarea cols="30" rows="10" placeholder='Your Message' type="text"{...register("message" , { required: true })} />
                {errors.message && <p className='text-red-500'>message is required.</p>}
              </div>
          <button className="st-btn st-style1 st-color1" type="submit" id="submit" name="submit" > Send message </button>
        </form>
    </div>
  )
}

export default SharīahForm
