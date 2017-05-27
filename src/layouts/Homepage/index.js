import React from "react"

import PageHead from "../../components/PageHead"

import Cover from "./Cover"
import About from "./About"
import Education from "./Education"
import WorkExperience from "./WorkExperience"
import Skills from "./Skills"
import Interests from "./Interests"
import Feed from "./Feed"
import Portfolio from "./Portfolio"
import styles from "./index.css"

import metadata from '../../metadata'
const { pkg, description, title, avatar, networks:{ twitter_id, blog, portfolio } } = metadata

const Homepage = () => {
  return (
    <div>

      <PageHead title={title} hero={avatar} url={pkg.homepage} description={description} twitter={twitter_id} />

      <Cover/>

      <div className={styles.container}>
        <About />

        <WorkExperience />

        <Skills />

        <Education />

        <Interests />

        <Portfolio url={portfolio} />

        <Feed url={blog} />

      </div>
    </div>
  )
}

export default Homepage
