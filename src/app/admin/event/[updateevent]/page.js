"use client";
import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const Page = ({params}) => {
    const { updateevent } = params;

  // function getToken() {
  //   return localStorage.getItem('username');
  // }
  // const token = getToken();
  // console.log(token);

  // if (!token) {
  //   redirect("/admin/signin");
  // }

  // Event Post default form value in form ...

  const [event, setEvent] = useState([]);

  useEffect(() => {
    const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/event/details/${updateevent}`;
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
  }, [updateevent]);

  console.log(event);



  // Event Post update ...
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const eventInfo = {
      title: data.title,
      time: data.time,
      date: data.date,
      image: data.image,
      address: data.address,
    };
    console.log(eventInfo);

    const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/event/update/${updateevent}`;
    fetch(url, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(eventInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("Event er data Paichi", result);
        if (result) {
          toast.success("Yah! Event is Updated Successfully");
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
            <h4 className="st-section-heading-title">Update Event</h4>
          </div>
          <div className="st-height-b25 st-height-lg-b25"></div>
        </div>
        
        {/* <!-- Contact Container --> */}

        <div className="container">
          <div className="flex">
            <div className="basis-2/12	"></div>
            <div className="basis-8/12">
              <div id="st-alert"></div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                action="#"
                method="PUT"
                className="st-contact-form"
                id="contact-form"
              >
                <div className="st-form-field">
                  <input
                    defaultValue={event.title}
                    type="text"
                    {...register("title", { required: true })}
                  />
                  {errors.title && (
                    <p className="text-red"> event title is required.</p>
                  )}
                </div>

                <div className="st-form-field">
                  <input
                    defaultValue={event.time}
                    type="time"
                    {...register("time", { required: true })}
                  />
                  {errors.time && (
                    <p className="text-red">event is required.</p>
                  )}
                </div>

                <div className="st-form-field">
                  <input
                     defaultValue={event.date}
                    type="date"
                    {...register("date", { required: true })}
                  />
                  {errors.date && (
                    <p className="text-red">event date is required.</p>
                  )}
                </div>

                <div className="st-form-field">
                  <input
                     defaultValue={event.image}
                    type="text"
                    {...register("image", { required: true })}
                  />
                  {errors.image && (
                    <p className="text-red">event thumbnail is required.</p>
                  )}
                </div>

                <div className="st-form-field">
                  <textarea
                    cols="30"
                    rows="10"
                    defaultValue={event.address}
                    type="text"
                    {...register("address", { required: true })}
                  />
                  {errors.address && (
                    <p className="text-red">event address is required.</p>
                  )}
                </div>

                <button
                  className="st-btn st-style1 st-color1"
                  type="submit"
                  id="submit"
                  name="submit"
                >
                  Update Event
                </button>
              </form>
            </div>
            <div className="basis-2/12	"></div>
            <div className="st-height-b0 st-height-lg-b30"></div>
          </div>
        </div>
        <div className="st-height-b100 st-height-lg-b80"></div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default Page;
