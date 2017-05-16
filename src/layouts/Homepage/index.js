import React from "react"
import Helmet from 'react-helmet';


import Cover from "./Cover"
import About from "./About"
import Education from "./Education"
import WorkExperience from "./WorkExperience"
import Skills from "./Skills"
import Interests from "./Interests"
import LatestPosts from "../../components/LatestPosts"
import styles from "./index.css"

import metadata from '../../metadata'
const { pkg, description, title, avatar, networks:{ twitter_id } } = metadata

const meta = [
  { property: "og:type", content: "article" },
  { property: "og:title", content: title },
  { property: "og:url", content: pkg.homepage },
  { property: "og:image", content: avatar },
  { property: "og:description", content: description },
  { name: "twitter:card", content: "summary" },
  { name: "twitter:title", content: title },
  { name: "twitter:creator", content: `@${ twitter_id }` },
  { name: "twitter:description", content: description },
  { name: "twitter:image", content: title },
  { name: "description", content: description },
]

const Homepage = () => {
  return (
    <div>
      <Helmet title={title} meta={meta} />

      <Cover/>

      <div className={styles.container}>
        <About />

        <WorkExperience />

        <Skills />

        <Education />

        <Interests />
        {/*

        <Work/>
        */}

        <LatestPosts/>

      </div>
    </div>
  )
}

export default Homepage
