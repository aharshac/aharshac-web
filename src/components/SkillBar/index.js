import React, { PropTypes } from 'react';

import Tag from '../Tag';
import styles from './index.css';

const SkillBar = ({ skills, style }) => (
  <ul className={styles.skills + " " + style }>
    { skills && skills.map((skill, i) => <Tag key={i} text={skill} />) }
  </ul>
);

SkillBar.propTypes = {
  skills: PropTypes.array,
  style: PropTypes.string,
};

export default SkillBar;
