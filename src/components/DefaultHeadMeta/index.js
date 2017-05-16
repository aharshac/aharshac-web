import React, { PropTypes } from "react"
import Helmet from "react-helmet"

import { favicon16, favicon32, appleTouch, msTile, android192, android512 } from '../../assets/favicon';

const DefaultHeadMeta = (props, { metadata: { title, networks: { twitter_id } } }) => (
  <div hidden>
    <Helmet
      meta={ [
        {
          name: "generator", content: `${
          process.env.PHENOMIC_NAME } ${ process.env.PHENOMIC_VERSION }`,
        },
        { property: "og:site_name", content: title },
        { name: "twitter:site", content: `@${ twitter_id }` },
        ...props.meta ? props.meta : [],
      ] }
      script={ [
        { src: "https://cdn.polyfill.io/v2/polyfill.min.js" +
        "?features=es6&flags=gated" },
        ...props.scripts ? props.scripts : [],
      ] }
    />

    { /* meta viewport safari/chrome/edge */ }
    <Helmet
      meta={ [ {
        name: "viewport", content: "width=device-width, initial-scale=1",
      } ] }
    />

  { /* favicons */ }
    <Helmet
      link={ [
        { rel: "icon", type: "image/png", sizes: "16x16", href: favicon16 },
        { rel: "icon", type: "image/png", sizes: "32x32", href: favicon32 },
        { rel: "icon", type: "image/png", sizes: "192x192", href: android192 },
        { rel: "icon", type: "image/png", sizes: "512x512", href: android512 },
        { rel: "apple-touch-icon", sizes: "180x180", href: appleTouch },
      ] }
      meta={ [
        { name: "msapplication-TileImage", content: msTile }
      ] }
    />

    <style>{ "@-ms-viewport { width: device-width; }" }</style>
  </div>
)

DefaultHeadMeta.propTypes = {
  meta: React.PropTypes.arrayOf(React.PropTypes.object),
  scripts: React.PropTypes.arrayOf(React.PropTypes.object),
}

DefaultHeadMeta.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default DefaultHeadMeta
