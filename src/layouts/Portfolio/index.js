import React from 'react';
import Helmet from 'react-helmet';

import LatestProjects from '../../components/LatestProjects';
import Page from '../Page';

const Portfolio = props => (
  <Page {...props}>
    <Helmet
      title="Harsha's Portfolio"
      />
    <LatestProjects numberOfPosts={Infinity}/>
  </Page>
);

export default Portfolio;
