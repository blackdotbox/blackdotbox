export type Site = {
  website: string;
  author: string;
  shortName: string;
  desc: string;
};

export type SocialObjects = {
  name: SocialMedia;
  href: string;
  active: boolean;
  linkTitle: string;
}[];

export type SocialIcons = {
  [social in SocialMedia]: string;
};

export type SocialMedia = "Github" | "Twitter" | "Mail";
