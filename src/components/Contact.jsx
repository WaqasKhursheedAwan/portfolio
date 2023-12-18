import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Button from "./Button";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_abyq7pq",
        "template_rq50hxb",
        form.current,
        "M_9JGXXxJuRdNU5I0"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          toast("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const contact_info = [
    { logo: "mail", text: "awanw4903@gmail.com" },
    { logo: "logo-whatsapp", text: "0344-9638043" },
    {
      logo: "location",
      text: "Pakistan",
    },
  ];
  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-bold text-gray-400">
          Contact <span className="text-white"> Me </span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form
            className="flex flex-col flex-1 gap-5"
            ref={form}
            onSubmit={sendEmail}
          >
            <input type="text" placeholder="Your Name" name="to_name" />
            <input type="Email" placeholder="Your Email Address" name="email" />
            <textarea
              placeholder="Your Message"
              rows={10}
              name="message"
            ></textarea>
            <button className="flex lg:text-xl sm:text-lg md:text-base xl:text-xl my-3 border-4 gap-2 rounded-full text-gray-500 border-white px-7 py-4 hover:bg-transparent hover:font-bold hover:text-white w-fit">
              {" "}
              send Message
            </button>
            <ToastContainer />{" "}
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-black rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
