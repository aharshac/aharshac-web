import React, { PropTypes } from "react"
import { Link } from "phenomic"
import Svg from "react-svg-inline"

import iconGithub from '../../assets/icons/iconmonstr-github-1.svg';
import iconTwitter from '../../assets/icons/iconmonstr-twitter-1.svg';
import iconStackOverflow from '../../assets/icons/stackoverflow.svg';
import iconFacebook from '../../assets/icons/facebook.svg';
import iconLinkedin from '../../assets/icons/linkedin.svg';
import iconCollaborizm from '../../assets/icons/collaborizm.svg';
import iconNpm from '../../assets/icons/npm.svg';

import styles from "./index.css"

const Header = (props, { metadata: { title, networks: { blog, portfolio, collaborizm,
    facebook, github, linkedin, npm, stackoverflow, twitter }
  , headerItems } }) => (

  <header className={ styles.header }>
    <nav className={ styles.nav }>
      <div className={ styles.navPart1 }>
        <Link
          className={ styles.home }
          to={ "/" }
        >
          { title }
        </Link>
      </div>
      <div className={ styles.navPart2 }>
        { headerItems.portfolio && <Link className={styles.link} to={portfolio}> Portfolio </Link> }

        { headerItems.blog && <Link className={styles.link} to={blog}>Blog</Link> }

        {
          headerItems.collaborizm && collaborizm &&
          <a href={ collaborizm } className={ `${styles.link} hideIfMobile` } >
            <Svg svg={ iconCollaborizm } cleanup />
            <span className="hideIfMobile">Collaborizm</span>
          </a>
        }
        {
          headerItems.facebook && facebook &&
          <a href={ facebook } className={ `${styles.link} hideIfMobile` } >
            <Svg svg={ iconFacebook } cleanup />
            <span className="hideIfMobile">Facebook</span>
          </a>
        }
        {
          headerItems.github && github &&
          <a href={ github } className={ `${styles.link} hideIfMobile` } >
            <Svg svg={ iconGithub } cleanup />
            <span className="hideIfMobile">GitHub</span>
          </a>
        }
        {
          headerItems.linkedin && linkedin &&
          <a href={ linkedin } className={ `${styles.link} hideIfMobile` } >
            <Svg svg={ iconLinkedin } cleanup />
            <span className="hideIfMobile">LinkedIn</span>
          </a>
        }
        {
          headerItems.npm && npm &&
          <a href={ npm } className={ `${styles.link} hideIfMobile` } >
            <Svg svg={ iconNpm } cleanup />
            <span className="hideIfMobile">NPM</span>
          </a>
        }
        {
          headerItems.stackoverflow && stackoverflow &&
          <a href={ stackoverflow } className={ `${styles.link} hideIfMobile` } >
            <Svg svg={ iconStackOverflow } cleanup />
            <span className="hideIfMobile">Stack Overflow</span>
          </a>
        }
        {
          headerItems.twitter && twitter &&
          <a  href={ twitter }  className={ `${styles.link} hideIfMobile` } >
            <Svg svg={ iconTwitter } cleanup />
            <span className="hideIfMobile">Twitter</span>
          </a>
        }
      </div>
    </nav>
  </header>
)

Header.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Header
