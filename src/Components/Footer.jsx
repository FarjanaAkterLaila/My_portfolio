import React from 'react';
import { AiFillMail } from 'react-icons/ai';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
          <div className="footer p-10 bg-base-200 text-base-content">
  <div>
  <img className="h-16 w-18 rounded-full mx-auto" src="https://i.ibb.co/YD7vYPM/Istockphoto-1298299509-612x612.jpg" alt="" />
    {/* <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clip-rule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg> */}
    <p className='font-bold  text-4xl '>Farjana Akter Laila</p>
    <p>Department of Computer Science And Engineering<br/>International Islamic University,chittagong</p>
  </div> 
  <div>
    <a className="footer-title" href="/#service">Services</a> 
    
    
    <a className="link link-hover">Responsive Web Desgin</a> 
    <a className="link link-hover">Web Design and Development</a> 
    <a className="link link-hover">E-commerce Development</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a href="/#about" className="link link-hover" >About </a> 
    <a href="/#contact" className="link link-hover">Contact</a> 
    <a href="/#project" className="link link-hover">Project</a> 
    <a href="/#skill" className="link link-hover">Skils</a>
  </div> 
  <div>
    <span className="footer-title">Social</span> 
    <div className="grid grid-flow-col gap-4">
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
  </div>
  </div>
  <div className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p > © Copyright Farjana Akter Laila. All Rights Reserved</p>
        </div>
      </div>
</footer>
    );
};

export default Footer;