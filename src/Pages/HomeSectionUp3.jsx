import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const HomeSectionUp3 = () => {
  return (
    <div>     
       <h1 className="col-1 text-primary fs-9 lh-base mb-3 mt-4 ms-4" style={{backgroundColor:"#0070c0;"}} >
    Customer Commitment
    Pillars            </h1>
    <div className="container-fluid" style={{ backgroundColor: '#293665', color: 'white' }}>
      <div className="row">
        

        <div className="col-md-8">
          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/images/Es4.jpg" className="d-block w-100 small-image" alt="Slide 1" style={{ width: '40%', height: 'auto' }}/>
              </div>
              <div className="carousel-item">
                <img src="/images/modus-collage.jpg" className="d-block w-100 small-image" alt="Slide 2" style={{ width: '40%', height: 'auto' }}/>
              </div>
              {/* <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="Slide 3" />
              </div> */}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-md-4">

          <div className="py-6">
            <h1>1. Relentless Integrity</h1>
            <h1>2. Ingrained Ethics</h1>
            <h1>3. Value-based Niche Solution Offerings</h1>
            <h1>4. Total Quality Management</h1>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HomeSectionUp3;
