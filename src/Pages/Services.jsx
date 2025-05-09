import React from 'react';

const Services = () => {
  return (
    <section className="bg-light py-5">
      <div className="container-fluid">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-8">
      <div className="flex-md-1 mb-4 mb-md-0" style={{ width: '100%' }}>
  <img
    src={"/images/modus-clients-partners.png"}
    alt="Global Presence"
    className="img-fluid rounded shadow"
    style={{ objectFit: 'cover', height: 'auto', maxWidth: '100%' ,        transform: 'translateY(-75px)'}}/>
          </div>
          <div className="flex-md-1">
            <h1 className="text-primary fs-4 lh-base mb-3">
              Our clients
            </h1>
            <p className="text-secondary">
              Modus has partnered with Banks in their Core Banking transformation journey. Modus has enabled technology majors like Lenovo in Professional SEO (Search Engine Optimization) Services. Modus has helped very large MNC's to develop, enhance and maintain their web sites.
              <br />
              Modus also <span className="text-primary fw-semibold">Trusted Partner</span> with some of the organizations to implement their IP based solutions in their clients' IT landscape. Modus believes in delivering total customer satisfaction in core banking solutions by adhering to highest level of business ethics and professional integrity.
            </p>
            <a href="#" className="btn btn-outline-primary mt-3">
              View our competency
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
