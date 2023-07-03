import React from 'react';
import { AiOutlineFacebook, AiOutlineTwitter, AiOutlineYoutube } from 'react-icons/ai';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import { IoMdDownload } from 'react-icons/io';

const Hero = () => {
  return (
    <section className="px-5 pt-28 lg:pt-20">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0 mx-auto animate__animated animate__fadeInLeft">
          <h1 className="text-3xl lg:text-6xl">
            Hi, <br />
            I am <span className="text-accent">F</span>arjana<br />

            <Typewriter
              options={{
                strings: [
                  '<span style="color: #3b0764">Frontend Developer</span>',
                  '<span style="color: #3b0764">MernStack Developer</span>',
                  '<span style="color: #3b0764">Web developer</span>',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <p className="py-5">
            I am proficient in JavaScript, React.js, and Tailwind CSS
          </p>

          <div className="flex flex-wrap py-5 justify-start">
            <a
              href="https://www.linkedin.com/in/farjana-akter-laila-a92674278/"
              className="pr-4 inline-block text-[#c084fc] hover:text-[#c084fc]"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/FarjanaAkterLaila"
              className="pr-4 inline-block text-[#c084fc] hover:text-[#c084fc]"
            >
              <FaGithub size={30} />
            </a>
          </div>

          <div className="flex flex-wrap justify-start">
           
            <button
  onClick={() => {
    window.location.href =
      "https://drive.google.com/uc?export=download&id=1Brf7J7p2GjkAdJW8LbWPpvHrF6_gkg0F";
  }}
  className="btn px-6  bg-[#822cc5] border-2 text-white  hover:bg-[#c084fc] mb-2 md:mb-0"
 
 
 
>
  <IoMdDownload size={22} className=" inline" />
  Resume
</button>
      
          </div>
        </div>

        <div className="hero-img animate__animated animate__fadeInRight">
          <img
            src="https://i.ibb.co/KDsF9Lb/female-software-developer-flat-concept-illustration-vector.jpg"
            alt="coding illustration"
            className="lg:w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
