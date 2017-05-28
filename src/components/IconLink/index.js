import React, { PropTypes } from 'react';
import Svg from 'react-svg-inline';

import LinkExt from '../LinkExt';

import styles from './index.css';

const IconLink = ({ icon, href, children }) => (
  <LinkExt to={href} rel="noreferrer noopener" className={styles.link}>
    <Svg svg={icon} cleanup cleanupExceptions={['fill']}/>
    <span className={styles.name}>{children}</span>
  </LinkExt>
);

IconLink.propTypes = {
  icon: PropTypes.node,
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default IconLink;
