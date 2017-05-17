import React, { PropTypes } from "react"
import { Link } from "phenomic"

import Button from "../../components/Button"

import styles from "./index.css"

const PagePreview = ({ __url, title, date, description }) => {
  const pageDate = date ? new Date(date) : null
  const url = __url;

  return (
    <div className={ styles.wrapper }>
      <Link to={ url } className={ styles.title }>
        { title }
      </Link>
      <div className={ styles.meta }>
        {
          pageDate &&
            <time key={ pageDate.toISOString() }>
              { pageDate.toDateString() }
            </time>
        }
      </div>
      <div className={ styles.description }>
        { description }
        { " " }
      </div>
      <Link to={ url} className={ styles.readMore }>
        <Button primary>{ "Read More →" }</Button>
      </Link>
    </div>
  )
}

PagePreview.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  description: PropTypes.string,
  cizm_path: PropTypes.string,
}

export default PagePreview
