import { useEffect, useRef, useState } from "react";
import { useDarkMode } from "../context/useDarkMode";
import { FaArrowLeft } from "react-icons/fa";
import { Nav } from ".";

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

// DirectMessage component
export function DirectMessage({ onClose }: any) {
  const { darkMode } = useDarkMode();
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleMessageSubmit = (name: string, message: string) => {
    const newUserMessage = {
      id: Math.random().toString(36).substr(2, 9),
      name: name,
      message: message,
      isUserMessage: true,
    };

    setMessages([...messages, newUserMessage]);

    setTimeout(() => {
      setMessages((prevMessages) => {
        const fakeMessage = {
          id: Math.random().toString(36).substr(2, 9),
          name: "Daniel Perez", // Your name
          message: `Hey ${name} thanks for reaching out, I will get back to you as soon as possible!`,
          isUserMessage: false,
        };
        return [...prevMessages, fakeMessage];
      });
    }, 1000); // Delay in milliseconds
  };
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex flex-col items-center justify-between overflow-y-scroll  ${
        darkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      {/* <Nav /> */}
      <div className="flex justify-start w-full p-4">
        <FaArrowLeft
          onClick={onClose}
          className={`text-xl hover:scale-105 duration-150 ease-in-out cursor-pointer self-center ${
            darkMode ? "text-white" : "text-dark"
          }`}
        />
      </div>
      <div className="max-w-[750px] flex-grow w-full">
        <div
          className={`flex flex-col justify-between w-full h-[720px] max-h-[740px] md:rounded-lg ${
            darkMode
              ? " bg-[#303034] duration-150 ease-in-out"
              : " bg-[#eeeeee] duration-150 ease-in-out"
          }`}
        >
          <div
            className={`flex items-center flex-col font-light text-sm ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            <img
              src="/memoji.PNG"
              alt=""
              className={`rounded-full h-14 w-14 object-cover bg-white ring-1 my-4 ${
                darkMode ? "ring-black" : "ring-white"
              }`}
            />
            <p>@danielperez</p>
            <p className="p">Joined March 2024</p>
          </div>

          <div
            className={`m-4 overflow-x-hidden overflow-y-auto ${
              darkMode ? "text-white" : "text-white"
            }`}
          >
            {messages.map((msg: any) => (
              <div
                key={msg.id}
                className={`p-2 rounded-lg mb-2 max-w-fit pr-10 ${
                  msg.isUserMessage
                    ? "ml-auto slide-right w-[75%] "
                    : "mr-auto slide-left w-[75%] "
                } ${
                  darkMode
                    ? msg.isUserMessage
                      ? "bg-blue-400"
                      : "bg-gray-700"
                    : msg.isUserMessage
                    ? "bg-blue-400"
                    : "bg-gray-500"
                }`}
              >
                <span className="">{msg.message}</span>
              </div>
            ))}
            <div ref={messagesEndRef}></div>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg shadow-lg mx-auto w-full">
            <ContactForm onMessageSubmit={handleMessageSubmit} />
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
function ContactForm({ onMessageSubmit }: any) {
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
    onMessageSubmit(formData.name, formData.message);

    // Reset form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow-lg mx-auto w-full  overflow-scroll ">
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
