import { useEffect, useRef, useState } from "react";
import { useDarkMode } from "../context/useDarkMode";
import { FaArrowLeft, FaPaperPlane } from "react-icons/fa";
import { Message } from "../data";

export function DirectMessage({ onClose }: any) {
  const { darkMode } = useDarkMode();
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo(0, 0);
    }
  }, []);

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
          name: "Daniel Perez",
          message: `Hey ${name}, thanks for reaching out! I will get back to you by email as soon as possible!`,
          isUserMessage: false,
        };
        return [...prevMessages, fakeMessage];
      });
    }, 1000);
  };
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div
      ref={containerRef}
      className={`fixed top-0 left-0 w-full h-full flex flex-col items-center justify-between overflow-y-scroll   ${
        darkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <div className="flex justify-start w-full p-4 ">
        <FaArrowLeft
          onClick={onClose}
          className={`text-xl hover:scale-105 duration-150 ease-in-out cursor-pointer self-center ${
            darkMode ? "text-white" : "text-dark"
          }`}
        />
      </div>
      <div className="max-w-[750px] flex-grow w-full">
        <div
          className={`flex flex-col justify-between w-full h-[700px] md:h-[730px] max-h-[740px] md:rounded-lg mb-10 ${
            darkMode
              ? " bg-[#303034] duration-150 ease-in-out"
              : " bg-[#e6e3e3] duration-150 ease-in-out"
          }`}
        >
          <div
            className={`flex items-center flex-col font-light text-sm ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            <img
              src="/memoji.PNG"
              alt="my memoji"
              className={`rounded-full h-14 w-14 object-cover bg-white ring-1 my-4 ${
                darkMode ? "ring-black" : "ring-white"
              }`}
            />
            <p>@danielperez</p>
            <p className="p">Joined March 2024</p>
          </div>

          <div
            className={`m-4 overflow-x-hidden overflow-y-auto whitespace-normal break-words ${
              darkMode ? "text-white" : "text-white"
            }`}
          >
            {messages.map((msg: any) => (
              <div
                key={msg.id}
                className={`p-2 rounded-lg mb-2 max-w-fit pr-10 ${
                  msg.isUserMessage
                    ? "ml-auto animate-slide-right w-[75%] "
                    : "mr-auto animate-slide-left w-[75%] "
                } ${
                  darkMode
                    ? msg.isUserMessage
                      ? "bg-blue-400"
                      : "bg-gray-700"
                    : msg.isUserMessage
                    ? "bg-blue-400"
                    : "bg-gray-400"
                }`}
              >
                <span className="">{msg.message}</span>
              </div>
            ))}
            <div ref={messagesEndRef}></div>
          </div>
          <div
            className={`${darkMode ? "" : ""} p-4 rounded-lg  mx-auto w-full`}
          >
            <ContactForm onMessageSubmit={handleMessageSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactForm({ onMessageSubmit }: any) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { darkMode } = useDarkMode();
  const [error, setError] = useState("");
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (
      !formData.name.trim() &&
      !formData.message.trim() &&
      !formData.email.trim()
    ) {
      setError("Please enter your name, email, and message.");
      return;
    }
    if (!formData.name.trim() && !formData.message.trim()) {
      setError("Please enter your name and message.");
      return;
    }
    if (!formData.name.trim() && !formData.email.trim()) {
      setError("Please enter your name and email.");
      return;
    }
    if (!formData.email.trim() && !formData.message.trim()) {
      setError("Please enter your email and message.");
      return;
    }
    if (!formData.name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!formData.email.trim()) {
      setError("Please enter your email.");
      return;
    }
    if (!formData.message.trim()) {
      setError("Please enter your message.");
      return;
    }

    onMessageSubmit(formData.name, formData.message);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setError("");
  };

  return (
    <div className={` rounded-lg  mx-auto w-full relative mb-8 `}>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-2">
          {" "}
          <label htmlFor="name" className="sr-only">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Name"
            className={`w-full ${
              darkMode ? "bg-[#585b66] text-light" : "bg-gray-100 text-gray-700"
            } rounded-lg py-2 pl-3 pr-8 focus:outline-none focus:ring focus:border-blue-300 mb-2`}
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="email" className="sr-only">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Email"
            className={`w-full ${
              darkMode ? "bg-[#585b66] text-light" : "bg-gray-100 text-gray-700"
            } rounded-lg py-2 pl-3 pr-8 focus:outline-none focus:ring focus:border-blue-300 mb-2`}
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <label htmlFor="message" className="sr-only">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Message"
          className={`w-full ${
            darkMode ? "bg-[#585b66] text-light" : "bg-gray-100 text-gray-700"
          } rounded-lg py-2 pl-3 pr-8 text-gray-200 focus:outline-none focus:ring focus:border-blue-300 mb-2 resize-none`}
          value={formData.message}
          rows={4}
          onChange={handleChange}
        ></textarea>
        <div className="absolute">
          {error && <p className="text-red-500">{error}</p>}
        </div>

        <button
          className="absolute bottom-7 right-3 text-xl"
          onClick={handleSubmit}
          type="submit"
        >
          <FaPaperPlane
            className={` ${darkMode ? "text-white" : "text-gray-600"} `}
          />
        </button>
      </form>
    </div>
  );
}
