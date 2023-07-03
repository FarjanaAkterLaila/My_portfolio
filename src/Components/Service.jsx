import React from 'react';

const Service = () => {
    return (
      <section className=" mx-8 lg:mx-40" id='service'>
      <div className="container mx-auto">
      <div className="text-center" data-aos="fade-up">
      <h2 className="mx-auto text-center text-4xl font-bold mb-5 border-b-[5px] w-[180px] lg:w-[270px] border-indigo-600 pb-2" data-aos="fade-up">
          My <span className="text-purple-600">Services</span>
        </h2>
        <p className="text-gray-400 mt-3 text-lg">What i offer</p>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-xl p-6" data-aos="fade-right">
            <img src="https://i.ibb.co/3pK7q5T/responsive-design-services.jpg" alt="Service 1" className="w-full h-40 object-cover mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold mb-2">Responsive Web Design</h3>
            <p className="text-gray-600">
            Designing websites that adapt and work seamlessly across different devices and screen sizes, including desktops, laptops, tablets, and mobile phones.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-xl p-6" data-aos="fade-up">
            <img src="https://i.ibb.co/zQk65Q3/website-design-development-services.png" alt="Service 2" className="w-full h-40 object-cover mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold mb-2">Website Design and Development</h3>
            <p className="text-gray-600">
            Creating custom websites from scratch or redesigning existing websites. This includes designing the user interface (UI), developing the frontend using HTML, CSS, and JavaScript, and implementing the backend functionality.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-xl p-6" data-aos="fade-right">
            <img src="https://i.ibb.co/yXpkh9K/184-1843804-e-commerce-web-development-logos.jpg" alt="Service 3" className="w-full h-40 object-cover mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold mb-2">E-commerce Development</h3>
            <p className="text-gray-600">
            Assisting clients with domain registration, website hosting setup, and deployment to ensure smooth online presence.
            </p>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Service;