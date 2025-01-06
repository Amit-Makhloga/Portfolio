import React from "react";
import banner from "../public/banner.png";
import Navbar from "./components/Navbar";

function Home() {

  const handleScroll = (section) => {
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth", // Smooth scrolling
      });
    }
  };
  
  
  return (
    <>
    <Navbar />
    <div className="max-w-screen-2xl  mx-auto md:px-0 px-4 flex flex-col md:flex-row pt-8 md:pt-0">
      <div className="w-full md:h-screen pb-6  md:w-1/2   md:mt-0 md:left-0 order-2 md:order-1 bg-[#ECEEEC]  ">
        <div className="max-w-screen-2xl  mx-auto md:pt-32 md:px-16 md:left-5">
          <p className=" px-4 space-y-4  md:text-5xl mt-12 md:mt-28 text-black font-georgian font-medium">
            {" "}
            <span className="md:text-2xl text-red-600">Hello,</span> <br /> I'm
            Amit Makhloga, a passionate Web Developer. <br className=""/> I build responsive
            and dynamic websites that bring ideas to life!
          </p>
          <div className="mt-4 md:px-16 md:mt-16 container px-4 ">
  <button
    onClick={() => handleScroll("about")} // Scrolls to the About section
    className="border-2 w-full md:w-auto my-1 p-1 md:p-3 border-black bg-black text-white md:mx-3 tracking-widest hover:bg-red-500"
  >
    MORE ABOUT ME
  </button>
  <button
    onClick={() => handleScroll("contact")} // Scrolls to the Contact section
    className="border-black border-2 my-1 p-1 md:p-3 w-full md:w-auto text-black tracking-widest hover:bg-black hover:text-white"
  >
    GET IN TOUCH
  </button>
</div>

        </div>
      </div>
      <div className="w-full  mt-5  md:w-1/2 md:mt-32  w-92 h-92 order-1">
        <img
          src={banner}
          alt=""
          className="w-full h-auto md:h-auto md:w-1/2 md:mx-auto"
        />
      </div>
    </div>
    </>
  );
}

export default Home;
