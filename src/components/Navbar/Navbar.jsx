import { Link, NavLink } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import "react-dropdown/style.css";
import "./Navbar.css"
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-white dark:bg-[rgba(0,0,0,0.3)] z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 navbar flex-col items-stretch fixed">
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-between">
        <div>
          <Link to="/" className="flex justify-center md:mr-24 ml-5">
            <img src="../car_logo.png" className="w-[70%] mr-0" alt="Car Logo" />
          </Link>
        </div>
        <div className="md:flex text-center items-center flex-row lg:justify-evenly lg:w-full md:w-auto">
          <ul className="flex text-white flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row lg:gap-8 md:space-x-1 md:mt-0 md:border-0 text-xl font-medium">
            <li>
              <NavLink
                to="/"
                className="block ln py-2 pl-3 pr-4 rounded md:p-0"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/myCart"
                className="block ln py-2 pl-3 pr-4 rounded md:p-0"
              >
                My Cart
              </NavLink>
            </li>
          </ul>
          <div className="flex items-center mt-3 md:mt-0 lg:gap-4">
            <Link to="/register">
              <button className="btn bt ms text-white hover:bg-black bg-[rgba(0,0,0,0.5)] hover:text-[#ff4605] font-bold text-base normal-case border-[#ff4605]">
                Register
              </button>
            </Link>
            <Link to="/addCar">
              <button className="btn bt ms text-[#ff4605] hover:bg-[#ff4605] bg-[rgba(0,0,0,0.5)] hover:text-white font-bold text-base border-[#ff4605] normal-case">
                <div className="flex items-center">
                  <span className="mr-1">
                    <FaPlus></FaPlus>
                  </span>
                  Add Listing
                </div>
              </button>
            </Link>
            {user ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-outline btn-error btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      src={user.photoURL || "https://placehold.co/600x400"}
                      alt="Profile"
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-fit"
                >
                  <li>
                    <a className="text-base py-2">
                      {user.displayName}
                    </a>
                  </li>
                  <li className="py-3">
                    <a className="text-xl">{user.email}</a>
                  </li>
                  <li>
                    <button onClick={() => logout()} className="btn btn-outline btn-error pt-3">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/login">
                <button className="btn btn-circle btn-md bt ms text-white hover:bg-black bg-[rgba(0,0,0,0.5)] hover:text-[#ff4605] font-bold text-base normal-case hover:border-[#ff4605]">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
