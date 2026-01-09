import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);      // Mobile menu
  const [loggedIn, setLoggedIn] = useState(true);   // Button state

  return (
    <div className="navbar bg-green-300 shadow-sm">
      {/* Navbar start */}
      <div className="navbar-start">
        <div className="dropdown">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="btn btn-ghost lg:hidden"
          >
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
          </button>

          {/* Mobile menu */}
          {isOpen && (
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow text-green-800 font-bold">
              <li>
                <Link to="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/planet" onClick={() => setIsOpen(false)}>
                  Planets
                </Link>
              </li>
              <li>
                <Link to="/myprofile" onClick={() => setIsOpen(false)}>
                  My Profile
                </Link>
              </li>
            </ul>
          )}
        </div>

        <Link to="/" className="text-3xl text-green-800 font-bold">
          <i className="fa-brands fa-pagelines"></i> Green Nest
        </Link>
      </div>

      {/* Desktop menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl font-bold">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-1 ${isActive ? "!text-green-600" : "text-green-800"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/planet"
              className={({ isActive }) =>
                `px-3 py-1 ${isActive ? "!text-green-600" : "text-green-800"}`
              }
            >
              Planets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myprofile"
              className={({ isActive }) =>
                `px-3 py-1 ${isActive ? "!text-green-600" : "text-green-800"}`
              }
            >
              My Profile
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Navbar end button */}
      <div className="navbar-end">
        <button
          onClick={() => setLoggedIn(!loggedIn)}
          className="btn text-xl text-green-800 font-bold bg-amber-200 hover:bg-amber-300"
        >
          {loggedIn ? "Logged In" : "Logged Out"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
