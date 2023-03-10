import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { MdOutlineCleaningServices } from "react-icons/md";
import { GrContact } from "react-icons/gr";
import { GoLocation } from "react-icons/go";
import About from "../Routes/About";

const Navbar = () => {
  const [nav, setNavBar] = useState(false);
  return (
    <div className="max-w-[1920px] bg-myColor mx-auto flex justify-between border-b-2 border-gray-600">
      <div className="flex items-center gap-10 py-6">
        <h1 className="text-3xl sm:text-3xl lg:text-5xl ml-7">
          <Link to="/">Pestwerx 🪲</Link>
        </h1>
        <div className="hidden text-xl sm:flex lg:text-xl gap-7 mt-1 cursor-pointer">
          <button className="hover:animate-pulse">
            <Link to="/About">About us</Link>
          </button>
          <button>
            <Link to="/Services">Services</Link>
          </button>
          <button>
            <Link to="/Contact">Contact</Link>
          </button>
          <button>
            <Link to="/Locations">Locations</Link>
          </button>
        </div>
      </div>
      <div onClick={() => setNavBar(!nav)} className="px-5 py-7 sm:hidden ">
        <AiOutlineMenu size={30} />
      </div>

      {/*Mobile Sidebar*/}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0 "></div>
      ) : (
        ""
      )}

      <div
        className={
          nav
            ? "fixed top-0 right-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 right-[-100%] w-[300px] h-screen bg-white z-10 duration-300 "
        }
      >
        <AiOutlineClose
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
          onClick={() => setNavBar(!nav)}
        />
        <h2 className="text-2xl p-4">PestWerx</h2>
        <nav>
          <ul className="flex flex-col p-8 text-gray-800">
            <li className="text-xl py-8 flex ml-8">
              <FiUsers size={30} className="mr-5" />
              <button onClick={() => setNavBar(!nav)}>
                <Link to="/About">About Us</Link>
              </button>
            </li>
            <li className="text-xl py-8 flex ml-8">
              <MdOutlineCleaningServices size={30} className="mr-5" />
              <button onClick={() => setNavBar(!nav)}>
                <Link to="/Services">Services</Link>
              </button>
            </li>
            <li className="text-xl py-8 flex ml-8">
              <GrContact size={30} className="mr-5" />
              <button onClick={() => setNavBar(!nav)}>
                <Link to="/Contact">Contact Us</Link>
              </button>
            </li>
            <li className="text-xl py-8 flex ml-8">
              <GoLocation size={30} className="mr-5" />
              <button onClick={() => setNavBar(!nav)}>
                <Link to="/Locations">Locations</Link>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
