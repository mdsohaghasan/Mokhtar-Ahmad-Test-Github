"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";

const PostDetails = () => {
  const params = useParams(); // Get dynamic route params
  const searchParams = useSearchParams();
  const postId = searchParams.get("postId");
  const id = postId ? postId : params?.id; 

  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const fetchBlogData = async () => {
      try {
        const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/blog/details/${id}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch blog data.");
        }
        const data = await response.json();
        setBlogData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog data:", error);
        setLoading(false);
      }
    };
    fetchBlogData();
    
  }, [id]);

  console.log("PostDetails:", params, id, blogData);

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (!blogData) {
    return <div>No blog data found!</div>; 
  }

  return (
    <section id="blog">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">BLOG</h4>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>
      <div className="lg:flex container gap-8">
        <div className="lg:basis-3/4">
          <div className="st-post-single st-style1">
            <div className="st-post-thumb st-zoom">
              <Image
                src={blogData.url}
                alt={blogData.title}
                width={800}
                height={400}
                layout="responsive"
              />
            </div>
            <div className="st-post-info">
              <div className="st-post-date">
                By: <span className="st-post-author">{blogData.author}</span>
                <span className="st-post-date-divider">|</span>
                <span className="st-post-publish-date">
                  {new Date(blogData.date).toLocaleDateString("en-GB")}
                </span>
                <span className="st-post-date-divider">|</span>
                <span className="st-post-publish-category">
                  {blogData.category}
                </span>
              </div>
              <h3 className="st-post-title">{blogData.title}</h3>
              <p className="py-5">{blogData.des}</p>
            </div>
          </div>
        </div>

        <div className="lg:basis-1/4 bg-[#070D1B] p-4">
          <div>
            <h2>Categories</h2>
          </div>
          <div>
            <ul className="text-xl">
              <li>
                <a href="#">Quran & Sunnah</a>
              </li>
              <li>
                <a href="#">Self Development</a>
              </li>
              <li>
                <a href="#">Islamic Spirituality</a>
              </li>
              <li>
                <a href="#">Islamic History</a>
              </li>
              <li>
                <a href="#">Islamic Philosophy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
  );
};

export default PostDetails;
