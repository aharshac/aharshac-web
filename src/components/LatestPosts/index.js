import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import PagesList from "../../components/PagesList"

// import styles from "./index.css"

const defaultNumberOfPosts = 6

const LatestPosts = (props, { collection }) => {
  const maxCount = props.numberOfPosts || defaultNumberOfPosts;

  const sortedPosts = enhanceCollection(collection, {
    filter: { layout: "Post" },
    sort: "date",
    reverse: true,
  });
  const latestPosts = sortedPosts.slice(0, maxCount);
  const totalCount = sortedPosts.length;

  // let status = null;
  //
  // if (totalCount > 0) {
  //   if (maxCount >= totalCount) {
  //     status = `Showing ${totalCount} posts`;
  //   } else {
  //     status = `Showing ${maxCount} of ${totalCount} posts`;
  //   }
  // }

  return (
    <div>
      {/* <h1 className={ styles.latestPosts }>
        { "Latest Posts" }
      </h1> */}
      {
        totalCount > 0 &&
        <span>
          { maxCount >= totalCount ? `Showing ${totalCount} posts` : `Showing ${maxCount} of ${totalCount} posts` }
        </span>
      }
      <PagesList pages={ latestPosts } />
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
