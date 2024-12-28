import { Product } from "@/common/types/Product";

export type Brand = {
  id: number;
  name: string;
};

export type PageBrands = {
  page: number;
  total: number;
  title: string;
  h1: string;
  description: string;
  content: string;
  results: [Product];
};
