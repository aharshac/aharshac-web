import React, { PropTypes } from 'react';

import styles from './index.css';

const ColoredH2 = ({ children }) => (
  <h2 className={styles.underline}>
    <span className={styles.colored}>{/*children.substr(0, 3)*/ children}</span>
    {/*children.substr(3)*/}
  </h2>
);

ColoredH2.propTypes = {
  children: PropTypes.string.isRequired
};

export default ColoredH2;
