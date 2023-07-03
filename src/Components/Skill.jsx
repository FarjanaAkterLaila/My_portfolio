import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiMongodb ,SiTailwindcss} from "react-icons/si";


const Skill = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const Fskills = [
    {
      logo: <FaHtml5 size={50}  />,
      level: 'HTML5',
      count: 100,
    },
    {
      logo: <FaCss3Alt size={50}/>,
      level: 'CSS3',
      count: 100,
    },
    
    {
      logo: <FaBootstrap size={50}/>,
      level: 'Bootstrap',
      count: 100,
    },
    {
      logo: <SiTailwindcss size={50}  />, 
      level: 'Bootstrap',
      count: 100,
    },
    {
      logo: <FaReact size={50} />,
      level: 'React',
      count: 100,
    },
  ];
  const Bskills = [
    {
      logo: <SiMongodb size={50} />,
      level: 'Mongodb',
      count: 100,
    },
  
    {
      logo: <FaNodeJs size={50}  />,
      level: 'Node.js',
      count: 100,
    },
    {
      logo: <SiExpress size={50}  />, 
      level: 'Express.js',
      count: 100,
    },
   
  ];
  return (

    <section id="skill" className=" relative">
    <div className="mt-8 text-black text-center" data-aos="fade-up">
    <h2 className="mx-auto text-center text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2" data-aos="fade-up">
        My <span className="text-purple-600">Skills</span>
      </h2>
      <p className="text-gray-500 mt-3 text-lg" data-aos="fade-up">Front End Skills</p>
      <div className="flex items-center justify-center mt-12 gap-10 flex-wrap text-white" >
        {Fskills?.map((skill, i) => (
          <div
            key={i}
            className="border-2 group border-purple-500 relative min-w-[10rem] max-w-[16rem] bg-gray-500 p-10 rounded-xl"
          >
            <div
              style={{
                background: `conic-gradient(rgb(147, 54, 180) ${skill.count}%,#ddd ${skill.count}%)`,
              }}
              className="w-32 h-32 flex items-center justify-center rounded-full"
              data-aos="fade-up"
              >
              <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-purple-500">
                {skill.logo}
              </div>
            </div>
            <p className="text-xl mt-3">{skill.level}</p>
          </div>
        ))}
      </div>
      <p className="text-gray-500 mt-8 text-lg" data-aos="fade-up">Back End Skills</p>
      <div className="flex items-center justify-center mt-12 gap-10 flex-wrap text-white" data-aos="fade-right">
        {Bskills?.map((skill, i) => (
          <div
            key={i}
            className="border-2 group border-purple-500 relative min-w-[10rem] max-w-[16rem] bg-gray-500 p-10 rounded-xl"
          >
            <div
              style={{
                background: `conic-gradient(rgb(147, 54, 180) ${skill.count}%,#ddd ${skill.count}%)`,
              }}
              className="w-32 h-32 flex items-center justify-center rounded-full"
              data-aos="fade-up" >
              <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-purple-500" >
                {skill.logo} 
              </div>
            </div>
            <p className="text-xl mt-3">{skill.level}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Skill;
