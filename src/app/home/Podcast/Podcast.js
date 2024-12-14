"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import podcast from "./Podcast.jpeg";
import title from "./title.png";
import btnPart from "./btn-part.png";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const Podcast = () => {
  const [Podcast, setPodcast] = useState([]);

  useEffect(() => {
    const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/podcast/all`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPodcast(data))
      .catch((error) => {
        console.error("Error fetching program data:", error);
      });
  }, []);

  const slicedPodcast = Podcast.slice(-8);

  // Store refs and playing status for each podcast
  const audioRefs = useRef({});
  const [playingId, setPlayingId] = useState(null);

  const togglePlay = (id) => {
    if (playingId !== id) {
      if (audioRefs.current[playingId]) {
        audioRefs.current[playingId].pause();
      }
      audioRefs.current[id].play();
      setPlayingId(id);
    } else {
      audioRefs.current[id].pause();
      setPlayingId(null);
    }
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section id="podcast">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container lg:px-5">
        <div className="lg:flex justify-center">
          <div className="bg-[#101624] py-4">
            <div className="title" data-aos="fade-up" data-aos-duration="800">
              <Image src={title} alt="play" />
            </div>
            <div
              className="podcastButton grid grid-cols-2 gap-3 px-5"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              {slicedPodcast.map((podcast) => (
                <div
                  className="bg-gradient-to-b from-[#333333] to-[#000000] rounded flex justify-start items-center"
                  key={podcast._id}
                >
                  <div>
                    <audio
                      ref={(el) => (audioRefs.current[podcast._id] = el)}
                      src={podcast.audioUrl}
                    />
                    <button onClick={() => togglePlay(podcast._id)}>
                      {playingId === podcast._id ? (
                        <i className="bi bi-pause-fill text-3xl ms-3"></i>
                      ) : (
                        <i className="bi bi-play-fill text-3xl ms-3"></i>
                      )}
                    </button>
                  </div>
                  <Image src={btnPart} alt="btn" className="part mx-3"></Image>
                  <span className="text-[#D6D6D6] text-1xl">
                     Iman Booster
                  </span>
                </div>
              ))}
            </div>
            <div className="flex justify-center my-3">
              <button
                className="border-[#6D6E71] border-2 py-1 px-10 text-white rounded-xl"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <Link href="/podcast" target="_blank">
                  See More
                </Link>
              </button>
            </div>
          </div>
          <div
            className="self-center md:hidden lg:block"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <Image src={podcast} alt="podcast" />
          </div>
        </div>
      </div>

      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
  );
};

export default Podcast;
