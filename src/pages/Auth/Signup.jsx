import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { publicRequest } from "../../config";
import LoadingSpinner from "../../utils/Spinner";
import { Link } from "react-router-dom";

function Signup() {
  const { loading } = useSelector((state) => state.user);
  const [name, setName] = useState("");
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await publicRequest.post("/api/auth/signup", {
        email,
        name,
        password,
      });
      navigate("/login");
      window.location.reload();
    } catch (error) {
      console.log(error.response["data"]);
      setError(error.response["data"]["message"]);
    }
  };

  return (
    <>
      {loading ? (
        <>
          <section className="bg-white">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <LoadingSpinner />
            </div>
          </section>
        </>
      ) : (
        <>
          <section className="bg-white">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                <img
                  className="w-8 h-8 mr-2"
                  src="./img/logog.svg"
                  alt="logo"
                />
                HerCycle
              </div>
              <div className="w-full bg-pink-400 text-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Sign in to your account
                  </h1>
                  <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label className="block mb-2 text-sm font-medium text-white">
                        email
                      </label>
                      <input
                        name="email"
                        type="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                        placeholder="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required=""
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-white">
                        username
                      </label>
                      <input
                        name="username"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                        placeholder="username"
                        onChange={(e) => setName(e.target.value)}
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        for="password"
                        className="block mb-2 text-sm font-medium text-white"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                        required=""
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="remember"
                            aria-describedby="remember"
                            type="checkbox"
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                            required=""
                          />
                        </div>
                        {/* <div className="ml-3 text-sm">
                          <label for="remember" className="text-white">
                            Remember me
                          </label> 
                        </div> */}
                      </div>
                      {/* <p className="text-sm font-medium text-white hover:underline">
                        Forgot password?
                      </p> */}
                    </div>
                    <button
                      onClick={handleLogin}
                      className="w-full text-white bg-red-500 hover:bg-red-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                    >
                      Signup
                    </button>
                    <p className="text-xl font-light text-white">
                      Already have an account?{" "}
                      <Link
                        to="/login"
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Login
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default Signup;
