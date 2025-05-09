 /* .custom-link {
    color: white;

  }
  
  .custom-link:hover {
    color: white;
    text-decoration: underline;

  }
  .marquee-container {
    overflow: hidden;
    white-space: nowrap;
    box-sizing: border-box;
    padding: 10px 0;
    z-index: 88px;
  }
   
  .marquee-text {
    display: inline-block;
    padding-left: 100%;
    padding-top: 13rem;
    font-size: 2.4rem;
    font-weight: bold;
    color: #ffffff; 
    animation: marquee 40s linear infinite;
  }
   
  /* Define the animation */
  /* @keyframes marquee {
    0%   { transform: translateX(0%); }
    100% { transform: translateX(-100%); }
  }
/*    
  /* Pause the animation on hover */
  /* .marquee-text:hover {
    animation-play-state: paused;
  } */
  .home-container {
    position: relative;
    background-image: url("https://modussystems.com/images/1.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    /* background-color: rgba(13, 47, 114, 0.6); */

    background-color: rgba(0, 112, 192, 0.6);

    z-index: 0;
  }
  
  .navbar {
    position: relative;
    z-index: 1;
  }
  
  .custom-link {
    color: rgb(255, 255, 255) !important;
    font-weight: 500;
    margin-left: 15px;
  }
  
  .logo-container {
    text-align: center;
  }
  
  .logo-text {
    font-size: 12px;
    color: #ffffff; /* Adjust color as needed */
    margin-top: 5px;
    font-weight: normal;
  }
  /* Navbar link styling */
  .navbar-nav .nav-item .nav-link {
    position: relative;
    display: inline-block;
    padding-bottom: 5px; /* Padding to create space for the underline */
    transition: color 0.3s ease; /* Smooth color transition */
    color: inherit; /* Inherit color for the default state */
    font-weight: 500; /* Optional: Add a font-weight */
  }
  
  /* Underline effect with smooth transition */
  .navbar-nav .nav-item .nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0; /* Initially hide the underline */
    height: 2px; /* Thickness of the underline */
    background-color: transparent;
    transition: background-color 0.3s ease, width 0.3s ease; /* Smooth transition for the underline */
  }
  
  /* Hover effects */
  .navbar-nav .nav-item .nav-link:hover {
    color: blue; /* Change text color to blue on hover */
  }
  
  .navbar-nav .nav-item .nav-link:hover::after {
    background-color: blue; /* Set underline color to blue */
    width: 100%; /* Expand the underline on hover */
  }
  
  /* Custom cursor effect */
  .navbar-nav .nav-item .nav-link:hover {
    cursor: pointer; /* Make the cursor a pointer when hovering */
  }
  /* Home.css */
  
  /* General styling for the navbar */
  .navbar-nav .nav-item {
    position: relative; /* Ensure the child divs are positioned correctly */
  }
  
  /* Styling for the "Company" menu item when hovered */
  .company-container .additional-links {
    display: none; /* Initially hide the links */
    position: absolute; /* Position the additional links below "Company" */
    top: 100%; /* Position below the item */
    left: 0;
    z-index: 10;
    padding: 0;
    min-width: 100%;
  }
  
  .company-container:hover .additional-links {
    display: block; /* Show the links on hover */
  }
  
  /* Styling for each additional link inside "Company" dropdown */
  .additional-links .nav-link {
    color: #fff; /* White text */
    padding: 10px 15px; /* Adjust padding for better spacing */
    font-size: 14px; /* Smaller text size */
    text-align: left;
    width: 100%;
  }
  .additional-links{
    /* background-color: rgb(255, 255, 255); */
    color: rgb(245, 245, 245);

  }
  .additional-links .nav-link:hover {
    /* background-color: #555;  */
    color: #fff;
    font-size: medium;
  }
  
  /* Adjust the behavior for small screen sizes */
  @media (max-width: 767px) {
    .company-container .additional-links {
      position: static; /* Positioning as a block element on small screens */
      display: block;
      background-color: transparent;
    }
  }
  // import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Home.css';
// function Home() {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggle = () => setIsOpen(!isOpen);
 
//   const pageStyles = {
//     backgroundImage: 'url("https://modussystems.com/images/1.png")',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     minHeight: '100vh',
//     backgroundColor: '#001f3f',
//   };
//  const navbarItems=[

//         'Home',
//         'Company',
//         'Competency',
//         'Partner Solutions',
//         'Services',
//         'Products',
//         'Gallery',
//         '20th Anniversary',
//         'Contact',
//         'Employee Login'
// ];
//   const navbarStyles = {
//     backgroundColor: 'rgba(16, 16, 93, 0.7)',
//     boxShadow: 'none',
//   };
 
//   const handlerclick = () => {
//     console.log('Company link clicked');
//   };

//   return (
//     <div style={pageStyles}>
  
 
//       <nav className="navbar navbar-expand-md" style={navbarStyles}>
//         <div className="container-fluid">
//           <a className="navbar-brand me-auto" href="/">
//             <img
//               src="https://modussystems.com/images/modus-logo-white.png"
//               alt="Modus Logo"
//               style={{ width: '150px', height: 'auto' }}
//             />
//           </a>
//           <button className="navbar-toggler" type="button" onClick={toggle}>
//             <span className="navbar-toggler-icon"></span>
//           </button>
//          {!isOpen &&(
//           <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
//             <ul className="navbar-nav ms-auto">
//               {navbarItems.map((item, index) => (
//                 <li key={index} className="nav-item p-2" onClick={item === 'Company' ? handlerclick : undefined}>
//                   <a className="nav-link custom-link" href="#">{item}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//          )}
//         </div>
//       </nav>
//       <div className="marquee-container">
//         <p className="marquee-text">ISO/IEC 27001:2022 Certified</p>
//       </div>
 
//       {/* Optional: mobile-style full list dropdown when open */}
//       {isOpen && (
//         <div className="d-md-none text-white p-3" style={{ backgroundColor: '#157DEC' }}>
//           <ul className="list-unstyled">
//             {navbarItems.map((item, index) => (
//               <li key={index} className="py-2 border-bottom border-secondary">{item}</li>
//             ))}
//           </ul>
//           <ul>info@modussystems.com</ul>
//           <ul>080-41261957/ +91 9902788711</ul>
//         </div>
     
//       )}
//     </div>
//   );
// }
 
// export default Home;
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // Ensure you import your CSS file
import Footer from './Footer';
import HomeSection from './HomeSection';
import HomeSection1 from './HomeSection1';
import HomeSection3 from './Homesection3';
import HomeSection4 from './Homesection3';
import HomeSectionUp from './HomeSectionUp';
import Services from './Services';
import HomeSectionUp3 from './HomeSectionUp3';
function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCompanyLinks, setShowCompanyLinks] = useState(false); // Show links for Company
  const [showProductsLinks, setShowProductsLinks] = useState(false); // Show links for Products
  const [showCareerLinks, setShowCareerLinks] = useState(false); // Show links for Career

  const toggle = () => setIsOpen(!isOpen);

  const navbarItems = [
    'Home',
    'Company',
    'Competency',
    'Partner Solutions',
    'Services',
    'Products',
    'Gallery',
    '20th Anniversary',
    'Contact',
    'Career',
    'Employee Login',
  ];

  // Functions for handling hover
  const handleCompanyHover = () => {
    setShowCompanyLinks(true);
  };

  const handleCompanyLeave = () => {
    setShowCompanyLinks(false);
  };

  const handleCareerHover = () => {
    setShowCareerLinks(true);
  };

  const handleCareerLeave = () => {
    setShowCareerLinks(false);
  };

  const handleProductsHover = () => {
    setShowProductsLinks(true);
  };

  const handleProductsLeave = () => {
    setShowProductsLinks(false);
  };

  return (
    <div>
    <div className="home-container">
      {/* Overlay layer */}
      <div className="overlay"></div>

      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid px-3">
          <a className="navbar-brand" href="/">
            <div className="logo-container d-flex flex-column align-items-center">
              <img
                // src="modus-logo-white.png"
                src="/images/modus-logo-white.png"
                alt="Modus Logo"
                style={{ width: '120px', height: 'auto' }}
              />
              <span className="logo-text">ISO/IEC 27001:2022 Certified</span>
            </div>
          </a>
          <button className="navbar-toggler" type="button" onClick={toggle}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto">
              {navbarItems.map((item, index) => (
                (item === 'Company' || item === 'Products' || item === 'Career') ? (
                  <li
                    key={index}
                    className="nav-item company-container"
                    onMouseEnter={item === 'Company' ? handleCompanyHover : item === 'Products' ? handleProductsHover : handleCareerHover}
                    onMouseLeave={item === 'Company' ? handleCompanyLeave : item === 'Products' ? handleProductsLeave : handleCareerLeave}
                  >
                    <a className="nav-link custom-link" href="#!">
                      {item}
                    </a>
                    {/* Show additional links for "Company" */}
                    {item === 'Company' && showCompanyLinks && (
                      <div className="additional-links">
                        <a className="nav-link" href="#about-us">About Us</a>
                        <a className="nav-link" href="#our-team">Our Team</a>
                        <a className="nav-link" href="#testimonials">TESTIMONIALS</a>
                        <a className="nav-link" href="#case-studies">CASE STUDIES</a>
                        <a className="nav-link" href="#newsroom">NEWSROOM</a>
                      </div>
                    )}
                    {/* Show additional links for "Products" */}
                    {item === 'Products' && showProductsLinks && (
                      <div className="additional-links">
                        <a className="nav-link" href="#power-bi">Power BI</a>
                      </div>
                    )}
                    {/* Show additional links for "Career" */}
                    {item === 'Career' && showCareerLinks && (
                      <div className="additional-links">
                        <a className="nav-link" href="/why_modus">Why_Modus?</a>
                        <a className="nav-link" href="/Our_voices">Our Voices</a>
                        <a className="nav-link" href="/what_employee_say">What Employees Say</a>
                        <a className="nav-link" href="/Career_path">Career Path</a>
                        <a className="nav-link" href="/Job_Openings">Job_Openings</a>
                      </div>
                    )}
                  </li>
                ) : (
                  <li key={index} className="nav-item">
                    <a className="nav-link custom-link" href="#!">
                      {item}
                    </a>
                  </li>
                )
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <HomeSection1/>
    <HomeSection/>
    <HomeSectionUp/>
    <Services/>
    <HomeSectionUp3/>
    <HomeSection3/>
    <Footer/>
    </div>
  );
}

export default Home;
