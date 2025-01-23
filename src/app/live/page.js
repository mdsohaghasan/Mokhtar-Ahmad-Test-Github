import Link from "next/link";
import dynamic from "next/dynamic";
import Live from "./Live/Live";
import Stream from "./Live/Player";
// const Lecture = dynamic(() => import("./Lecture/Lecture"), { ssr: false });

const live = () => {
  return (
    <div className="py-8">
      {/* start Title */}
      <div className="container">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">live</h4>
          <h2 className="st-section-heading-subtitle">streaming</h2>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>
      {/* End Title */}
      <div className="container px-24">
        <Stream></Stream>
        
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-center px-10 lg:px-32">
            <span className="border border-[#000] rounded-2xl py-1 px-3 text-center ">
              #Lectures
            </span>
            <span className="border border-[#000] rounded-2xl py-1 px-3 text-center ">
              #Halaqah
            </span>
            <span className="border border-[#000] rounded-2xl py-1 px-3 text-center ">
              #Hajj&Omrah
            </span>
            <span className="border border-[#000] rounded-2xl py-1 px-3 text-center ">
              #Mahfil
            </span>
            <span className="border border-[#000] rounded-2xl py-1 px-3 text-center ">
              #JummaKhutba
            </span>
            <span className="border border-[#000] rounded-2xl py-1 px-3 text-center ">
              #Podcast
            </span>
            <span className="border border-[#000] rounded-2xl py-1 px-3 text-center ">
              #Seminer
            </span>
            <span className="border border-[#000] rounded-2xl py-1 px-3 text-center ">
              #Nasihah
            </span>
          </div>
        </div>
      </div>

      <Live></Live>

      <div className="container lg:px-32">
        <div className="py-3 px-6 bg-slate-800 flex items-center justify-between rounded-xl">
          <p> Embark on a journey of intellectual exchange and meaningful discussions as we gather to explore the diverse facets of Islam. </p>
          <div className="st-hero-btn">
            <Link
              href="/applyProgram"
              className="st-btn st-style1 st-color1 st-smooth-move"
            >
              Apply Program
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default live;


