"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SharīahForm from "./SharīahForm";
import FamilyForm from "./FamilyForm";
import AOS from "aos";
import "aos/dist/aos.css";

const Consultancy = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

   // AOS Animation .........
   useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="tabs">
      <ul className="list-none flex  gap-3 bg-[#101624] border-[#000] rounded-3xl py-2 px-3" data-aos="fade-up" data-aos-duration="500">
        <li className="border border-[#000] rounded-2xl py-1 px-3  text-center" data-aos="fade-left" data-aos-duration="800" data-aos-delay="100">
          <button onClick={() => handleTabClick(1)}>
            Sharīah Prescription
          </button>
        </li>
        <li className="border border-[#000] rounded-2xl py-1 px-3  text-center" data-aos="fade-left" data-aos-duration="800" data-aos-delay="300">
          <button onClick={() => handleTabClick(2)}> Family Consultancy</button>
        </li>
      </ul>
      {/* Shariyah Prescription from  */}
      <div className={activeTab === 1 ? "tab-content-active" : "tab-content"}>
        <h3 data-aos="fade-up" data-aos-duration="800">Sharīah Prescription</h3>
        <p data-aos="fade-up" data-aos-duration="800">
          Shariah Consultancy aims to meet the growing religious & spiritual needs of the Bangla Speaking Muslims around the world.
        </p>
        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
        <SharīahForm></SharīahForm>
        </div>
      </div>

      {/* Family Consultancy from  */}
      <div className={activeTab === 2 ? "tab-content-active" : "tab-content"}>
        <h3 data-aos="fade-up" data-aos-duration="800">Family Consultancy</h3>
        <p data-aos="fade-up" data-aos-duration="800">
          Family Consultancy serves the purpose of guiding the Muslims in the ever challenging family matters in the light of Quran & Sunnah.
        </p>
        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
        <FamilyForm></FamilyForm>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Consultancy;
