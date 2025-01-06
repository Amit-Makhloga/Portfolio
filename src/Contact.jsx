import React from "react";

function Contact() {
  return (
    <>
      <div className="max-w-screen-2xl  mx-auto md:px-0 px-4 flex flex-col md:flex-row pt-6 md:pt-0">
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 font-georgian  bg-white md:pt-24 pb-8">
          <h1 className="md:text-6xl text-3xl opacity-100 font-bold pt-12 md:pt-0">
            Get In Touch.
          </h1>
          <div className="text-black flex flex-col md:flex-row pt-4  ">
            <div className="w-full md:w-2/4 md:mx-8 md:pt-12">
                <p >Let’s collaborate to bring your ideas to life! Whether you’re looking for a developer to build your next big project or improve your existing web applications, I’d love to connect and discuss how I can help.</p>
            </div>

            <div className="w-full md:w-1/4 md:mx-8  ">
                <p className="text-xl font-semibold pt-4  md:pt-0">Follow Me</p>
                <div className="list-none text-base pt-4">

                    <li><a href="">Linked In</a></li>
                    <li><a href="">Instagram</a></li>
                </div>

            </div>
            <div className="w-full md:w-1/4 md:mx-8">
                <p className="text-xl font-semibold pt-4  md:pt-0">Contact Me</p>
                <div className="list-none text-base pt-4 ">
                    <li><a href="mailto:amitmakhloga551@gmail.com">amitmakhloga551@gmail.com</a></li>
                    <li><a href="">+91 9727990171</a></li>
                </div>
            </div>
            
          </div>

          <div className="mt-4 md:px-16 md:mt-16 flex flex-col md:flex-row ">
            <button className="border-2  w-full md:w-1/2 my-1 p-1 md:p-3 border-black  bg-black text-white md:mx-3 tracking-widest hover:bg-red-500">
              <a href="mailto:amitmakhloga551@gmail.com?subject=Hello Amit&body=Hi Amit, I wanted to reach out to you about...">MESSAGE ME </a>
            </button>
            <button className="border-black border-2 my-1 p-1  md:p-3  w-full md:w-1/2 text-black tracking-widest hover:bg-black hover:text-white">
              <a href="https://drive.google.com/file/d/1xXXXocQbPn-yTHuPzkdL3CP9j997I8Z5/view?usp=sharing"   download="Amit_Makhloga_Resume.pdf" >GET MY RESUME</a>
            </button>
          </div>

        </div>
      </div>
    </>
  );
}

export default Contact;
