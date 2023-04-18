import React,{useState} from "react";
import StripeCheckout from "react-stripe-checkout";

function Doctors() {

  const [stripeToken, setStripeToken] = useState(null);
  const KEY = process.env.REACT_APP_STRIPE;

  const onToken = (token) => {
    setStripeToken(token);
  };

  return (
    <div className="mx-auto">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-wrap text-center w-full mb-20">
            <div class="flex flex-wrap w-full mb-6 flex-col items-center text-center">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                The Doctor's Panel
              </h1>
              <div className="h-2 w-20 bg-pink-500 rounded"></div>
            </div>
            <p className="lg:w-1/1 w-full ml-16 pl-16 leading-relaxed text-gray-600 font-medium mt-6">
              HerCycle comes with its own panel of Doctors so that the users can
              have easy access to Doctors and are able to resolve their issues
              in time from anywhere. Users can easily chat with their doctors or
              book an Appointment for a personal visit too.
            </p>
          </div>
          <div className="flex flex-wrap -m-4 ">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-contain object-center mb-6"
                  src="./img/doctor1.jpg"
                  alt="content"
                />
                <h3 className="tracking-widest text-pink-500 text-xs font-medium title-font">
                  GYNECOLOGIST
                </h3>
                <h2 className="text-lg text-gray-900 font-bold title-font mb-4">
                  Anya Forger
                </h2>
                <p className="leading-relaxed text-base text-black">
                  <p className="font-medium">Schedule :</p>
                  Mon-Fri (9:00 AM to 9:00 PM)
                  <br />
                  Sat-Sun (10:00 AM to 7:00 PM)
                </p>
                <div className="flex justify-between">
                  <p className="leading-relaxed text-base mt-3 font-medium text-gray-600">
                    Consultation Fee:
                  </p>
                  <p className="leading-relaxed text-base mt-3 font-medium text-gray-500">
                    ₹5000
                  </p>
                  <div class="flex items-center mt-3">
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Rating star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                    <p class="ml-2 text-sm font-bold dark:text-gray-900 text-white">
                      4.95
                    </p>
                  </div>
                </div>
                <div className="mt-5">
                <StripeCheckout
                    name="Please complete your payment"
                    currency="inr"
                    description={`Your total is 5000`}
                    amount={5000 * 100}
                    token={onToken}
                    stripeKey={KEY}
                  >
                  <button class="w-full bg-transparent hover:bg-pink-500 text-pink-700 font-semibold hover:text-white py-2 px-4 border border-pink-500 hover:border-transparent rounded">
                    Chat
                  </button>
                  </StripeCheckout>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-contain object-center mb-6"
                  src="./img/doctor2.jpg"
                  alt="content"
                />
                <h3 className="tracking-widest text-pink-500 text-xs font-medium title-font">
                  PHYSICIAN
                </h3>
                <h2 className="text-lg text-gray-900 font-bold title-font mb-4">
                  Loid Forger
                </h2>
                <p className="leading-relaxed text-base text-black">
                  <p className="font-medium">Schedule :</p>
                  Mon-Fri (9:00 AM to 9:00 PM)
                  <br />
                  Sat-Sun (10:00 AM to 7:00 PM)
                </p>
                <div className="flex justify-between">
                  <p className="leading-relaxed text-base mt-3 font-medium text-gray-600">
                    Consultation Fee:
                  </p>
                  <p className="leading-relaxed text-base mt-3 font-medium text-gray-500">
                    ₹5000
                  </p>
                  <div class="flex items-center mt-3">
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Rating Star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                    <p class="ml-2 text-sm font-bold dark:text-gray-900 text-white">
                      4.15
                    </p>
                  </div>
                </div>
                <div className="mt-5">
                
                  <button class="w-full bg-transparent hover:bg-pink-500 text-pink-700 font-semibold hover:text-white py-2 px-4 border border-pink-500 hover:border-transparent rounded">
                    Chat
                  </button>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-contain object-center mb-6"
                  src="./img/doctor3.jpg"
                  alt="content"
                />
                <h3 className="tracking-widest text-pink-500 text-xs font-medium title-font">
                  PEDIATRICIAN
                </h3>
                <h2 className="text-lg text-gray-900 font-bold title-font mb-4">
                  Yor Forger
                </h2>
                <p className="leading-relaxed text-base text-black">
                  <p className="font-medium">Schedule :</p>
                  Mon-Fri (9:00 AM to 9:00 PM)
                  <br />
                  Sat-Sun (10:00 AM to 7:00 PM)
                </p>
                <div className="flex justify-between">
                  <p className="leading-relaxed text-base mt-3 font-medium text-gray-600">
                    Consultation Fee:
                  </p>
                  <p className="leading-relaxed text-base mt-3 font-medium text-gray-500">
                    Free Consultation
                  </p>
                  <div class="flex items-center mt-3">
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Rating Star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                    <p class="ml-2 text-sm font-bold dark:text-gray-900 text-white">
                      4.50
                    </p>
                  </div>
                </div>
                <div className="mt-5">
                  <button class="w-full bg-transparent hover:bg-pink-500 text-pink-700 font-semibold hover:text-white py-2 px-4 border border-pink-500 hover:border-transparent rounded">
                    Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="p-6"></div>
      <section class="text-gray-600 body-font relative">
        <div class="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.5400429616!2d77.04417575923802!3d28.527252741585837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1681642632465!5m2!1sen!2sus"
          ></iframe>
        </div>
        <div class="container px-5 py-24 mx-auto flex">
          <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 class="text-gray-900 text-lg mb-3 -mt-1 font-bold title-font">
              Book an Appointment
            </h2>
            <form>
              <div class="relative mb-4">
                <label for="email" class="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  required
                  id="email"
                  name="email"
                  class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative mb-4">
                <label for="name" class="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  name="name"
                  class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative mb-4">
                <label for="number" class="leading-7 text-sm text-gray-600">
                  Phone Number
                </label>
                <input
                  type="number"
                  id="number"
                  required
                  name="number"
                  min={1000000000}
                  max={9999999999}
                  class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative mb-4">
                <label for="doctor" class="leading-7 text-sm text-gray-600">
                  Doctor Name
                </label>
                <input
                  type="text"
                  id="docname"
                  required
                  name="docname"
                  class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative mb-4">
                <label for="date" class="leading-7 text-sm text-gray-600">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  required
                  name="date"
                  class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative mb-4">
                <label for="message" class="leading-7 text-sm text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <input
                type="submit"
                id="book"
                name="Book"
                value={"Confirm Booking"}
                class="text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg w-full"
              />
              <p class="text-xs text-gray-500 mt-3">
                *Timing for booking can vary due to busy hours.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Doctors;
