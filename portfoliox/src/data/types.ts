export interface IconProps {
  [key: number]: boolean;
}

export interface Tab {
  id: string;
  label: string;
  component: React.ComponentType<any>;
}

export interface Message {
  id: string;
  name: string;
  message: string;
}

export type Experiences = {
  id: number;
  name: string;
  username: string;
  date: string;
  pfp: string;
  url?: string;
  code?: string;
  role: string;
  location: string;
  description: string[];
  retweets: number;
  favorites: number;
};

export type Service = {
  id: number;
  name: string;
  username: string;
  date: string;
  pfp: string;
  images: string[];
  title: string;
  link?: string;
  code?: string;
  description: string[];
  retweets: number;
  favorites: number;
};

export type Project = {
  id: number;
  name: string;
  username: string;
  date: string;
  pfp: string;
  images: string[];
  title: string;
  link: string;
  code?: string;
  description: string[];
  retweets: number;
  favorites: number;
};

export type Links = {
  id: number;
  title: string;
  url: string;
};

export type BannerProps = {
  darkModeImage: string;
  lightModeImage: string;
};

export type Item = {
  id: number;
  retweets: number;
  favorites: number;
  retweetsToggle: boolean;
  favoritesToggle: boolean;
};
export type LinksProps = {
  id: number;
  name: string;
  url: string;
  copy: string;
  icon: React.ComponentType<any>;
};
