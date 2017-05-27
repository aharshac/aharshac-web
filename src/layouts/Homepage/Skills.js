import React from 'react';

import ColoredH2 from '../../components/ColoredH2';
import Skills from '../../components/Skills';

/*
•	Mobile	–	Android SDK (Java), React Native (JS/ES6), Redux Framework
•	Web 	–	PHP, MySQL, HTML5 + CSS3, jQuery, Bootstrap, React.js, Socket.io
•	MCU	–	Arduino (C, C++), Raspberry Pi (C, Node.js, Python), ESP8266 (C)
•	PC 	–	VB.NET
•	Tools 	–	Git, Node.js, Express, Babel, Heroku, Firebase
•	Languages – English, German (A1 level), Hindi, Kannada, Konkani, Tulu
*/

const SkillsSection = () => (
  <section>
    <ColoredH2>Skills</ColoredH2>
    <Skills
      skills={[
        {
          title: 'Programming',
          items: ['Java', 'JavaScript/ES6', 'HTML5 + CSS3', 'PHP', 'MySQL', 'VB.NET', 'C', 'C++', 'Python', ]
        },
        {
          title: 'Mobile',
          items: ['Android SDK', 'React Native', 'Redux Framework', ]
        },
        {
          title: 'Web',
          items: ['jQuery', 'Bootstrap', 'React', 'Socket.io']
        },
        {
          title: 'MCU',
          items: ['Arduino', 'Raspberry Pi', 'ESP8266 (NodeMCU)']
        },
        {
          title: 'Tools',
          items: ['Git', 'Node.js', 'Express', 'Babel', 'Heroku', 'Firebase' ]
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
