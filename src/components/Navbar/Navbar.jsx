import React, { Fragment } from "react";
import logo from "../../logo.png";
import "./Navbar.css";

import { BsSearch, BsPlusCircle, BsCalendar2Check } from "react-icons/bs";
import { IoFastFood } from "react-icons/io5";
import { HiHome, HiPlus } from "react-icons/hi";
import { FaMosque } from "react-icons/fa";
import { MdChair } from "react-icons/md";

import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const handleActiveRouter = (isActive) =>
  isActive
    ? "relative nav-text before:bg-rishie-400 text-errie-400 font-bold"
    : "relative nav-text before:bg-cultured-600";

const handleActiveNavbar = (isActive) =>
  isActive ? "text-rishie-400 active" : "text-rishie-800";

const tabs = [
  { url: "/home", tab: "Home" },
  { url: "/fasilitas", tab: "Fasilitas" },
  { url: "/menu-aksata", tab: "Menu" },
  { url: "/susunan-tempat", tab: "Susunan Tempat" },
];

const Navbar = (props) => {
  const { showSearchID = "hidden" } = props;
  const [tab, setTab] = useState(tabs);
  return (
    <Fragment>
      <div className="navbar fixed z-50 top-0 left-0 px-3 lg:px-10 gap-2 bg-cultured-800 flex justify-between text-errie-400 w-screen">
        <Link
          to={"/home"}
          className="btn btn-ghost flex gap-5 px-0 border-none"
        >
          <img
            className="h-[47px]  mask mask-squircle"
            src={logo}
            alt="Reksata Logo"
          />
          <p className="normal-case text-xl sm:block hidden">Reksata</p>
        </Link>

        <div className="grow lg:flex justify-end lg:justify-center">
          <div className="hidden lg:block h-0 lg:h-min">
            <ul className="p-0 h-full flex gap-2 text-sm">
              {tab.map((link, index) => {
                return (
                  <li
                    key={index}
                    className="py-3 px-6 rounded-2xl btn border-none normal-case font-medium hover:bg-cultured-600"
                  >
                    <NavLink
                      to={link.url}
                      className={({ isActive }) => handleActiveRouter(isActive)}
                    >
                      {link.tab}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          <div
            className={`grow btn-sm lg:hidden rounded-full justify-start justify-self-end bg-rishie-400 hover:bg-rishie-500 text-cultured-600 ${showSearchID}`}
          >
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-row  items-center gap-2"
            >
              <label htmlFor="cariID">
                <BsSearch className="text-lg sm:text-2xl" />
              </label>
              <input
                name="cariID"
                type="input"
                placeholder="Cari ID Reservasi"
                // onKeyDown={(e) => }
                className="input input-sm input-ghost w-[100%] placeholder:w-min font-light placeholder:text-sm placeholder:text-cultured-400 border-none "
              />
            </form>
          </div>
        </div>

        <div
          className={`hidden dropdown dropdown-hover dropdown-end z-50 lg:block`}
        >
          <label
            tabIndex={0}
            className="btn border-none normal-case font-medium rounded-full text-cultured-400 bg-rishie-400 hover:bg-rishie-500"
          >
            Reservasi
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow rounded-box w-52 bg-cultured-800 text-sm"
          >
            <li>
              <Link
                to={"/reservasi/cari-reservasi"}
                className="hover:bg-cultured-600"
              >
                <BsSearch /> Cari Reservasi
              </Link>
            </li>
            <li>
              <Link to={"/reservasi"} className="hover:bg-cultured-600">
                <BsPlusCircle /> Buat Reservasi
              </Link>
            </li>
            <li>
              <Link
                to={"/reservasi/cek-jadwal"}
                className="hover:bg-cultured-600"
              >
                <BsCalendar2Check /> Cek Jadwal
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="btm-nav lg:hidden btm-nav-sm bg-cultured-900 drop-shadow-2xl z-50">
        <NavLink
          to={"/home"}
          className={({ isActive }) => handleActiveNavbar(isActive)}
        >
          <button className="btn shrink border-none">
            <HiHome className="text-2xl " />
          </button>
        </NavLink>
        <NavLink
          to={"/fasilitas"}
          className={({ isActive }) => handleActiveNavbar(isActive)}
        >
          <button className="btn shrink border-none">
            <FaMosque className="text-2xl" />
          </button>
        </NavLink>

        <div className="relative w-min hover:bg-rishie-400 duration-300 active:bg-rishie-400 scale-100 rounded-full border-none bg-rishie-600  dropdown dropdown-top">
          <label
            tabIndex={5}
            className="text-center flex justify-center items-center h-full"
          >
            <HiPlus className="text-3xl text-cultured-400" />
          </label>
          <ul
            tabIndex={5}
            className="dropdown-content menu p-1 shadow bg-cultured-800 rounded-box w-max mb-2 gap-0 fixed right-1/2 translate-x-2/4 items-start"
          >
            <li>
              <Link
                to={"/reservasi/cari-reservasi"}
                className="hover:bg-cultured-600"
              >
                <BsSearch /> Cari Reservasi
              </Link>
            </li>
            <li>
              <Link to={"/reservasi"} className="hover:bg-cultured-600">
                <BsPlusCircle /> Buat Reservasi
              </Link>
            </li>
            <li>
              <Link
                to={"/reservasi/cek-jadwal"}
                className="hover:bg-cultured-600 w-full"
              >
                <BsCalendar2Check /> Cek Jadwal
              </Link>
            </li>
          </ul>
        </div>

        <NavLink
          to={"/menu-aksata"}
          className={({ isActive }) => handleActiveNavbar(isActive)}
        >
          <button className="btn shrink border-none">
            <IoFastFood className="text-2xl" />
          </button>
        </NavLink>
        <NavLink
          to={"/susunan-tempat"}
          className={({ isActive }) => handleActiveNavbar(isActive)}
        >
          <button className="btn shrink border-none">
            <MdChair className="text-2xl " />
          </button>
        </NavLink>
      </div>
    </Fragment>
  );
};

export default Navbar;
