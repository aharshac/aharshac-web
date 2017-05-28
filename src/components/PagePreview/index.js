import React, { PropTypes } from "react"
import { Link } from "phenomic"

import Button from "../../components/Button"
import Category from "../../components/Category"

import styles from "./index.css"

const PagePreview = ({ __url, title, date, description, category, preview, thumbnail, cover, hero }) => {
  const pageDate = date ? new Date(date) : null
  const url = __url;
  const img = preview || thumbnail || cover || hero;

  return (
    <div className={ styles.wrapper }>
      {
        img !== undefined &&
        <Link to={url} className={styles.imgLink}>
          <div className={ styles.imgBlur } style={ img && { background: `url(${img}) 50% 50% / cover` } } />
          <img className={ styles.imgThumb } src={img} alt={title} />
        </Link>
      }

      <div className={styles.content}>
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

        <div className={ styles.footerBar }>
          <Link to={ url} className={ styles.readMore }>
            <Button className={ styles.readMoreButton } > More → </Button>
          </Link>
          { category && <div className={ styles.category } ><Category text={category} /></div> }
        </div>
      </div>
    </div>
  )
}

PagePreview.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  description: PropTypes.string,
  cizm_path: PropTypes.string,
  category: PropTypes.string,
  preview: PropTypes.string,
  thumbnail: PropTypes.string,
  cover: PropTypes.string,
  hero: PropTypes.string,
}

export default PagePreview
