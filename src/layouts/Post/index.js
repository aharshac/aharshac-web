import React, { PropTypes } from "react"
import Helmet from "react-helmet"
import warning from "warning"
import { BodyContainer, joinUri, Link } from "phenomic"

import Loading from "../../components/Loading"
import Category from "../../components/Category"
import styles from "./index.css"

import "../../styles/content.md.css"
import "../../styles/table.md.css"

const Post = (
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

  const pageDate = head.date ? new Date(head.date) : null;
  const hero = head.hero ? head.hero : null;

  return (
    <div className={ styles.page }>
      <Helmet title={ metaTitle } meta={ meta } />

      <div className={ styles.wrapper + " " + styles.pageContent }>
        {
          isLoading
          ? <Loading /> :

          <div className={ styles.body }>
            <div className={ styles.header }>
              <h2 className={ styles.heading }>{ head.title }</h2>
              {
                pageDate &&
                <time className={styles.date} key={pageDate.toISOString()}>
                  { pageDate.toDateString() }
                </time>
              }
            </div>

            <BodyContainer>
              <div>
                {
                  cizm_path &&
                  <div>

                    <div className={ styles.cizmLink }>
                      This post is auto-generated from a thread hosted on
                      <Link to="https://www.collaborizm.com/" className={ styles.readMore + " " + styles.collaborizm } target="_blank" rel="noopener">
                        Collaborizm.com
                      </Link>
                    </div>

                    {
                      category &&
                      <Category text={category} />
                    }

                    {/* <div className={ styles.cizmExcerpt }> {description} </div> */}

                  </div>
                }
                {
                  hero &&
                  <img src={ hero } alt={ head.title } className={ styles.hero } />
                }
                { body }
                {
                  cizm_path &&
                  <div className={ styles.cizmLink + " " + styles.cizmThread }>
                    <hr className={ styles.cizmSeparator} />
                    Join the conversation at
                    <Link to={ cizm_path } className={ styles.readMore } target="_blank" rel="noopener">
                      { cizm_path }
                    </Link>
                  </div>
                }
              </div>
            </BodyContainer>
          </div>
        }
      </div>

    </div>
  )
}

Post.propTypes = {
  isLoading: PropTypes.bool,
  __filename: PropTypes.string,
  __url: PropTypes.string,
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
}

Post.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Post
