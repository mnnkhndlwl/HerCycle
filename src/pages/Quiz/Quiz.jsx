import React, { useState } from "react";

const Quiz = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [disease, setDiseases] = useState([]);
  const [recommendedExercises, setRecommendedExercises] = useState("");
  const [attempt, setAttempt] = useState(false);

  const questions = [
    {
      question: "On average, how long does your period last?",
      answers: [
        { text: "1-2 days", score: 1 },
        { text: "5-7 days", score: 3 },
        { text: "3-4 days", score: 2 },
        { text: "more than 7 days", score: 4 },
      ],
    },
    {
      question: "How heavy is your menstrual flow?",
      answers: [
        {
          text: "Heavy (requires changing pads/tampons every 1-3 hours)",
          score: 3,
        },
        { text: "Light (mainly spotting)", score: 1 },
        {
          text: "Very heavy (requires changing pads/tampons every hour or less)",
          score: 4,
        },
        {
          text: "Moderate (requires changing pads/tampons every 4-6 hours)",
          score: 2,
        },
      ],
    },
    {
      question: "Do you experience cramping during your period?",
      answers: [
        { text: "Mild cramping", score: 1 },
        { text: "No", score: 0 },
        { text: "Severe cramping", score: 3 },
        { text: "Moderate cramping", score: 2 },
      ],
    },
    {
      question: "Do you experience headaches or migraines during your period?",
      answers: [
        { text: "No", score: 0 },
        { text: "Severe headaches", score: 3 },
        { text: "Mild headaches", score: 1 },
        { text: "Moderate headaches", score: 2 },
      ],
    },
    {
      question:
        "Do you experience mood changes, such as irritability or depression, during your period?",
      answers: [
        { text: "Severe mood changes", score: 3 },
        { text: "Moderate mood changes", score: 2 },
        { text: "Mild mood changes", score: 1 },
        { text: "No", score: 0 },
      ],
    },
    {
      question: "Do you have heavy or prolonged bleeding during your period?",
      answers: [
        { text: "sometimes", score: 1 },
        { text: "often", score: 2 },
        { text: "No", score: 0 },
        { text: "always", score: 3 },
      ],
    },
    {
      question: "Do you experience nausea or vomiting during your period?",
      answers: [
        { text: "No", score: 0 },
        { text: "often", score: 2 },
        { text: "always", score: 3 },
        { text: "sometimes", score: 1 },
      ],
    },
    {
      question: "Do you experience fatigue or low energy during your period?",
      answers: [
        { text: "mild fatigue", score: 1 },
        { text: "moderate fatigue", score: 2 },
        { text: "No", score: 0 },
        { text: "severe fatigue", score: 3 },
      ],
    },
    {
      question:
        "Do you experience bloating or water retention during your period?",
      answers: [
        { text: "Mild bloating or water retention", score: 1 },
        { text: "No", score: 0 },
        { text: "Severe bloating or water retention", score: 3 },
        { text: "Moderate bloating or water retention", score: 2 },
      ],
    },
    {
      question:
        "Do you experience breast tenderness or swelling during your period?",
      answers: [
        { text: "Mild breast tenderness or swelling", score: 1 },
        { text: "No", score: 0 },
        { text: "Severe breast tenderness or swelling", score: 3 },
        { text: "Moderate breast tenderness or swelling", score: 2 },
      ],
    },
    {
      question: "Do you experience acne or skin changes during your period?",
      answers: [
        { text: "Mild acne or skin changes", score: 1 },
        { text: "Severe acne or skin changes", score: 3 },
        { text: "Moderate acne or skin changes", score: 2 },
        { text: "No", score: 0 },
      ],
    },
    {
      question:
        "Have you been diagnosed with any menstrual disorders, such as PCOS or endometriosis?",
      answers: [
        { text: "Yes", score: 2 },
        { text: "No", score: 0 },
      ],
    },
  ];

  const handleAnswerClick = (ansscore) => {
    if (ansscore) {
      setScore(score + ansscore);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      if (score >= 0 && score <= 5) {
        setDiseases([
          "Mild symptoms",
          "no serious underlying conditions identified",
        ]);
        setRecommendedExercises("yoga, brisk walking, cycling");
      }
      if (score >= 6 && score <= 10) {
        setDiseases([
          " Moderate symptoms",
          "Dysmenorrhea",
          "Endometriosis",
          "PCOS",
        ]);
        setRecommendedExercises(
          "gentle yoga, low-impact cardio, strength training"
        );
      }
      if (score >= 11) {
        setDiseases([
          "Severe symptoms",
          "premenstrual dysphoric disorder (PMDD)",
          "uterine fibroids",
          "adenomyosis",
        ]);
        setRecommendedExercises(
          "restorative yoga, Pilates, low-impact cardio, strength training with caution"
        );
      }
      setShowResult(true);
    }
  };

  return (
    <>
      {!attempt ? (
        <>
          <section className="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
              <iframe
                className="w-80 h-80"
                src="https://embed.lottiefiles.com/animation/27636"
              ></iframe>
              <div className="text-center lg:w-2/3 w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                  Period quiz: How much do you know about your own menstrual
                  cycle?
                </h1>
                <p className="mb-8 leading-relaxed text-black text-justify">
                  During reproductive age, the majority of women and people who
                  menstruate have periods every month. But despite that, many of
                  us still have big gaps in knowledge where our menstrual cycles
                  are concerned — which is where our period quiz comes in. Take
                  this period test and see how much you know about your own
                  cycle. Knowledge is power, after all, and those gaps are there
                  to be filled with some fascinating period facts!
                  <br />
                  <span className="text-black font-bold">
                    This quiz is designed to help you learn more about your
                    period and periods in general, but it is for educational
                    purposes only. Menstrual periods can differ for every person
                    and can often be irregular. If you're experiencing irregular
                    periods, uncharacteristically heavy or light bleeding, or
                    notice any other changes to your periods, contact your
                    health care provider for advice.
                  </span>
                </p>
                <div className="flex justify-center">
                  <button
                    onClick={() => setAttempt(true)}
                    className="inline-flex text-white bg-pink-400 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Attempt
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          <div className="max-w-md my-20 mx-auto">
            {showResult ? (
              <>
                <div className="text-center w-full h-full bg-pink-400 px-10 pt-24">
                  <h1 className="text-2xl font-medium text-white">
                    Your score: {score}
                  </h1>
                  <p className="text-white mt-4 mb-8">
                    Based on your score, you may have
                  </p>
                  <ul className="list-disc list-inside mb-8">
                    {disease.map((disease) => (
                      <li key={disease} className="text-white">
                        {disease}
                      </li>
                    ))}
                  </ul>
                  <p className="text-center text-white">
                    Recommended Exercises for you are : <br />
                    <span className="text-center text-white font-bold">
                      {recommendedExercises}
                    </span>
                  </p>
                  <div className="flex text-white font-semibold text-center justify-between mt-20 pb-8">
                    <p>
                      Score (1-5)
                      <br />
                      Good
                    </p>
                    <p>
                      Score (6-10)
                      <br />
                      Average
                    </p>
                    <p>
                      Score ({">"}11)
                      <br />
                      Bad
                    </p>
                  </div>
                </div>
                <div className="flex mt-8 justify-center">
                  <button
                    className="text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg"
                    onClick={() => window.location.reload(false)}
                  >
                    Re-Attempt
                  </button>
                </div>
              </>
            ) : (
              <>
                <h1 className="text-center text-4xl text-bold text-pink-400 my-10">
                  Attempt this quiz to know about your periods
                </h1>
                <div className="w-full py-20 px-10 h-full bg-pink-400">
                  <h1 className="text-2xl text-white font-bold mb-4">
                    {questions[currentQuestion].question}
                  </h1>
                  <div className="space-y-4">
                    {questions[currentQuestion].answers.map((answer, index) => (
                      <button
                        key={index}
                        className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded"
                        onClick={() => handleAnswerClick(answer.score)}
                      >
                        {answer.text}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Quiz;
