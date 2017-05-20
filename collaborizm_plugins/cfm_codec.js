// Config
//
const domainName = '';

const uiClass = {
  atProfile: 'md-at-person',
  atProject: 'md-at-project',
  adHocTag: 'md-hashtag-adhoc',
  hashTag: 'md-hashtag',
  img: 'md-img',
  youtube: 'md-yt',
  pre: 'md-pre',
  table: 'md-table',
};


const Base64encode = (string) => Buffer.from(string).toString('base64');
const Base64decode = (code) => Buffer.from(code, 'base64').toString('ascii');


// http://cloudinary.com/documentation/image_transformation_reference
const getCloudinaryImageUrl = (id, params = '') => `https://res.cloudinary.com/collabizm/image/upload/${params}/v1/${id}`;

// PRE
//
const preImageRegex = /(\!\[[^\]]*\]\(czm:\/\/[^)]*\))/g;
const preImageReplacer = `\n\n$1\n\n`;

const preYoutubeRegex = /@\[youtube\]\((.*)\)/ig;
const preYoutubeIdRegex = /(ci=|v=|be\/|embed\/|v\/)([a-zA-Z0-9_-]+)/ig;
const preYoutubeReplacer = (whole, ytUrl) => {
  preYoutubeIdRegex.lastIndex = 0;
  const matches = preYoutubeIdRegex.exec(ytUrl);
  const ytId = (matches && matches.length > 2 ? matches[2] : ytUrl).replace(/[\u200B-\u200D\uFEFF]/g, '');
  return `YTSTART!${ytId}!YTEND`;
};

const preSoundcloudRegex = /@\[soundcloud\]\((.*)\)/ig;
// const soundCloudIdRegex = /(v=|be\/|embed\/|v\/)([a-zA-Z0-9_-]+)/ig;
const preSoundcloudReplacer = (whole, soundCloudUrl) => {
  // soundCloudIdRegex.lastIndex = 0;
  return `SCSTART!${Base64encode(soundCloudUrl)}!SCEND`;
};

const preAtRegex = /@\[([^\]]*)\]\(([\w-]*)\)/g;
const preAtReplacer = (whole, name, id) => `~span~class~${uiClass.atProfile}~[${name}](https://www.collaborizm.com//profile/${id})~span~`;

const preAtProjectRegex = /@\[([^\]]*)\]\(project\/([\w\-~]*)\)/g;
const preAtProjectReplacer = (whole, name, id) => `~span~class~${uiClass.atProject}~[${name}](https://www.collaborizm.com//project/${id})~span~`;

const preHashtagRegex = /\B#\[([^\]]*)\]\(([\s\w\-~]*)\)/g;
const preHashtagReplacer = (whole, name, id) => `~span~class~${uiClass.hashTag}~[${name}](https://www.collaborizm.com//discover/${encodeURIComponent(id)})~span~`;

const preAdhocRegex = /\B#([a-zA-Z0-9\-_~&\+]+)/g;
const preAdhocReplacer = (whole, tag) => `~span~class~${uiClass.adHocTag}~#${tag}~span~`;



// POST
//
const postImageRegex = /<img.+src="czm:\/\/([^"]+)".*?>/g;
// const imageMatchRegexV1 = /<img.+src="v1:\/\/([^"]+)".*?>/g;
const postImageReplacer =
  `<div>
    <img class="${uiClass.img}" src='${getCloudinaryImageUrl('TOBEREPLACED')}' />
  </div>`
  .replace(/TOBEREPLACED/g, 'from_markdown/$1');

const postSpanStartRegex = /~span~class~([^~]*)~/g;
const postSpanStartReplacer = (whole, className) => `<span class='${className}'>`;

const postSpanEndRegex = /~span~/g;
const postSpanEndReplacer = '</span>';

const postExtLinkRegex = /<a href="http/g;
const postExtLinkReplacer = '<a target=_blank href="http';

const postSoundcloudReplacer = /SCSTART\!(.*)\!SCEND/ig;
const soundCloudEmbedReplacer = (whole, scId) => {
  return `<iframe
      style="height:166px" width="100%" height="166" scrolling="no" frameborder="no"
      src="https://w.soundcloud.com/player/?url=${encodeURIComponent(Base64decode(scId))}&amp;color=0066cc"
    >
    </iframe>`;
};

const postYoutubeRegex = /YTSTART\!([a-zA-Z0-9_-]+)\!YTEND/ig;
const postYoutubeReplacer = (whole, ytId) =>
  `<div class="${uiClass.youtube}">
    <iframe allowFullScreen='allowFullScreen' type="text/html" width="100%" height="360"
      src="https://www.youtube.com/embed/${ytId}?autoplay=0&origin=${domainName}"
      frameborder="0"></iframe>
  </div>`;

// Collaborizm fixes
const postPreTagRegex = /<pre.*?/g;
const postPreTagReplacer = `<pre class="${uiClass.pre}"`;

const postTableRegex = /<table.*?/g;
const postTableReplacer = `<table class="${uiClass.table}"`;

// Functions
//
/////////
const preProcessNonCode = blob =>
  blob
    .replace(preImageRegex, preImageReplacer)
    .replace(preYoutubeRegex, preYoutubeReplacer)
    .replace(preSoundcloudRegex, preSoundcloudReplacer)
    .replace(preAtRegex, preAtReplacer)
    .replace(preAtProjectRegex, preAtProjectReplacer)

    // .replace(preLinkRegex, preLinkReplacer)

    .replace(preHashtagRegex, preHashtagReplacer)
    .replace(preAdhocRegex, preAdhocReplacer);
/////////

/////////
const preProcessMd = rawMd => {
  const blobs = [];
  rawMd.split('```').forEach((value, index) => blobs.push(index % 2 === 0 ? preProcessNonCode(value) : value));
  return blobs.join('```');
}
/////////


/////////
const postProcessHtml = rawHtml =>
  rawHtml
    .replace(postImageRegex, postImageReplacer)
    .replace(postSpanStartRegex, postSpanStartReplacer)
    .replace(postSpanEndRegex, postSpanEndReplacer)
    .replace(postExtLinkRegex, postExtLinkReplacer)
    .replace(postYoutubeRegex, postYoutubeReplacer)
    .replace(postSoundcloudReplacer, soundCloudEmbedReplacer)

    .replace(postTableRegex, postTableReplacer)
    .replace(postPreTagRegex, postPreTagReplacer);
/////////



export {
  /*
  preImageRegex, preImageReplacer,
  preYoutubeRegex, preYoutubeReplacer,
  preSoundcloudRegex, preSoundcloudReplacer,
  preAtRegex, preAtReplacer,
  preAtProjectRegex, preAtProjectReplacer,
  preHashtagRegex, preHashtagReplacer,
  preAdhocRegex, preAdhocReplacer,

  postImageRegex, postImageReplacer,
  postSpanStartRegex, postSpanStartReplacer,
  postSpanEndRegex, postSpanEndReplacer,
  postExtLinkRegex, postExtLinkReplacer,
  postYoutubeRegex, postYoutubeReplacer,
  postSoundcloudReplacer, soundCloudEmbedReplacer,
  */

  preProcessMd, postProcessHtml, getCloudinaryImageUrl
};
