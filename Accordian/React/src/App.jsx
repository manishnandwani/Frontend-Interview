import Accordion from './Accordian';

export default function App() {

  const accordianData = [
    { title: 'Section 1', content: 'Content for section 1' },
    { title: 'Section 2', content: 'Content for section 2' },
    { title: 'Section 3', content: 'Content for section 3' },
  ];

  console.log("acc 11",accordianData)

  return (
    <div>
      <h2>My Accordion</h2>
      <Accordion accordianData={accordianData} />
    </div>
  );
}