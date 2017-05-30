import React, { PropTypes } from 'react';
import Svg from 'react-svg-inline';

import LinkExt from '../LinkExt';
import styles from './index.css';

import iconGithub from '../../assets/icons/iconmonstr-github-1.svg';
import iconSvg from '../../assets/icons/npm.svg';
import iconCollaborizm from '../../assets/icons/collaborizm.svg';

const ToolIconBar = ({ npm, github, collaborizm, width = "1.2em", style }) => {
  const svgStyle = { "font-size": width };

  return (
    <ul className={styles.icons + " " + style} >
      {
        collaborizm &&
        <LinkExt to={ collaborizm } className={styles.icon} rel="noopener noreferrer">
          <Svg svg={iconCollaborizm} cleanup style={svgStyle} />
        </LinkExt>
      }
      {
        github &&
        <LinkExt to={ github } className={styles.icon} rel="noopener noreferrer">
          <Svg svg={iconGithub} cleanup style={svgStyle} />
        </LinkExt>
      }
      {
        npm &&
        <LinkExt to={ npm } className={styles.icon} rel="noopener noreferrer">
          <Svg svg={iconSvg} style={svgStyle} />
        </LinkExt>
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
