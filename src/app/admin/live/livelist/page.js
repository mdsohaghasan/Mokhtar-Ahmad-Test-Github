"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
const Plyr = dynamic(() => import("plyr-react"), { ssr: false });
import "plyr-react/plyr.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  // function getToken() {
  //   return localStorage.getItem('username');
  // }
  // const token = getToken();
  // console.log(token);

  // if (!token) {
  //   redirect("/admin/signin");
  // }

  const [Live, setLive] = useState([]);

  useEffect(() => {
    const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/live/all`;
    fetch(url, {
      // headers: {
      //   authorization: `Bearer ${token}`,
      // },
    })
      .then((res) => res.json())
      .then((data) => setLive(data))
      .catch((error) => {
        console.error("Error fetching program data:", error);
      });
  }, []);

  console.log(Live);

  const { reset } = useForm();

  const handleDelete = (id) => {
    console.log(id);
    const proceed = window.confirm("are you sure deleteing");
    if (proceed) {
      console.log(id);
      const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/live/delete/${id}`;
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
            const remaining = Live.filter((live) => Live._id !== id);
            setLive(remaining);
            if (remaining) {
              toast.success("Yah! Live is Deleted Successfully");
              reset();
            } else {
              toast.error("Ohh! Live is Deleted, Again..");
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
          <h4 className="st-section-heading-title">Live List</h4>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>

      <Link
        className="px-3 py-2  ml-5 bg-green-300 rounded-lg text-black text-lg"
        href={`/admin/live/addlive`}
        target="_blank"
      >
        {" "}
        Add Live
      </Link>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 pb-5 mt-2">
        {Live.map((live) => (
          <div className="bg-[#0a1e3b] p-3 m-2 rounded-lg" key={live.id}>
            <Plyr
              source={{
                type: "video",
                sources: [{ src: live.url, provider: "youtube" }],
              }}
            />
            {/* <Image src={Live.url} alt="blog thumbnail" /> */}
            <div className="py-2">
              <p> Title : {live.title}</p>
              {/* <p> Category : {live.category}</p> */}
              <p> Date : {new Date(live.createdOn).toLocaleDateString("en-GB")}</p>
            </div>
            <button className="px-3 py-2 mr-3 mb-2 bg-green-300 rounded-lg text-slate-800">
              <Link href={`/admin/live/${live._id}`} target="_blank">
                Update Live
              </Link>
            </button>
            <button className="px-3 py-2 bg-red-300 rounded-lg text-slate-800" onClick={() => handleDelete(live._id)} >
              Delete Live
            </button>
          </div>
        ))}
      </div>
      <ToastContainer />
    </section>
  );
};

export default Page;
