import React from 'react';
  
const Footer = () => {
  return (
    // <footer className="bg-primary text-white pt-5 pb-4">
    <footer style={{backgroundColor:'rgba(0, 132, 204, 1'}}className="text-white pt-5 pb-4">

      <div className="container-fluid px-4 text-md-left">
        <div className="row text-center text-md-start">

          {/* Company */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
            <h5 className="text-uppercase">Company</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-white text-decoration-none">Our Team</a></li>
              <li><a href="#" className="text-white text-decoration-none">Testimonials</a></li>
              <li><a href="#" className="text-white text-decoration-none">Case Studies</a></li>
              <li><a href="#" className="text-white text-decoration-none">Newsroom</a></li>
              <li><a href="#" className="text-white text-decoration-none">Sitemap</a></li>
            </ul>
          </div>

          {/* Partner Solutions */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
            <h5 className="text-uppercase">Partner Solutions</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Partner Solutions</a></li>
            </ul>
          </div>

          {/* Products */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
            <h5 className="text-uppercase">Products</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">ModusBI</a></li>
            </ul>
          </div>

          {/* Gallery */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
            <h5 className="text-uppercase">Gallery</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Gallery</a></li>
            </ul>
          </div>

          {/* 20th Anniversary */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
            <h5 className="text-uppercase">20th Anniversary</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">20th Anniversary</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-12 col-md-12 col-lg-2 mb-4">
            <h5 className="text-uppercase">Contact</h5>
            <p className="mb-1">080-41216957 / +91 9902788711</p>
            <p className="mb-1">info@modussystems.com</p>
            <p className="mb-1">
              Modus Information Systems Pvt. Ltd<br />
              No.7, 6th Cross Road, Bilekahalli Dollars Colony,<br />
              2nd Stage BTM Layout, Bengaluru-560076 Karnataka
            </p>
            <div className="mt-2 d-flex justify-content-start">
              <a href="#" className="text-white me-3 fs-5"><i className="bi bi-linkedin"></i></a>
              <a href="#" className="text-white fs-5"><i className="bi bi-facebook"></i></a>
            </div>
          </div>

        </div>
        <div className="text-center mt-4">
          <p className="mb-0 text-white">All Rights Reserved © Modus Information Systems Pvt. Ltd.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
