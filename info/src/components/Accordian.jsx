import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
export default function Accordian() {
  return (
    <Accordion defaultActiveKey="0">
    <Accordion.Item eventKey="0">
      <Accordion.Header>Reduced risk of heart attacks</Accordion.Header>
      <Accordion.Body>
      According to one study, people who donate blood have an 88% lower risk of suffering a heart attack. Regular blood donation may also help lower blood pressure and reduce cardiovascular risk factors.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
      <Accordion.Header>Thinner blood</Accordion.Header>
      <Accordion.Body>
      Donating blood reduces the thickness of your blood, allowing it to flow more easily through your body and reach your heart faster.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="2">
      <Accordion.Header>Improved skin aging</Accordion.Header>
      <Accordion.Body>
      Donating blood reduces the thickness of your blood, allowing it to flow more easily through your body and reach your heart faster.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="3">
      <Accordion.Header>Detoxification</Accordion.Header>
      <Accordion.Body>
      Donating blood may help your body's detoxing potential. Blood and plasma donations have been shown to have an effect on the levels of perfluoroalkyl and polyfluoroalkyl substances (PFASs).      </Accordion.Body>
    
    </Accordion.Item>
  </Accordion>
  );
}
