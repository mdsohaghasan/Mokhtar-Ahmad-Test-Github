"use client";
import React from "react";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const Page = () => {
  // function getToken() {
  //   return localStorage.getItem('username');
  // }
  // const token = getToken();
  // console.log(token);

  // if (!token) {
  //   redirect("/admin/signin");
  // }

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

    const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/event/add`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(eventInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("Event er data Paichi", result);
        if (result) {
          toast.success("Yah! Event is Added Successfully");
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
            <h4 className="st-section-heading-title">Add Event</h4>
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
                method="POST"
                className="st-contact-form"
                id="contact-form"
              >
                <div className="st-form-field">
                  <input
                    placeholder="Event Title"
                    type="text"
                    {...register("title", { required: true })}
                  />
                  {errors.title && (
                    <p className="text-red"> event title is required.</p>
                  )}
                </div>

                <div className="st-form-field">
                  <input
                    placeholder="Event Time"
                    type="time"
                    {...register("time", { required: true })}
                  />
                  {errors.time && (
                    <p className="text-red">event is required.</p>
                  )}
                </div>

                <div className="st-form-field">
                  <input
                    placeholder="Event Date"
                    type="date"
                    {...register("date", { required: true })}
                  />
                  {errors.date && (
                    <p className="text-red">event date is required.</p>
                  )}
                </div>

                <div className="st-form-field">
                  <input
                    placeholder="Event Thumbnail"
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
                    placeholder="Event Address"
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
                  Submit Event
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
