import React from "react";

function Exercises() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Exercises
          </h1>
          <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
            it's important to choose exercises that are gentle and low-impact
            during the menstrual cycle, as the body may be more sensitive during
            this time.
          </p>
        </div>
        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-5 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Cobra pose
              </h1>
              <p class="mb-8 leading-relaxed">
                Begin on your belly with your feet hip-distance apart and your
                hands beside your ribs. Extend your big toes straight back and
                press down with all ten toenails to activate your quadriceps.
                Rotate your inner thighs toward the ceiling to broaden the lower
                back. Pressing down lightly with your hands, start to lift your
                head and chest, rolling your shoulders back and down. Keep the
                back of your neck long and focus on lifting your sternum instead
                of lifting your chin. Straighten your arms while keeping your
                shoulders remaining away from your ears. Keep at least a slight
                bend in your elbows. To exit the pose, release back to your mat.
              </p>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 mr-10 w-5/6">
              <iframe
              className="object-cover object-center rounded"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/CxI6DjNafyw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Exercises;
