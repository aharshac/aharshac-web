import React, { PropTypes } from 'react';

import Tag from '../Tag';
import styles from './index.css';

const SkillBar = ({ tags, style }) => (
  <ul className={styles.skills + " " + style }>
    { tags && tags.map((skill, i) => <Tag key={i} text={skill} styles={styles.skill} />) }
  </ul>
);

SkillBar.propTypes = {
  tags: PropTypes.array,
  style: PropTypes.string,
};

export default SkillBar;
