import React, { PropTypes } from "react"
import Helmet from "react-helmet"
import warning from "warning"
import { BodyContainer, joinUri } from "phenomic"

import Loading from "../../components/Loading"
import styles from "./index.css"

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

  const meta = [
    { property: "og:type", content: "article" },
    { property: "og:title", content: metaTitle },
    {
      property: "og:url",
      content: joinUri(process.env.PHENOMIC_USER_URL, __url),
    },
    { property: "og:image", content: socialImage },
    { property: "og:description", content: head.description },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: metaTitle },
    { name: "twitter:creator", content: `@${ twitter_id }` },
    { name: "twitter:description", content: head.description },
    { name: "twitter:image", content: socialImage },
    { name: "description", content: head.description },
  ]

  const pageDate = head.date ? new Date(head.date) : null;
  const hero = head.hero ? head.hero : null;

  return (
    <div className={ styles.page }>
      <Helmet title={ metaTitle } meta={ meta } />

      <div className={ styles.wrapper + " " + styles.pageContent }>
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
          {
            isLoading
            ? <Loading /> :
            <BodyContainer>
              { hero &&
                <img src={ hero } alt={ head.title } className={ styles.hero } />
              }
              { body }
            </BodyContainer>
          }
        </div>
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
