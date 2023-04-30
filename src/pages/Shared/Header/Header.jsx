import React from "react";
import { Link } from "react-router-dom";
import logo from "/logo.png";

const Header = () => {
  return (
    <div className="navbar container mx-auto px-10 py-7">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
        <img className=" text-white w-[100px] mr-16" src={logo} alt="" />
        <form>
          <label
            for="search"
            class="mb-2 text-sm font-medium sr-only text-white"
          >
            Search
          </label>
          <div class="relative min-w-full">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-white dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="search"
              class="block bg-opacity-40 w-full p-2 pl-10 text-sm text-white border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:outline-none placeholder:text-white  focus:border"
              placeholder="Search your destination"
              required
            />
          </div>
        </form>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-white px-1">
          <li>
            <Link to="/">News</Link>
          </li>

          <li>
            <Link>Destination</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-4">
        <Link className="bg-amber-500 px-8 py-2 rounded-md" to="/login">
          Login{" "}
        </Link>

        <Link className="text-white" to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Header;
