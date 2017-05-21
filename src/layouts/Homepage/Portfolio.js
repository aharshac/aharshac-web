import React, { PropTypes } from "react"
import { Link } from "phenomic"

import ColoredH2 from "../../components/ColoredH2";
import LatestProjects from "../../components/LatestProjects";
import Button from "../../components/Button"

import styles from "./index.css"

const Portfolio = ({ url }) => (
  <section>
    <ColoredH2>Projects</ColoredH2>

    <LatestProjects numberOfPosts={5} />

    <div className={ styles.blogbutton } >
      <Link to={ url } >
        <Button className={ styles.allPosts }> All Projects </Button>
      </Link>
    </div>
  </section>
);

Portfolio.propTypes = {
  url: PropTypes.string.isRequired,
}

export default Portfolio;
