import React, { PropTypes } from "react"
import { Link } from "phenomic"

import LatestPosts from "../../components/LatestPosts";
import Button from "../../components/Button"

import styles from "./index.css"

const Feed = ({ url }) => (
  <div>
    <LatestPosts numberOfPosts={3} />

    <div className={ styles.blogbutton } >
      <Link to={ url } >
        <Button primary className={ styles.allPosts }> All Posts </Button>
      </Link>
    </div>
  </div>
);

Feed.propTypes = {
  url: PropTypes.string.isRequired,
}

export default Feed;
