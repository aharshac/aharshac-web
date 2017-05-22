import async from 'async';

import { collaborizm_id } from '../package.json';
import { getProjects, getThreads } from './src/requests2';
import { path_threads, path_projects, readProjectFileDate, writeProjectFile, readThreadFileDate, writeThreadFile } from './src/file';
import { isCizmDateNewer, prune, stripTitle } from './src/util';


const logNoImport = (id) => {
  console.log(`  - Not importing ${id}`);
}

const logImport = (id) => {
  console.log(`  + Imported ${id}`);
}

const logImportError = (id) => {
  console.log(`  x Error importing ${id}`);
}

const getAltFileName = title => `${stripTitle(prune(title, 40, ""))}`;

const importProjects = (onFinish) => {
  console.log(`  Importing projects to ${path_projects}`);
  getProjects(collaborizm_id, (objects) => {
    if (!objects) return onFinish();
    console.log(`    Got ${objects.length} projects`);

    if (objects.length === 0) return onFinish();

    objects.forEach(object => {
      if (!object) return;

      const { date, date_modified, cizm_project_id, title, } = object;
      // console.log(date + " " + date_modified);
      const dateFile = readProjectFileDate(cizm_project_id);

      const altFileName = getAltFileName(title);

      if (!isCizmDateNewer(dateFile, date_modified || date)) {
        return logNoImport(altFileName);
      }

      const fileName = writeProjectFile(cizm_project_id, title, date_modified || date, object);
      if (fileName) {
        return logImport(fileName);
      }

      return logImportError(altFileName);
    });
    console.log("  Done.\n");

    onFinish(null, objects.length);
  });
}


const importThreads = (onFinish) => {
  console.log(`  Importing posts to ${path_threads}`);
  getThreads(collaborizm_id, (objects) => {
    if (!objects) return onFinish();
    console.log(`    Got ${objects.length} posts`);

    if (objects.length === 0) return onFinish();

    objects.forEach(object => {
      if (!object) return;

      const { date, cizm_thread_id, title } = object;
      const dateFile = readThreadFileDate(cizm_thread_id);

      const altFileName = getAltFileName(title);

      if (!isCizmDateNewer(dateFile, date)) {
        return logNoImport(altFileName);
      }

      const fileName = writeThreadFile(cizm_thread_id, title, date, object);
      if (fileName) {
        return logImport(fileName);
      }

      return logImportError(altFileName);
    });
    console.log("  Done.\n");

    onFinish(null, objects.length);
  });
}

const importAll = () => {
  async.series([
      callback => importProjects(callback),
      callback => importThreads(callback)
    ],
    (error, results) => {
      if (error) {
        console.log("  Error importing projects and posts");
      } else {
        console.log(`  Handled ${results[0]} projects and ${results[1]} posts`);
      }
    }
  );
};


const main = () => {
  console.log("Collaborizm Importer for Phenomic");
  console.log("  By Harsha Alva\n");

  // importProjects(() => {
  //   console.log("  Done.\n");
  //
  //   importThreads(() => {
  //     console.log("  Done.\n");
  //     console.log("Import complete.");
  //   });
  // });
  importAll();
}

// getSingleProject("SyPCCPmx-", collaborizm_id, (error, obj) => {
//   if (!error) console.log(obj);
// });

main();
