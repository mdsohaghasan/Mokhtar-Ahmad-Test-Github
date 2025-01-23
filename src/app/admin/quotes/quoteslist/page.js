"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
const Plyr = dynamic(() => import("plyr-react"), { ssr: false });
import "plyr-react/plyr.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import quote from "./quote.png";
import Image from "next/image";


const Page = () => {
  // function getToken() {
  //   return localStorage.getItem('username');
  // }
  // const token = getToken();
  // console.log(token);

  // if (!token) {
  //   redirect("/admin/signin");
  // }

  const [Quotes, setQuotes] = useState([]);

  useEffect(() => {
    // const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/quotes/all`;
    const url = `http://localhost:5000/quotes/All`;
    fetch(url, {
      // headers: {
      //   authorization: `Bearer ${token}`,
      // },
    })
      .then((res) => res.json())
      .then((data) => setQuotes(data))
      .catch((error) => {
        console.error("Error fetching program data:", error);
      });
  }, []);

  console.log(Quotes);

  const { reset } = useForm();

  const handleDelete = (id) => {
    console.log(id);
    const proceed = window.confirm("are you sure deleteing");
    if (proceed) {
      console.log(id);
      // const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/quotes/delete/${id}`;
      const url = `http://localhost:5000/quotes/delete/${id}`;
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
            const remaining = Quotes.filter((quotes) => quotes._id !== id);
            setQuotes(remaining);
            if (remaining) {
              toast.success("Yah! Quotes is Deleted Successfully");
              reset();
            } else {
              toast.error("Ohh! Quotes is Deleted, Again..");
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
          <h4 className="st-section-heading-title">Quotes List</h4>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>

      <Link
        className="px-3 py-2  ml-5 bg-green-300 rounded-lg text-black text-lg"
        href={`/admin/quotes/addquotes`}
        target="_blank"
      >
        {" "}
        Add Quotes
      </Link>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2  gap-1 py-2 mt-4 mb-2">
        {Quotes.map((quotes) => (

          <div className="bg-slate-900 p-3 rounded-lg" key={quotes.id}>

              <div className="flex gap-3 rounded-lg " key={quotes.id}>
                  <div className="w-full">
                    <Image src={quote} alt="quote" className="w-12"/>
                    <p className="text-xl">{quotes.text}</p>
                    <h3 className="text-xl text-amber-400">{quotes.name}</h3>
                  </div>
              </div>

            <button className="px-3 py-2 mr-3 mb-2 bg-green-300 rounded-lg text-slate-800">
              <Link href={`/admin/quotes/${quotes._id}`} target="_blank">
                Update Quotes
              </Link>
            </button>
            <button className="px-3 py-2 bg-red-300 rounded-lg text-slate-800" onClick={() => handleDelete(quotes._id)}>
              Delete Quotes
            </button>
          </div>

        ))}
      </div>
      <ToastContainer />
    </section>
  );
};

export default Page;
