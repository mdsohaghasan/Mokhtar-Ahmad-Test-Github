import About from "@/app/about/About/About";
import Resume from "@/app/about/Resume/Resume";
import React from "react";
import Papers from "./Papers/Papers";
import Publications from "./Publications/Publications";



const about = () => {
  return (
    <div>
      <About></About>
      <Resume></Resume>
      <Papers></Papers>
      <Publications></Publications>
    </div>
  );
};

export default about;


