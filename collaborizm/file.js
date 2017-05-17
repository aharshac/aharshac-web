import fs from 'fs-extra';

const root = '.';
const threads = `${root}/czd`;

const readThreadFileDate = (thread_id) => {
  const filePath = `${threads}/${thread_id}.czd`;

  if (!fs.pathExistsSync(filePath)) return false;

  try {
    const file = fs.readJsonSync(filePath);
    return file.date;
  } catch (e) {
    return false;
  }
}

const writeThreadFile = (thread_id, object) => {
  const filePath = `${threads}/${thread_id}.czd`;
  try {
    fs.ensureDirSync(threads);
    fs.outputJsonSync(filePath, object);
    return true;
  } catch (e) {
    return false;
  }
}

export { readThreadFileDate, writeThreadFile };
