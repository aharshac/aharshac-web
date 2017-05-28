import React, { PropTypes } from 'react';
// import Svg from 'react-svg-inline';
import { Link } from "phenomic";
import moment from "moment";

// import Tag from '../Tag';

import ToolIconBar from '../ToolIconBar';
import TagBar from '../TagBar';

import styles from './index.css';

const truncate = (string, n) => {
  if (string.length <= n) return string;
  return string.replace(new RegExp(`^(\.{${n}}[^\\s]*).*`, "i"), "$1 ...");
};

const ProjectPreview = ({ __url, href, title, description, preview, thumbnail, cover, date, date_end,
  github, cizm_path, npm, skills, }) => {

  const img = preview || thumbnail || cover;
  const url = href || __url;

  const durStart = date && moment(date).isValid() ? moment(date).format('MMM YYYY') : null;
  const durEnd = date_end && moment(date_end).isValid() ? moment(date_end).format('MMM YYYY') : null;

  // const skills1 = ["Node.js", "PHP", "JavaScript", "ES6", "Singing", "Dancing", "Drinking"];

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
          <span className={styles.duration} >
            { durStart && <time key={durStart} > {durStart} </time> }
            { (durStart && durEnd) && ' - ' }
            { durEnd && <time key={durEnd} > {durEnd} </time> }
          </span>
        </div>


        <div className={ styles.description }>
          { truncate(description, 140) }
          { " " }
        </div>

        <div className={ styles.footer }>
          <TagBar tags={skills} style={styles.footerSkills} />
          <ToolIconBar collaborizm={cizm_path} github={github} npm={npm} style={styles.footerTools}/>
        </div>
      </div>
    </div>
  );
};

ProjectPreview.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  preview: PropTypes.string,
  thumbnail: PropTypes.string,
  cover: PropTypes.string,
  github: PropTypes.string,
  npm: PropTypes.string,
  href: PropTypes.string,
  cizm_path: PropTypes.string,
  date: PropTypes.string,
  date_end: PropTypes.string,
  skills: PropTypes.array,
};

export default ProjectPreview;
