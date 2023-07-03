import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useSpring, animated } from 'react-spring';
import Swal from 'sweetalert2';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    // console.log(form.);
        emailjs
          .sendForm(
            "service_6e2wapp",
            "template_ywf72di",
            form.current,
            "1kuQTSEyuFy86Wl80"
          )
          .then(
            (result) => {
              console.log(result.text);
              console.log("message sent");
              
              Swal.fire({
                icon: 'success',
                title: 'Message Sent',
                text: 'Your message has been successfully sent!',
              });
              form.current.reset();
            },
            (error) => {
              console.log(error.text);
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong! Please try again.',
              });
            }
          );
      };
    const contact_info = [
        { logo: "mail", text: "farjanaakter7275@gmil.com" },
        { logo: "logo-whatsapp", text: "+8801571736651" },
        {
          logo: "location",
          text: "demo location",
        },
      ];
      const animateProps = useSpring({
        from: { transform: 'translate(0px, 0px)' },
        to: { transform: 'translate(-10px, -10px)' },
        config: { duration: 1000, tension: 120, friction: 14 },
        loop: { reverse: true },
      });
    return (
        <section id="contact" className="py-10 px-3 ">
        <div className="text-center mt-8" data-aos="fade-up">
        <h2 className="mx-auto text-center text-4xl font-bold mb-5 border-b-[5px] w-[270px] border-indigo-600 pb-2" data-aos="fade-up">
          Contact <span className="text-purple-600">Me</span>
        </h2>
          <p className="text-gray-400 mt-3 text-lg">Get in touch</p>
  
          <div className="mt-8 flex md:flex-row flex-col gap-20 max-w-5xl text-black md:p-6 p-2 rounded-lg mx-auto">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col flex-1 gap-5" data-aos="fade-right">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-400 rounded-md py-2 px-3"
              name="user_name"
            />
            <input
              type="email"
              placeholder="Your Email Address"
              className="border border-gray-400 rounded-md py-2 px-3"
              name="user_email" 
            />
            <textarea
              placeholder="Your Message"
              rows={10}
              className="border border-gray-400 rounded-md py-2 px-3"
              name="message" 
            ></textarea>
            <button className="btn btn-primary w-fit mx-auto" type="submit" value="Send">
              Send Message
            </button>
          </form>
          
          <div className="flex flex-col gap-7">
            {contact_info.map((contact, i) => (
                <animated.div
                key={i}
                className="flex flex-row text-left gap-4 flex-wrap items-center"
                style={animateProps}
              >
                <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-purple-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm break-words">{contact.text}</p>
              </animated.div>
            ))}
          </div>
        </div>
        </div>
      </section>
    );
};

export default Contact;