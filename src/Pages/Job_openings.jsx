import React from "react";
 
const backgroundImage = "/images/office4.png";
 
const Job_Openings = () => {
  return (
    <>
      {/* Background Section */}
      <div
        className="d-flex justify-content-center align-items-center text-center bg-dark bg-opacity-75 position-relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          color: "white",
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundColor: "#2B3651",
            opacity: 0.7,
            zIndex: 1,
          }}
        ></div>
        <h1 className="display-3 fw-bold position-relative" style={{ zIndex: 2 }}>
          Working at Modus
        </h1>
      </div>
 
      {/* Image and Text Section */}
      <div className="container-fluid my-0">
        <div className="row align-items-end g-0">
          {/* Image first */}
          <div className="col-md-6">
            <img
              src="/images/job_1.jpg"
              alt="Thumbs up"
              className="img-fluid w-100 h-100"
              style={{ objectFit: "cover", maxHeight: "75vh" }}
            />
          </div>
 
          {/* Blue text section second */}
          <div
            className="col-md-6 bg-primary text-white d-flex flex-column justify-content-center"
            style={{ minHeight: "75vh", padding: "2rem" }}
          >
            <h2 className="fw-bold mb-3">Modus Alumni</h2>
            <p className="lead mb-0">
              A good percentage of our current staff strength are our Alumni. Our Alumni are most welcome to join us.
              We value your tenure with us and industry experience. Do send in your resume if you would like to come back.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
 
export default Job_Openings;


