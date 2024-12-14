"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { redirect } from "next/navigation";
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

        const [Consultancy, setConsultancy] = useState([]);

        useEffect(() => {
          const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/consultancy/all`;
          fetch(url, {
            // headers: {
            //   authorization: `Bearer ${token}`,
            // },
          })
          .then((res) => res.json())
          .then((data) => setConsultancy(data))
          .catch((error) => {
            console.error("Error fetching program data:", error);
          });
        }, []);

        console.log(Consultancy);


        // Consultancy HANDLER FOR DELETE BUTTON
        const {  reset,  } = useForm();

        const handleDelete = (id) => {
          console.log(id);
              const proceed = window.confirm("are you sure deleteing");
              if (proceed) {
                console.log(id);
                const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/consultancy/delete/${id}`;
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
                      const remaining = Consultancy.filter((consultancy) => consultancy._id !== id);
                      setConsultancy(remaining);
                      if (remaining) {
                        toast.success("Yah! Consultancy is Deleted Successfully");
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
          <h4 className="st-section-heading-title">Lecture List</h4>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>
      <Link className="px-3 py-2  ml-12 bg-green-300 rounded-lg text-black text-lg" href={`/consultancy`} target="_blank"> Add Consultancy</Link>
      <div className="grid grid-cols-1 gap-2 px-5 pb-6 mt-3">
      {Consultancy.map((consultancy) => (
         <div className='bg-[#0a1e3b] p-3 mb-3 rounded-lg' key={consultancy.id}>
            <div className='py-2'>
                <h3>{consultancy.category}</h3>
                <p>Name : {consultancy.name}</p>
                <p>Phone : {consultancy.phone}</p>
                <p>Email : {consultancy.email}</p>
                <p>Subject : {consultancy.subject}</p>
                <p>Message : {consultancy.message}</p>
                <button className="px-3 py-2 bg-red-300 rounded-lg text-slate-800" onClick={() => handleDelete(consultancy._id)}>Delete Consultancy</button>
                
            </div>
         </div>
          ))}
      </div>
      <ToastContainer />
    </section>
  )
}

export default Page
