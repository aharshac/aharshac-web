import React, { PropTypes } from "react"
import warning from "warning"
import { BodyContainer, Link } from "phenomic"

import ProgressiveImage from '../../components/ProgressiveImage';
import Button from "../../components/Button"
import Loading from "../../components/Loading"
import PageHead from "../../components/PageHead"

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

  const { metaTitle, title, description, hero } = head;

  const showHeader = !(head.noHero || noHero);


  return (
    <div className={ styles.page }>
      <PageHead title={title} metaTitle={metaTitle} hero={hero} url={__url} description={description} twitter={twitter_id} />
      {/*<div
        className={ styles.hero }
        style={ head.hero && {
          background: `#111 url(${ head.hero }) 50% 50% / cover`,
        }}
      >*/}
      
      {
        showHeader &&
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
              { children }
             <BodyContainer>{ body }</BodyContainer>
            </div>
          </div>
        }
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
