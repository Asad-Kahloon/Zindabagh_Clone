// src/Navbar.js
import { useState } from "react";
import { FaBars, FaGlobe } from "react-icons/fa";
import logo from "../assets/logo.svg";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#f7d07a] sticky p-4 font-serif">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8" />
        </div>
        <div className=" flex items-center gap-3 md:hidden">
          <a
            href="#"
            className="flex items-center space-x-1 text-black bg-white px-1 py-1 hover:underline"
          >
            <FaGlobe />
            <span>
              <select className="bg-white text-black outline-none focus:ring-2 focus:ring-blue-500 rounded-md">
                <option value="English">Eng</option>
                <option value="Urdu">Urd</option>
                <option value="Punjabi">Pun</option>
              </select>
            </span>
          </a>
          <FaBars
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          />
        </div>
        <div
          className={`${
            isOpen ? "hidden" : "hidden"
          } md:flex items-center space-x-4`}
        >
          <a href="#" className="text-black hover:underline">
            Our Story
          </a>
          <a href="#" className="text-black hover:underline">
            The Needs
          </a>
          <a href="#services" className="text-black hover:underline">
            Countries
          </a>
          <a href="#contact" className="text-black hover:underline">
            Blogs
          </a>
          <a href="#blog" className="text-black hover:underline">
            Videos
          </a>
          <a href="#faq" className="text-black hover:underline">
            Blogs
          </a>

          <a
            href="#"
            className={`${
              isOpen ? "hidden" : "hidden"
            } md:flex items-center space-x-1 text-black bg-white px-1 py-1 hover:underline`}
          >
            <FaGlobe />
            <span>
              <select className="bg-white text-black outline-none focus:ring-2 focus:ring-blue-500 rounded-md">
                <option value="English">Eng</option>
                <option value="Urdu">Urd</option>
                <option value="Punjabi">Pun</option>
              </select>
            </span>
          </a>
          <button className="bg-[#fdeecb] text-black px-4 py-2 rounded-md">
            Login
          </button>
        </div>
      </div>
      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden bg-[#f7d07a] p-4`}
      >
        <a
          href="#home"
          className="block text-black flex justify-center hover:underline"
        >
          Home
        </a>
        <a
          href="#about"
          className="block text-black flex justify-center hover:underline"
        >
          About
        </a>
        <a
          href="#services"
          className="block text-black flex justify-center hover:underline"
        >
          Services
        </a>
        <a
          href="#contact"
          className="block text-black flex justify-center hover:underline"
        >
          Contact
        </a>
        <a
          href="#blog"
          className="block text-black flex justify-center hover:underline"
        >
          Blog
        </a>
        <a
          href="#faq"
          className="block text-black flex justify-center hover:underline"
        >
          FAQ
        </a>
        <button className="bg-[#fdeecb] text-black flex justify-center px-4 py-2 rounded-md w-20 mt-2 mx-auto">
          Login
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
