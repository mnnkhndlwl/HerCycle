import React, { useState,useEffect } from "react";
import "./community.css";
import { useSelector } from "react-redux";
import { userRequest, publicRequest } from "../../config";

function Community() {
  const [community, setCommunity] = useState([]);
  const { currentUser } = useSelector((state) => state.user);
  const [newCommunity, setNewCommunity] = useState("");

  useEffect(() => {
    const fetchCommunity = async () => {
      try {
        const res = await publicRequest.get(`/api/community/`);
        setCommunity(res.data);
      } catch (err) {}
    };
    fetchCommunity();
    console.log(community);
  }, []);

  //TODO: ADD NEW COMMENT FUNCTIONALITY
  const fetchCommunity = async () => {
    try {
      const res = await publicRequest.get(`/api/community/`);
      setCommunity(res.data);
      window.location.reload();
    } catch (err) {}
  };

  const handleCommunity = async () => {
    try {
      await userRequest.post(`/api/community/`, {
        desc: currentUser.isDoctor ? "Dr " + currentUser.name + " : " + newCommunity : newCommunity,
      });
      fetchCommunity();
      setNewCommunity("");
    } catch (error) {
      console.log(error);
    }
  };

  if (document.getElementById("messages")) {
    const el = document.getElementById("messages");
    el.scrollTop = el.scrollHeight;
  }
  return (
    <div>
      <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col max-h-screen">
        <div
          id="messages"
          className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
        >
          {community.map((chat) => {
           if (chat.userId !== currentUser._id) {
              return <div className="chat-message">
                <div className="flex items-end">
                  <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                    <div>
                      <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                        {chat.desc}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            } else {
              return <div className="chat-message">
                <div className="flex items-end justify-end">
                  <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                    <div>
                      <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                        {chat.desc}
                      </span>
                    </div>
                  </div>
                </div>
              </div> 
            }
          })}
        </div>

        <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
          <div className="relative flex">
            <input
              onChange={(e) => setNewCommunity(e.target.value)}
              placeholder="Write your message!"
              className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
            />
            <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
              <button
                onClick={handleCommunity}
                className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
              >
                <span className="font-bold">Send</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-6 w-6 ml-2 transform rotate-90"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
