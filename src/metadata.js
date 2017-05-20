// you can add any STATIC data you want here
import pkg from "../package.json"
import avatar from "./assets/photos/avatar.png"

export default {
  pkg,
  title: "Harsha Alva",
  avatar,
  description: "Hello! I'm Harsha Alva, a Mechanical Engineer and a Software Developer from India :)",
  /* Social network links */
  networks: {
    blog: "/blog",
    portfolio: "/portfolio",
    collaborizm: "https://www.collaborizm.com/profile/Hyt3y6XK",
    facebook: "https://www.facebook.com/harsha.c.alva",
    github: "https://github.com/aharshac",
    linkedin: "https://www.linkedin.com/in/harsha-alva-b9377186",
    npm: "https://www.npmjs.com/~aharshac",
    stackoverflow: "https://stackoverflow.com/users/692864/harsha-c-alva",
    twitter: "https://twitter.com/harsha_alva",
    twitter_id: "harsha_alva"     /* Important for twitter tags */
  },
  /* header button visibility */
  headerItems: {
    blog: true,
    portfolio: true,
    collaborizm: true,
    facebook: false,
    github: true,
    linkedin: false,
    npm: false,
    stackoverflow: false,
    twitter: false
  },
  /* cover social buttons visibility */
  coverItems: {
    collaborizm: true,
    facebook: false,
    github: true,
    linkedin: true,
    npm: true,
    stackoverflow: true,
    twitter: true
  },
}

// networks: { collaborizm, github, twitter }
