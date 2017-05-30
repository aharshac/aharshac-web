import React, { PropTypes } from "react"
import { Link } from "phenomic"
import Svg from "react-svg-inline"

import LinkExt from '../LinkExt';

import iconGithub from '../../assets/icons/iconmonstr-github-1.svg';
import iconTwitter from '../../assets/icons/iconmonstr-twitter-1.svg';
import iconStackOverflow from '../../assets/icons/stackoverflow.svg';
import iconFacebook from '../../assets/icons/facebook.svg';
import iconLinkedin from '../../assets/icons/linkedin.svg';
import iconCollaborizm from '../../assets/icons/collaborizm.svg';
import iconNpm from '../../assets/icons/npm.svg';

import styles from "./index.css"


const _link = (to, svg, title) =>
  <LinkExt to={ to } className={ `${styles.link} hideIfMobile` }>
    <Svg svg={ svg } cleanup />
    <span className="hideIfMobile">{title}</span>
  </LinkExt>;

const Header = (props, { metadata: { title, networks: { blog, portfolio, collaborizm,
    facebook, github, linkedin, npm, stackoverflow, twitter }
  , headerItems } }) => (

  <header className={ styles.header }>
    <nav className={ styles.nav }>
      <div className={ styles.navPart1 }>
        <Link className={ styles.link + " " + styles.home } to={ "/" } >
          { title }
        </Link>
      </div>

      <div className={ styles.navPart2 }>
        { headerItems.portfolio && <Link className={styles.link} to={portfolio}> Portfolio</Link> }

        { headerItems.blog && <Link className={styles.link} to={blog}>Blog</Link> }

        { (headerItems.collaborizm && collaborizm) && _link(collaborizm, iconCollaborizm, "Collaborizm") }

        { (headerItems.facebook && facebook) &&  _link(facebook, iconFacebook, "Facebook") }

        { (headerItems.github && github) && _link(github, iconGithub, "GitHub") }

        { (headerItems.linkedin && linkedin) && _link(linkedin, iconLinkedin, "LinkedIn") }

        { (headerItems.npm && npm) && _link(npm, iconNpm, "NPM") }

        { (headerItems.stackoverflow && stackoverflow) && _link(stackoverflow, iconStackOverflow, "Stack Overflow") }

        { (headerItems.twitter && twitter) && _link(twitter, iconTwitter, "Twitter") }
      </div>
    </nav>
  </header>
)

Header.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Header
