"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import mokhter from "./mokhter.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Events = () => {
  const [Event, setEvent] = useState([]);

  useEffect(() => {
    const url = "https://mokhter-ahmad-backend-portfolio.vercel.app/event/all";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setEvent(data))
      .catch((error) => {
        console.error("Error fetching program data:", error);
      });
  }, []);

  // slicedEvent
  const slicedEvent = Event.slice(-3);

  // AOS Animation ......... 
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section>
      <div className="container">
        <div className="st-height-b100 st-height-lg-b80"></div>

        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">Events</h4>
          <h2 className="st-section-heading-subtitle">Events</h2>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
        <div className="lg:px-5">
          <div className="lg:flex gap-3">
            <div
              className="bg-[#101624] basis-2/5 relative"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <Image src={mokhter} alt="Mokhtar Ahmad" />

              <div className="lg:py-3 bg-[#101624] absolute bottom-0 w-full">
                <div className="title">
                  <h3 className="text-xl ps-1.5 m-0">
                    Lecture Session On Positive Parenting
                  </h3>
                  <div className="">
                    <i className="bi bi-geo-alt-fill"></i>
                    <span className="px-2 text-base">
                      Adv. Tarek Memorial Auditorium, Mymensingh
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="bg-[#101624] basis-3/5"
              data-aos="fade-left"
              data-aos-duration="300"
            >
              {slicedEvent.map((event) => {
              
                // Convert 12-Hours Time Formate to 24-Hours Time Formate
                const formattedTime = new Date(`1970-01-01T${event.time}`).toLocaleTimeString(
                  "en-US",
                  {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true, 
                  }
                );

                return (
                  <div
                    className="flex p-3"
                    key={event.id}
                    data-aos="fade-up"
                    data-aos-duration="800"
                  >
                    <div className="date basis-1/5">
                      <h4 className="text-lg text-[#FEC544] m-0">
                      {new Date(event.date).toLocaleDateString("en-GB")}
                      </h4>
                      <h6 className="text-lg">
                        {formattedTime}
                        </h6>
                    </div>

                    <div className="thumbnail basis-1/5">
                    <Image
                      src={event.image}
                      alt="quran"
                      className="rounded-lg"
                      width={200}
                      height={200}
                    ></Image>
                  
                    </div>
                    <div className="title basis-3/5">
                      <h3 className="text-xl px-3 m-0">{event.title}</h3>
                      <div className="px-3">
                        <i className="bi bi-broadcast"></i>
                        <span className="px-2">{event.address}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="st-height-b100 st-height-lg-b80"></div>
      </div>
    </section>
  );
};

export default Events;
