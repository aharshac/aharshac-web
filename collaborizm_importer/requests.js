import request from 'request';
import remark from "remark"
import stripMd from "strip-markdown"

import prune from './prune';

const getDesc = (text) => {
  return prune(
    remark()
      .use(stripMd)
      .process(text)
      .toString()
      .replace(/\n+/g, " ") // Avoid useless new lines
      .trim()
    ,
    140,
    "…"
  );
}

const formatThread = (thread, collaborizm_id) => {
  if (!thread) return false;
  const { category, createdOn, text, title, item, itemType, type, id } = thread;

  if ( !category || !createdOn || !text || !title || !item || !itemType || !type || !id ) return;
  if (item !== collaborizm_id || itemType !== "user" || type !== "discussion") return false;

  let route = title.trim().replace(/[^\w\s\-]/g, '').replace(/[\s]+/g, '-').toLowerCase();
  route = route ? `blog/${route}.md` : null;
  return {
    cizm_thread_id: id,
    cizm_path: `https://www.collaborizm.com/thread/${id}`,
    category,
    date: createdOn,
    description: getDesc(text),
    title,
    route,
    layout: 'Post',
  }
};

const getThreads = (collaborizm_id, callback) => {
  const objects = [];
  let counter = 0;

  const next = () => {
    if (counter < 100) {
      const url = `https://v2api.collaborizm.com/v2/discuss/list?item=${collaborizm_id}&page=${counter++}`;

      request(url, function (error, response, body) {
        if (error) return callback(objects);
        if (response.statusCode != 200) return callback(objects);

        let json;
        try {
          json = JSON.parse(body);
        } catch (e) {
          return callback(objects);
        }

        const size = json.length;
        json.forEach(object => {
          const fmt = formatThread(object, collaborizm_id);
          if (fmt) {
            objects.push(fmt);
          }
        });

        if (size >= 6) {
          next();
        } else {
          return callback(objects);
        }
      });
    } else {
      return callback(objects);
    }
  }
  next();
}

const getSingleThread = (thread, callback) => {
  request(`http://v2api.collaborizm.com/v2/discuss/thread?thread=${thread}`, function (error, response, body) {
    if (error) return callback(false);
    if (response.statusCode != 200) return callback(false);
    callback(body);
  });
}

export { getThreads, getSingleThread };
