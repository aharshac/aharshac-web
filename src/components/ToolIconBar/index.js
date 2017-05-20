import React, { PropTypes } from 'react';
import { Link } from "phenomic";
import Svg from 'react-svg-inline';

import styles from './index.css';

import iconGithub from '../../assets/icons/iconmonstr-github-1.svg';
import iconSvg from '../../assets/icons/npm.svg';
import iconCollaborizm from '../../assets/icons/collaborizm.svg';

const ToolIconBar = ({ npm, github, collaborizm, width = "1.2em", style }) => {
  const svgStyle = { "font-size": width };

  return (
    <ul className={styles.icons + " " + style} >
      {
        npm &&
        <Link to={ npm } className={styles.icon} target="_blank" rel="noopener noreferrer">
          <Svg svg={iconSvg} style={svgStyle} />
        </Link>
      }
      {
        github &&
        <Link to={ github } className={styles.icon} target="_blank" rel="noopener noreferrer">
          <Svg svg={iconGithub} cleanup style={svgStyle} />
        </Link>
      }
      {
        collaborizm &&
        <Link to={ collaborizm } className={styles.icon} target="_blank" rel="noopener noreferrer">
          <Svg svg={iconCollaborizm} cleanup style={svgStyle} />
        </Link>
      }
    </ul>
  );
};

ToolIconBar.propTypes = {
  npm: PropTypes.string,
  github: PropTypes.string,
  collaborizm: PropTypes.string,
  width: PropTypes.string,
  style: PropTypes.string,
};

export default ToolIconBar;
