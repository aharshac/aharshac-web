import React, { PropTypes } from 'react';
import Svg from 'react-svg-inline';

import Tag from '../Tag';
import { Link } from "phenomic"

import iconGithub from '../../assets/icons/iconmonstr-github-1.svg';
import iconSvg from '../../assets/icons/npm.svg';
import iconCollaborizm from '../../assets/icons/collaborizm.svg';

import styles from './index.css';

const ProjectPreview = ({ __url, href, repo, npm, title, description, preview, cover, skills, cizm_path }) => {
  const img = preview || cover;
  const url = href || __url;

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


        <div className={ styles.description }>
          { description }
          { " " }
        </div>

        <div className={ styles.footer }>
          <ul className={styles.skills}>
            {skills.map((skill, i) => <Tag key={i} text={skill} /> )}
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
  cover: PropTypes.string,
  repo: PropTypes.string,
  npm: PropTypes.string,
  href: PropTypes.string,
  cizm_path: PropTypes.string,
  skills: PropTypes.array,
};

export default ProjectPreview;
