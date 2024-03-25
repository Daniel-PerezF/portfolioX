export interface IconProps {
  [key: number]: boolean;
}

export type Project = {
  name: string;
  username: string;
  date: string;
  pfp: string;
  images: string[];
  title: string;
  link: string;
  code: string;
  description: string[];
  comments: string;
  retweets: string;
  likes: string;
  stats: string;
};

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
  name: string;
  username: string;
  date: string;
  pfp: string;
  url?: string;
  code?: string;
  role: string;
  location: string;
  description: string[];
  comments: string;
  retweets: string;
  likes: string;
  stats: string;
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
