import React, { useEffect, useState } from "react";
import { publicRequest } from "../../config";

function ChatComponent() {
  // var [messages, setMessages] = useState([]);
  var [prompt, setPrompt] = useState("");
  var [result, setResult] = useState("");
  var [show, setShow] = useState(false);

  const fetchAns = async () => {
    console.log(prompt);
    try {
      const res = await publicRequest.post(`/send`, { prompt });
      setResult(res.data.bot);
      // console.log("finding");
      // console.log(res.data.bot);
      // setMessages([...messages, { text: res.data.bot, isUser: false }]);
      // console.log(messages);
    } catch (err) {}
  };

  // useEffect(() => {
  //   const fetchAns = async () => {
  //     console.log(prompt);
  //     try {
  //       const res = await publicRequest.post(`/send`, { prompt });
  //       setResult(res.data.bot);
  //       console.log("finding");
  //       console.log(res.data.bot);
  //       setMessages([...messages, { text: res.data.bot, isUser: false }]);
  //       console.log(messages);
  //     } catch (err) {}
  //   };
  // }, [result]);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   var userInput = event.target.elements.message.value;
  //   setPrompt(userInput);
  //   // setMessages([...messages, { text: userInput, isUser: true }]);
  //   fetchAns();
  //   // send message to chatbot
  // };

  // const handleChatbotResponse = (response) => {
  //   setMessages([...messages, { text: response, isUser: false }]);
  // };

  // const messageList = messages.map((message, index) => (
  //   <li
  //     key={index}
  //     className={`${
  //       message.isUser ? "bg-green-500 right-0 rounded-br-md" : "bg-blue-500 left-0 rounded-bl-md"
  //     } p-2 mb-2 max-w-md`}
  //   >
  //     {message.text}
  //   </li>
  // ));

  return (
    <>
      {show ? (
        <>
          <div className="flex bg-pink-400 flex-col p-10 bottom-0 right-0 z-50 fixed items-center justify-center">
            <div className=" text-white p-4 rounded-lg">
              {prompt === "" ? (
                <></>
              ) : (
                <>
                  <div className="bg-green-500 right-0 rounded-br-md p-2 mb-2 max-w-md">
                    {prompt}
                  </div>
                  <div className="bg-blue-500 left-0 rounded-bl-md p-2 mb-2 max-w-md">
                    {result.split(" ").splice(0, 200).join(" ")}
                  </div>
                </>
              )}
              {/* {messageList} */}
            </div>
            <div className="flex mt-4">
              <input
                onChange={(e) => setPrompt(e.target.value)}
                type="text"
                name="message"
                className="flex-1 border text-black border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={fetchAns}
                className="bg-blue-500 text-white px-4 py-2 rounded-r-md"
              >
                Send
              </button>
            </div>
            <button
              onClick={() => setShow(false)}
              className="bg-pink-500 mt-10 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-full"
            >
              <img
                src="./img/close.svg"
                className="h-10 w-10"
              />
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col p-10 bottom-0 right-0 z-50 fixed items-center justify-center">
            <button
              onClick={() => setShow(true)}
              className="bg-pink-500 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-full"
            >
               <img
                src="./img/chat.png"
                className="h-10 w-10"
              />
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default ChatComponent;
