"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page =  () => {

  // function getToken() {
  //   return localStorage.getItem('accessToken');
  // }
  // const token = getToken();
  // console.log(token);

  // if (!token) {
  //   redirect("/admin/signin");
  // }

  
  const [Podcast, setPodcast] = useState([]);

  useEffect(() => {
    const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/podcast/all`;
    fetch(url, {
      // headers: {
      //   authorization: `Bearer ${token}`,
      // },
    })
    .then((res) => res.json())
    .then((data) => setPodcast(data))
    .catch((error) => {
      console.error("Error fetching program data:", error);
    });
  }, []);

  console.log(Podcast);

// EVENT HANDLER FOR DELETE BUTTON

const {  reset,  } = useForm();

const handleDelete = (id) => {
  console.log(id);
      const proceed = window.confirm("are you sure deleteing");
      if (proceed) {
        console.log(id);
        const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/podcast/delete/${id}`;
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
              const remaining = Podcast.filter((podcast) => podcast._id !== id);
              setPodcast(remaining);
              if (remaining) {
                toast.success("Yah! Podcast is Deleted Successfully");
                reset();
              } else {
                toast.error("Ohh! Something went wrong, Again..");
              }
            }
          });
      }
};


  return (
    <section className="container">
      <div className="container">
      <div className="st-height-b100 st-height-lg-b80"></div>
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">Podcast List</h4>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>
      <Link className="px-3 py-2  ml-5 bg-green-300 rounded-lg text-black text-lg" href={`/admin/podcast/addpodcast`} target="_blank"> Add Podcast</Link>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1 justify-center px-1 pb-5 mt-2">
        {Podcast.map((podcast) => (
          <div className="bg-[#0a1e3b] p-3 m-2 rounded-lg" key={podcast.id}>
            <Image src={podcast.url} alt="blog thumbnail" width={500} height={500} />
            <div className="py-2">
              <h3 className="text-xl">{podcast.title}</h3>
              <p> Lecturer : {podcast.lecturer}</p>
              <p> Date : {podcast.date}</p>
              <audio controls>
                <source src={podcast.audio} type="audio/ogg" />
                <source src={podcast.audio} type="audio/mpeg" />
              </audio>
              <button className="px-3 py-2 mr-3 mb-2 bg-green-300 rounded-lg text-slate-800"><Link href={`/admin/podcast/${podcast._id}`} target="_blank">Update podcast</Link></button>
              <button className="px-3 py-2  my-3 bg-red-300 rounded-lg text-slate-800" onClick={() => handleDelete(podcast._id)}>Delete podcast</button>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </section>
  );
};

export default Page;

