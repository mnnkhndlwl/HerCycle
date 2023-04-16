import React from "react";
import { Info } from "./featuresConstant";
import ExploreCard from "../../components/FeatureCard/FeatureCard";

function Features() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Explore more
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            Explore our features which will help you to manage and analyze your
            periods and There's a lot of other features also related to women's
            health
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-pink-500 inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {
            Info.map((item) => {
                return <ExploreCard name={item.name} description={item.description} img={item.image} link={item.Link} />
            }
            )
          }
        </div>
        <button className="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">
          Explore more
        </button>
      </div>
    </section>
  );
}

export default Features;
