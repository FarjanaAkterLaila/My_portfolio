import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import { HiExternalLink } from "react-icons/hi";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleIconClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const projects = [
    {
      img: 'https://i.ibb.co/HgCfQkW/music-school-c1bb2-web-app-1.jpg',
      name: "Rhymusol",
      githubServer_link: "https://github.com/FarjanaAkterLaila/Rhymusol-Server-Site",
      githubClient_link: "https://github.com/FarjanaAkterLaila/Rhymusol-Client-Side",
      live_link: "https://music-school-c1bb2.web.app/",
      Used_Technologies: "React, Tailwind CSS, Firebase Authentication, Express.js, Daisyui, MongoDB etc",
      feature: "1. The website features user, instructor, and admin dashboards with restricted access based on assigned roles, ensuring customized functionalities and maintaining security.\n\n2. User can choose the class of his choice and go to his dashboard and make payment. Instructor can add class and can see his added class and can see feedback by admin. \n\n3. Admin can remove or approve added class and can also give feedback and can make a user as admin or instructor. And also firebase authentication has been done on the website."
    },
    {
      img: 'https://i.ibb.co/8m5JpvF/bd-foodi-place-web-app.jpg',
      name: "Bangladeshi Food",
      githubServer_link: "https://github.com/FarjanaAkterLaila/BangladeshiFoodServer",
      githubClient_link: "https://github.com/FarjanaAkterLaila/BangladeshiFoodClient",
      live_link: "https://bd-foodi-place.web.app/",
      Used_Technologies: "React route, Bootstrap CSS, Firebase Authentication, Express.js, React Bootstrap ",
      feature: "1. A user can view information about 6 chefs on the homepage and obtain detailed information about them by clicking on the Details button.\n\n2. The recipe cards feature photos of the dishes along with all the necessary information. Users have the option to favorite any recipe of their choice.\n\n3. A download button has been added to the Blogging page, allowing users to easily download content with just a click."
    },
    {
      img: 'https://i.ibb.co/0YykNHg/edu-ler-toys-web-app.jpg',
      name: "Educational Toys",
      githubServer_link: "https://github.com/FarjanaAkterLaila/EducationalToyServer",
      githubClient_link: "https://github.com/FarjanaAkterLaila/EducaltionalToyClient",
      live_link: "https://edu-ler-toys.web.app/",
      Used_Technologies: "React.js, Bootstrap CSS, Firebase Authentication, Express.js, MongoDB etc",
      feature: "1. The home page offers a captivating gallery section featuring educational toys enhanced by the AOS library.\n\n2. In the category tab section, all users can glimpse the information. For full details, logging in is necessary to unveil the comprehensive information available.\n\n3. Unleash your authority as users add toys to the educational toy section with the mighty Add Toy feature. "
    },
    {
      img: 'https://i.ibb.co/dM1frtX/Fire-Shot-Capture-002-Vite-React-playful-twilight-7825ce-netlify-app.png',
      name: "Carreer Hub",
     
      githubClient_link: "https://github.com/FarjanaAkterLaila/Carreer_hub",
      live_link: "https://playful-twilight-7825ce.netlify.app/",
      Used_Technologies: "React Bootstrap, Bootstrap CSS,etc",
      feature: "1. The home page offers a job category Lists,features jobs.\n\n2. In the features jobs section, all users can glimpse the information. For full details, logging in is necessary to unveil the comprehensive information available.\n\n3. Unleash your authority as users apply to the selected job section with the mighty applied feature. And this applied list user can see all type job and also filter the job category"
    },
  ];

  return (
    <section id="project" className="py-10">
      <div className="mt-8 text-black text-center" data-aos="fade-up">
    <h2 className="mx-auto text-4xl font-bold mb-5 border-b-[5px] w-[270px] border-indigo-600 pb-2" data-aos="fade-up">
        My <span className="text-purple-600">Projects</span>
      </h2>
      {/* <p className="text-gray-500 mt-3 text-lg" data-aos="fade-up">Front End Skills</p> */}
      {/* <div className="text-center">
        <h2 className="mx-auto text-center text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2" data-aos="fade-up">
          My <span className="text-purple-600">Projects</span>
        </h2> */}
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative text-white">
        <div className="w-full">
          <Swiper
            slidesPerView={1}
            spaceBetween={5}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 9000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="card image-wrap h-fit w-full pb-10 p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <a href={project_info.live_link} target="_blank" rel="noopener noreferrer" className="absolute rounded-xl right-0  mr-4 mt-4 p-1 bg-purple-900 text-white">
                  <HiExternalLink size={30}/>
                      </a>
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex justify-between pb-6">
                    <div className="flex gap-3">
                      {project_info.githubServer_link?
                      (<a href={project_info.githubServer_link} target="_blank" rel="noopener noreferrer" className="text-white bg-purple-800 px-2 py-1 inline-block">
                        Server
                      </a>):(<></>)
                      }
                      <a href={project_info.githubClient_link} target="_blank" rel="noopener noreferrer" className="text-white bg-purple-800 px-2 py-1 inline-block">
                        Client
                      </a>
                    
                    </div>
                    <button className="text-white bg-purple-800 px-2 py-1 inline-block" onClick={() => handleIconClick(project_info)}>
  Details
</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {showModal && selectedProject && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="fixed inset-0 bg-black opacity-75"></div>
              <div className="bg-white text-black p-8 rounded-lg z-10">
                <h2 className="text-2xl font-bold mb-4">Name: {selectedProject.name}</h2>
                <div>
                  <h3 className="text-xl mb-2">Used Technologies:</h3>
                  <p className="mb-4">{selectedProject.Used_Technologies}</p>
                  <h3 className="text-xl mb-2">Feature:</h3>
                  <ul className="pl-6">
                    {selectedProject.feature.split('\n').map((point, index) => (
                      <li key={index} className="mb-2">{point}</li>
                    ))}
                  </ul>
                </div>
                <button className="text-white bg-purple-800 px-2 py-1 mt-4" onClick={() => setShowModal(false)}>
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
