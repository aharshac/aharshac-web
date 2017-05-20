import React, { PropTypes } from 'react';
// import Svg from 'react-svg-inline';
import { Link } from "phenomic";
import moment from "moment";

// import Tag from '../Tag';

import ToolIconBar from '../ToolIconBar';
import SkillBar from '../SkillBar';

import styles from './index.css';

String.prototype.trunc = (n, useWordBoundary ) => {
  if (this.length <= n) { return this; }
  var subString = this.substr(0, n-1);
  return (useWordBoundary
    ? subString.substr(0, subString.lastIndexOf(' '))
    : subString) + "&hellip";
};

const ProjectPreview = ({ __url, href, github, npm, title, description, preview, thumbnail, cover, skills, cizm_path, date, date_end }) => {
  const img = preview || thumbnail || cover;
  const url = href || __url;

  const durStart = date && moment(date).isValid() ? moment(date).format('MMM YYYY') : null;
  const durEnd = date_end && moment(date_end).isValid() ? moment(date_end).format('MMM YYYY') : null;


  return (
    <div className={ styles.wrapper }>
      {
        img !== undefined &&
        <Link to={url} target="_blank" rel="noopener noreferrer">
          <div className={styles.imgHolder} >
            <img src={img} alt={title} />
          </div>
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
          { description.trunc(90, true) }
          { " " }
        </div>

        <div className={ styles.footer }>
          {/*}
          <ul className={styles.skills}>
            { skills && skills.map((skill, i) => <Tag key={i} text={skill} />) }
          </ul>

          <ul className={styles.icons}>
            {
              npm &&
              <Link to={ npm } className={styles.icon} target="_blank" rel="noopener noreferrer">
                <Svg svg={iconSvg}/>
              </Link>
            }
            {
              repo &&
              <Link to={ repo } className={styles.icon} target="_blank" rel="noopener noreferrer">
                <Svg svg={iconGithub} cleanup/>
              </Link>
            }
            {
              cizm_path &&
              <Link to={ cizm_path } className={styles.icon} target="_blank" rel="noopener noreferrer">
                <Svg svg={iconCollaborizm} cleanup/>
              </Link>
            }
          </ul>
          */}
          <SkillBar skills={skills} />
          <ToolIconBar collaborizm={cizm_path} github={github} npm={npm} />
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
