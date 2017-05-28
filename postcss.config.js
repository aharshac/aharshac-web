module.exports = (config) => [
    require("stylelint")(),
    require("postcss-cssnext")({
      browsers: "last 5 versions",
      features: {
        customProperties: {
          variables: {
            maxWidth: "60rem",
            // colorPrimaryDark: "#107491",
            colorPrimary: "#007acc",
            colorPrimaryDark: "#cc1616",
            // colorPrimary: "#ff3b0a",
            colorSecondaryDark: "#22846C",
            colorSecondary: "#46BE77",
            colorNeutralDark: "#111",
            colorNeutral: "#8C8D91",
            colorNeutralLight: "#FBFCFC",
            colorText: "#555",
            navHeight: "50px",
          },
        },
        customMedia: {
          extensions: {
            '--mobile': '(max-width: 767px)'
          }
        }
      },
    }),
    require('cssnano')({autoprefixer: false, zindex: false}),
    require("postcss-reporter")({ clearMessages: true, plugins: ['!postcss-discard-empty'] }),
    ...!config.production ? [
      require("postcss-browser-reporter")({ clearMessages: true, plugins: ['!postcss-discard-empty'] }),
    ] : [],
]
