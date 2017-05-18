import fs from 'fs-extra';
import path from 'path';
import matter from 'gray-matter';

// const path_root = path.resolve(__dirname, './');
const path_root = path.resolve(__dirname, '../content/blog');
const path_threads = `${path_root}/czd`;

const readThreadFileDate = (cizm_thread_id) => {
  const filePath = `${path_threads}/${cizm_thread_id}.md`;

  if (!fs.pathExistsSync(filePath)) return false;

  try {
    // const file = fs.readJsonSync(filePath);
    // return file.date;
    const file = matter.read(filePath);
    // console.log(file.data);
    if (file && file.data && file.data.date) {
      return file.data.date;
    }
    return false;
  } catch (e) {
    return false;
  }
}

const writeThreadFile = (cizm_thread_id, object) => {
  const filePath = `${path_threads}/${cizm_thread_id}.md`;
  try {
    fs.ensureDirSync(path_threads);
    // fs.outputJsonSync(filePath, object);
    const { cizm_thread_id, cizm_path, category, date, description, title, route, layout, text } = object;
    const op = matter.stringify(text, { cizm_thread_id, cizm_path, category, date, title, route, layout, description });
    fs.outputFileSync(filePath, op)
    return true;
  } catch (e) {
    return false;
  }
}

export { path_threads, readThreadFileDate, writeThreadFile };
