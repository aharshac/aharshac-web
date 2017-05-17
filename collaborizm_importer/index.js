import moment from 'moment';

import { collaborizm_id } from '../package.json';
import { getThreads } from './requests';
import { path_threads, readThreadFileDate, writeThreadFile } from './file';


console.log("Collaborizm Importer for Phenomic");
console.log("  By Harsha Alva\n");

console.log(`  Importing threads to ${path_threads} ...`);
getThreads(collaborizm_id, (objects) => {
  console.log(`    Got ${objects.length} threads`);

  if (objects.length === 0) return;

  objects.forEach(object => {
    const { date, cizm_thread_id } = object;
    const oldDate = readThreadFileDate(cizm_thread_id);

    if (oldDate) {
      const momentOld = moment(oldDate);
      const momentNew = moment(date);

      if(momentOld.isValid() && momentNew.isValid && momentOld.isSameOrBefore(momentNew)){
        console.log(`    Not importing ${cizm_thread_id}`);
        return;
      }
    }

    writeThreadFile(cizm_thread_id, object);
    console.log(`    Imported ${cizm_thread_id}`);
  });
  console.log("  Done.");
});

// getSingleThread("r1e3pXUde", (body) => {
//   console.log(body);
// });
