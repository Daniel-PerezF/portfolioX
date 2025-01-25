import { useEffect, useRef, useState } from "react";
import { useDarkMode } from "../context/useDarkMode";
import { Message } from "../data";
import emailjs from "@emailjs/browser";
import { FaPaperPlane, IoClose } from "../icons/icons";

export function DirectMessage({ onClose }: { onClose: () => void }) {
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

    const updatedMessages = [...messages, newUserMessage];
    setMessages(updatedMessages);

    sessionStorage.setItem("messages", JSON.stringify(updatedMessages));

    const mockReplies = [
      `Hey ${name}, thanks for reaching out! I'll get back to you by email shortly.`,
      `Hi ${name}, I appreciate your message! You'll hear from me soon via email.`,
      `${name}, thanks for your inquiry. I'll respond to you as soon as possible via email.`,
      `Hello ${name}! I've received your message and will follow up soon.`,
    ];

    const randomReply =
      mockReplies[Math.floor(Math.random() * mockReplies.length)];

    setTimeout(() => {
      setMessages((prevMessages) => {
        const fakeMessage = {
          id: Math.random().toString(36).substr(2, 9),
          name: "Daniel Perez",
          message: randomReply,
          isUserMessage: false,
        };
        const updatedMessages = [...prevMessages, fakeMessage];
        sessionStorage.setItem("messages", JSON.stringify(updatedMessages));
        return updatedMessages;
      });
    }, 1000);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    const storedMessages = sessionStorage.getItem("messages");
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={`fixed top-0 left-0 w-full h-full flex flex-col items-center justify-between overflow-y-scroll   ${
        darkMode
          ? "bg-dark/50 backdrop-blur-md text-light"
          : "bg-light/50 backdrop-blur-md text-dark"
      } px-4`}
      onClick={onClose}
    >
      <div className="">
        <IoClose
          onClick={onClose}
          className={`text-4xl hover:scale-105 duration-150 ease-in-out cursor-pointer z-50 top-3 left-3 fixed self-center ${
            darkMode ? "text-white" : "text-dark"
          }`}
        />
      </div>
      <div className="max-w-[750px] flex-grow w-full justify-center items-center h-full">
        <div
          className={`flex flex-col justify-between max-h-[668px] h-full w-full m-auto rounded-md mb-10 mt-16 ${
            darkMode
              ? " bg-[#303034] duration-150 ease-in-out"
              : " bg-[#e6e3e3] duration-150 ease-in-out"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className={`flex items-center flex-col font-light text-sm ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            <img
              src="/memoji4.png"
              alt="my memoji"
              className={`rounded-full h-14 w-14 object-cover bg-white my-4 `}
            />
            <p>@dxnieldev</p>
            <p className="p">Joined March 2024</p>
          </div>

          <div
            className={`m-4 overflow-x-hidden overflow-y-auto whitespace-normal break-words pb-3 ${
              darkMode ? "text-white" : "text-white"
            }`}
          >
            {messages.length > 0 ? (
              messages.map((msg: any) => (
                <div
                  key={msg.id}
                  className={`p-2 rounded-lg mb-2 max-w-fit pr-10 pl-4 ${
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
              ))
            ) : (
              <div
                className={` font-extralight text-sm flex justify-center text-center ${
                  darkMode ? "text-[#a0a0a5]" : "text-[#909095]"
                }`}
              >
                All messages will be sent by email. Thank you.
              </div>
            )}
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
  const form = useRef<HTMLFormElement | null>(null);
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onMessageSubmit(formData.name, formData.message);
    emailjs
      .sendForm(
        "service_wnyy7aj",
        "template_cozrk6s",
        e.currentTarget,
        "OQLmnYzOMu4Vtjbwd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.currentTarget.reset();
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className={` rounded-lg  mx-auto w-full relative `}>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-2">
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
        <button
          className="absolute bottom-7 right-3 text-xl"
          type="submit"
          aria-label="Send contact message"
        >
          <FaPaperPlane
            className={` ${darkMode ? "text-white" : "text-gray-600"} `}
          />
        </button>
      </form>
    </div>
  );
}
