import React, { PropTypes } from "react"
import Helmet from "react-helmet"
import { joinUri, } from "phenomic"


const PageHead = ({ title, metaTitle, hero, url, description, twitter }) => {

  const headTitle = metaTitle ? metaTitle : title
  const socialImage = hero && hero.match("://") ? hero : joinUri(process.env.PHENOMIC_USER_URL, hero);

  const meta = [
    { property: "og:type", content: "article" },
    { property: "og:title", content: headTitle },
    { property: "og:url", content: joinUri(process.env.PHENOMIC_USER_URL, url), },
    { property: "og:image", content: socialImage },
    { property: "og:description", content: description },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: headTitle },
    { name: "twitter:creator", content: `@${ twitter }` },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: socialImage },
    { name: "description", content: description },
  ];

  return <Helmet title={ headTitle } meta={ meta } />;
}

PageHead.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  metaTitle: PropTypes.string,
  hero: PropTypes.string,
  description: PropTypes.string,
  twitter: PropTypes.string,
}

export default PageHead;
