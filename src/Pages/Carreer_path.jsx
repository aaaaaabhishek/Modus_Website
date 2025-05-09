import React, { useState } from 'react';
 
const cardData = [
  { title: 'Software Trainee', items: [] },
  { title: 'Software Engineer', items: [] },
  { title: 'Senior Software Engineer', items: [] },
  { title: 'Team Lead', items: [] },
  { title: 'Project Lead / Technical Architect', items: [] },
  { title: 'Project Manager', items: [] },
];
 
const Career_path = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
 
  return (
    <>
      {/* Hero Section */}
      <div
        className="d-flex justify-content-center align-items-center text-center text-white"
        style={{
          backgroundImage: 'url(images/job.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          position: 'relative',
        }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75" style={{ zIndex: 1 }}></div>
        <h1 className="display-3 fw-bold position-relative" style={{ zIndex: 2 }}>
          Personal and Professional Growth
        </h1>
      </div>
 
      {/* Career Info */}
      <div className="text-center mt-5">
                    <div className='fw-medium fs-1 text-primary'>
                Career Progression
                </div>
        <p className="mx-auto w-75">
          Below is the career ladder at Modus with designations listed in sequential order. Reinforce your career progression by aligning your level with the given options. Kick-start your journey with our vibrant team to achieve your career objectives.
        </p>
      </div>
 
      {/* Cards */}
      <div className="container py-5">
        <div className="row justify-content-center">
          {cardData.map((card, index) => (
            <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
              <div
                className={`bg-light rounded h-100 text-start transition-all`}
                style={{
                  transform: hoveredIndex === index ? 'scale(1.05) translateY(-5px)' : 'none',
                  boxShadow: hoveredIndex === index ? '0 8px 20px rgba(0, 0, 0, 0.2)' : 'none',
                  borderTop: hoveredIndex === index ? '4px solid #007BFF' : 'none',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  padding:'4.8rem'
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <h5 className="fw-bold fs-4">{card.title}</h5>
                <ul className="list-unstyled fs-5">
                  {card.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
 
export default Career_path;

