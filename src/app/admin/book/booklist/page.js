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

  
  const [Book, setBook] = useState([]);

  useEffect(() => {
    const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/book/all`;
    fetch(url, {
      // headers: {
      //   authorization: `Bearer ${token}`,
      // },
    })
    .then((res) => res.json())
    .then((data) => setBook(data))
    .catch((error) => {
      console.error("error fetching program data:", error);
    });
  }, []);

  console.log(Book);

// EVENT HANDLER FOR DELETE BUTTON

const {  reset,  } = useForm();

const handleDelete = (id) => {
  console.log(id);
      const proceed = window.confirm("are you sure deleteing book");
      if (proceed) {
        console.log(id);
        const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/Book/${id}`;
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
              const remaining = Book.filter((book) => book._id !== id);
              setBook(remaining);
              if (remaining) {
                toast.success("Yah! Book is Deleted Successfully");
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
          <h4 className="st-section-heading-title">Book List</h4>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>
      <Link className="px-3 py-2  ml-5 bg-green-300 rounded-lg text-black text-lg" href={`/admin/book/addbook`} target="_blank">Add Book</Link>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 px-1 pb-5 mt-2">
        {Book.map((book) => (
          <div className="bg-[#0a1e3b] p-3 m-2 rounded-lg" key={book.id}>
            <Image src={book.url} alt="blog thumbnail" width={200} height={400} />
            <div className="py-2">
              <h3 className="text-xl">{book.title}</h3>
              <p className="text-justify">{book.des}</p>
              <p> Author : {book.author}</p>
              <button className="px-3 py-2 mr-3 mb-2 bg-green-300 rounded-lg text-slate-800"><Link href={`/admin/book/${book._id}`} target="_blank">Update Book</Link></button>
              <button className="px-3 py-2 bg-red-300 rounded-lg text-slate-800" onClick={() => handleDelete(book._id)}>Delete Book</button>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </section>
  );
};

export default Page;

