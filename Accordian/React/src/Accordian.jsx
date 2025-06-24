import { useState } from 'react';
import './Accordian.css'; // Import CSS separately

const Accordion = ({accordianData}) => {
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
              <span className={'icon'}>{isOpen ? '−' : '+'}</span>
            </div>
            <div className={isOpen ? 'accordion-content open': 'accordion-content '}>
              <p>{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
