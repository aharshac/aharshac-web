// export default (
//   {
//     result,
//     frontMatter,
//     options,
//   }: PhenomicLoaderPluginInput
// ): PhenomicCollectionItem => {

export default ({ result }) => {
  // const root = JSON.parse(frontMatter);
  const { thread_id, path, category, date, text, title, route, } = result.body;
  return {
    ...result,
    head: {
      ...result.head,
      layout: "Blog",
      thread_id, path, category, date, title, route,
    },
    body: text,
  }
}
