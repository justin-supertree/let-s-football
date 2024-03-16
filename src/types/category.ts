export type Category = {
  id: number;
  title: string;
  description: string;
  video: string;
  image: string;
  isHot: boolean;
  logo: string;
};

export type CategoryListResponse = {
  total: number;
  list: Category[];
};
