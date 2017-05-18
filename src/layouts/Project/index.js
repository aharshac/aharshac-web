import React, { PropTypes } from "react"
import Helmet from "react-helmet"
import warning from "warning"
import { BodyContainer, joinUri, Link } from "phenomic"

import Loading from "../../components/Loading"
import Category from "../../components/Category"
import Button from "../../components/Button"
import styles from "./index.css"

import "../../styles/content.css"
import "../../styles/table.css"

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

  const cizm_path = head.cizm_path;
  const category = head.category;
  const description = head.description;

  const meta = [
    { property: "og:type", content: "article" },
    { property: "og:title", content: metaTitle },
    {
      property: "og:url",
      content: joinUri(process.env.PHENOMIC_USER_URL, __url),
    },
    { property: "og:image", content: socialImage },
    { property: "og:description", content: description },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: metaTitle },
    { name: "twitter:creator", content: `@${ twitter_id }` },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: socialImage },
    { name: "description", content: description },
  ]

  return (
    <div className={ styles.page }>
      <Helmet title={ metaTitle } meta={ meta } />

      <div
        className={ styles.hero }
        style={ head.hero && {
          background: `#111 url(${ head.hero }) 50% 50% / cover`,
        }}
      >
        <div className={ styles.header }>
          <div className={ styles.wrapper }>
            <h1 className={ styles.heading }>{ head.title }</h1>
            {
              head.cta &&
              <Link to={ head.cta.link }>
                <Button className={ styles.cta } light { ...head.cta.props }>
                  { head.cta.label }
                </Button>
              </Link>
            }
          </div>
        </div>
      </div>

      <div className={ styles.wrapper + " " + styles.pageContent }>
        <div className={ styles.body }>
          {
            isLoading
            ? <Loading /> :
            <BodyContainer>
              {
                cizm_path &&
                <div>
                  { category && <Category text={category} /> }

                  <div className={ styles.cizmLink }>
                    This post is auto-generated from a thread hosted on
                    <Link to="https://www.collaborizm.com/" className={ styles.readMore + " " + styles.collaborizm }>
                      Collaborizm.com
                    </Link>
                  </div>
                </div>
              }

              { body }

              {
                cizm_path &&
                <div className={ styles.cizmLink + " " + styles.cizmThread }>
                  <hr className={ styles.cizmSeparator} />
                  Join the conversation at
                  <Link to={ cizm_path } className={ styles.readMore }>
                    { cizm_path }
                  </Link>
                </div>
              }
            </BodyContainer>
          }
        </div>
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
