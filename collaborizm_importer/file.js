import fs from 'fs-extra';
import path from 'path';
import matter from 'gray-matter';

import { removeText } from './util';

const DEBUG = false;

let path_root, path_threads, path_projects;

if (DEBUG) {
  path_root = path.resolve(__dirname, './');
  path_threads = path.resolve(path_root, './czd');
  path_projects = path.resolve(path_root, './czp');
} else {
  path_root = path.resolve(__dirname, '../content/');
  path_threads = path.resolve(path_root, './blog/czd');
  path_projects = path.resolve(path_root, './portfolio/czp');
}


const placeholderProject = id => `cizm_project_${id}`;
const placeholderThread = id => `cizm_thread_${id}`;

const readFileDate = (fileName, filePath) => {
  const file = path.resolve(filePath, `./${fileName}.md`);

  if (!fs.pathExistsSync(file)) return false;

  try {
    const content = matter.read(file);
    if (content && content.data && (content.data.date_modified || content.data.date)) {
      return content.data.date_modified || content.data.date;
    }
    return false;
  } catch (e) {
    return false;
  }
}

const readProjectFileDate = (cizm_project_id) => {
  return readFileDate(placeholderProject(cizm_project_id), path_projects);
}

const readThreadFileDate = (cizm_thread_id) => {
  return readFileDate(placeholderThread(cizm_thread_id), path_threads);
}



const writeFile = (fileName, filePath, object) => {
  if (!object) return false;
  try {
    fs.ensureDirSync(filePath);
    const file = path.resolve(filePath, `./${fileName}.md`);

    const op = matter.stringify(object.text, removeText(object));
    fs.outputFileSync(file, op)
    return true;
  } catch (e) {
    return false;
  }
}

const writeProjectFile = (cizm_project_id, object) => {
  return writeFile(placeholderProject(cizm_project_id), path_projects, object);
}

const writeThreadFile = (cizm_thread_id, object) => {
  return writeFile(placeholderThread(cizm_thread_id), path_threads, object);
}



export { path_threads, path_projects, readProjectFileDate, writeProjectFile, readThreadFileDate, writeThreadFile };
