import React from "react"

import Emoji from '../Emoji';
import LinkExt from '../LinkExt';

import styles from "./index.css"


const Footer = () => (
  <footer className={ styles.footer }>
    { /* If you like Phenomic, this is a way to share the love ;) */ }
    <p>
      Made with <Emoji text="heart" /> and
      <LinkExt to={ process.env.PHENOMIC_HOMEPAGE } className={ styles.phenomicReferenceName } rel="noreferrer noopener">
          {  `<${ process.env.PHENOMIC_NAME} />` }
      </LinkExt>.

      Theme inspired from
      <LinkExt to="https://kaihao.info/" className={ styles.phenomicReferenceName } rel="noreferrer noopener">
        Kai Hao
      </LinkExt>.
    </p>
  </footer>
)

export default Footer
