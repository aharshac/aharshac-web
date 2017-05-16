import React from 'react';
import Helmet from 'react-helmet';

import LatestPosts from '../../components/LatestPosts';
import Page from '../Page';

const Blog = props => (
  <Page {...props}>
    <Helmet
      title="Harsha's blog"
      />
    <LatestPosts numberOfPosts={Infinity}/>
  </Page>
);

export default Blog;
