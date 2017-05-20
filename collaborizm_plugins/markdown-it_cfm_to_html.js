// npm i -D markdown-it markdown-it-emoji markdown-it-task-lists prismjs

import MarkdownIt from 'markdown-it';
import markdownItEmoji from 'markdown-it-emoji';
import taskLists from 'markdown-it-task-lists';
import Prism from 'prismjs';

import { preProcessMd, postProcessHtml, getCloudinaryImageUrl } from './cfm_codec';

// const getCloudinaryImageUrl2 = (id, params = "") => getCloudinaryImageUrl(id, params);

const markdownItOptions = {
  typographer: true,
  quotes: '“”‘’',
  breaks: true
};

markdownItOptions.highlight = (str, lang) => {
  if (lang && Prism.languages[lang]) {
    try {
      return Prism.highlight(str, Prism.languages[lang]);
    } catch (__) { null; }
  }

  return Prism.highlight(str, Prism.languages.clike);
};

const cfmToHtml = (text, html, linkify) => {
  if (!text)
    return null;

  const md = new MarkdownIt({html, ...markdownItOptions, linkify}).use(markdownItEmoji).use(taskLists);

  const preMd = preProcessMd(text);
  const rawHtml = md.render(preMd);
  const postHtml = postProcessHtml(rawHtml);

  return postHtml;
}

export { cfmToHtml, getCloudinaryImageUrl };
