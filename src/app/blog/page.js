"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const Page = () => {
  const [Blog, setBlog] = useState([]);

  useEffect(() => {
    const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/blog/all`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch((error) => {
        console.error("Error fetching program data:", error);
      });
  }, []);

  console.log(Blog);

  // AOS Animation ......... 
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section id="blog">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">BLOG</h4>
          <h2 className="st-section-heading-subtitle">LATEST NEWS</h2>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>

      <div className="lg:flex container gap-8 p-8">
        <div className="lg:basis-3/4">
          <div className="grid md:grid-cols-2 gap-8">
            {Blog.map((post) => {

              return (
                <div key={post._id} data-aos="fade-up">
                  <Link href={`/blog/details?postId=${post._id}`}>
                    <div className="slick-slide-in">
                      <div
                        className="st-post-single st-style1"
                        data-aos-duration="800"
                        data-aos-delay="300"
                      >
                        <div className="st-post-thumb st-zoom">
                          <Image
                            src={post.url}
                            className="st-zoom-in"
                            alt="blog1"
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="st-post-info">
                          <div className="st-post-date">
                            By:
                            <span className="st-post-author">{post.author}</span>
                            <span className="st-post-date-divider">|</span>
                            <span className="st-post-publish-date">
                            {new Date(post.date).toLocaleDateString("en-GB")}

                            </span>
                          </div>
                          <h4 className="st-post-title">{post.title}</h4>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:basis-1/4 bg-[#070D1B] p-4">
          <div>
            <h2>Categories</h2>
          </div>
          <div>
            <ul className="text-xl">
              {Blog.map((post) => (
                <li key={post.id}>
                  <a href="#">{post.category}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
  );
};

export default Page;
