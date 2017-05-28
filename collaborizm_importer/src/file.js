import fs from 'fs-extra';
import path from 'path';
import matter from 'gray-matter';
import low from 'lowdb';
import moment from 'moment';

import { removeText, prune, stripTitle } from './util';

const path_root = path.resolve(__dirname, '../');
const path_db = path.resolve(path_root, './db.json');
const path_threads = path.resolve(path_root, './collaborizm_posts');
const path_projects = path.resolve(path_root, './collaborizm_projects');


// const placeholderProject = id => `cizm_project_${id}`;
// const placeholderThread = id => `cizm_thread_${id}`;
const getFileName = (title, date) => `${stripTitle(prune(title, 40, ""))}__${moment(date).format('DD-MM-YYYY')}`;

const readDateFromDb = (object_id, id) => {
  // const file = path.resolve(filePath, `./${fileName}.md`);
  //
  // if (!fs.pathExistsSync(file)) return false;
  //
  // try {
  //   const content = matter.read(file);
  //   if (content && content.data && (content.data.date_modified || content.data.date)) {
  //     return content.data.date_modified || content.data.date;
  //   }
  //   return false;
  // } catch (e) {
  //   return false;
  // }

  const db = low(path_db);
  // db.defaults(db_defaults).write();
  const object = db.get(object_id).value();
  const value = object && object[id] ? object[id] : false;
  return value;
}

const writeDateToDb = (object_id, id, date) => {
  const db = low(path_db);
  // db.defaults(db_defaults).write();
  db.set(`${object_id}.${id}`, date).write();
};

const readProjectFileDate = (cizm_project_id) => {
  return readDateFromDb("projects", cizm_project_id);
}

const readThreadFileDate = (cizm_thread_id) => {
  return readDateFromDb("posts", cizm_thread_id);
}

const writeProjectFileDate = (cizm_project_id, date) => {
  return writeDateToDb("projects", cizm_project_id, date);
}

const writeThreadFileDate = (cizm_thread_id, date) => {
  return writeDateToDb("posts", cizm_thread_id, date);
}


const writeFile = (id, date, fileName, filePath, object, funcDb) => {
  if (!object) return false;
  try {
    fs.ensureDirSync(filePath);
    const file = path.resolve(filePath, `./${fileName}.md`);

    const op = matter.stringify(object.text, removeText(object));
    fs.outputFileSync(file, op);

    if (funcDb) funcDb(id, date);
    return fileName;
  } catch (e) {
    return false;
  }
}

const writeProjectFile = (cizm_project_id, title, date, object) => {
  return writeFile(cizm_project_id, date, getFileName(title, date), path_projects, object, writeProjectFileDate);
}

const writeThreadFile = (cizm_thread_id, title, date, object) => {
  return writeFile(cizm_thread_id, date, getFileName(title, date), path_threads, object, writeThreadFileDate);
}



export { path_threads, path_projects, readProjectFileDate, writeProjectFile, readThreadFileDate, writeThreadFile };
