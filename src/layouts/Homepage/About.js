import React from 'react';

import ColoredH2 from '../../components/ColoredH2';
import Emoji from '../../components/Emoji';

// import styles from './index.css';

const About = () => (
  <section>
    <ColoredH2>About</ColoredH2>
    <p>
      Hi <Emoji text="wave"/>, I'm Harsha Alva, a Mechanical Engineer <Emoji text="wrench"/> and
      a Software Developer <Emoji text="computer"/> from Mangalore, India <Emoji text="india"/>. <Emoji text="smile"/>
    </p>

    <p>
      I <Emoji text="heart"/> Aeromodelling <Emoji text="airplane"/>, Computer Integrated Manufacturing,
      Mechatronics and Robotics <Emoji text="robot"/>.
      I'm drawn to embedded platforms like Arduino and Raspberry Pi. Love to explore FDM and 3D printing <Emoji text="printer"/>.
    </p>

    <p>
      I studied programming by myself. I started off with JavaScript and I'm still in <Emoji text="heart"/> with it.
      I also know <Emoji text="older_man"/> a bit of Python <Emoji text="snake"/>, PHP and VB.NET.
      Now <Emoji text="timer_clock"/> I'm learning React, but I'm also a huge fan of Bootstrap.
    </p>

    <p>
      I'm interested in learning new tech in both the above domains <Emoji text="sparkles"/>.
      Collaborating with people on open-source projects <Emoji text="earth_asia"/> on Collaborizm
      and GitHub is something I like to do <Emoji text="muscle"/>.
    </p>

    <p>
      My short term goal is to do Master's <Emoji text="school"/> in Mechatronics from a reputed university <Emoji text="mag"/>.
      In the long term, I'd like to start my own precision manufacturing company <Emoji text="factory"/> and
      provide employment to many people <Emoji text="family_man_woman_girl_boy"/>.
    </p>
  </section>
);

export default About;
