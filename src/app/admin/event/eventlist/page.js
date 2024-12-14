"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { redirect } from "next/navigation";
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

      const [Event, setEvent] = useState([]);

      useEffect(() => {
        const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/event/all`;
        fetch(url, {
          // headers: {
          //   authorization: `Bearer ${token}`,
          // },
        })
        .then((res) => res.json())
        .then((data) => setEvent(data))
        .catch((error) => {
          console.error("Error fetching program data:", error);
        });
      }, []);

      console.log(Event);


      const {  reset,  } = useForm();

const handleDelete = (id) => {
  console.log(id);
      const proceed = window.confirm("are you sure deleteing");
      if (proceed) {
        console.log(id);
        const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/event/delete/${id}`;
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
              const remaining = Event.filter((event) => event._id !== id);
              setEvent(remaining);
              if (remaining) {
                toast.success("Yah! Event is Added Successfully");
                reset();
              } else {
                toast.error("Ohh! Something went wrong, Again..");
              }
            }
          });
      }
};

  return (
    <section className="container ">
       <div className="container">
        <div className="st-height-b80 st-height-lg-b80"></div>
          <div className="st-section-heading st-style1">
            <h4 className="st-section-heading-title">Event List</h4>
          </div>
          <div className="st-height-b25 st-height-lg-b25"></div>
        </div>
      <Link className="px-3 py-2  ml-5 bg-green-300 rounded-lg text-black text-lg" href={`/admin/event/addevent`} target="_blank">Add Event</Link>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 px-1 pb-5 mt-2">
        {Event.map((event) => (
          <div className="bg-[#0a1e3b] p-3 m-2 rounded-lg" key={event.id}>
            <Image src={event.image} alt="blog thumbnail" width={300} height={300}/>
            <div className="py-2">
              <h3 className="text-xl">{event.title}</h3>
              <p> Time : {event.time}</p>
              <p> Date : {event.date}</p>
              <p className="text-justify"> Address : {event.address}</p>
              <button className="px-3 py-2 mr-3 mb-2 bg-green-300 rounded-lg text-slate-800"><Link href={`/admin/event/${event._id}`} target="_blank">Update Event</Link></button>
              <button className="px-3 py-2 bg-red-300 rounded-lg text-slate-800" onClick={() => handleDelete(event._id)}>Delete Event</button>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </section>
  );
};

export default Page;

