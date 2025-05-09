// import React from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
 
// const HomeSection = () => {
//   return (
//     <div className="bg-light py-5">
//       <Container>
//         <Row className="align-items-center">
//           <Col md={6}>
//             <img
//               src={"/images/map-modus.png"}
//               alt="Global Presence"
//               className="img-fluid rounded shadow"
//             />
//           </Col>
//           <Col md={6}>
//             <p className="text-end text-muted mb-2">Employee Login</p>
//             <h2 className="text-primary mb-3 fs-4 lh-base">
//               Modus was incorporated in 2003, and has since established a niche for itself as a trusted partner in BFSI.
//             </h2>
//             <p className="text-secondary">
//               The range of our offerings includes both differentiated{" "}
//               <span className="text-primary fw-semibold">services</span> like Finacle Core Banking Solution, Software Services, Product Implementation, Business Process Transformation and non-differentiated services such as Application / Website Development, SEO Services, Customization, Testing and Product Support.
//             </p>
//             <Button variant="outline-primary" className="mt-3">More about us</Button>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };
 
// export default HomeSection;
import React from 'react';
// import worldMap from './assets/world-map.jpg'; // Ensure this path is correct

const HomeSection = () => {
  return (
    <section className="bg-light py-5">
      <div className="container-fluid">
        <div className="d-flex flex-column flex-md-row align-items-center">
          <div className="flex-md-1 mb-4 mb-md-0">
            <img
              src={"/images/map-modus.png"}
              alt="Global Presence"
              className="img-fluid rounded shadow"
              style={{ objectFit: 'cover', width: '100%' }}
            />
          </div>
          <div className="flex-md-1">
            <h2 className="text-primary fs-4 lh-base mb-3">
              Modus was incorporated in 2003, and has since established a niche for itself as a trusted partner in BFSI.
            </h2>
            <p className="text-secondary">
              The range of our offerings includes both differentiated <span className="text-primary fw-semibold">services</span> like Finacle Core Banking Solution, Software Services, Product Implementation, Business Process Transformation, and non-differentiated services such as Application / Website Development, SEO Services, Customization, Testing, and Product Support.
            </p>
            <a href="#" className="btn btn-outline-primary mt-3">
              More about us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
