import React from 'react';

import ColoredH2 from '../../components/ColoredH2';
import Tag from '../../components/Tag';

const Interests = () => (
  <section>
    <ColoredH2>Interests</ColoredH2>
    <Tag text="aeromodelling" emoji="airplane"/>{', '}
    <Tag text="blood donation" emoji="syringe"/>{', '}
    <Tag text="battlefield gamer" emoji="video_game"/>{', '}
    <Tag text="programming" emoji="computer"/>{', '}
    <Tag text="reading" emoji="books"/>{', '}
    <Tag text="swimming" emoji="swimming_man"/>{', '}
    <Tag text="tv series" emoji="tv"/>
  </section>
);

export default Interests;
