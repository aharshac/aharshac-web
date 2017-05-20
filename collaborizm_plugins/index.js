const collaborizm_plugins = [
  require("phenomic/lib/loader-plugin-init-head-property-from-config").default,
  require("phenomic/lib/loader-plugin-init-head-property-from-content").default,
  require("phenomic/lib/loader-plugin-init-body-property-from-content").default,
  // require("phenomic/lib/loader-plugin-markdown-init-head.description-property-from-content").default,
  // require("phenomic/lib/loader-plugin-markdown-transform-body-property-to-html").default,
  require("./phenomic_plugin_loader_cfm_to_html").default,
];

export { collaborizm_plugins };
