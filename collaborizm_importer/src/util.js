// import remark from "remark"
import moment from 'moment';
import stripMd from "remove-markdown";
// import prune from './prune';

const getDescription = (text) => {
  if (!text) return '';
  return prune(stripMd(text.trim()), 140, "…");
}

const prune = (s: string, maxLength: number, end: string = "…"): string => {
  const trimmed = s.substr(0, maxLength)

  if (trimmed === s) {
    return s
  }

  return (
    trimmed.substr(
      0,
      Math.min(trimmed.length, trimmed.lastIndexOf(" "))
    )
    + end
  )
};

const stripTitle = (title) => {
  return title
    .replace(/\s\s+/g, ' ') // replace multiple
    .trim()
    .replace(/[^\w\s\-]+/g, '')
    .replace(/[\s]+/g, '-')
    .toLowerCase();
};

const formatThread = (thread, collaborizm_id) => {
  if (!thread) return false;
  const { category, createdOn, text, title, item, itemType, type, id } = thread;

  if ( !category || !createdOn || !text || !title || !item || !itemType || !type || !id ) return;
  if (item !== collaborizm_id || itemType !== "user" || type !== "discussion") return false;

  const stripped_title = stripTitle(title);
  const route = stripped_title ? `blog/${stripped_title}.md` : null;
  return {
    cizm_thread_id: id,
    cizm_path: `https://www.collaborizm.com/thread/${id}`,
    category,
    date: createdOn,
    description: getDescription(text),
    title: title.trim(),
    stripped_title,
    text,
    route,
    layout: 'Post',
  }
};

//  about_text, created_on, headline, id, is_public, leader_id, modifiied_on, name, photo_profile.public_id, photo_cover.public_id, summary
const formatProject = (project, collaborizm_id) => {
  if (!project) return false;
  const { about_text, created_on, headline, id, is_public, leader_id, leaderCached, modified_on, name, photo_profile, photo_cover, summary } = project;

  if (!(about_text && created_on && headline && id  && leader_id && modified_on
    && name && photo_profile && photo_cover) ) return; // && summary && is_public

  let assoc_id = '', assoc_name = '';
  if (leader_id !== collaborizm_id && leaderCached) {
    if (!leaderCached.id || !leaderCached.first_name) return;
    assoc_id = leaderCached.id;
    assoc_name = leaderCached.first_name + " " + leaderCached.last_name;
  }

  const stripped_title = stripTitle(name);
  const route = stripped_title ? `portfolio/${stripped_title}.md` : null;
  return {
    cizm_project_id: id,
    cizm_path: `https://www.collaborizm.com/project/${id}`,
    date: created_on,
    date_modified: modified_on,
    summary: summary ? summary.trim() : '',
    description: headline.trim(),
    title: name.trim(),
    stripped_title,
    text: about_text,
    route,
    published: is_public,
    cover: photo_cover.public_id,
    thumbnail: photo_profile.public_id,
    assoc_id,
    assoc_name,
    layout: 'Project',
  }
};


const removeText = (obj) => {
  if (!obj) return false;
  var copy = Object.assign({}, obj)
  delete copy.text;
  return copy;
};

// return true if  dates are invalid, or if dateCizm is after dateFile
const isCizmDateNewer = (dateFile, dateCizm) => {
  if (!dateFile || !dateCizm) return true;

  const momentFile = moment(dateFile);
  const momentCizm = moment(dateCizm);

  if (!(momentFile.isValid() && momentCizm.isValid)) return true;
  return momentCizm.isAfter(momentFile);
};

export { formatThread, formatProject, removeText, isCizmDateNewer, prune, stripTitle };
