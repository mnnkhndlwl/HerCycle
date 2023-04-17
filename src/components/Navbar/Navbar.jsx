import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice";

function Navbar() {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="text-white bg-pink-400 body-font">
      <div className="container text-white mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img src="./img/logog.svg" className="w-11 h-11 text-white" alt="" />
          <span className="ml-3 text-xl text-white">HerCycle</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-white	flex flex-wrap items-center text-base justify-center">
          <Link to="doctors" className="mr-5 hover:text-gray-900">
            Doctor
          </Link>
          <Link to="exercises" className="mr-5 hover:text-gray-900">
            Exercises
          </Link>
          <Link to="blog" className="mr-5 hover:text-gray-900">
            Blog
          </Link>
          <Link to="community" className="mr-5 hover:text-gray-900">
            Community
          </Link>
        </nav>

        {currentUser ? (
          <>
            <button
              onClick={handleLogout}
              className="inline-flex items-center text-pink-600 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            >
              logout
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </>
        ) : (
          <Link to="login">
            <button className="inline-flex items-center text-pink-600 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              login
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Navbar;
