import Link from "next/link";
import dynamic from "next/dynamic";
const Lecture = dynamic(() => import("./Lecture/Lecture"), { ssr: false });

const lecture = () => {
  return (
    <div className="py-8">
      {/* start Title */}
      <div className="container ">
        <div className="st-section-heading st-style1">
          <h4 className="st-section-heading-title">lecture</h4>
          <h2 className="st-section-heading-subtitle">lecture</h2>
        </div>
        <div className="st-height-b25 st-height-lg-b25"></div>
      </div>
      {/* End Title */}
      <div className="container px-24">
        <p className="text-center py-4">
        Welcome to Professor Mokhter Ahmads Video Lecture Page on Islamic Spirituality. Explore profound insights into the world of Islamic spirituality through engaging video lectures. Join us on a transformative exploration of spiritual practices, teachings, and contemplative reflections rooted in the rich Islamic tradition. Discover new perspectives that inspire a deeper connection with your faith and a greater understanding of the spiritual path.
        </p>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-center px-10 lg:px-32 ">
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

      <Lecture></Lecture>

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

export default lecture;
