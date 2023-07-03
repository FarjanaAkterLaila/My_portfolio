import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoMdDownload } from 'react-icons/io';
const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="text-black px-5 py-4 mx-auto" id="about">
        <h2 className="mx-auto text-center text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2" data-aos="fade-up">
        About Me
      </h2>
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-img" data-aos="fade-right" data-aos-duration="1000">
          <img
            src="https://i.ibb.co/89rY6nk/46ffa94913ca5ace0d8b43eb3ffe85c7.webp"
            alt="coding illustration"
            className="lg:w-[80%] md:w-auto mx-auto"
          />
        </div>
        <div className="about-info justify-self-center text-justify mx-auto" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
          <p className="pb-5 mt-10 lg:mt-0">
            Hi, My Name Is Farjana Akter Laila everyone calls me Farjana. I am a Frontend Developer,Backent developer,Mern Stack devloper. I build beautiful websites with React, Tailwind CSS, Bootstrap CSS, Daisyui.
          </p>
          <p className="pb-5">
            I am proficient in Frontend skills like React.js, Redux, Redux Toolkit, Axios, Tailwind CSS, Bootstrap CSS, and many more.
          </p>
          <p>In the backend, I know Node.js, Express.js and MongoDB.</p>
          <p>
            In my spare time, I like learning about new technologies, competing in coding competitions, and keeping up with the most recent web development trends.
          </p>
          <a
              href="/#project"
              className="btn mt-4 bg-[#822cc5] border-2 text-white px-6 py-3 hover:bg-[#c084fc] mb-2 md:mb-0 md:mr-2"
            >
              See Projects
            </a>
        </div>
      </div>
    </section>
  );
};

export default About;
