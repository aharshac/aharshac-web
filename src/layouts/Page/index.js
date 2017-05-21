import React, { PropTypes } from "react"
import Helmet from "react-helmet"
import warning from "warning"
import { BodyContainer, joinUri, Link } from "phenomic"

import ProgressiveImage from '../../components/ProgressiveImage';
import Button from "../../components/Button"
import Loading from "../../components/Loading"

import styles from "./index.css"

import cover from '../../assets/photos/cover.jpg';
import coverResponsive from '!responsive-loader?sizes[]=50w!../../assets/photos/cover.jpg';

const Page = (
  {
    isLoading,
    __filename,
    __url,
    head,
    body,
    header,
    footer,
    children,
    noHero,
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

  const showHeader = !(head.noHero || noHero);

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

  return (
    <div className={ styles.page }>
      <Helmet
        title={ metaTitle }
        meta={ meta }
      />
        {/*<div
          className={ styles.hero }
          style={ head.hero && {
            background: `#111 url(${ head.hero }) 50% 50% / cover`,
          }}
        >*/}
      { showHeader &&
        <ProgressiveImage
          src={head.hero || cover}
          responsive={head.hero ? undefined : coverResponsive}
          isParallax
          isBlur
          isCover>
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
        </ProgressiveImage>
      }
      <div className={ styles.wrapper + " " + styles.pageContent }>
        {
          isLoading
          ? <Loading />
          :
          <div>
            { header }
            <div className={ styles.body }>
             <BodyContainer>{ body }</BodyContainer>
            </div>
          </div>
        }
        { children }
        { footer }
      </div>
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  __filename: PropTypes.string,
  __url: PropTypes.string,
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
  header: PropTypes.element,
  footer: PropTypes.element,
  noHero: PropTypes.bool,
}

Page.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Page
