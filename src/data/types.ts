export type ExternalLink = {
  title: string;
  url: string;
};

export type Community = ExternalLink & {
  description: string;
};

export type SkillGroup = {
  area: string;
  items: string[];
};

export type ConferenceWork = {
  title: string;
  role: string;
};

export type Profile = {
  paragraphs: string[];
  tags: ExternalLink[];
};

export type Location = {
  label: string;
  coordinatesLabel: string;
  latitude: number;
  longitude: number;
  zoom: number;
};

export type SocialLink = {
  name: string;
  handle: string;
  url: string;
  icon: 'x' | 'github' | 'note';
  cardClass: string;
};

export type AcademicLink = ExternalLink & {
  description: string;
  actionLabel: string;
};

export type Embed = {
  src: string;
  title: string;
  allow: string;
};
