import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";
import { useState } from "react";
const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-gray-950">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setOpen(!open)}
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Main Menu</span>

              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <div className="text-white pr-10 text-2xl name-heading">
                <a
                  href="https://drive.google.com/file/d/1fONJk8SMZsF_HOjdFJWZrwTEVQBax02a/view?usp=drive_link"
                  target="blank"
                >
                  Om Chaudhari
                </a>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-7">
                <div className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                  <Link to="home" smooth duration={500}>
                    {"Home"}
                  </Link>
                </div>
                <div className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                  <Link to="about" smooth duration={500}>
                    {"About"}
                  </Link>
                </div>
                <div className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                  <Link to="projects" smooth duration={500}>
                    {"Projects"}
                  </Link>
                </div>
                <div className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                  <Link to="experience" smooth duration={500}>
                    {"Skills"}
                  </Link>
                </div>
                <div className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                  <Link to="contact" smooth duration={500}>
                    {"Contact"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <a
              href="https://www.linkedin.com/in/om-chaudhari-78a76a225"
              target="blank"
            >
              <FaLinkedin className="text-white text-2xl m-3" />
            </a>
            <a href="https://github.com/OmChaudhari19" target="blank">
              <FaGithub className="text-white text-2xl mr-3" />
            </a>
            <a href="https://www.instagram.com/om_chaudhari_19/" target="blank">
              <FaInstagram className="text-white text-2xl mr-3" />
            </a>
          </div>
        </div>
      </div>

      {open && (
        <div className={`sm:hidden`} id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <div
              className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              <Link to="home" smooth duration={500}>
                {"Home"}
              </Link>
            </div>
            <div
              className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              <Link to="about" smooth duration={500}>
                {"about"}
              </Link>
            </div>
            <div
              className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              <Link to="projects" smooth duration={500}>
                {"projects"}
              </Link>
            </div>
            <div
              className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              <Link to="experience" smooth duration={500}>
                {"Skills"}
              </Link>
            </div>
            <div
              className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              <Link to="contact" smooth duration={500}>
                {"contacts"}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Nav;
