"use client";
import React, { useEffect, useRef, useState } from "react";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import district from "../../../applyProgram/districts.json";
import policeStation from "../../../applyProgram/policeStation.json";
import volunteer from '../../../applyProgram/volunteersNumber.json';
import Image from "next/image";

const Page = ({ params }) => {
  const { updateprogram } = params;

  // function getToken() {
  //   return localStorage.getItem('username');
  // }
  // const token = getToken();
  // console.log(token);

  // if (!token) {
  //   redirect("/admin/signin");
  // }

  // Blog Post default form value in form ...

  const [program, setProgram] = useState([]);

  useEffect(() => {
    const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/program/details/${updateprogram}`;
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
  }, [updateprogram]);

  console.log(program);

  // PROGRAM HANDLER FOR DELETE BUTTON
  const { reset } = useForm();
  const handleDelete = (id) => {
    console.log(id);
    const proceed = window.confirm("are you sure deleteing");
    if (proceed) {
      console.log(id);
      const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/program/delete/${updateprogram}`;
      fetch(url, {
        method: "DELETE",
        // headers: {
        //   authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        // },
      })
        .then((res) => res.json())
        .then((result) => {
          console.log("Post er data Paichi", result);
          if (result) {
            toast.success("Yah! Post Deleted Successfully");
            reset();
          } else {
            toast.error("Ohh!, Something went wrong, Again..");
          }
        });
    }
  };

  // PROGRAM UPDATE HANDLER
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: program,
  });

  const onSubmit = (data) => {
    const programInfo = {
      programAcceptance: "panding",
      programTitle: data.programTitle,
      programDate: data.programDate,
      startingLectureTime: data.startingLectureTime,
      endingLectureTime: data.endingLectureTime,
      lectureTopic: data.lectureTopic,
      applicants: data.applicants,
      applicantsNumber: data.applicantsNumber,
      googleMap: data.googleMap,
      placeName: data.placeName,
      district: data.district,
      policeStation: data.policeStation,
      village: data.village,
      venue: data.venue,
      venueDistance: data.venueDistance,
      guestsName: data.guestsName,
      collection: data.collection,
      presidentsName: data.presidentsName,
      presidentsNumber: data.presidentsNumber,
      volunteersNumber: data.volunteersNumber,
      chairmanPermission: data.chairmanPermission,
      policePermission: data.policePermission,
      totalProgram: data.totalProgram,
      lastDate: data.lastDate,
      lastProgramGguests: data.lastProgramGguests,
    };

    console.log(programInfo);

    const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/program/update/${updateprogram}`;
    fetch(url, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(programInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("Post er data Paichi", result);
        if (result) {
          toast.success("Yah! Program Updated Successfully");
          reset();
        } else {
          toast.error("Ohh! Something went wrong, Again..");
        }
      });
  };

  //  // Confiremation Function .........
  //  const [isPlaying, setIsPlaying] = useState(false);

  //  const togglePlay = () => {
  //      if (isPlaying) {
  //       setIsPlaying();
  //      } else {
  //       setIsPlaying();
  //      }
  //      setIsPlaying(!isPlaying);
  //  };

  // console.log(isPlaying)

  return (
    <section className="container">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">Program Details</h4>
          <h2 className="st-section-heading-subtitle">Program </h2>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>

      {/* <button className="px-3 py-2 mx-2  bg-green-300 rounded-lg text-slate-800"><Link href={`/admin/program/edit/${program._id}`} target="_blank">
        Update Program</Link></button> */}

      <form
        onSubmit={handleSubmit(onSubmit)}
        action="#"
        method="POST"
        className="st-contact-form"
        id="contact-form"
      >
        <div className="flex justify-end">
          <button
            className="px-3 py-2 mx-2  bg-green-300 rounded-lg text-slate-800"
            type="submit"
            id="submit"
            name="submit"
          >
            Update Program
          </button>
          <button
            className="px-3 py-2 sm:mx-3 bg-red-300 rounded-lg text-slate-800"
            onClick={() => handleDelete(program._id)}
          >
            Delete Program
          </button>
        </div>
        <div className="my-3 bg-[#0a1e3b] px-5 py-5 rounded-lg">
          <table className="w-full text-xl text-left text-slate-800">
            <tbody className="">
              <tr className=" font-normal text-slate-300  rounded-lg">
                <th className="py-3 ">Program Status </th>
                <td className="py-3 ">:</td>
                <td className="px-3 py-3 flex">
                  <div>
                    {program.programAcceptance === "panding" ? (
                      <span className="px-3 py-2 bg-orange-300 rounded-lg text-slate-800">
                        {" "}
                        Pending{" "}
                      </span>
                    ) : (
                      <span className="px-3 py-2 bg-green-300 rounded-lg text-slate-800">
                        {" "}
                        Confirmed{" "}
                      </span>
                    )}
                  </div>
                  <div className="px-5">
                    <input
                      {...register("programAcceptance", { required: true })}
                      type="radio"
                      id="panding"
                      value="panding"
                    />
                    <label for="panding" className="text-white pl-2 pr-5">
                      Pending
                    </label>
                    <input
                      {...register("programAcceptance", { required: true })}
                      type="radio"
                      id="confirm"
                      value="confirm"
                    />
                    <label for="confirm" className="text-white px-2">
                      Confirm
                    </label>
                  </div>
                </td>
              </tr>

              <tr className=" font-normal text-slate-300  rounded-lg ">
                <th className=" py-3">Program Title </th>
                <td className=" py-3">:</td>
                <td className="px-3 py-3">
                  <div>
                    <input
                      defaultValue={program?.programTitle}
                      type="text"
                      {...register("programTitle", { required: true })}
                      className="w-full px-2 py-2 rounded text-white bg-[#08101d] border-1"
                    />
                    {errors.programTitle && (
                      <p className="text-red ml-3">
                        program title is required.
                      </p>
                    )}
                  </div>
                </td>
              </tr>

              <tr className=" font-normal text-slate-300  rounded-lg">
                <th className=" py-3">Program Proposed Date </th>
                <td className=" py-3">:</td>
                <td className="px-3 py-3">
                  <div>
                    <input
                      defaultValue={program?.programDate}
                      type="date"
                      {...register("programDate", { required: true })}
                      className="w-full px-2 py-2 rounded text-white bg-[#08101d] border-1"
                    />
                    {errors.programDate && (
                      <p className="text-red ml-3">program date is required.</p>
                    )}
                  </div>
                </td>
              </tr>

              <tr className=" font-normal text-slate-300  rounded-lg">
                <th className=" py-3"> Lecture Starting Time</th>
                <td className=" py-3">:</td>
                <td className="px-3 py-3">
                  <div>
                    <input
                      defaultValue={program?.startingLectureTime}
                      type="time"
                      {...register(" startingLectureTime", { required: true })}
                      className="w-full px-2 py-2 rounded text-white bg-[#08101d] border-1"
                    />
                    {errors.startingLectureTime && (
                      <p className="text-red ml-3">lecture time is required.</p>
                    )}
                  </div>
                </td>
              </tr>

              <tr className=" font-normal text-slate-300  rounded-lg">
                <th className=" py-3">Lecture Ending Time</th>
                <td className=" py-3">:</td>
                <td className="px-3 py-3">
                  <div>
                    <input
                      defaultValue={program?.endingLectureTime}
                      type="time"
                      {...register("endingLectureTime", { required: true })}
                      className="w-full px-2 py-2 rounded text-white bg-[#08101d] border-1"
                    />
                    {errors.endingLectureTime && (
                      <p className="text-red ml-3">lecture time is required.</p>
                    )}
                  </div>
                </td>
              </tr>

              <tr className=" font-normal text-slate-300  rounded-lg">
                <th className=" py-3">Topic of the Lecture </th>
                <td className=" py-3">:</td>
                <td className="px-3 py-3">
                  <div>
                    <input
                      defaultValue={program?.lectureTopic}
                      type="text"
                      {...register("lectureTopic", { required: true })}
                      className="w-full px-2 py-2 rounded text-white bg-[#08101d] border-1"
                    />
                    {errors.lectureTopic && (
                      <p className="text-red ml-3">
                        lecture topic is required.
                      </p>
                    )}
                  </div>
                </td>
              </tr>

              <tr className="font-normal text-slate-300  rounded-lg">
                <th className=" py-3">Program Applicants Name </th>
                <td className=" py-3">:</td>
                <td className="px-3 py-3">
                  <div>
                    <input
                      defaultValue={program?.applicants}
                      type="text"
                      {...register("applicants", { required: true })}
                      className="w-full px-2 py-2 rounded text-white bg-[#08101d] border-1"
                    />
                    {errors.applicants && (
                      <p className="text-red ml-3">
                        applicants name is required.
                      </p>
                    )}
                  </div>
                </td>
              </tr>

              <tr className=" font-normal text-slate-300  rounded-lg">
                <th className=" py-3">Program Applicants Mobile Number </th>
                <td className=" py-3">:</td>
                <td className="px-3 py-3">
                  <div>
                    <input
                      defaultValue={program.applicantsNumber}
                      type="number"
                      {...register("applicantsNumber", { required: true })}
                      className="w-full px-2 py-2 rounded text-white bg-[#08101d] border-1"
                    />
                    {errors.applicantsNumber && (
                      <p className="text-red ml-3">
                        applicants number is required.
                      </p>
                    )}
                  </div>
                </td>
              </tr>

              <tr className=" font-normal text-slate-300  rounded-lg">
                <th className=" py-3">Program Google Map Link </th>
                <td className=" py-3">:</td>
                <td className="px-3 py-3">
                  <div>
                    <input
                      defaultValue={program.googleMap}
                      type="text"
                      {...register("googleMap", { required: true })}
                      className="w-full px-2 py-2 rounded text-white bg-[#08101d] border-1"
                    />
                    {errors.googleMap && (
                      <p className="text-red ml-3">google map is required.</p>
                    )}
                  </div>
                </td>
              </tr>

              <tr className=" font-normal text-slate-300  rounded-lg">
                <th className=" py-3">Program Place Name / Road </th>
                <td className=" py-3">:</td>
                <td className="px-3 py-3">
                  <div>
                    <input
                      defaultValue={program.placeName}
                      type="text"
                      {...register("placeName", { required: true })}
                      className="w-full px-2 py-2 rounded text-white bg-[#08101d] border-1"
                    />
                    {errors.placeName && (
                      <p className="text-red ml-3">place name is required.</p>
                    )}
                  </div>
                </td>
              </tr>

              <tr className=" font-normal text-slate-300  rounded-lg">
                <th className=" py-3">District Of Program </th>
                <td className=" py-3">:</td>
                <td className="px-3 py-3">
                  <div>
                    <select
                      {...register("district", { required: true })}
                      className="border border-[#232935] rounded text-white bg-[#08101d] border-1 p-2.5"
                    >
                      <option className="text-black text-xl p-5 m-5 bg-slate-200">
                        {program.district}
                      </option>
                      {district.map((value) => (
                        <option
                          value={value.name}
                          key={value.id}
                          className="text-black text-xl p-5 m-5 bg-slate-200"
                        >
                          {value.name}
                        </option>
                      ))}
                    </select>
                    {errors.district && (
                      <p className="text-red ml-3">district is required.</p>
                    )}
                  </div>
                </td>
              </tr>

              <tr className=" font-normal text-slate-300  rounded-lg">
                <th className=" py-3">Police Station Of Program</th>
                <td className="py-3">:</td>
                <td className="px-3  py-3">
                  <div>
                    <select
                      {...register("policeStation", { required: true })}
                      className="border border-[#232935] rounded text-white bg-[#08101d] border-1 p-2.5"
                    >
                      <option className="text-black text-xl p-5 m-5 bg-slate-200">
                        {program.policeStation}
                      </option>
                      {policeStation.map((value) => (
                        <option
                          value={value.name}
                          key={value.id}
                          className="text-black text-xl p-5 m-5 bg-slate-200"
                        >
                          {value.name}
                        </option>
                      ))}
                    </select>
                    {errors.policeStation && (
                      <p className="text-red ml-3">
                        policeStation name is required.
                      </p>
                    )}
                  </div>
                </td>
              </tr>

              <tr className=" font-normal text-slate-300  rounded-lg">
                <th className=" py-3">Village Of Program </th>
                <td className="py-3">:</td>
                <td className="px-3 py-3">
                  <div>
                    <input
                      defaultValue={program.village}
                      type="text"
                      {...register("village", { required: true })}
                      className="w-full px-2 py-2 rounded text-white bg-[#08101d] border-1"
                    />
                    {errors.village && (
                      <p className="text-red ml-3">village name is required.</p>
                    )}
                  </div>
                </td>
              </tr>

              <tr className=" font-normal text-slate-300  rounded-lg">
                <th className=" py-3">Name of the venue </th>
                <td className=" py-3">:</td>
                <td className="px-3 py-3">
                  <div>
                    <input
                      defaultValue={program.venue}
                      type="text"
                      {...register("venue", { required: true })}
                      className="w-full px-2 py-2 rounded text-white bg-[#08101d] border-1"
                    />
                    {errors.venue && (
                      <p className="text-red ml-3">venue name is required.</p>
                    )}
                  </div>
                </td>
              </tr>

              <tr className=" font-normal text-slate-300  rounded-lg">
                <th className=" py-3">Venue Distance from District</th>
                <td className=" py-3">:</td>
                <td className="px-3 py-3">
                  <div>
                    <input
                      defaultValue={program.venueDistance}
                      type="text"
                      {...register("venueDistance", { required: true })}
                      className="w-full px-2 py-2 rounded text-white bg-[#08101d] border-1"
                    />
                    {errors.venueDistance && (
                      <p className="text-red">venue distance is required.</p>
                    )}
                  </div>
                </td>
              </tr>

              <tr className=" font-normal text-slate-300  rounded-lg">
                <th className=" py-3">Other Guests Name of the Program </th>
                <td className=" py-3">:</td>
                <td className="px-3 py-3">
                  <div>
                    <input
                      defaultValue={program.guestsName}
                      type="text"
                      {...register("guestsName", { required: true })}
                      className="w-full px-2 py-2 rounded text-white bg-[#08101d] border-1"
                    />
                    {errors.guestsName && (
                      <p className="text-red ml-3">Guests Name is required.</p>
                    )}
                  </div>
                </td>
              </tr>

              <tr className=" font-normal text-slate-300  rounded-lg">
                <th className=" py-3">Fund Collection </th>
                <td className=" py-3">:</td>
                <td className="px-3 py-3">
                  <div className="">
                    <input
                      {...register("fundCollection", { required: true })}
                      type="radio"
                      id="yes"
                      value="yes"
                    />
                    <label for="yes" className="text-white px-2">
                      Yes
                    </label>
                    <input
                      {...register("fundCollection", { required: true })}
                      type="radio"
                      id="no"
                      value="no"
                    />
                    <label for="no" className="text-white px-2">
                      No
                    </label>
                  </div>
                </td>
              </tr>

              <tr className=" font-normal text-slate-300  rounded-lg">
                <th className=" py-3">Presidents Name</th>
                <td className=" py-3">:</td>
                <td className="px-3 py-3">
                  <div>
                    <input
                      defaultValue={program.presidentsName}
                      type="text"
                      {...register("presidentsName", { required: true })}
                      className="w-full px-2 py-2 rounded text-white bg-[#08101d] border-1"
                    />
                    {errors.presidentsName && (
                      <p className="text-red ml-3">
                        presidents Name is required.
                      </p>
                    )}
                  </div>
                </td>
              </tr>

              <tr className=" font-normal text-slate-300  rounded-lg">
                <th className=" py-3">Presidents Mobile Number </th>
                <td className="py-3">:</td>
                <td className="px-3 py-3">
                  <div>
                    <input
                      defaultValue={program.presidentsNumber}
                      type="text"
                      {...register("presidentsNumber", { required: true })}
                      className="w-full px-2 py-2 rounded text-white bg-[#08101d] border-1"
                    />
                    {errors.presidentsNumber && (
                      <p className="text-red ml-3">
                        presidents number is required.
                      </p>
                    )}
                  </div>
                </td>
              </tr>

              <tr className=" font-normal text-slate-300  rounded-lg">
                <th className=" py-3">Number of Volunteers </th>
                <td className=" py-3">:</td>
                <td className=" px-3 py-3">
                  <div>
                    {/* <input
                      defaultValue={program.volunteersNumber}
                      type="text"
                      {...register("volunteersNumber", { required: true })}
                      className="w-full px-2 py-2 rounded text-white bg-[#08101d] border-1"
                    /> */}
                    <select
                      {...register("volunteersNumber", { required: true })}
                      className="border border-[#232935] rounded text-white bg-[#08101d] border-1 p-2.5"
                    >
                      <option className="text-black text-xl p-5 m-5 bg-slate-200">
                        {program.volunteersNumber}
                      </option>
                      {volunteer.map((value) => (
                        <option
                          value={value.number}
                          key={value.id}
                          className="text-black text-xl p-5 m-5 bg-slate-200"
                        >
                          {value.number}
                        </option>
                      ))}
                    </select>
                    {errors.volunteersNumber && (
                      <p className="text-red ml-3">
                        volunteers number is required.
                      </p>
                    )}
                  </div>
                </td>
              </tr>

              <tr className=" font-normal text-slate-300  rounded-lg">
                <th className="py-3">Chairman Permission of program </th>
                <td className=" py-3">:</td>
                <td className="px-3 py-3">
                  <div>
                    <Image className="my-2 border rounded-md" src="https://gcdnb.pbrd.co/images/aVpG4P7442lM.jpg?o=1" alt="police" width={100} height={100}/>
                    <input
                      defaultValue={program.chairmanPermission}
                      type="file"
                      {...register("chairmanPermission", { required: true })}
                      className="w-full px-2 py-2 rounded text-white bg-[#08101d] border-1"
                    />
                    {errors.chairmanPermission && (
                      <p className="text-red ml-3">
                        chairmanPermission criteria is required.
                      </p>
                    )}
                  </div>
                </td>
              </tr>

              <tr className=" font-normal text-slate-300  rounded-lg">
                <th className="py-3">Police Permission of program </th>
                <td className=" py-3">:</td>
                <td className="px-3 py-3">
                  <div>
                  <Image className="my-2 border rounded-md" src="https://gcdnb.pbrd.co/images/aVpG4P7442lM.jpg?o=1" alt="police" width={100} height={100}/>
                    <input
                      defaultValue={program.policePermission}
                      type="file"
                      {...register("policePermission", { required: true })}
                      className="w-full px-2 py-2 rounded text-white bg-[#08101d] border-1"
                    />
                    {errors.policePermission && (
                      <p className="text-red ml-3">
                        policePermission criteria is required.
                      </p>
                    )}
                  </div>
                </td>
              </tr>

              <tr className=" font-normal text-slate-300  rounded-lg">
                <th className=" py-3">Total Number of Program </th>
                <td className=" py-3">:</td>
                <td className="px-3 py-3">
                  <div>
                    <input
                      defaultValue={program.totalProgram}
                      type="text"
                      {...register("totalProgram", { required: true })}
                      className="w-full px-2 py-2 rounded text-white bg-[#08101d] border-1"
                    />
                    {errors.totalProgram && (
                      <p className="text-red ml-3">
                        total program is required.
                      </p>
                    )}
                  </div>
                </td>
              </tr>

              <tr className=" font-normal text-slate-300  rounded-lg">
                <th className=" py-3">Last Program Date</th>
                <td className=" py-3">:</td>
                <td className="px-3 py-3">
                  <div>
                    <input
                      defaultValue={program.lastDate}
                      type="date"
                      {...register("lastDate", { required: true })}
                      className="w-full px-2 py-2 rounded text-white bg-[#08101d] border-1"
                    />
                    {errors.lastDate && (
                      <p className="text-red ml-3">last date is required.</p>
                    )}
                  </div>
                </td>
              </tr>

              <tr className=" font-normal text-slate-300  rounded-lg">
                <th className=" py-3">Guests of tha Last Program</th>
                <td className=" py-3">:</td>
                <td className="px-3 py-3">
                  <div>
                    <input
                      defaultValue={program.lastProgramGguests}
                      type="text"
                      {...register("lastProgramGguests", { required: true })}
                      className="w-full px-2 py-2 rounded text-white bg-[#08101d] border-1"
                    />
                    {errors.lastProgramGguests && (
                      <p className="text-red ml-3">
                        last program guests is required.
                      </p>
                    )}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>

      <ToastContainer />
      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
  );
};

export default Page;
