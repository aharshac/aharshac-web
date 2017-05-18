// import remark from "remark"
import stripMd from "remove-markdown"
import prune from './prune';

const getDescription = (text) => {
  return prune(stripMd(text), 140, "…");
}

const stripTitle = (title) => {
  return title
    .replace(/\s\s+/g, ' ') // replace multiple
    .trim()
    .replace(/[^\w\s\-]+/g, '')
    .replace(/[\s]+/g, '-')
    .toLowerCase();
};

const formatThread = (thread, collaborizm_id) => {
  if (!thread) return false;
  const { category, createdOn, text, title, item, itemType, type, id } = thread;

  if ( !category || !createdOn || !text || !title || !item || !itemType || !type || !id ) return;
  if (item !== collaborizm_id || itemType !== "user" || type !== "discussion") return false;

  const stripped_file = stripTitle(title);
  const route = stripped_file ? `blog/${stripped_file}.md` : null;
  return {
    cizm_thread_id: id,
    cizm_path: `https://www.collaborizm.com/thread/${id}`,
    category,
    date: createdOn,
    description: getDescription(text),
    title,
    text,
    route,
    layout: 'Post',
  }
};

export { formatThread };
