import { useState } from "react";
import { useDarkMode } from "../context/useDarkMode";
import {
  BiMessageRounded,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaRetweet,
  IoClose,
  IoStatsChart,
  MdFavoriteBorder,
  MdOutlineFavorite,
  RiVerifiedBadgeFill,
} from "../icons/icons";

import { FaArrowLeft } from "react-icons/fa";

// export function DirectMesssage({ onClose }: any) {
//   const darkMode = useDarkMode();
//   return (
//     <div
//       className={`h-[100vh] w-full justify-center flex ${
//         darkMode ? "bg-dark" : "bg-light"
//       }`}
//     >
//       <ProfilePic />
//       <FaLongArrowAltLeft
//         onClick={onClose}
//         className="text-white z-50 top-2 left-2 fixed text-3xl hover:scale-105 duration-150 ease-in-out cursor-pointer"
//       />
//     </div>
//   );
// }

export function DirectMessage({ onClose }: any) {
  const darkMode = useDarkMode();
  const [messages, setMessages] = useState<Message[]>([]);

  const handleMessageSubmit = (message: string) => {
    const newMessage = {
      id: Math.random().toString(36).substr(2, 9),
      name: "User",
      message: message,
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex flex-col items-center md:justify-between justify-start overflow-y-scroll ${
        darkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <div className="flex justify-start w-full p-4">
        <FaArrowLeft
          onClick={onClose}
          className="text-white text-xl hover:scale-105 duration-150 ease-in-out cursor-pointer self-center"
        />
        <img
          src="/memoji.PNG"
          alt=""
          className={`rounded-full h-14 w-14 object-cover bg-white ring-1 ml-4 ${
            darkMode ? "ring-black" : "ring-white"
          }`}
        />
      </div>
      <div className="max-w-[750px] flex-grow w-full">
        <div
          className={`flex flex-col justify-between w-full md:h-[700px] h-[100%] md:rounded-lg ${
            darkMode
              ? "hover:bg-[#37363c] bg-[#303034] duration-150 ease-in-out"
              : "hover:bg-[#EBEBEB] bg-[#eeeeee] duration-150 ease-in-out"
          }`}
        >
          <div className="m-4">
            {messages.map((msg: any) => (
              <div
                key={msg.id}
                className="bg-gray-800 p-2 rounded-lg mb-2 max-w-fit pr-10"
              >
                <span className="text-gray-200 font-semibold ">
                  {msg.name}:{" "}
                </span>
                <span className="text-gray-300">{msg.message}</span>
              </div>
            ))}
          </div>
          {/* <div className="mt-4">
            {messages.map((msg: any) => (
              <div key={msg.id} className="bg-gray-800 p-2 rounded-lg mb-2">
                <span className="text-gray-200 font-semibold">
                  {msg.name}:{" "}
                </span>
                <span className="text-gray-300">{msg.message}</span>
              </div>
            ))}
          </div> */}
          <div className="">
            <ContactForm
              onMessageSubmit={handleMessageSubmit}
              messages={messages}
              setMessages={setMessages}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Contact Form
interface Message {
  id: string;
  name: string;
  message: string;
}
function ContactForm({ messages, setMessages }: any) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    // Handle form submission
    const newMessage = {
      id: Math.random().toString(36).substr(2, 9),
      name: formData.name,
      message: formData.message,
    };
    setMessages([...messages, newMessage]);

    // Reset form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow-lg mx-auto w-full ">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full bg-gray-800 rounded-lg py-2 px-3 text-gray-200 focus:outline-none focus:ring focus:border-blue-300 mb-2"
          value={formData.name}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full bg-gray-800 rounded-lg py-2 px-3 text-gray-200 focus:outline-none focus:ring focus:border-blue-300 mb-2"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        >
          Send
        </button>
      </form>
    </div>
  );
}
