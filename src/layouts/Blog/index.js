import React from 'react';
import Helmet from 'react-helmet';

import LatestPosts from '../../components/LatestPosts';
import Page from '../Page';

import metadata from '../../metadata';
const { title,  } = metadata;

const Blog = props => (
  <Page {...props}>
    <Helmet title={`${title}  —  Blog`} />
    <LatestPosts numberOfPosts={Infinity}/>
  </Page>
);

export default Blog;
