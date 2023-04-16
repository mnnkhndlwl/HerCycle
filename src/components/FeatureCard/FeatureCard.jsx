import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function ExploreCard({name,description,img,link}) {
  return (
    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
            <img src={img} alt={name} className="w-20 h-20 object-center text-white" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                {name}
              </h2>
              <p className="leading-relaxed text-base">
                {description}
              </p>
              <Link to={link} className="mt-3 text-pink-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
  )
}

export default ExploreCard;