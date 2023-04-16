import React from "react";

function FaqCard({question , answer}) {
  return (
    <div className="flex items-start">
      <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-red-400 rounded-full">
        <span className="text-lg font-semibold text-white">Q.</span>
      </div>
      <div className="ml-4">
        <p className="text-xl font-semibold text-white">
          {question}
        </p>
        <p className="mt-4 text-base text-white">
         {answer}
        </p>
      </div>
    </div>
  );
}

export default FaqCard;
