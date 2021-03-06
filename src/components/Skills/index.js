import React, { PropTypes } from 'react';

import styles from './index.css';

const Skills = ({ skills, style }) => (
  <ul className={styles.list }>
    {skills.map((skill, i) => (
      <li className={styles.skill + " " + style } key={i}>
        <span className={styles.title}>{skill.title}</span>
        <span className={styles.items}>
          {skill.items.join(', ')}
        </span>
      </li>
    ))}
  </ul>
);

Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired
  })).isRequired,
  style: PropTypes.string,
};

export default Skills;
