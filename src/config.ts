import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://black.box/",
  author: "black.box",
  shortName: "black.box",
  desc: "black.box",
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Twitter",
    href: "https://x.com/black_dot_box",
    linkTitle: `${SITE.shortName} on Twitter`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:hello@black.box",
    linkTitle: `Send an email to ${SITE.shortName}`,
    active: true,
  },
  {
    name: "Github",
    href: "https://github.com/blackdotbox",
    linkTitle: ` ${SITE.shortName} on Github`,
    active: true,
  },
];
