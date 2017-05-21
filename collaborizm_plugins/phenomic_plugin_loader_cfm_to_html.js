import { cfmToHtml } from "./markdown-it_cfm_to_html";
import { getCloudinaryImageUrl } from "./cfm_codec";

export default ({ result }) => {
  const { cizm_project_id, cover, thumbnail } = result.head;
  const urlCover = cizm_project_id && cover ? getCloudinaryImageUrl(cover) : cover;
  const urlThumbnail = cizm_project_id && thumbnail ? getCloudinaryImageUrl(thumbnail, "c_fill,w_440,h_400,q_auto,f_auto") : thumbnail;

  return {
    ...result,
    head: {
      ...result.head,
      cover: urlCover,
      thumbnail: urlThumbnail,
    },
    body: cfmToHtml(result.body, false, true),
  }
};
