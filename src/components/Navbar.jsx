import React from "react";

function Navbar() {
  const handleScroll = (section) => {
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div className="navbar bg-black font-georgian text-white px-4 fixed z-10">
        {/* Navbar Start */}
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl">&lt;/Amit&gt;</a>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          {/* Desktop Menu */}
          <ul className="hidden lg:flex list-none space-x-5 pr-8">
            <li>
              <a
                href="#home"
                className="hover:text-gray-300"
                onClick={() => handleScroll("home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-gray-300"
                onClick={() => handleScroll("about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-gray-300"
                onClick={() => handleScroll("projects")}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-gray-300"
                onClick={() => handleScroll("contact")}
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              aria-label="Open Menu"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-auto p-2 shadow absolute right-0"
            >
              <li>
                <a
                  href="#home"
                  className="hover:bg-gray-200"
                  onClick={() => handleScroll("home")}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:bg-gray-200"
                  onClick={() => handleScroll("about")}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:bg-gray-200"
                  onClick={() => handleScroll("projects")}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:bg-gray-200"
                  onClick={() => handleScroll("contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
