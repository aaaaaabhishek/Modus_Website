// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Home.css'; 
// import Footer from './Footer';
// function Home() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showCompanyLinks, setShowCompanyLinks] = useState(false); // Show links for Company
//   const [showProductsLinks, setShowProductsLinks] = useState(false); // Show links for Products
//   const [showCareerLinks, setShowCareerLinks] = useState(false); // Show links for Career
// const [showCompetencyLinks, setShowCompetencyLinks] = useState(false);


//   const toggle = () => setIsOpen(!isOpen);
// const navbarItems = [
//   { navId: 'Home', link: '/home' },
//   { navId: 'Company', link: '/Overview' },
//   { navId: 'Competency', link: '/competency' },
//   { navId: 'Partner Solutions', link: '/partner-solutions' },
//   { navId: 'Services', link: '/services' },
//   { navId: 'Products', link: '/products' },
//   { navId: 'Gallery', link: '/gallery' },
//   { navId: '20th Anniversary', link: '/20anniversary' },
//   { navId: 'Contact', link: '/contact' },
//   { navId: 'Career', link: '/career' },
//   { navId: 'Employee Login', link: '/login' }
// ];

// const clients = [
//   "edge.png", "Infosys_logo.png", "sbm-bank.png", "wipro.png",
//   "Modus Client – Deutsche Bank.png", "I&M_logo.png", "Modus Client – Kotak Mahindra Bank (1).png",
//   "linearsix.png", "Modus Client – Validus Health.png", "natsave.png", "indusind-bank.png",
//   "lenovo.png", "hitachi.png", "ujjivan.png", "zanaco-bank.png",
//   "Credit_Suisse_Logo.png", "DBS-logo.png"
// ];
 
//   // Functions for handling hover
//   const handleCompanyHover = () => {
//     setShowCompanyLinks(true);
//   };

//   const handleCompanyLeave = () => {
//     setShowCompanyLinks(false);
//   };

//   const handleCareerHover = () => {
//     setShowCareerLinks(true);
//   };

//   const handleCareerLeave = () => {
//     setShowCareerLinks(false);
//   };

//   const handleProductsHover = () => {
//     setShowProductsLinks(true);
//   };

//   const handleProductsLeave = () => {
//     setShowProductsLinks(false);
//   };
// const handleCompetencyHover = () => {
//     setShowCompetencyLinks(true);
// };

// const handleCompetencyLeave = () => {
//     setShowCompetencyLinks(false);
// };
//   return (
//     <div>
//     <div className="home-container">
//       {/* Overlay layer */}
//       <div className="overlay"></div>

//       <nav className="navbar navbar-expand-lg navbar-dark">
//         <div className="container-fluid px-3">
//           <a className="navbar-brand" href="/">
//             <div className="logo-container d-flex flex-column align-items-center">
//               <img
//                 // src="modus-logo-white.png"
//                 src="/images/modus-logo-white.png"
//                 alt="Modus Logo"
//                 style={{ width: '120px', height: 'auto' }}
//               />
//               <span className="logo-text">ISO/IEC 27001:2022 Certified</span>
//             </div>
//           </a>
//           <button className="navbar-toggler" type="button" onClick={toggle}>
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
// <ul className="navbar-nav ms-auto">
//   {navbarItems.map((item, index) => (
//     (item.navId === "Company" || item.navId === "Competency" || item.navId === "Products" || item.navId === "Career") ? (
//       <li
//         key={index}
//         className="nav-item company-container"
//         onMouseEnter={item.navId === "Company" ? handleCompanyHover : item.navId === "Products" ? handleProductsHover : item.navId === "Career" ? handleCareerHover : handleCompetencyHover}
//         onMouseLeave={item.navId === "Company" ? handleCompanyLeave : item.navId === "Products" ? handleProductsLeave : item.navId === "Career" ? handleCareerLeave : handleCompetencyLeave}
//       >
//         <a className="nav-link custom-link" href={item.link}>
//           {item.navId}
//         </a>
//         {/* Show additional links */}
//         {item.navId === "Company" && showCompanyLinks && (
//           <div className="additional-links">
//             <a className="nav-link" href="/Overview">About Us</a>
//             <a className="nav-link" href="/our-team">Our Team</a>
//             <a className="nav-link" href="/testimonials">TESTIMONIALS</a>
//             <a className="nav-link" href="/case-studies">CASE STUDIES</a>
//             <a className="nav-link" href="/newsroom">NEWSROOM</a>
//           </div>
//         )}
//         {item.navId === "Competency" && showCompetencyLinks && (
//           <div className="additional-links">
//             <a className="nav-link" href="/ProjectUpdate">Project Update</a>
//           </div>
//         )}
//         {item.navId === "Products" && showProductsLinks && (
//           <div className="additional-links">
//             <a className="nav-link" href="/modusbi">Power BI</a>
//           </div>
//         )}
//         {item.navId === "Career" && showCareerLinks && (
//           <div className="additional-links">
//             <a className="nav-link" href="/why_modus">Why Modus?</a>
//             <a className="nav-link" href="/Our_voices">Our Voices</a>
//             <a className="nav-link" href="/what_employee_say">What Employees Say</a>
//             <a className="nav-link" href="/Career_path">Career Path</a>
//             <a className="nav-link" href="/Job_Openings">Job Openings</a>
//           </div>
//         )}
//       </li>
//     ) : (
//       <li key={index} className="nav-item">
//         <a className="nav-link custom-link" href={item.link}>
//           {item.navId}
//         </a>
//       </li>
//     )
//   ))}
// </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
// <div class="row mt-4">
//     <div class="col-md-6 offset-md-3">
//         <h2 className="fs-1 lh-base mb-3 text-center"  style={{color:"#0070c0", borderLeft: '1px solid #0070c0', paddingLeft: '10px' }}>
//             We are a 'Finacle Value Partner' of Infosys Ltd and are associated with Infosys since 2004. 
//         </h2>
//         <a href="#" className="btn btn-outline-primary mt-3">
//             Get in touch
//         </a>
//     </div>
// </div>    
// <section className="bg-white py-5 map-text-section">
//   <div className="container">
//     <div className="row align-items-center">
      
//       {/* Left Image */}
//       <div className="col-md-6 map-image">
//         <img
//           src="/images/map-modus.png"
//           alt="Global Presence"
//           className="img-fluid"
//           style={{ width: "100%", height: "auto" }}
//         />
//       </div>
//       {/* Right Text */}
//       <div className="col-md-6">
//         <h2 className="fs-4 fw-normal text-primary mb-3">
//           Modus was incorporated in 2003, and has since established a niche for itself as a trusted partner in BFSI.
//         </h2>
//         <p className="text-secondary mb-4">
//           The range of our offerings includes both differentiated services like Finacle Core Banking Solution,
//           Software Services, Product Implementation, Business Process Transformation, and non-differentiated services
//           such as Application/Website Development, SEO Services, Customization, Testing, and Product Support.
//         </p>
//         <a href="#" className="btn btn-outline-secondary px-4">
//           More about us
//         </a>
//       </div>
//     </div>
//   </div>
// </section>
//     <section className="py-5" style={{ backgroundColor: '#1E2337', color: 'white' }}>
//       <div className="container-fluid">
// {/* Our Services section */}
// <div className="container my-5">
//   <div className="row align-items-center">
//     {/* Text content */}
//     <div className="col-md-6 mb-4 mb-md-0">
//       <h1 className="fs-2 lh-base mb-4">
//         Our Services
//          <div style={{ width: "40px", height: "3px", backgroundColor: "#0070c0" }} />
//       </h1>
//       <p>
//         Combining our regional market knowledge with industry experience we provide complete solutions in application
//         development services, core banking (or) digital banking software services and IS audits for companies of all sizes
//         and financial institutions.
//       </p>
//       <a href="#" className="btn btn-outline-light mt-3">View our services</a>
//     </div>
//     {/* Image */}
//     <div className="col-md-6 text-center">
//       <img
//         src="/images/modus-information-systems-services.png"
//         alt="Services Visual"
//         className="img-fluid rounded shadow"
//         style={{ objectFit: 'contain' }}
//       />
//     </div>
//   </div>
// </div> 
// </div>
//         {/* Modus Logo and Clients section */}
//               <div className="container-fluid mt-5">
//     <div className="row align-items-center mt-5 map-height">
//   <div className="col-md-4 mb-4 text-center">
//     <img
//       src="/images/IMG_8742.jpg"
//       alt="Modus Lobby"
//       className="img-fluid"
//       style={{ maxWidth: '70%', objectFit: 'contain', transform: 'translateY(-150px)' }}
//     />
//   </div>
//   <div className="col-md-8 text-white mt-5">
// <h2 className="mb-4" style={{ marginTop: "10.25rem" }}>      
//   Who we're working with
//       <div
//         style={{
//           marginTop: '10px',
//           width: '40px',
//           height: '3px',
//           backgroundColor: '#0070c0',
//         }}
//       />
//     </h2>
// <div className="row justify-content-center">
//   {clients.map((client, index) => (
//     <div
//       key={index}
//       className="col-4 mb-3 d-flex justify-content-center align-items-center"
//       style={{ padding: '2px' }} >
//       <img
//         src={`/images/${client}`}
//         alt={`Client ${index + 1}`}
//         className="img-fluid"
//         style={{
//           maxWidth: '100px',
//           maxHeight: '60px',
//           objectFit: 'contain',
//           filter: 'brightness(0) invert(1)',
//         }}
//       />
//     </div>
//   ))}
// </div>
//   </div>
//   </div>
// </div>
//   </section>
// <section className="bg-white py-5">
//   <div className="container">
//     <div className="d-flex flex-column flex-md-row align-items-center">
//       {/* Image on the left */}
//       <div className="col-12 col-md-6 mb-4 mb-md-0">
//         <img
//           src="/images/modus-clients-partners.png"
//           alt="Handshake"
//           className="img shadow"
//           style={{ maxHeight: '610px', objectFit: 'cover' }}
//         />
//       </div>
//       {/* Text content on the right */}
//       <div className="col-12 col-md-4 ps-md-5 pe-md-5">
//         <h2 className="text-primary mb-3">Our clients</h2>
//         <p className="text-muted">
//           Modus has partnered with Banks in their Core Banking transformation journey. Modus has enabled technology majors like Lenovo in Professional SEO (Search Engine Optimization) Services. Modus has helped very large MNCs to develop, enhance, and maintain their websites.
//         </p>
//         <p className="text-muted">
//           Modus is also a <span className="text-primary fw-semibold">Trusted Partner</span> with some organizations to implement their IP-based solutions in their clients' IT landscape. Modus believes in delivering total customer satisfaction in core banking solutions by adhering to the highest level of business ethics and professional integrity.
//         </p>
//         <a href="#" className="text-decoration-underline text-primary fw-semibold">
//           View our competency
//         </a>
//       </div>
//     </div>
//   </div>
// </section>
// <div className="container-fluid">
//   <h1 className="fs-2 lh-base mb-4 mt-4 ms-4" style={{ color: "#0070c0" }}>
//     Customer Commitment Pillars
//   </h1>

//   {/* Carousel Section */}
//   <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
//     <div className="carousel-inner">
//       <div className="carousel-item active">
// <img src="/images/Es4.jpg" className="d-block" alt="Slide 1" style={{ width: "40%" ,marginTop: "56px",marginLeft:"65px"}} />
//       </div>
//       <div className="carousel-item">
//         <img src="/images/modus-collage.jpg" cassName="d-block " alt="Slide 2" style={{ width: "40%",marginTop: "56px",marginLeft:"65px" }} />
//       </div>
//         <div className="row d-flex align-items-end justify-content-end">
//     <div className="col-md-5" style={{ backgroundColor: '#293665', color: 'white', padding: '5rem' ,width:"800px",height:"500px"}}>
//       <h4>1. Relentless Integrity</h4>
//       <h4>2. Ingrained Ethics</h4>
//       <h4>3. Value-based Niche Solution Offerings</h4>
//       <h4>4. Total Quality Management</h4>
//     </div>
//   </div>
//     </div>
//     <a className="carousel-control-prev" href="#carouselExample" role="button" data-bs-slide="prev">
//       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     </a>
//     <a className="carousel-control-next" href="#carouselExample" role="button" data-bs-slide="next">
//       <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     </a>
//   </div>
// </div>
//         <div class="row">
//                 <div class="col-md-6 offset-md-3">
// <h1 className="fs-1 lh-base mb-3 text-center" style={{color:"#0070c0"}}>

// This could be the beginning of a
// beautiful partnership         
//  </h1>
//  <a href="#" className="btn btn-outline-primary mt-3">
//               Get in touch
//         </a>
// </div>
// </div>  
//   <Footer/>
//     </div>
//   );
// }

// export default Home;
// import React, { useState ,useEffect} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Home.css'; 
// import Footer from './Footer';

// function Home() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showCompanyLinks, setShowCompanyLinks] = useState(false); // Show links for Company
//   const [showProductsLinks, setShowProductsLinks] = useState(false); // Show links for Products
//   const [showCareerLinks, setShowCareerLinks] = useState(false); // Show links for Career
// const [showCompetencyLinks, setShowCompetencyLinks] = useState(false);


//   const toggle = () => setIsOpen(!isOpen);
// const navbarItems = [
//   { navId: 'Home', link: '/home' },
//   { navId: 'Company', link: '/Overview' },
//   { navId: 'Competency', link: '/competency' },
//   { navId: 'Partner Solutions', link: '/partner-solutions' },
//   { navId: 'Services', link: '/services' },
//   { navId: 'Products', link: '/products' },
//   { navId: 'Gallery', link: '/gallery' },
//   { navId: '20th Anniversary', link: '/20anniversary' },
//   { navId: 'Contact', link: '/contact' },
//   { navId: 'Career', link: '/career' },
//   { navId: 'Employee Login', link: '/login' }
// ];

// const clients = [
//   "edge.png", "Infosys_logo.png", "sbm-bank.png", "wipro.png",
//   "Modus Client – Deutsche Bank.png", "I&M_logo.png", "Modus Client – Kotak Mahindra Bank (1).png",
//   "linearsix.png", "Modus Client – Validus Health.png", "natsave.png", "indusind-bank.png",
//   "lenovo.png", "hitachi.png", "ujjivan.png", "zanaco-bank.png",
//   "Credit_Suisse_Logo.png", "DBS-logo.png"
// ];
 
//   // Functions for handling hover
//   const handleCompanyHover = () => {
//     setShowCompanyLinks(true);
//   };

//   const handleCompanyLeave = () => {
//     setShowCompanyLinks(false);
//   };

//   const handleCareerHover = () => {
//     setShowCareerLinks(true);
//   };

//   const handleCareerLeave = () => {
//     setShowCareerLinks(false);
//   };

//   const handleProductsHover = () => {
//     setShowProductsLinks(true);
//   };

//   const handleProductsLeave = () => {
//     setShowProductsLinks(false);
//   };
// const handleCompetencyHover = () => {
//     setShowCompetencyLinks(true);
// };

// const handleCompetencyLeave = () => {
//     setShowCompetencyLinks(false);
// };

// const [isScrolled, setIsScrolled] = useState(false);

// useEffect(() => {
//    const handleScroll = () => {
//     setIsScrolled(window.scrollY > 50);
//   };
//  window.addEventListener('scroll', handleScroll);
//  return () => window.removeEventListener('scroll', handleScroll);
// }, []);

//   return (
//     <div>
//     <div className="home-container">
//       {/* Overlay layer */}
//       <div className="overlay"></div>

//       {/* <nav className="navbar navbar-expand-lg navbar-dark" > */}  
//    <nav className={`navbar navbar-expand-lg ${isScrolled ? 'navbar-light scrolled' : 'navbar-dark'}`} style={{ zIndex: '1030' }}>


//         <div className="container-fluid px-3" >
//           <a className="navbar-brand" href="/">
//             <div className="logo-container d-flex flex-column align-items-center">
              
// <img
//  src={isScrolled ? "/images/Modus-logo.png" : "/images/modus-logo-white.png"}
//  alt="Modus Logo"
// style={{ width: '120px', height: 'auto' }}
// />

// <span className={`logo-text ${isScrolled ? 'scrolled-text' : ''}`}>
// ISO/IEC 27001:2022 Certified
// </span>
//   </div>
//           </a>
//           <button className="navbar-toggler" type="button" onClick={toggle}>
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
// <ul className="navbar-nav ms-auto">
//   {navbarItems.map((item, index) => (
//     (item.navId === "Company" || item.navId === "Competency" || item.navId === "Products" || item.navId === "Career") ? (
//       <li
//         key={index}
//         className="nav-item company-container"
//         onMouseEnter={item.navId === "Company" ? handleCompanyHover : item.navId === "Products" ? handleProductsHover : item.navId === "Career" ? handleCareerHover : handleCompetencyHover}
//         onMouseLeave={item.navId === "Company" ? handleCompanyLeave : item.navId === "Products" ? handleProductsLeave : item.navId === "Career" ? handleCareerLeave : handleCompetencyLeave}
//       >
//         <a className="nav-link custom-link" href={item.link}>
//           {item.navId}
//         </a>
//         {/* Show additional links */}
//         {item.navId === "Company" && showCompanyLinks && (
//           <div className="additional-links">
//             <a className="nav-link" href="/Overview">About Us</a>
//             <a className="nav-link" href="/our-team">Our Team</a>
//             <a className="nav-link" href="/testimonials">TESTIMONIALS</a>
//             <a className="nav-link" href="/case-studies">CASE STUDIES</a>
//             <a className="nav-link" href="/newsroom">NEWSROOM</a>
//           </div>
//         )}
//         {item.navId === "Competency" && showCompetencyLinks && (
//           <div className="additional-links">
//             <a className="nav-link" href="/ProjectUpdate">Project Update</a>
//           </div>
//         )}
//         {item.navId === "Products" && showProductsLinks && (
//           <div className="additional-links">
//             <a className="nav-link" href="/modusbi">Power BI</a>
//           </div>
//         )}
//         {item.navId === "Career" && showCareerLinks && (
//           <div className="additional-links">
//             <a className="nav-link" href="/why_modus">Why Modus?</a>
//             <a className="nav-link" href="/Our_voices">Our Voices</a>
//             <a className="nav-link" href="/what_employee_say">What Employees Say</a>
//             <a className="nav-link" href="/Career_path">Career Path</a>
//             <a className="nav-link" href="/Job_Openings">Job Openings</a>
//           </div>
//         )}
//       </li>
//     ) : (
//       <li key={index} className="nav-item">
//         <a className="nav-link custom-link" href={item.link}>
//           {item.navId}
//         </a>
//       </li>
//     )
//   ))}
// </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
// <div class="row mt-4">
//     <div class="col-md-6 offset-md-3">
//         <h2 className="fs-1 lh-base mb-3 text-center"  style={{color:"#0070c0", borderLeft: '1px solid #0070c0', paddingLeft: '10px' }}>
//             We are a 'Finacle Value Partner' of Infosys Ltd and are associated with Infosys since 2004. 
//         </h2>
//     </div>
// </div>    
// <section className="bg-white py-5 map-text-section">
//   <div className="container">
//     <div className="row align-items-center">
      
//       {/* Left Image */}
//       <div className="col-md-6 map-image">
//         <img
//           src="/images/map-modus.png"
//           alt="Global Presence"
//           className="img-fluid"
//           style={{ width: "100%", height: "auto" }}
//         />
//       </div>
//       {/* Right Text */}
//       <div className="col-md-6">
//         <h2 className="fs-4 fw-normal text-primary mb-3">
//           Modus was incorporated in 2003, and has since established a niche for itself as a trusted partner in BFSI.
//         </h2>
//         <p className="text-secondary mb-4">
//           The range of our offerings includes both differentiated services like Finacle Core Banking Solution,
//           Software Services, Product Implementation, Business Process Transformation, and non-differentiated services
//           such as Application/Website Development, SEO Services, Customization, Testing, and Product Support.
//         </p>
//         <a href="#" className="btn btn-outline-secondary px-4">
//           More about us
//         </a>
//       </div>
//     </div>
//   </div>
// </section>
//     <section className="py-5" style={{ backgroundColor: '#1E2337', color: 'white' }}>
//       <div className="container-fluid">
// {/* Our Services section */}
// <div className="container my-5">
//   <div className="row align-items-center">
//     {/* Text content */}
//     <div className="col-md-6 mb-4 mb-md-0">
//       <h1 className="fs-2 lh-base mb-4">
//         Our Services
//          <div style={{ width: "40px", height: "3px", backgroundColor: "#0070c0" }} />
//       </h1>
//       <p>
//         Combining our regional market knowledge with industry experience we provide complete solutions in application
//         development services, core banking (or) digital banking software services and IS audits for companies of all sizes
//         and financial institutions.
//       </p>
//       <a href="#" className="btn btn-outline-light mt-3">View our services</a>
//     </div>
//     {/* Image */}
//     <div className="col-md-6 text-center">
//       <img
//         src="/images/modus-information-systems-services.png"
//         alt="Services Visual"
//         className="img-fluid rounded shadow"
//         style={{ objectFit: 'contain' }}
//       />
//     </div>
//   </div>
// </div> 
// </div>
//         {/* Modus Logo and Clients section */}
//               <div className="container-fluid mt-5">
//     <div className="row align-items-center mt-5 map-height">
//   <div className="col-md-4 mb-4 text-center">
//     <img
//       src="/images/IMG_8742.jpg"
//       alt="Modus Lobby"
//       className="img-fluid"
//       style={{ maxWidth: '70%', objectFit: 'contain', transform: 'translateY(-150px)' }}
//     />
//   </div>
//   <div className="col-md-8 text-white mt-5">
// <h2 className="mb-4" style={{ marginTop: "10.25rem" }}>      
//   Who we're working with
//       <div
//         style={{
//           marginTop: '10px',
//           width: '40px',
//           height: '3px',
//           backgroundColor: '#0070c0',
//         }}
//       />
//     </h2>
// <div className="row justify-content-center">
//   {clients.map((client, index) => (
//     <div
//       key={index}
//       className="col-4 mb-3 d-flex justify-content-center align-items-center"
//       style={{ padding: '2px' }} >
//       <img
//         src={`/images/${client}`}
//         alt={`Client ${index + 1}`}
//         className="img-fluid"
//         style={{
//           maxWidth: '100px',
//           maxHeight: '60px',
//           objectFit: 'contain',
//           filter: 'brightness(0) invert(1)',
//         }}
//       />
//     </div>
//   ))}
// </div>
//   </div>
//   </div>
// </div>
//   </section>
// <section className="bg-white py-5">
//   <div className="container">
//     <div className="d-flex flex-column flex-md-row align-items-center">
//       {/* Image on the left */}
//       <div className="col-12 col-md-6 mb-4 mb-md-0">
//         <img
//           src="/images/modus-clients-partners.png"
//           alt="Handshake"
//           className="img shadow"
//           style={{ maxHeight: '610px', objectFit: 'cover' }}
//         />
//       </div>
//       {/* Text content on the right */}
//       <div className="col-12 col-md-4 ps-md-5 pe-md-5">
//         <h2 className="text-primary mb-3">Our clients</h2>
//         <p className="text-muted">
//           Modus has partnered with Banks in their Core Banking transformation journey. Modus has enabled technology majors like Lenovo in Professional SEO (Search Engine Optimization) Services. Modus has helped very large MNCs to develop, enhance, and maintain their websites.
//         </p>
//         <p className="text-muted">
//           Modus is also a <span className="text-primary fw-semibold">Trusted Partner</span> with some organizations to implement their IP-based solutions in their clients' IT landscape. Modus believes in delivering total customer satisfaction in core banking solutions by adhering to the highest level of business ethics and professional integrity.
//         </p>
//         <a href="#" className="text-decoration-underline text-primary fw-semibold">
//           View our competency
//         </a>
//       </div>
//     </div>
//   </div>
// </section>
// <div className="container-fluid">
//   <h1 className="fs-2 lh-base mb-4 mt-4 ms-4" style={{ color: "#0070c0" }}>
//     Customer Commitment Pillars
//   </h1>
 
//   <div className="row">
//     {/* Carousel Section */}
//     <div></div>
//     <div className="col-md-6 col-12 d-flex justify-content-center">
//       <div id="carouselExample" className="carousel slide w-100" data-bs-ride="carousel">
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img
//               src="/images/Es4.jpg"
//               className="d-block w-100"
//               alt="Slide 1"
//               style={{ marginTop: "20px",
//  width: '80%',height: 'auto'
// , objectFit: "contain" }}
//             />
//           </div>
//           <div className="carousel-item">
//             <img
//               src="/images/modus-collage.jpg"
//               className="d-block w-100"
//               alt="Slide 2"
//               style={{ marginTop: "20px", objectFit: "contain" }}
//             />
//           </div>
//         </div>
//         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         </button>
//         <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         </button>
//       </div>
//     </div>
 
//     {/* Text Section */}
//     <div
//       className="col-md-6 col-12 d-flex align-items-center"
//       style={{ backgroundColor: '#293665', color: 'white', padding: '2rem' }}
//     >
//       <div>
//         <h4>1. Relentless Integrity</h4>
//         <h4>2. Ingrained Ethics</h4>
//         <h4>3. Value-based Niche Solution Offerings</h4>
//         <h4>4. Total Quality Management</h4>
//       </div>
//     </div>
//   </div>
// </div>        <div class="row">
//                 <div class="col-md-6 offset-md-3">
// <h1 className="fs-1 lh-base mb-3 text-center" style={{color:"#0070c0"}}>

// This could be the beginning of a
// beautiful partnership         
//  </h1>
//  <a href="#" className="btn btn-outline-primary mt-3">
//               Get in touch
//         </a>
// </div>
// </div>  
//   <Footer/>
//     </div>
//   );
// }
// export default Home;
import React, { useState ,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; 
import Footer from './Footer';
import Navbar from './Navbar';
import SEO from '../components/SEO';

function Home() {
const clients = [
  "edge.png", "Infosys_logo.png", "sbm-bank.png", "wipro.png",
  "Modus Client – Deutsche Bank.png", "I&M_logo.png", "Modus Client – Kotak Mahindra Bank (1).png",
  "linearsix.png", "Modus Client – Validus Health.png", "natsave.png", "indusind-bank.png",
  "lenovo.png", "hitachi.png", "ujjivan.png", "zanaco-bank.png",
  "Credit_Suisse_Logo.png", "DBS-logo.png"
];
  return (
    <div>
        <SEO title="Finacle Core Banking Solution & Software Services | Modus" description="Modus Information Systems is a Finacle Value Partner' of Infosys Ltd. which offers Software Consulting Services, Finacle Core Banking Solution and SEO services." />
 {/* <Navbar />  */}
    <div className="home-container">
      <div className="overlay"></div>

 
    </div>
<div class="row mt-4">
    <div class="col-md-6 offset-md-3">
        <h2 className="fs-1 lh-base mb-3 text-center"  style={{color:"#0070c0", borderLeft: '1px solid #0070c0', paddingLeft: '10px' }}>
            We are a 'Finacle Value Partner' of Infosys Ltd and are associated with Infosys since 2004. 
        </h2>
    </div>
</div>    
<section className="bg-white py-5 map-text-section">
  <div className="container">
    <div className="row align-items-center">
      
      {/* Left Image */}
      <div className="col-md-6 map-image">
        <img
          src="/images/map-modus.png"
          alt="Global Presence"
          className="img-fluid"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      {/* Right Text */}
      <div className="col-md-6">
        <h2 className="fs-4 fw-normal text-primary mb-3">
          Modus was incorporated in 2003, and has since established a niche for itself as a trusted partner in BFSI.
        </h2>
        <p className="text-secondary mb-4">
          The range of our offerings includes both differentiated services like Finacle Core Banking Solution,
          Software Services, Product Implementation, Business Process Transformation, and non-differentiated services
          such as Application/Website Development, SEO Services, Customization, Testing, and Product Support.
        </p>
        <a href="#" className="btn btn-outline-secondary px-4">
          More about us
        </a>
      </div>
    </div>
  </div>
</section>
    <section className="py-5" style={{ backgroundColor: '#1E2337', color: 'white' }}>
      <div className="container-fluid">
{/* Our Services section */}
<div className="container my-5">
  <div className="row align-items-center">
    {/* Text content */}
    <div className="col-md-6 mb-4 mb-md-0">
      <h1 className="fs-2 lh-base mb-4">
        Our Services
         <div style={{ width: "40px", height: "3px", backgroundColor: "#0070c0" }} />
      </h1>
      <p>
        Combining our regional market knowledge with industry experience we provide complete solutions in application
        development services, core banking (or) digital banking software services and IS audits for companies of all sizes
        and financial institutions.
      </p>
      <a href="#" className="btn btn-outline-light mt-3">View our services</a>
    </div>
    {/* Image */}
    <div className="col-md-6 text-center">
      <img
        src="/images/modus-information-systems-services.png"
        alt="Services Visual"
        className="img-fluid rounded shadow"
        style={{ objectFit: 'contain' }}
      />
    </div>
  </div>
</div> 
</div>
        {/* Modus Logo and Clients section */}
              <div className="container-fluid mt-5">
    <div className="row align-items-center mt-5 map-height">
  <div className="col-md-4 mb-4 text-center">
    <img
      src="/images/IMG_8742.jpg"
      alt="Modus Lobby"
      className="img-fluid"
      style={{ maxWidth: '70%', objectFit: 'contain', transform: 'translateY(-150px)' }}
    />
  </div>
  <div className="col-md-8 text-white mt-5">
<h2 className="mb-4" style={{ marginTop: "10.25rem" }}>      
  Who we're working with
      <div
        style={{
          marginTop: '10px',
          width: '40px',
          height: '3px',
          backgroundColor: '#0070c0',
        }}
      />
    </h2>
<div className="row justify-content-center">
  {clients.map((client, index) => (
    <div
      key={index}
      className="col-4 mb-3 d-flex justify-content-center align-items-center"
      style={{ padding: '2px' }} >
      <img
        src={`/images/${client}`}
        alt={`Client ${index + 1}`}
        className="img-fluid"
        style={{
          maxWidth: '100px',
          maxHeight: '60px',
          objectFit: 'contain',
          filter: 'brightness(0) invert(1)',
        }}
      />
    </div>
  ))}
</div>
  </div>
  </div>
</div>
  </section>
<section className="bg-white py-5">
  <div className="container">
    <div className="d-flex flex-column flex-md-row align-items-center">
      {/* Image on the left */}
      <div className="col-12 col-md-6 mb-4 mb-md-0">
        <img
          src="/images/modus-clients-partners.png"
          alt="Handshake"
          className="img shadow"
          style={{ maxHeight: '610px', objectFit: 'cover' }}
        />
      </div>
      {/* Text content on the right */}
      <div className="col-12 col-md-4 ps-md-5 pe-md-5">
        <h2 className="text-primary mb-3">Our clients</h2>
        <p className="text-muted">
          Modus has partnered with Banks in their Core Banking transformation journey. Modus has enabled technology majors like Lenovo in Professional SEO (Search Engine Optimization) Services. Modus has helped very large MNCs to develop, enhance, and maintain their websites.
        </p>
        <p className="text-muted">
          Modus is also a <span className="text-primary fw-semibold">Trusted Partner</span> with some organizations to implement their IP-based solutions in their clients' IT landscape. Modus believes in delivering total customer satisfaction in core banking solutions by adhering to the highest level of business ethics and professional integrity.
        </p>
        <a href="#" className="text-decoration-underline text-primary fw-semibold">
          View our competency
        </a>
      </div>
    </div>
  </div>
</section>
<div className="container-fluid">
  <h1 className="fs-2 lh-base mb-4 mt-4 ms-4" style={{ color: "#0070c0" }}>
    Customer Commitment Pillars
  </h1>
 
  <div className="row">
    {/* Carousel Section */}
    <div></div>
    <div className="col-md-6 col-12 d-flex justify-content-center">
      <div id="carouselExample" className="carousel slide w-100" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/images/Es4.jpg"
              className="d-block w-100"
              alt="Slide 1"
              style={{ marginTop: "20px",
 width: '80%',height: 'auto'
, objectFit: "contain" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/modus-collage.jpg"
              className="d-block w-100"
              alt="Slide 2"
              style={{ marginTop: "20px", objectFit: "contain" }}
            />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
 
    {/* Text Section */}
    <div
      className="col-md-6 col-12 d-flex align-items-center"
      style={{ backgroundColor: '#293665', color: 'white', padding: '2rem' }}
    >
      <div>
        <h4>1. Relentless Integrity</h4>
        <h4>2. Ingrained Ethics</h4>
        <h4>3. Value-based Niche Solution Offerings</h4>
        <h4>4. Total Quality Management</h4>
      </div>
    </div>
  </div>
</div>        <div class="row">
                <div class="col-md-6 offset-md-3">
<h1 className="fs-1 lh-base mb-3 text-center" style={{color:"#0070c0"}}>

This could be the beginning of a
beautiful partnership         
 </h1>
 <a href="#" className="btn btn-outline-primary mt-3">
              Get in touch
        </a>
</div>
</div>  
    </div>
  );
}
export default Home;
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
  
@media (min-width: 1200px) {
  .map-text-section {
    padding: 60px;
  }
 
  .map-text-section h2 {
    font-size: 1.75rem; /* bigger heading */
  }
 
  .map-text-section p {
    font-size: 1.1rem;
  }
.map-image img {
  width: 100%;
  max-width: 1000px; /* Set a maximum limit */
  height: auto;
}
}
 
@media (max-width: 767px) {
  .map-text-section {
    padding: 20px;
    text-align: center;
  }
 
  .map-text-section h2 {
    font-size: 1.2rem;
  }
 
  .map-text-section p {
    font-size: 1rem;
  }
  .map-height{
 transform: translateY(0); /* Remove upward shift */  }
}
@media (max-width: 768px) {
  img[src="/images/modus-clients-partners.png"] {
    max-height: 400px !important;
    width: 100% !important;
    object-fit: cover;
  }
}

.navbar.scrolled {
background-color: white !important;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.navbar.scrolled {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1030;
}

.navbar.scrolled .nav-link {
  color: #0070c0 !important; /* Adjust if needed for contrast */
}

.navbar.scrolled .navbar-brand img {
  filter: none; /* Remove any white logo filter if applied */
}

.navbar.scrolled .logo-container img {
display: block;
opacity: 1;
}
.logo-text {
  font-size: 12px;
  color: #ffffff;
  margin-top: 5px;
  font-weight: normal;
}

.scrolled-text {
  color: #0070c0; /* Blue color when scrolled */
}
.custom-dropdown {
  position: absolute;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  top: 100%;
  left: 0;
  z-index: 1050;
}

.nav-item {
  position: relative;
}
.dropdown-menu{
  padding: 4px 8px;
  min-width: 80px;
  font-size: 14px;
  width:max-content;
  line-height: 1.4;
}
.dropdown-menu li a{
padding: 4px 8px;
}
.dropdown-item {
  white-space: nowrap;
  color: #0070c0; /* Blue color when scrolled */
 
}

.dropdown-item:hover::after{
  color: #0070c0;
  text-decoration: underline;
    width: 100%; /* Expand the underline on hover */

}/* Prevent nav items from wrapping */
.navbar-nav .nav-item .nav-link {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

/* Ensure dropdowns don't wrap text */
.dropdown-menu .dropdown-item {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Responsive tweaks */
@media (max-width: 1400px) {
  .navbar-nav {
    flex-direction: column;
    align-items: flex-start;
  }

  .navbar-nav .nav-item {
    width: 100%;
    font-size: 14px;
  }

  .navbar-nav .nav-link {
    width: 100%;
    padding-left: 1rem;
  }
}
@media (max-width: 1300px) {
  .navbar-nav .nav-item {
    width: 100%;
    font-size: 11px;
  }
}
@media (max-width: 1200px) {
  .navbar-nav .nav-item {
    width: 100%;
    font-size: 9px;
  }
}import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
 
const NAV_ITEMS = [
  {
    label: 'Home',
    path: '/home'
  },
  {
    label: 'Company',
    path: '/Overview',
    children: [
      { label: 'About Us', path: '/Overview' },
      { label: 'Our Team', path: '/our-team' },
      { label: 'Testimonials', path: '/testimonials' },
      { label: 'Case Studies', path: '/case-studies' },
      { label: 'Newsroom', path: '/newsroom' }
    ]
  },
  {
    label: 'Competency',
    path: '/competency',
    children: [
      { label: 'Project Update', path: '/ProjectUpdate' }
    ]
  },
  {
    label: 'Partner Solutions',
    path: '/partner-solutions'
  },
  {
    label: 'Services',
    path: '/services'
  },
  {
    label: 'Products',
    path: '/products',
    children: [
      { label: 'Power BI', path: '/modusbi' }
    ]
  },
  {
    label: 'Gallery',
    path: '/gallery'
  },
  {
    label: '20th Anniversary',
    path: '/20anniversary'
  },
   {
    label: 'Career',
    path: '/career',
    children: [
      { label: 'Why Modus?', path: '/why_modus' },
      { label: 'Our Voices', path: '/Our_voices' },
      { label: 'What Employees Say', path: '/what_employee_say' },
      { label: 'Career Path', path: '/Career_path' },
      { label: 'Job Openings', path: '/Job_Openings' }
    ]
  },
  {
    label: 'Contact',
    path: '/contact'
  },
  {
    label: 'Employee Login',
    path: '/login'
  }
];
 
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
 
  const toggleNavbar = () => setIsOpen(prev => !prev);
 
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
 
  const renderDropdown = (children) => (
    <div className="dropdown-menu show custom-dropdown">
      {children.map((item, idx) => (
        <a key={idx} className="dropdown-item" href={item.path}>
          {item.label}
        </a>
      ))}
    </div>
  );
 
  return (

      <nav className={`navbar navbar-expand-lg ${isScrolled ? 'navbar-light scrolled' : 'navbar-dark'}`} style={{ zIndex: 1030 }}>
        <div className="container-fluid px-3">
          <a className="navbar-brand" href="/">
            <div className="logo-container d-flex flex-column align-items-center">
              <img
                src={isScrolled ? "/images/Modus-logo.png" : "/images/modus-logo-white.png"}
                alt="Modus Logo"
                style={{ width: '120px', height: 'auto' }}
              />
              <span className={`logo-text ${isScrolled ? 'scrolled-text' : ''}`}>
                ISO/IEC 27001:2022 Certified
              </span>
            </div>
          </a>
          <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto">
              {NAV_ITEMS.map(({ label, path, children }) => (
                <li
                  key={label}
                  className="nav-item dropdown"
                  onMouseEnter={() => children && setHoveredNav(label)}
                  onMouseLeave={() => children && setHoveredNav(null)}
                >
                  <a
                    className={`nav-link ${children ? '' : ''} custom-link`}
                    href={path}
                    role="button"
                    aria-expanded={hoveredNav === label}
                  >
                    {label}
                  </a>
                  {hoveredNav === label && children && renderDropdown(children)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

  );
}
 
export default Navbar;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Why_modus from './Pages/CarreerPages/Why_modus.jsx';
import Our_voices from './Pages/CarreerPages/Our_voices';
import What_employee_say from './Pages/CarreerPages/What_employee_say.jsx';
import Career_path from './Pages/CarreerPages/Carreer_path.jsx';
import Job_Openings from './Pages/CarreerPages/Job_openings.jsx';
import Finacle_Application_Support from './Pages/Finacle_Application_Support';
import Finacle_E_Banking_Support from './Pages/Finacle_E_Banking_Support';
import Trainee_Software_Engineer from './Pages/Trainee_Software_Engineer';
import Software_Engineer from './Pages/Software_Engineer';
import Testimonials from './Pages/CompanyPages/Testimonials';
import CaseStudies from './Pages/CompanyPages/CaseStudies';
import Competency from './Pages/CompetencyPages/Competency';
import ProjectUpdate from './Pages/CompetencyPages/Pages/ProjectUpdate';
import Suryoday from './Pages/CompetencyPages/Pages/ProjectUpdatePages/Suryoday';
import Mahanagar from './Pages/CompetencyPages/Pages/ProjectUpdatePages/Mahanagar';
import Contact from './Pages/ContactPages/Contact';
import Finacle_E_Banking_Testing from './Pages/Finacle_E_Banking_Testing';
import RunUpEvents from './Pages/20anniversaryPages/20anniversary/RunUpEvents';
import MumbaiEvents from './Pages/20anniversaryPages/20anniversary/MumbaiEvents';
import BangaloreEvents from './Pages/20anniversaryPages/20anniversary/BangaloreEvents';
import YearsJourney from './Pages/20anniversaryPages/20anniversary/YearsJourney';
import Anniversary from './Pages/20anniversaryPages/Anniversary';
import Our_team from './Pages/CompanyPages/Our_team.jsx';
import Services from './Pages/ServicesPages/Services';
import Products from './Pages/ProductsPages/Products';
import Modusbi from './Pages/ProductsPages/Pages/Modusbi';
import PartnerSolutions from './Pages/PartnersSolutionPAGES/PartnerSolutions.jsx';
import Overview from './Pages/CompanyPages/Overview.jsx';
import Newsroom from './Pages/CompanyPages/Newsroom.jsx';
import Kaaa from './Pages/Navbar.jsx';

import Gallery from './Pages/GalleryPages/Gallery.jsx';
import TestingGroup from './Pages/CompanyPages/CaseStudiesPages/TestingGroup.jsx';
import End_to_End_Implementation from './Pages/CompanyPages/CaseStudiesPages/End_to_End_Implementation.jsx';
import CorporationBank_feba from './Pages/CompanyPages/CaseStudiesPages/CorporationBank_feba.jsx';
import FinacleEbanking from './Pages/CompanyPages/CaseStudiesPages/FinacleEbanking.jsx';
import UjjivanBank from './Pages/CompanyPages/CaseStudiesPages/UjjivanBank.jsx';
import Core_banking_sbi_international from './Pages/CompanyPages/CaseStudiesPages/Core_banking_sbi_international.jsx';
import NKGSBBank from './Pages/CompanyPages/CaseStudiesPages/NKGSBBank.jsx';
import Deutsche from './Pages/CompanyPages/CaseStudiesPages/Deutsche.jsx';
import L2SupportVijayaBank from './Pages/CompanyPages/CaseStudiesPages/L2SupportVijayaBank.jsx';
import WealthManagementSystemValidus from './Pages/CompanyPages/CaseStudiesPages/WealthManagementSystemValidus.jsx';
import GstImplementationPnb from './Pages/CompanyPages/CaseStudiesPages/GstImplementationPnb.jsx';
import FEBASupport from './Pages/CompanyPages/CaseStudiesPages/FEBASupport.jsx';
import CoreBankingServiceCapitalBank from './Pages/CompanyPages/CaseStudiesPages/CoreBankingServiceCapitalBank.jsx';
import IndiaCooperativeBanking2024EventSummary from './Pages/CompanyPages/NewsRoomPages/IndiaCooperativeBanking2024EventSummary.jsx';
import ISO27001Certified from './Pages/CompanyPages/NewsRoomPages/ISO27001Certified.jsx';
import Mehsana from './Pages/CompanyPages/NewsRoomPages/Mehsana.jsx';
import TwoFactorAuthentication from './Pages/CompanyPages/NewsRoomPages/TwoFactorAuthentication.jsx';
import MigrationProjectAt2RRBsOfCanaraBank from './Pages/CompanyPages/NewsRoomPages/MigrationProjectAt2RRBsOfCanaraBank.jsx';
import GoaEvent from './Pages/CompanyPages/NewsRoomPages/GoaEvent.jsx';
import AsiaEvent2 from './Pages/CompanyPages/NewsRoomPages/AsiaEvent2.jsx';
import AsiaEvent from './Pages/CompanyPages/NewsRoomPages/AsiaEvent.jsx';
import MahanagarBank from './Pages/CompanyPages/NewsRoomPages/MahanagarBank.jsx';
import SataraDCCBGoLive from './Pages/CompanyPages/NewsRoomPages/SataraDCCBGoLive.jsx';
import Intellicus from './Pages/CompanyPages/NewsRoomPages/Intellicus.jsx';
import Layout from './components/Layout.jsx';
import { HelmetProvider } from 'react-helmet-async';
const routes = [
  { path: '/', element: <Home /> },
  { path: '/home', element: <Home /> },
  { path: '/Our_voices', element: <Our_voices /> },
  { path: '/Why_modus', element: <Why_modus /> },
  { path: '/what_employee_say', element: <What_employee_say /> },
  { path: '/Career_path', element: <Career_path /> },
  { path: '/Job_Openings', element: <Job_Openings /> },
  { path: '/job-openings/finacle-application-support', element: <Finacle_Application_Support /> },
  { path: '/job-openings/finacle-e-banking-support', element: <Finacle_E_Banking_Support /> },
  { path: '/job-openings/finacle-e-banking-testing', element: <Finacle_E_Banking_Testing /> },
  { path: '/job-openings/trainee-software-engineer', element: <Trainee_Software_Engineer /> },
  { path: '/job-openings/software-engineer', element: <Software_Engineer /> },
  { path: '/testimonials', element: <Testimonials /> },
  { path: '/case-Studies', element: <CaseStudies /> },
{ path: '/finacle-product-testing-group', element: <TestingGroup /> },
{ path: '/core-banking-implementation', element: <End_to_End_Implementation /> },
{ path: '/finacle-ebanking', element: <FinacleEbanking /> },
{ path: '/corporation-bank-feba', element: <CorporationBank_feba /> },
{ path: '/finacle-core-banking-implementation-ujjivan-bank', element: <UjjivanBank /> },
{ path: '/core-banking-sbi-international', element: <Core_banking_sbi_international /> },
{ path: '/finacle-core-banking-implementation-nkgsb', element: <NKGSBBank /> },
{ path: '/finacle-software-customization-deutsche', element: <Deutsche /> },
{ path: '/L2-support-vijaya-bank', element: <L2SupportVijayaBank /> },
{ path: '/wealth-management-system-validus', element: <WealthManagementSystemValidus /> },
{ path: '/case-studies/gst-implementation-pnb', element: <GstImplementationPnb /> },
{ path: '/case-studies/feba-implementation-canara', element: <CorporationBank_feba /> },
{ path: '/case-studies/core-banking-service-capital-bank', element: <CoreBankingServiceCapitalBank /> },
{ path: '/case-studies/finacle-ebanking-support-L1', element: <FEBASupport /> },

  { path: '/our-team', element: <Our_team /> },
  { path: '/Overview', element: <Overview /> },
  { path: '/newsroom', element: <Newsroom /> },
  { path: '/India20Co-operative20Banking20Connect20202420-20Event20SummaryIndia20Co-operative20Banking20Connect20202420-20Event20Summary', element: <IndiaCooperativeBanking2024EventSummary /> },
  { path: '/ISO27001Certified', element: <ISO27001Certified /> },
  { path: '/Mehsana', element: <Mehsana /> },
  { path: '/2FactorAuthentation', element: <TwoFactorAuthentication /> },
  { path: '/Canara%20Bank', element: <MigrationProjectAt2RRBsOfCanaraBank /> },
  { path: '/GoaEvent', element: <GoaEvent /> },
  { path: '/ASIAEVENT2', element: <AsiaEvent2 /> },
  { path: '/ASIAEVENT', element: <AsiaEvent /> },
  { path: '/mahanagar-bank', element: <MahanagarBank /> },
  { path: '/suryoday-bank', element: <Suryoday /> },
  { path: '/SataraDCCBGoLive', element: <SataraDCCBGoLive /> },
  { path: '/intellicus', element: <Intellicus /> },
  { path: '/Competency', element: <Competency /> },
  { path: '/ProjectUpdate', element: <ProjectUpdate /> },
  { path: '/contact', element: <Contact /> },
  { path: '/20anniversary', element: <Anniversary /> },
  { path: '/gallery', element: <Gallery /> },
  { path: '/Runuptotheevent', element: <RunUpEvents /> },
  { path: '/mumbai-celebration', element: <MumbaiEvents /> },
  { path: '/banglorecelebration', element: <BangaloreEvents /> },
  { path: '/modus-Family', element: <YearsJourney /> },
  { path: '/services', element: <Services /> },
  { path: '/products', element: <Products /> },
  { path: '/modusbi', element: <Modusbi /> },
  { path: '/partner-solutions', element: <PartnerSolutions /> },
];

function App() {
  return (
    <HelmetProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map(({ path, element }) => (
            <Route
              key={path}
              index={path === '/'}
              path={path === '/' ? undefined : path.slice(1)}
              element={element}
            />
          ))}
        </Route>
      </Routes>
    </Router>
</HelmetProvider>
import React, { useState } from 'react';
import './ApplyForm.css';

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    location: '',
    preferred: '',
    degree: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h2>Apply Now</h2>
      <form>
        {[
          { label: 'FULL NAME*', name: 'fullName', type: 'text' },
          { label: 'EMAIL ADDRESS*', name: 'email', type: 'email' },
          { label: 'MOBILE NUMBER*', name: 'mobile', type: 'text' },
          { label: 'CURRENT LOCATION*', name: 'location', type: 'text' },
          { label: 'PREFERRED LOCATION', name: 'preferred', type: 'text' },
          { label: 'PROFESSIONAL DEGREE/COURSE', name: 'degree', type: 'text' },
        ].map((field) => (
          <div className="form-group" key={field.name}>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="form-input"
              placeholder={field.label}
              required
            />
            <label className={formData[field.name] ? 'active' : ''}>
              {field.label}
            </label>
          </div>
        ))}
             <div className={`form-group ${formData.position ? 'filled' : ''}`}>
          <select
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="form-input"
            required
          >
            <option value="">Select Position</option>
            <option value="Finacle Application Support">Finacle Application Support</option>
            <option value="Finacle E Banking Support">Finacle E Banking Support</option>
            <option value="Finacle E Banking Testing">Finacle E Banking Testing</option>
            <option value="Trainee Software Engineer">Trainee Software Engineer</option>
            <option value="Software Engineer">Software Engineer</option>
          </select>
          <label>SELECT POSITION</label>
        </div>
 
        <div className={`form-group ${formData.experience ? 'filled' : ''}`}>
          <select
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="form-input"
            required
          >
            <option value="">Select</option>
            <option value="fresher">Fresher</option>
            <option value="1-2 Yrs">1-2 Yrs</option>
            <option value="2-4 Yrs">2-4 Yrs</option>
            <option value="4-6 Yrs">4-6 Yrs</option>
            <option value="6-8 Yrs">6-8 Yrs</option>
            <option value="8-10 Yrs">8-10 Yrs</option>
            <option value="10+ Yrs">10+ Yrs</option>


          </select>
          <label>SELECT WORK EXPERIENCE</label>
        </div>
 
        <div className="form-group filled">
          <input
            type="file"
            name="file"
            onChange={handleChange}
            className="form-input"
          />
          <label>CHOOSE FILE</label>
        </div>
 
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ApplyForm;
.form-group {
  position: relative;
  margin-bottom: 25px;
  width: 100%;
}
.form-input ,.form-group select{
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: none;
  outline: none;
}
.form-input::placeholder {
  color: #130404; 
}
label {
  position: absolute;
  top: 12px;
  left: 12px;
font-size: 0px;
}
.form-input:focus + label
{
    top: -17px;
  left: 8px;
  font-size: 12px;
  color: #f6f8fa;
  background-color: #0070c0;
}
.form-input:focus{
  border: 1px solid #0070c0;
}                                                                                               
.submit-button {
  background-color: #0070c0;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

