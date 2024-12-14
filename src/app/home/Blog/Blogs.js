"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const Blogs = () => {
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

  const slicedBlogs = Blog.slice(-3);

  // AOS Animation ......... 
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section className="container">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">BLOG</h4>
          <h2 className="st-section-heading-subtitle">NEWS</h2>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>

      {/* <!-- Latest News Container --> */}
      <div className="lg:px-5">
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lx:grid-cols-3 justify-items-center">
          {slicedBlogs.map((post) => {
            
            return (
              <div className="w-11/12" key={post.id} data-aos="zoom-out-up" data-aos-duration="800" data-aos-delay="300">
                <Link href={`/blog/details?postId=${post._id}`}>
                  <div className="st-post-thumb st-zoom">
                    <Image
                      src={post.url}
                      alt={post.title}
                      className="st-zoom-in"
                      width={400}
                      height={400}
                    />
                  </div>
                  <div className="my-2">
                    <span>By :</span>{" "}
                    <span className="text-[#fec544]">{post.author}</span>
                    <span className="px-1">|</span>
                    <span className="text-[#fec544]">
                    {new Date(post.date).toLocaleDateString("en-GB")}
                      </span>
                  </div>
                  <h4 className="st-post-title">{post.title}</h4>
                </Link>
              </div>
            );
          })}
        </div>

        {/* See blog page button */}
        <div className="flex justify-center py-3" data-aos="fade-up" data-aos-duration="800">
          <Link
            href="/blog"
            className="st-btn st-style1 st-color1 st-smooth-move">
            See Post
          </Link>
        </div>
      </div>
      <div className="st-height-b95 st-height-lg-b75"></div>
    </section>
  );
};

export default Blogs;
