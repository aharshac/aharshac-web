import React, { PropTypes } from 'react';

import Emoji from '../Emoji';
import styles from './index.css';

const Category = ({ text }) => {
  let emoji = "label"; // status, general

  switch (text) {
    case 'question':
      emoji = "question";
      break;

    case 'story':
      emoji = "cloud";
      break;

    case 'idea':
      emoji = "exclamation";
      break;

    case 'objective':
      emoji = "point_right";
      break;

    case 'milestone':
      emoji = "checkered_flag";
      break;

    case 'task':
      emoji = "medal_military";
      break;

    case 'tutorial':
      emoji = "school";
      break;

    case 'showtell':
      emoji = "100";
      break;

    case 'roadmap':
      emoji = "rocket";
      break;

    case 'sponsorship':
      emoji = "money_with_wings";
      break;

    case 'contest':
      emoji = "trophy";
      break;
  }

  const getTitle = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <span className={styles.tag}>
      {emoji !== undefined && <Emoji text={emoji}/>}
      { getTitle(text) }
    </span>
  );
};

Category.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Category;
