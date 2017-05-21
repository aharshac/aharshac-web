import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import ProjectsList from "../../components/ProjectsList"

// import styles from "./index.css"

const defaultNumberOfPosts = 6

const LatestPosts = (props, { collection }) => {
  const maxCount = props.numberOfPosts || defaultNumberOfPosts;

  const sortedProjects = enhanceCollection(collection, {
    filter: { layout: "Project" },
    sort: "date",
    reverse: true,
  })
  const latestProjects = sortedProjects.slice(0, maxCount);
  const totalCount = sortedProjects.length;

  return (
    <div>
      {
        totalCount > 0 &&
        <span>
          Showing { maxCount >= totalCount ? ` ${totalCount} ` : ` ${maxCount} of ${totalCount} ` } projects
        </span>
      }
      <ProjectsList projects={ latestProjects } />
    </div>
  )
}

LatestPosts.propTypes = {
  numberOfPosts: PropTypes.number,
}

LatestPosts.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default LatestPosts
