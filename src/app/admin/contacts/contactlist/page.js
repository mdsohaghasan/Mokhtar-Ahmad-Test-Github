"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page =  () => {

 // function getToken() {
  //   return localStorage.getItem('username');
  // }
  // const token = getToken();
  // console.log(token);

  // if (!token) {
  //   redirect("/admin/signin");
  // }


        const [Contact, setContact] = useState([]);

        useEffect(() => {
          const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/contact/all`;
          fetch(url, {
            // headers: {
            //   authorization: `Bearer ${token}`,
            // },
          })
          .then((res) => res.json())
          .then((data) => setContact(data))
          .catch((error) => {
            console.error("Error fetching program data:", error);
          });
        }, []);

        console.log(Contact);


  // EVENT HANDLER FOR DELETE BUTTON
const {  reset,  } = useForm();

const handleDelete = (id) => {
  console.log(id);
      const proceed = window.confirm("are you sure deleteing");
      if (proceed) {
        console.log(id);
        const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/contact/delete/${id}`;
        fetch(url, {
          method: "DELETE",
          // headers: {
          //   authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          // },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              console.log(data);
              const remaining = Contact.filter((contact) => contact._id !== id);
              setContact(remaining);
              if (remaining) {
                toast.success("yah! Contact is Deleted Successfully");
                reset();
              } else {
                toast.error("Ohh! Something went Wrong, Again..");
              }
            }
          });
      }
};




  return (
    <section className='container'>
      <div className="container">
      <div className="st-height-b100 st-height-lg-b80"></div>
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">Contact List</h4>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>
      <div className="grid grid-cols-1 gap-2 px-5 pb-6">
      {Contact.map((contact) => (
         <div className='bg-[#0a1e3b] p-3 mb-3 rounded-lg' key={contact.id}>
            <div className='py-2'>
                <h3>Name : {contact.name}</h3>
                <p>Phone : {contact.phone}</p>
                <p>Subject : {contact.subject}</p>
                <p>Message : {contact.message}</p>
                <button className="px-3 py-2 bg-red-300 rounded-lg text-slate-800" onClick={() => handleDelete(contact._id)}>Delete Contact</button>
            </div>
         </div>
          ))}      
      </div>
      <ToastContainer />
    </section>
  )
}

export default Page
