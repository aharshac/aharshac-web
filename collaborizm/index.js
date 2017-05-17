import moment from 'moment';

import { collaborizm_id } from '../package.json';
import { getThreads } from './requests';
import { readThreadFileDate, writeThreadFile } from './file';

getThreads(collaborizm_id, (objects) => {
  objects.forEach(object => {
    const { date, id } = object;
    const oldDate = moment(readThreadFileDate(id));
    const newDate = moment(date);

    if(oldDate.isValid() && newDate.isValid && oldDate.isSameOrBefore(newDate)) return;

    writeThreadFile(id, object);
  });
});

// getSingleThread("r1e3pXUde", (body) => {
//   console.log(body);
// });
