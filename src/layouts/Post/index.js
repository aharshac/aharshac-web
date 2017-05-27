import React, { PropTypes } from "react"
import warning from "warning"
import { BodyContainer, Link } from "phenomic"

import Loading from "../../components/Loading"
import Category from "../../components/Category"
import PageHead from "../../components/PageHead"

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


  const { cizm_path, category, description, title, metaTitle, date, hero } = head;

  const pageDate = date ? new Date(date) : null;

  return (
    <div className={ styles.page }>
      <PageHead title={title} metaTitle={metaTitle} hero={hero} url={__url} description={description} twitter={twitter_id} />

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

            <BodyContainer>
                { body }
            </BodyContainer>

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
