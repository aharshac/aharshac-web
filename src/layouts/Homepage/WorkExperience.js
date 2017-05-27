import React from 'react';

import ColoredH2 from '../../components/ColoredH2';
import Experience from '../../components/Experience';

const WorkExperience = () => (
  <section>
    <ColoredH2>Experience</ColoredH2>
    <Experience date="2016/10 - present" subtitle="Mobile and Web App Development, IoT Prototyping, Quadcopters">
      <b>Collaborizm.com</b> - Ind. Hardware & Software Developer
    </Experience>
    <Experience date="2016/04 - 2016/09" subtitle="Web and Mobile solution for client.">
      <b>Quadrisk Advisors Pvt. Ltd.</b> - Ind. Software Developer
    </Experience>
  </section>
);

export default WorkExperience;
