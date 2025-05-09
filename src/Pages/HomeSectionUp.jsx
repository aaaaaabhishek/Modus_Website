import React from 'react';
 
const clients = [
  "edge.png", "Infosys_logo.png", "sbm-bank.png", "wipro.png",
  "Modus Client – Deutsche Bank.png", "I&M_logo.png", "Modus Client – Kotak Mahindra Bank (1).png",
  "linearsix.png", "Modus Client – Validus Health.png", "natsave.png", "indusind-bank.png",
  "lenovo.png", "hitachi.png", "ujjivan.png", "zanaco-bank.png",
  "Credit_Suisse_Logo.png", "DBS-logo.png"
];
 
const HomeSectionUp = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#1E2337', color: 'white' }}>
      <div className="container-fluid">
 
        {/* Our Services section */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-8">
          {/* Text content */}
          <div style={{marginLeft:'' }}>
            <h1 className="fs-2 lh-base mb-4" style={{ borderLeft: '3px solid #6f42c1', paddingLeft: '10px' }}>
              Our Services
            </h1>
            <p>
              Combining our regional market knowledge with industry experience we provide complete solutions in
              application development services, core banking (or) digital banking software services and IS audit for
              companies of all sizes and financial institutions.
            </p>
            <a href="#" className="btn btn-outline-light mt-3">View our services</a>
          </div>
 
          {/* Image */}
          <div style={{ width: '100%' }} className="text-center mt-4 mt-md-0">
            <img
              src="/images/modus-information-systems-services.png"
              alt="Services Visual"
              className="img-fluid rounded shadow"
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
 
        {/* Modus Logo and Clients section */}
        <div className="row align-items-center">
          <div className="col-md-4 mb-4 text-center">
            <img
              src="/images/IMG_8742.jpg"
              alt="Modus Lobby"
              className="img-fluid"
              style={{ maxWidth: '80%', objectFit: 'contain' ,transform: "translateY(-75px)"
}}
            />
          </div>
          <div className="col-md-8 text-white">
            <h2 className="mb-4" style={{ borderLeft: '3px solid #6f42c1', paddingLeft: '10px' }}>
              Who we're working with
            </h2>
            <div className="row justify-content-center">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="col-4 col-md-3 col-lg-2 mb-3 d-flex justify-content-center align-items-center"
                >
                  <img
                    src={`/images/${client}`}
                    alt={`Client ${index + 1}`}
                    className="img-fluid"
                    style={{
                      maxWidth: '100px',
                      maxHeight: '60px',
                      objectFit: 'contain',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
 
export default HomeSectionUp;

