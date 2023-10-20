import { Link, NavLink } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import "./Navbar.css";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const Navbar = ({login, handleLogout}) => {
  const { signin } = useContext(AuthContext);const options = ["Profile", "Settings", "Sign Out"]
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionSelect = (selected) => {
    setSelectedOption(selected.value);

    if (selected.value === "Sign Out") {
      handleLogout();
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 navbar flex-col items-stretch">
      <div className="flex flex-wrap items-center justify-between">
        <div>
          <Link to="/" className="flex mr-24 ml-5">
            <img src="car_logo.png" className="w-[70%] mr-0" alt="Car Logo" />
          </Link>
        </div>
        <div className="items-center w-full md:flex md:w-auto">
          <ul className="flex text-white flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-1 md:mt-0 md:border-0 text-xl font-medium">
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
          <div className="flex items-center">
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
            {login ? (
            <Dropdown
              options={options}
              onChange={handleOptionSelect}
              value="Menu"
            />
          )  : (
              <>
                <Link to="/login">
                  <button className="btn btn-circle btn-lg bt ms text-white hover:bg-black bg-[rgba(0,0,0,0.5)] hover:text-[#ff4605] font-bold text-base normal-case hover:border-[#ff4605]">
                    Login
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
