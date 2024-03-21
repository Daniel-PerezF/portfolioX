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
