import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useAuth();

  return (
    <div className="navbar bg-green-300 shadow-sm px-10 py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <button onClick={() => setIsOpen(!isOpen)} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          {isOpen && (
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow text-green-800 font-bold">
              <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
              <li><Link to="/plants" onClick={() => setIsOpen(false)}>Plants</Link></li>
              <li><Link to="/myprofile" onClick={() => setIsOpen(false)}>My Profile</Link></li>
            </ul>
          )}
        </div>
        <Link to="/" className="text-3xl text-green-800 font-bold">
          <i className="fa-brands fa-pagelines"></i> Green Nest
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl font-bold">
          <li><NavLink to="/" className={({ isActive }) => `px-3 py-1 ${isActive ? "!text-amber-500" : "text-green-800"}`}>Home</NavLink></li>
          <li><NavLink to="/plants" className={({ isActive }) => `px-3 py-1 ${isActive ? "!text-amber-500" : "text-green-800"}`}>Plants</NavLink></li>
          <li><NavLink to="/myprofile" className={({ isActive }) => `px-3 py-1 ${isActive ? "!text-amber-500" : "text-green-800"}`}>My Profile</NavLink></li>
        </ul>
      </div>

      <div className="navbar-end">
        {!user && (
          <Link to="/login" className="btn text-xl text-green-800 font-bold bg-gray-200 hover:bg-amber-300">
            Login
          </Link>
        )}
        {user && (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL || "https://i.pravatar.cc/150"} alt="User Avatar" />
                </div>
              </div>
            </label>
            <ul tabIndex={0} className="menu dropdown-content z-[1] mt-3 w-40 rounded-box bg-base-100 p-2 shadow">
              <li><Link to="/myprofile">My Profile</Link></li>
              <li><button onClick={logOut}>Logout</button></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
