import React, { PropTypes } from "react"
import Helmet from "react-helmet"
import warning from "warning"
import { BodyContainer, joinUri, Link } from "phenomic"
import moment from "moment";

import Loading from "../../components/Loading"
import Category from "../../components/Category"
import Button from "../../components/Button"
import ToolIconBar from '../../components/ToolIconBar';
import TagBar from '../../components/TagBar';
import styles from "./index.css"

import "../../styles/content.md.css"
import "../../styles/table.md.css"

const Project = (
  {
    isLoading,
    __filename,
    __url,
    head,
    body,
  },
  {
    metadata: { networks: { twitter_id } },
  }
) => {
  warning(
    typeof head.title === "string",
    `Your page '${ __filename }' needs a title`
  )

  const metaTitle = head.metaTitle ? head.metaTitle : head.title

  const socialImage = head.hero && head.hero.match("://") ? head.hero
    : joinUri(process.env.PHENOMIC_USER_URL, head.hero)

  const description = head.description;

  const meta = [
    { property: "og:type", content: "article" },
    { property: "og:title", content: metaTitle },
    { property: "og:url", content: joinUri(process.env.PHENOMIC_USER_URL, __url), },
    { property: "og:image", content: socialImage },
    { property: "og:description", content: description },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: metaTitle },
    { name: "twitter:creator", content: `@${ twitter_id }` },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: socialImage },
    { name: "description", content: description },
  ]



  const { cizm_path, published, cta, category, cover, hero, date_end, date, skills, github, npm } = head;


  const project_path = (cizm_path && published) ? cizm_path : null;
  const cta_title = project_path ? 'Join Project' : null;

  const durStart = date && moment(date).isValid() ? moment(date).format('MMM YYYY') : null;
  const durEnd = date_end && moment(date_end).isValid() ? moment(date_end).format('MMM YYYY') : null;

  return (
    <div className={ styles.page }>
      <Helmet title={ metaTitle } meta={ meta } />

      <div
        className={ styles.hero }
        style={ cover && {
          background: `url(${ cover || hero }) 50% 50% / cover`,
        }}
      >
        <div className={ styles.header }>
          <div className={ styles.wrapper }>
            <h1 className={ styles.heading }>{ head.title }</h1>
            { description && <h2 className={ styles.description }>{ description }</h2> }
            {
              (cta_title || (cta && cta.link && cta.label)) &&
              <Link to={ project_path || cta.link } target="_blank" rel="noopener">
                <Button className={ styles.cta }>
                  { cta_title || cta.label }
                </Button>
              </Link>
            }
          </div>
        </div>
      </div>

      <div className={ styles.wrapper + " " + styles.pageContent }>
        {
          isLoading ?
          <Loading /> :

          <div className={ styles.body }>
            {
              cizm_path &&
              <div className={ styles.meta }>
                <span className={styles.duration} >
                  { durStart && <time key={durStart} > {durStart} </time> }
                  { (durStart && durEnd) && ' - ' }
                  { durEnd && <time key={durEnd} > {durEnd} </time> }
                </span>
                { skills && <TagBar tags={skills} style={styles.skills} /> }
                { <ToolIconBar style={styles.toolbar} collaborizm={cizm_path} github={github} npm={npm} width="1.4em" /> }
              </div>
            }

            {
              cizm_path &&
              <div>
                { category && <Category text={category} /> }

                <div className={ styles.cizmLink }>
                  This project is hosted on
                  <Link to="https://www.collaborizm.com/" className={ styles.readMore + " " + styles.collaborizm } target="_blank" rel="noopener">
                    Collaborizm.com
                  </Link>
                </div>
              </div>
            }

            <BodyContainer>
                { body }
            </BodyContainer>

            {
              cizm_path &&
              <div className={ styles.cizmLink + " " + styles.cizmThread }>
                <hr className={ styles.cizmSeparator} />
                Join the project at
                <Link to={ cizm_path } className={ styles.readMore } target="_blank" rel="noopener">
                  { cizm_path }
                </Link>
              </div>
            }
          </div>
        }
      </div>
    </div>
  )
}

Project.propTypes = {
  isLoading: PropTypes.bool,
  __filename: PropTypes.string,
  __url: PropTypes.string,
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
}

Project.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Project
