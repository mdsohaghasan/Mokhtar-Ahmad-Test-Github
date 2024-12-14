"use client"
import React, { useEffect, useState } from 'react'
import { redirect } from "next/navigation";
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Page = ({params}) => {
  const { editprogram } = params;

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
    const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/program//details${editprogram}`;
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
  }, [editprogram]);

  console.log(program);


  // Program Post update ...
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = data => {
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
        fundCollection: data.fundCollection,
        presidentsName: data.presidentsName,
        presidentsNumber: data.presidentsNumber,
        volunteersNumber: data.volunteersNumber,
        chairmanPermission: data.chairmanPermission,
        policePermission: data.policePermission,
        totalProgram: data.totalProgram,
        lastDate: data.lastDate,
        lastProgramGguests: data.lastProgramGguests,
    };

    console.log(programInfo)

    const url = `https://mokhter-ahmad-backend-portfolio.vercel.app/program/update/${editprogram}`;
    fetch(url, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(programInfo)
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

  return (
    
    <div>
      <div>
      <section id="contact" className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <div className="container">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">Update Post</h4>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>
  
      {/* <!-- Contact Container --> */}
  
      <div className="container">
        <div className="flex">
        <div className='basis-2/12'></div>
          <div className="basis-8/12">
            <div id="st-alert"></div>
            <form onSubmit={handleSubmit(onSubmit)} method="PUT" className="st-contact-form" id="contact-form">

              <div className="st-form-field">
                 <label className="ml-3" for="">Enter Program Title </label>
                 <input defaultValue={program.programTitle} type="text"{...register("programTitle" , { required: true })} />
                 {errors.programTitle && <p className='text-red ml-3'>program title is required.</p>}
              </div>
             
               <div className="st-form-field">
                 <label className="ml-3" for="">Enter Program Proposed Date </label>
                 <input defaultValue={program.programDate} type="date"{...register("programDate" , { required: true })} />
                 {errors.programDate && <p className='text-red ml-3'>program date is required.</p>}
              </div>
             
               <div className="st-form-field">
                 <label className="ml-3" for="">Enter Lecture Time</label>
                 <input defaultValue={program.lectureTime} type="time"{...register("lectureTime" , { required: true })} />
                 {errors.lectureTime && <p className='text-red ml-3'>lecture time is required.</p>}
              </div>
             
               <div className="st-form-field">
                 <label className="ml-3" for="">Enter Topic of the Lecture</label>
                 <input defaultValue={program.lectureTopic} type="text"{...register("lectureTopic" , { required: true })} />
                 {errors.lectureTopic && <p className='text-red ml-3'>lecture topic is required.</p>}
              </div>
             
               <div className="st-form-field">
                 <label className="ml-3" for="">Enter Applicants Name</label>
                 <input defaultValue={program.applicants} type="text"{...register("applicants" , { required: true })} />
                 {errors.applicants && <p className='text-red ml-3'>applicants name is required.</p>}
              </div>
             
               <div className="st-form-field">
                 <label className="ml-3" for="">Enter Applicants Mobile Number</label>
                 <input defaultValue={program.applicantsNumber} type="number"{...register("applicantsNumber" , { required: true })} />
                 {errors.applicantsNumber && <p className='text-red ml-3'>applicants number is required.</p>}
              </div>
             
               <div className="st-form-field">
                 <label className="ml-3" for="">Enter Google Map Link</label>
                 <input defaultValue={program.googleMap} type="text"{...register("googleMap" , { required: true })} />
                 {errors.googleMap && <p className='text-red ml-3'>google map is required.</p>}
              </div>
             
               <div className="st-form-field">
                 <label className="ml-3" for="">Enter Place Name / Road</label>
                 <input defaultValue={program.placeName} type="text"{...register("placeName" , { required: true })} />
                 {errors.placeName && <p className='text-red ml-3'>place name is required.</p>}
              </div>

              <div className="st-form-field">
                 <label className="ml-3" for="">Enter Post Office Name</label>
                 <input defaultValue={program.postOffice} type="text"{...register("postOffice" , { required: true })} />
                 {errors.postOffice && <p className='text-red ml-3'>post office is required.</p>}
              </div>
             
               <div className="st-form-field">
                 <label className="ml-3" for="">Enter Upazila Name</label>
                 <input defaultValue={program.upazila} type="text"{...register("upazila" , { required: true })} />
                 {errors.upazila && <p className='text-red ml-3'>upazila name is required.</p>}
              </div>
             
               <div className="st-form-field">
                 <label className="ml-3" for="">Enter District Name</label>
                 <input defaultValue={program.district} type="text"{...register("district" , { required: true })} />
                 {errors.district && <p className='text-red ml-3'>district name is required.</p>}
              </div>
             
               <div className="st-form-field">
                 <label className="ml-3" for="">Enter Name of the venue</label>
                 <input defaultValue={program.venue} type="text"{...register("venue" , { required: true })} />
                 {errors.venue && <p className='text-red ml-3'>venue name is required.</p>}
              </div>
             
               <div className="st-form-field">
                 <label className="ml-3" for="">Enter Venue Distance from District</label>
                 <input defaultValue={program.venueDistance} type="text"{...register("venueDistance" , { required: true })} />
                 {errors.venueDistance && <p className='text-red'>venue distance is required.</p>}
              </div>
             
               <div className="st-form-field">
                 <label className="ml-3" for="">Enter Other Guests Name of the Program</label>
                 <input defaultValue={program.guestsName} type="text"{...register("guestsName" , { required: true })} />
                 {errors.guestsName && <p className='text-red ml-3'>Guests Name is required.</p>}
              </div>
             
               {/* <div className="st-form-field">
                 <label className="ml-3" for=""> Choose Collection Option</label>
                 <input defaultValue={program.collection} type="radio"{...register("collection" , { required: true })} />
                 {errors.collection && <p className='text-red'>collection is required.</p>}
              </div> */}
             
              <div className="st-form-field">
                 <label className="ml-3" for="">Enter Program Presidents Name </label>
                 <input defaultValue={program.presidentsName} type="text"{...register("presidentsName" , { required: true })} />
                 {errors.presidentsName && <p className='text-red ml-3'>presidents Name is required.</p>}
              </div>

              <div className="st-form-field">
                 <label className="ml-3" for="">Enter Presidents Mobile Number</label>
                 <input defaultValue={program.presidentsNumber} type="text"{...register("presidentsNumber" , { required: true })} />
                 {errors.presidentsNumber && <p className='text-red ml-3'>presidents number is required.</p>}
              </div>
                               
              <div className="st-form-field">
                 <label className="ml-3" for="">Enter Number of Volunteers</label>
                 <input defaultValue={program.volunteersNumber} type="text"{...register("volunteersNumber" , { required: true })} />
                 {errors.volunteersNumber && <p className='text-red ml-3'>volunteers number is required.</p>}
              </div>
                               
              <div className="st-form-field">
                 <label className="ml-3" for="">Enter Permission Criteria </label>
                 <input defaultValue={program.permissionCriteria} type="text"{...register("permissionCriteria" , { required: true })} />
                 {errors.permissionCriteria && <p className='text-red ml-3'>permission criteria is required.</p>}
              </div>
                               
              <div className="st-form-field">
                 <label className="ml-3" for="">Enter Total Number of Program </label>
                 <input defaultValue={program.totalProgram} type="text"{...register("totalProgram" , { required: true })} />
                 {errors.totalProgram && <p className='text-red ml-3'>total program is required.</p>}
              </div>
                               
              <div className="st-form-field">
                 <label className="ml-3" for="">Enter Last Program Date </label>
                 <input defaultValue={program.lastDate} type="date"{...register("lastDate" , { required: true })} />
                 {errors.lastDate && <p className='text-red ml-3'>last date is required.</p>}
              </div>
                               
              <div className="st-form-field">
                 <label className="ml-3" for="">Enter Guests of tha Last Program </label>
                 <input defaultValue={program.lastProgramGguests} type="date"{...register("lastProgramGguests" , { required: true })} />
                 {errors.lastProgramGguests && <p className='text-red ml-3'>last program guests is required.</p>}
              </div>  

              <button className="st-btn st-style1 st-color1" type="submit" id="submit" name="submit">Update Post</button>
            </form>
          </div>
          <div className='basis-2/12	'></div>
          <div className="st-height-b0 st-height-lg-b30"></div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
    </div>
    <ToastContainer />
    </div>
  )
}

export default Page