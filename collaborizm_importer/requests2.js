import async from 'async';
import request from 'request';
import { formatThread, formatProject } from './util';

/*
  Check Collaborizm public API docs at
  https://docs.google.com/document/d/1kOYDe4qggh6h9wU9krsM-JeV8ai9nxuBx2bzF9AuTjA
*/


const getThreads = (collaborizm_id, callback, max_pages = 50) => {
  const LAST_REQUEST = 'LAST_REQUEST';

  const fetch = (page, onFinish) => {
    const url = `https://v2api.collaborizm.com/v2/discuss/list?item=${collaborizm_id}&page=${page}`;
    request.get(url, (error, response, body) => {
      if (error) return onFinish(true, null);
      if (response.statusCode != 200) return onFinish(true, null);

      let json;
      try {
        json = JSON.parse(body);
      } catch (e) {
        return onFinish(true, null);
      }

      const partObjects = [];
      const size = json.length;
      json.forEach(object => {
        const fmt = formatThread(object, collaborizm_id);
        if (fmt) partObjects.push(fmt);
      });

      return onFinish(size >= 6 ? false : LAST_REQUEST, partObjects);
    });
  }

  const pageList = Array.from(Array(max_pages).keys());

  async.mapSeries(pageList, fetch, (error, results) => {
    if (!error || (error && error === LAST_REQUEST)) {
      callback([].concat(...results));
    } else {
      callback(false);
    }
  });
}


/*
https://v2api.collaborizm.com/v2/project/${project_id}
2. Get obj: about_text, created_on, headline, id, is_public, leader_id, modifiied_on, name, photo_profile.public_id, photo_cover.public_id, summary
*/
const getSingleProject = (project_id, collaborizm_id, onFinish) => {
  const url = `https://v2api.collaborizm.com/v2/project/${project_id}`;
  request.get(url, (error, response, body) => {
    if (error) return onFinish(true, null);
    if (response.statusCode != 200) return onFinish(true, null);

    let json;
    try {
      json = JSON.parse(body);
    } catch (e) {
      return onFinish(true, null);
    }

    const fmt = formatProject(json, collaborizm_id);
    return onFinish(!fmt, fmt);
  });
}



/*
https://v2api.collaborizm.com/v2/projects/users?id=${collaborizm_id}
1. Get obj[collaborizm_id].owner array of objects: id
*/
const getProjects = (collaborizm_id, callback) => {
  const url_user_projects = `https://v2api.collaborizm.com/v2/projects/users?id=${collaborizm_id}`;
  request.get(url_user_projects, (error, response, body) => {
    if (error) return callback(false);
    if (response.statusCode != 200) return callback(false);

    let json;
    try {
      json = JSON.parse(body);
    } catch (e) {
      return callback(false);
    }

    if (!(json && json[collaborizm_id] && json[collaborizm_id].owner)) return callback(false);

    const ids = [];
    json[collaborizm_id].owner.forEach(object => ids.push(object.id));

    const fetch = (project_id, onFinish) => {
      getSingleProject(project_id, collaborizm_id, onFinish);
    }

    async.mapSeries(ids, fetch, (error, results) => {
      if (error) {
        callback(false);
      } else {
        callback(results ? [].concat(...results) : false);
      }
    });
  });
};

export { getThreads, getProjects, getSingleProject };
