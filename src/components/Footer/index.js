import React from "react"

import Emoji from '../Emoji';

import styles from "./index.css"


const Footer = () => (
  <footer className={ styles.footer }>
    { /* If you like Phenomic, this is a way to share the love ;) */ }
    <p>
      Made with <Emoji text="heart" /> and
      <a href={ process.env.PHENOMIC_HOMEPAGE } className={ styles.phenomicReferenceName } target="_blank" rel="noreferrer noopener">
          {  `<${ process.env.PHENOMIC_NAME} />` }
      </a>.

      Theme inspired from <a href="https://kaihao.info/" className={ styles.phenomicReferenceName } target="_blank" rel="noreferrer noopener">
      Kai Hao</a>.
    </p>
  </footer>
)

export default Footer
