import React from "react";

function Footer() {
  const handleScroll = (section) => {
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth", // This adds smooth scrolling
      });
    }
  };

  return (
    <div>
      <footer className="footer footer-center font-georgian text-white rounded p-10 mt-10">
        <nav className="grid grid-flow-col gap-4">
          <button
            onClick={() => handleScroll("home")}
            className="link link-hover"
          >
            Home
          </button>
          <button
            onClick={() => handleScroll("about")}
            className="link link-hover"
          >
            About
          </button>
          <button
            onClick={() => handleScroll("projects")}
            className="link link-hover"
          >
            Projects
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className="link link-hover"
          >
            Contact
          </button>
        </nav>

        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All rights reserved by Amit.
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
