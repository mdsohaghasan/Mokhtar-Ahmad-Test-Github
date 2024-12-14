import Image from "next/image";
import Consultancy from "./Consultancy/Consultancy";

const consultancy = () => {
  return (
    <div className="py-8">
      {/* start Title */}
      <div className="container ">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">Consultancy</h4>
          <h2 className="st-section-heading-subtitle">Consultancy</h2>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>
      {/* End Title */}

      <div className="container md:px-48">
        <Consultancy></Consultancy>
      </div>
    </div>
  );
};

export default consultancy;
