
const Header = () => {

    const navItems = (
      <>
        <li className="font-bold text-lg">
        <a href="/#about">About</a>
        </li>
        <li className="font-bold text-lg">
            <a href="/#skill">Skills</a>
           </li>
               <li className="font-bold text-lg">
              <a href="/#project">Projects</a>
            </li>
               <li className="font-bold text-lg">
              <a href="/#service">Service</a>
            </li>
           
             <li className="font-bold text-lg">
               <a href="/#contact">Contact</a>
             </li>
        <li>
        {/* <div className="flex-none">
          <button className="btn btn-square btn-ghost">
              <label className="swap swap-rotate w-12 h-12">
                <input
                  type="checkbox"
                  onChange={handleToggle} */}
                  {/* // show toggle image based on localstorage theme */}
                  {/* checked={theme === "light" ? false : true}
                /> */}
                {/* light theme sun image */}
                {/* <img src="https://i.ibb.co/vPbpJw1/photo-1588345921523-c2dcdb7f1dcd.jpg" alt="light" className="w-8 h-8 swap-on" /> */}
                {/* dark theme moon image */}
                {/* <img src="https://i.ibb.co/mzMZVN1/download-3.jpg"alt="dark" className="w-8 h-8 swap-off" />
              </label>
            </button> */}
          {/* </div> */}
        </li>
        
      
       
      
          
      </>
    );
    return (

      <div>
      <div className=" navbar z-10 fixed bg-opacity-90  bg-[#822cc5] text-white ">
        <div className=" max-w-7xl mx-auto navbar h-20 mb-0">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact static z-50 dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52"
              >
                {navItems}
              </ul>
            </div>
            <img className="h-16 w-18 rounded-full" src="https://i.ibb.co/YD7vYPM/Istockphoto-1298299509-612x612.jpg" alt="" />
            <h1 className="mx-2 font-bold text-xl lg:text-3xl ">
            Farjana<span className="mx-1 lg:mx-3">Akter</span>Laila
            </h1>
          </div>
       
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
     
          </div>
       
    
           
      
            
    
        
           </div> 
        </div>
      </div>
      
    );
};

export default Header;