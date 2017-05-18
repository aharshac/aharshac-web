import React, { PropTypes } from "react"

import ProjectPreview from "../ProjectPreview"

import styles from "./index.css"

const ProjectsList = ({ projects }) => {
  return (
    <section>
      {
      projects.length
      ? (
        <ul className={ styles.list }>
          {
          projects.map((page) => (
            <li key={ page.title }><ProjectPreview { ...page } /></li>
          ))
        }
        </ul>
      )
      : "No posts yet."
    }
    </section>
  )
}

ProjectsList.propTypes = {
  projects: PropTypes.array.isRequired,
}

export default ProjectsList
