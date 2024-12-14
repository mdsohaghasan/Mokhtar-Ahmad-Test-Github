"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";

 const ProgramList =  () =>  {
  

  // function getToken() {
  //   return localStorage.getItem('accessToken');
  // }
  // const token = getToken();
  // console.log(token);
  
  

  // if (!token) {
  //   // Assuming 'redirect' is a function that performs redirection
  //   // You might need to replace this with your actual redirection logic
  //   redirect("/admin/signin");
  // }

  const [Program, setProgram] = useState([]);

  useEffect(() => {
    const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/program/all`;
    fetch(url, {
      // headers: {
      //   authorization: `Bearer ${token}`,
      // },
    })
    .then((res) => res.json())
    .then((data) => setProgram(data))
    .catch((error) => {
      console.error("Error fetching program data:", error);
    });
  }, []);

  console.log(Program);

      

  return (
    <section className="container">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">Upcoming Program  </h4>
        </div>
      </div>

      <div className="relative overflow-x-auto  pb-5">
        <table className="w-full text-xl text-left text-slate-800  ">
          <thead className=" text-slate-800 uppercase bg-[#b7d2ff]  ">
            <tr>
              <th scope="col" className="px-3 py-3">
                Program name
              </th>
              <th scope="col" className="px-3 py-3">
                Date
              </th>
              <th scope="col" className="px-3 py-3">
                Address
              </th>
              <th scope="col" className="px-3 py-3">
                Status
              </th>
              <th scope="col" className="px-3 py-3">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
          {Program.map((program) => (
            <tr className="bg-[#0a1e3b] hover:bg-[#113362] font-normal text-slate-200  rounded-lg border-t" key={program.id}>
              <th className="px-3 py-3">{program.programTitle} </th>
              <td className="px-3 py-3">{program.programDate}</td>
              <td className="px-3 py-3">{program.district}</td>
              <td className="px-3 py-3">Confirmed</td>
              <td className="px-3 py-3 text-blue-400">
              <Link href={`/admin/program/${program._id}`} target="_blank">Details</Link>
              </td>
            </tr>
          ))} 
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProgramList;
