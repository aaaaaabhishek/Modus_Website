import React from 'react';
 
const backgroundImage = "/images/Why-modus.png";
 
const sections = [
  {
    id: "01",
    title: "Representation",
    subtitle: "Representation",
    content: [
      "We take pride in the fact that several of our entry level incumbents have now risen to the positions Project Managers/Project Leads, Senior Software Engineers even CXO. Belonging to rural hinterlands, comfort with written/spoken English being a challenge, they made their way to corporate echelons in short span of time. When they look back with pride at their personal growth path, it fills their hearts with a great sense of satisfaction for the opportunity given.",
      "We respect cultural, ethical and religious diversities."
    ],
    bgColor: '#F4F5F7'
  },
  {
    id: "02",
    title: "Receptivity",
    subtitle: "Receptivity",
    content: [
      "Employee Feedback Survey is an annual exercise, covering dimensions such as:",
      <ul key="receptivity-list">
        <li>Job Content, Sense Of Fulfilment And Job Satisfaction</li>
        <li>Personal And Professional Growth</li>
      </ul>
    ]
  },
  {
    id: "03",
    title: "Fairness",
    subtitle: "Rewarding Merit -",
    content: [
      "Our HR policies- reiterate, our policy of rewarding employees for their valued contribution to the organization's growth trajectory. There is clear focus on performance, reward for pure merit with no scope for subjectivity.",
      <h4 key="focus-title" className="fw-bold" style={{color:'#0070c0'}}>Focus on Performance Management- Finding the sweet spot -</h4>,
      "Criticism and praise are both an important part of the business world. Effective leaders don't only provide praise, nor do they only provide criticism. Instead, they find the sweet spot between the two...",
      <h4 key="reward-title" className="fw-bold" style={{color:'#0070c0'}}>Reward & Recognition- Recognising unsung heros & sheroes-</h4>,
      "Qualitative aspects merit reward, such as articulation, involvement, calibre, Client/Stakeholder feedback, Pro activeness, Seamless execution."
    ],
    bgColor: '#F4F5F7'
  },
  {
    id: "04",
    title: "Learning & Development",
    subtitle: "Emphasis on Learning",
    content: [
      "We strive to create an atmosphere where learning & innovation become the DNA of every Modus site...",
      "Providing Proactive Training instead of Reactive. Aligning Goals of Training to Business Goals. Training supported with real life examples."
    ]
  },
  {
    id: "05",
    title: "Giving Credit",
    subtitle: "Giving Credit",
    content: [
      "Many of our employees have been recipients of accolades from Internal & External stakeholders for their exemplary work...",
      "Qualities such as dedication, quality output, attitude, managing stressful deadlines, analysing issues, co-ordination..."
    ],
    bgColor: '#F4F5F7'
  }
];
 
const Why_modus = () => {
  return (
    <>
      {/* Background Section */}
      <div
        className="d-flex justify-content-center align-items-center text-center bg-dark bg-opacity-75"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          color: 'white',
        }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: '#2B3651', opacity: 0.7, zIndex: 1 }}></div>
        <h1 className="display-3 fw-bold position-relative" style={{ zIndex: 2 }}>Careers at Modus</h1>
      </div>
 
      <div className="d-flex justify-content-center">
        <div className="w-50 pe-4" style={{ color: '#0070c0' }}>
          <h1 className="fs-2">
            We offer a rewarding mix of what you are looking for: Pioneering management, clearly defined policies...
          </h1>
        </div>
      </div>
 
      {/* Mapped Sections */}
      {sections.map((section, index) => (
        <div
          key={index}
          className="container my-5"
          style={{ backgroundColor: section.bgColor || 'transparent' }}
        >
          <div className="mb-4">
            <div className="d-flex align-items-center mb-2">
<strong className='me-2' style={{color:'0070c0'}}>{section.id}.</strong>
              <span className="fw-bold border-bottom border-2 border-dark pb-1">{section.title}</span>
            </div>
            <h4 className="fw-bold" style={{ color: '#0070c0' }}>{section.subtitle}</h4>
            {section.content.map((para, idx) =>
              typeof para === "string" ? <p key={idx}>{para}</p> : para
            )}
          </div>
        </div>
      ))}
    </>
  );
};
 
export default Why_modus;