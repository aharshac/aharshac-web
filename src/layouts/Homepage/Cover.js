import React from 'react';

import ProgressiveImage from '../../components/ProgressiveImage';
import IconLink from '../../components/IconLink';

import cover from '../../assets/photos/cover2.jpg';
import coverResponsive from '!responsive-loader?sizes[]=50w!../../assets/photos/cover.jpg';

import iconGithub from '../../assets/icons/iconmonstr-github-1.svg';
import iconTwitter from '../../assets/icons/iconmonstr-twitter-1.svg';
import iconStackOverflow from '../../assets/icons/stackoverflow.svg';
import iconFacebook from '../../assets/icons/facebook.svg';
import iconLinkedin from '../../assets/icons/linkedin.svg';
import iconCollaborizm from '../../assets/icons/collaborizm.svg';
import iconNpm from '../../assets/icons/npm.svg';

import metadata from '../../metadata';

import styles from './index.css';

const { avatar, networks: { collaborizm, facebook, github, linkedin, npm, stackoverflow, twitter }, coverItems } = metadata;

const Cover = () => (
  <ProgressiveImage
    src={cover}
    responsive={coverResponsive}
    isParallax
    isBlur
    isCover
    >
    <div className={styles.cover}>
      <img className={styles.avatar} src={avatar} alt="Harsha Alva"/>
      <div className={styles.text} title="Mechanical Engineer + Software Developer"> ME + SFTDEV </div>
      <div className={styles.buttonGroup}>
        { coverItems.collaborizm && <IconLink href={collaborizm} icon={iconCollaborizm}> Collaborizm </IconLink> }
        { coverItems.facebook &&  <IconLink href={facebook} icon={iconFacebook}>Facebook</IconLink> }
        { coverItems.github &&  <IconLink href={github} icon={iconGithub}> GitHub </IconLink> }
        { coverItems.linkedin &&  <IconLink href={linkedin} icon={iconLinkedin}>LinkedIn</IconLink> }
        { coverItems.npm &&  <IconLink href={npm} icon={iconNpm}>npm</IconLink> }
        { coverItems.stackoverflow &&  <IconLink href={stackoverflow} icon={iconStackOverflow}>Stack Overflow</IconLink> }
        { coverItems.twitter &&  <IconLink href={twitter} icon={iconTwitter}>Twitter</IconLink> }
      </div>
    </div>
  </ProgressiveImage>
);

export default Cover;
