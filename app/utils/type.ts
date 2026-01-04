export type Exempt<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type CardProps = {
  image: string;
  tag: string;
  title: string;
  date: string;
  author: string;
  avatar: string;
};