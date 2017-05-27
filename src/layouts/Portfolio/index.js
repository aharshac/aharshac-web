import React from 'react';
import Helmet from 'react-helmet';

import LatestProjects from '../../components/LatestProjects';
import Page from '../Page';

import metadata from '../../metadata';
const { title,  } = metadata;

const Portfolio = props => {
  return (
    <Page {...props}>
      <Helmet title={`${title}  —  Portfolio`} />
      <LatestProjects numberOfPosts={Infinity}/>
    </Page>
  );
};

export default Portfolio;
