import React from "react";
import nis from "../public/nis.png";
import rentaplace from "../public/rentaplace.png";
import bookstore from "../public/bookstore.png";
import weatherapp from "../public/weatherapp.png";
import homieshub from "../public/homieshub.png";
import blogify from '../public/blogify.png'



function Project() {
  return (
    <div className="max-w-screen-2xl  mx-auto md:px-0 px-4 flex flex-col md:flex-row pt-6 md:pt-0 ">
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4   bg-[#ECEEEC] md:pt-32 pb-6 md:pb-16 font-georgian">
        <h1 className="md:text-6xl text-3xl opacity-100 font-bold pt-12 md:pt-0">
          Projects.
        </h1>


        <div className="flex flex-col md:flex-row md:pt-16 pt-4 ">
          <div className="flex flex-col md:flex-row items-center">
            {/* Project Details */}
            <div className="w-full md:w-1/2 p-4 order-2 md:order-1">
              <h3 className="font-bold text-xl mb-2">Blogify</h3>
              <p className="text-gray-600 mb-4 ">
              Blogify is a full-stack blogging platform built with React.js, Appwrite, and Redux Toolkit, allowing users to create, edit, and manage blog posts with rich text content and image uploads. It supports user authentication, role-based access, and cloud storage, making it a powerful and modern web app for content publishing.
              </p>
              <a
                href="https://blogify-lyart-rho.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Project
              </a>
            </div>
            {/* Image */}
            <div className="w-full md:w-1/2 mb-4 md:mb-0 border rounded-md order-1 md:order-2  border-black ">
              <img
                src={blogify}
                alt="NIS Project"
                className="w-full h-auto rounded-md"
              />
            </div>

          </div>
        </div>


        

        <div className="flex flex-col md:flex-row md:pt-16 pt-4 ">
          <div className="flex flex-col md:flex-row items-center">
            {/* Image */}
            <div className="w-full md:w-1/2 mb-4 md:mb-0 border rounded-md  border-black ">
              <img
                src={nis}
                alt="NIS Project"
                className="w-full h-auto rounded-md"
              />
            </div>

            {/* Project Details */}
            <div className="w-full md:w-1/2 p-4">
              <h3 className="font-bold text-xl mb-2">NATIONAL INDUSTRIAL SOLUTIONS</h3>
              <p className="text-gray-600 mb-4">
              Developed a fully responsive static website using HTML, CSS, JavaScript, and Bootstrap. The website showcases industrial solutions with a professional and clean design.
              </p>
              <a
                href="https://nationalindustrialsolutions.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Project
              </a>
            </div>
          </div>
        </div>



        <div className="flex flex-col md:flex-row md:pt-16 pt-4 ">
          <div className="flex flex-col md:flex-row items-center">
            {/* Project Details */}
            <div className="w-full md:w-1/2 p-4 order-2 md:order-1">
              <h3 className="font-bold text-xl mb-2">RENTAPLACE</h3>
              <p className="text-gray-600 mb-4 ">
              A full stack project where users can browse and upload rental properties. Features include property listings, user uploads, built with HTML, CSS, JavaScript, Bootstrap, MongoDB, Express, React, and Node.js.
              </p>
              <a
                href="https://rentaplace.onrender.com/listings"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Project
              </a>
            </div>
            {/* Image */}
            <div className="w-full md:w-1/2 mb-4 md:mb-0 border rounded-md order-1 md:order-2  border-black ">
              <img
                src={rentaplace}
                alt="NIS Project"
                className="w-full h-auto rounded-md"
              />
            </div>

          </div>
        </div>


        <div className="flex flex-col md:flex-row md:pt-16 pt-4 ">
          <div className="flex flex-col md:flex-row items-center">
            {/* Image */}
            <div className="w-full md:w-1/2 mb-4 md:mb-0 border rounded-md  border-black ">
              <img
                src={bookstore}
                alt="NIS Project"
                className="w-full h-auto rounded-md"
              />
            </div>

            {/* Project Details */}
            <div className="w-full md:w-1/2 p-4">
              <h3 className="font-bold text-xl mb-2">Bookstore</h3>
              <p className="text-gray-600 mb-4">
              The BookStore project is a responsive full-stack web app for browsing books, featuring user authentication and a modern UI built with React and Tailwind CSS. Powered by Node.js, Express, and MongoDB, it ensures secure and seamless user experiences.
              </p>
              <a
                href="https://github.com/Amit-Makhloga/BookStore"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Github Link
              </a>
            </div>
          </div>
        </div>



        <div className="flex flex-col md:flex-row md:pt-16 pt-4 ">
          <div className="flex flex-col md:flex-row items-center">
            {/* Project Details */}
            <div className="w-full md:w-1/2 p-4 order-2 md:order-1">
              <h3 className="font-bold text-xl mb-2">Weather App</h3>
              <p className="text-gray-600 mb-4 ">
              A React-based weather application that allows users to search and view weather conditions for locations worldwide. Features include a clean UI and real-time weather data fetching.
              </p>
              <a
                href="https://amit-makhloga.github.io/Weather-App/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Project
              </a>
            </div>
            {/* Image */}
            <div className="w-full md:w-1/2 mb-4 md:mb-0 border rounded-md order-1 md:order-2  border-black ">
              <img
                src={weatherapp}
                alt="NIS Project"
                className="w-full h-auto rounded-md"
              />
            </div>

          </div>
        </div>

        <div className="flex flex-col md:flex-row md:pt-16 pt-4 ">
          <div className="flex flex-col md:flex-row items-center">
            {/* Image */}
            <div className="w-full md:w-1/2 mb-4 md:mb-0 border rounded-md  border-black ">
              <img
                src={homieshub}
                alt="NIS Project"
                className="w-full h-auto rounded-md"
              />
            </div>

            {/* Project Details */}
            <div className="w-full md:w-1/2 p-4">
              <h3 className="font-bold text-xl mb-2">Homies Hub</h3>
              <p className="text-gray-600 mb-4">
              A MERN stack-based food delivery app offering a seamless platform for browsing diverse cuisines and menus with a responsive, user-friendly interface.
              </p>
              <a
                href="https://github.com/Amit-Makhloga/Homies-Hub"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Github Link
              </a>
            </div>
          </div>
        </div>


        {/* <div className="flex flex-col md:flex-row md:pt-4 pt-4">
          
          <div className="relative group w-full md:w-1/2 border border-black md:mr-2">
            <img
              src={nis}
              alt="NIS Project" 
              className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
            />
            <div className="absolute inset-0 bg-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-bold">NIS Project</span>
            </div>
          </div>

         
          <div className="relative group w-full md:w-1/2 border border-black md:ml-2 md:mt-0 mt-4">
            <img
              src={rentaplace}
              alt="Rent A Place Project"
              className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
            />
            <div className="absolute inset-0 bg-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-bold">Rent A Place</span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Project;
