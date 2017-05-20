import { collaborizm_id } from '../package.json';
import { getProjects, getThreads } from './requests2';
import { path_threads, path_projects, readProjectFileDate, writeProjectFile, readThreadFileDate, writeThreadFile } from './file';
import { isCizmDateNewer } from './util';


const logNoImport = (id) => {
  console.log(`  - Not importing ${id}`);
}

const logImport = (id) => {
  console.log(`  + Imported ${id}`);
}

const logImportError = (id) => {
  console.log(`  x Error importing ${id}`);
}

const importProjects = (onFinish) => {
  console.log(`  Importing projects to ${path_projects} ...`);
  getProjects(collaborizm_id, (objects) => {
    if (!objects) return onFinish();
    console.log(`    Got ${objects.length} projects`);

    if (objects.length === 0) return onFinish();

    objects.forEach(object => {
      if (!object) return;

      const { date, date_modified, cizm_project_id } = object;
      // console.log(date + " " + date_modified);
      const dateFile = readProjectFileDate(cizm_project_id);

      if (!isCizmDateNewer(dateFile, date_modified || date)) {
        return logNoImport(cizm_project_id);
      }

      if (writeProjectFile(cizm_project_id, object)) {
        return logImport(cizm_project_id);
      }

      return logImportError(cizm_project_id);
    });

    onFinish();
  });
}


const importThreads = (onFinish) => {
  console.log(`  Importing posts to ${path_threads} ...`);
  getThreads(collaborizm_id, (objects) => {
    if (!objects) return onFinish();
    console.log(`    Got ${objects.length} posts`);

    if (objects.length === 0) return onFinish();

    objects.forEach(object => {
      if (!object) return;

      const { date, cizm_thread_id } = object;
      const dateFile = readThreadFileDate(cizm_thread_id);

      if (!isCizmDateNewer(dateFile, date)) {
        return logNoImport(cizm_thread_id);
      }

      if (writeThreadFile(cizm_thread_id, object)) {
        return logImport(cizm_thread_id);
      }

      return logImportError(cizm_thread_id);
    });

    onFinish();
  });
}


const main = () => {
  console.log("Collaborizm Importer for Phenomic");
  console.log("  By Harsha Alva\n");

  importProjects(() => {
    console.log("  Done.\n");

    importThreads(() => {
      console.log("  Done.\n");
      console.log("Import complete.");
    });
  });
}

// getSingleProject("SyPCCPmx-", collaborizm_id, (error, obj) => {
//   if (!error) console.log(obj);
// });

main();
