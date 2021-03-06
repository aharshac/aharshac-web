import React, { PropTypes } from "react"
import { Link } from "phenomic"

import ColoredH2 from "../../components/ColoredH2";
import LatestPosts from "../../components/LatestPosts";
import Button from "../../components/Button"

import styles from "./index.css"

const Feed = ({ url }) => (
  <section className={ styles.feed }>
    <ColoredH2> Feed </ColoredH2>

    <LatestPosts numberOfPosts={3} />

    <div className={ styles.blogbutton } >
      <Link to={ url } >
        <Button className={ styles.allPosts }> All Posts </Button>
      </Link>
    </div>
  </section>
);

Feed.propTypes = {
  url: PropTypes.string.isRequired,
}

export default Feed;
