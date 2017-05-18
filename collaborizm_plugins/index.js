const collaborizm_plugins = [
  require("phenomic/lib/loader-plugin-init-head-property-from-config").default,
  require("phenomic/lib/loader-plugin-init-head-property-from-content").default,
  require("phenomic/lib/loader-plugin-init-body-property-from-content").default,
  // require("phenomic/lib/loader-plugin-markdown-init-head.description-property-from-content").default,
  require("phenomic/lib/loader-plugin-markdown-transform-body-property-to-html").default,
];

export { collaborizm_plugins };
