import React, { useState } from "react";

function ChatComponent() {
  const [messages, setMessages] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userInput = event.target.elements.message.value;
    setMessages([...messages, { text: userInput, isUser: true }]);
    // send message to chatbot
  };

  const handleChatbotResponse = (response) => {
    setMessages([...messages, { text: response, isUser: false }]);
  };

  const messageList = messages.map((message, index) => (
    <li
      key={index}
      className={`${
        message.isUser ? "bg-green-500 right-0 rounded-br-md" : "bg-blue-500 left-0 rounded-bl-md"
      } p-2 mb-2 max-w-md`}
    >
      {message.text}
    </li>
  ));

  return (
    <div className="flex flex-col p-10 bg-pink-400 text-white bottom-0 right-0 z-50 fixed items-center justify-center">
      <ul className="p-4 rounded-lg">
        {messageList}
      </ul>
      <form className="flex mt-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="message"
          className="flex-1 border text-black border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatComponent;
