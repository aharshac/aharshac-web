import React from 'react';

import ColoredH2 from '../../components/ColoredH2';
import Skills from '../../components/Skills';

const SkillsSection = () => (
  <section>
    <ColoredH2>Skills</ColoredH2>
    <Skills
      skills={[
        {
          title: 'Programming',
          items: ['Android/Java', 'C++', 'HTML5 + CSS3', 'JavaScript/Node.js', 'PHP', 'Python']
        },
        {
          title: 'Web',
          items: ['Bootstrap', 'Express', 'Firebase', 'jQuery', 'React', 'Socket.io']
        },
        {
          title: 'Embedded Systems',
          items: ['Arduino', 'ESP8266 (NodeMCU)', 'Raspberry Pi']
        },
        {
          title: 'Tools',
          items: ['Git']
        },
        {
          title: 'Languages',
          items: ['English', 'German (A2) - ongoing', 'Konkani', 'Kannada', 'Tulu', 'Hindi']
        }
      ]}
      />
  </section>
);

export default SkillsSection;
