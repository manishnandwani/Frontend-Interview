import { useState } from 'react';
import './Accordian.css'; // Import CSS separately

const Accordion = ({accordianData}) => {
  console.log("he;;")
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };


  return (
    <div className="accordion">
      {accordianData.map((item, index) => {
        const isOpen = index === activeIndex;

        return (
          <div className="accordion-item" key={index}>
            <div className="accordion-header" onClick={() => handleToggle(index)}>
              <span>{item.title}</span>
              <span className={`icon ${isOpen ? 'rotate' : ''}`}>{isOpen ? '−' : '+'}</span>
            </div>
            <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
              <p>{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
