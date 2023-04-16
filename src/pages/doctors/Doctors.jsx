import React from "react";

function Doctors() {
  return (
    <div className="mx-auto">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                The Doctor Panel
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-600 font-medium">
              HerCycle comes with its own panel of Doctors so that the users can
              have easy access to Doctors and are able to resolve their issues
              in time from anywhere.
            </p>
          </div>
          <div className="flex flex-wrap -m-4 ">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-fit object-center mb-6"
                  src="./img/doctor1.jpg"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  GYNECOLOGIST
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Anya Forger
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-fit object-center mb-6"
                  src="./img/doctor2.jpg"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  PHYSICIAN
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Loid Forger
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-fit mb-6"
                  src="./img/doctor3.jpg"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  PEDIATRICIAN
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Yor Forger
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="p-6 bg-pink-400"></div>
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
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
              Book an Appointment
            </h2>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                required
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <input
              type="submit"
              id="book"
              name="Book"
              value={"Confirm Booking"}
              class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            />
            <p class="text-xs text-gray-500 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Doctors;
