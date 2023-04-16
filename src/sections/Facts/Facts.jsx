import React from "react";

function Facts() {
  return (
    <section className="text-gray-600 body-font">
    <h1 className="text-center text-3xl font-bold">Some Facts</h1>
      <div className="container px-5 py-20 mx-auto flex flex-wrap">
        <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div className="w-full sm:p-4 px-4 mb-6">
            <h1 className="title-font font-medium text-xl mb-10 text-gray-900">
            24 percent of female respondents reported that they never visited or consulted with obstetrician/gynecologist.
            </h1>
            <h1 className="title-font font-medium text-xl mb-10 text-gray-900">
            Up to 62% govt hospitals don’t have gynaecologist on staff
            </h1>
            <h1 className="title-font font-medium text-xl mb-10 text-gray-900">
            ‘Are you married?’: Across India, unmarried women are denied access to an essential ultrasound
            </h1>
            <h1 className="title-font font-medium text-xl mb-10 text-gray-900">
            One in five women in India suffer from PCOS
            </h1>
            {/* <div className="leading-relaxed">
              Pour-over craft beer pug drinking vinegar live-edge gastropub,
              keytar neutra sustainable fingerstache kickstarter.
            </div> */}
          </div>
          {/* <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900">
              2.7K
            </h2>
            <p className="leading-relaxed">Users</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900">
              1.8K
            </h2>
            <p className="leading-relaxed">Subscribes</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900">
              35
            </h2>
            <p className="leading-relaxed">Downloads</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900">4</h2>
            <p className="leading-relaxed">Products</p>
          </div>
        </div> */}
        </div>
        <div className="lg:w-1/2 sm:w-1/3 w-full mt-6 sm:mt-0">
        <h1 className="text-center text-bold" >Menstrual problems among women across India in 2022, by age group</h1>
          <img
            className="object-contain w-full h-full"
            src="./img/stat.png"
            alt="stats"
          />
        </div>
      </div>
    </section>
  );
}

export default Facts;
