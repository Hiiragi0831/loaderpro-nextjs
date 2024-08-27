import { Article } from "@/common/types/Article";
import { Brand } from "@/common/types/Brand";
import { Category } from "@/common/types/Category";
import { Product } from "@/common/types/Product";

class APIService {
  public async getAllProducts(): Promise<Product[]> {
    try {
      const res = await fetch("https://api.cartrac.ru/catalog/");
      return res.json();
    } catch (error: any) {
      console.error("Error fetching:", error.message);
      throw error;
    }
  }
  public async getArticles(): Promise<Article[]> {
    try {
      const res = await fetch("https://76fbb2aa70af7ba2.mokky.dev/articles");
      return res.json();
    } catch (error: any) {
      console.error("Error fetching:", error.message);
      throw error;
    }
  }

  public async getArticle(id: string): Promise<Article> {
    try {
      const res = await fetch(
        `https://76fbb2aa70af7ba2.mokky.dev/articles/${id}`,
      );
      return res.json();
    } catch (error: any) {
      console.error("Error fetching:", error.message);
      throw error;
    }
  }

  public async getProduct(id: string | string[]): Promise<Product> {
    try {
      const res = await fetch(
        `https://76fbb2aa70af7ba2.mokky.dev/catalog/${id}`,
      );
      return res.json();
    } catch (error: any) {
      console.error("Error fetching:", error.message);
      throw error;
    }
  }

  public async getAllBrand(): Promise<Brand[]> {
    try {
      const res = await fetch(`https://76fbb2aa70af7ba2.mokky.dev/brands/`);
      return res.json();
    } catch (error: any) {
      console.error("Error fetching:", error.message);
      throw error;
    }
  }

  public async getBrand(id: number | undefined): Promise<Brand> {
    try {
      const res = await fetch(
        `https://76fbb2aa70af7ba2.mokky.dev/brands/${id}`,
      );
      return res.json();
    } catch (error: any) {
      console.error("Error fetching:", error.message);
      throw error;
    }
  }

  public async getAllCategory(): Promise<Category[]> {
    try {
      const res = await fetch(`https://76fbb2aa70af7ba2.mokky.dev/category/`);
      return res.json();
    } catch (error: any) {
      console.error("Error fetching:", error.message);
      throw error;
    }
  }
  public async getTeams(): Promise<Category[]> {
    try {
      const res = await fetch(`https://76fbb2aa70af7ba2.mokky.dev/teams/`);
      return res.json();
    } catch (error: any) {
      console.error("Error fetching:", error.message);
      throw error;
    }
  }
  public async getYoutubeVideos(): Promise<any> {
    const YOUTUBE_API = "https://www.googleapis.com/youtube/v3/playlistItems";
    const YOUTUBE_KEY = "AIzaSyA2UEjRCI--QCtdYoA_jeN5s84htgXNyF0";
    const YOUTUBE_PLAYLIST = "PLoWS47MwXvIF7M3aL9PborMU-72zBf1jV";

    try {
      const res = await fetch(
        `${YOUTUBE_API}?part=snippet&maxResults=50&playlistId=${YOUTUBE_PLAYLIST}&key=${YOUTUBE_KEY}`,
      );
      return res.json();
    } catch (error: any) {
      console.error("Error fetching:", error.message);
      throw error;
    }
  }
  public async getYoutubeVideo(id: string): Promise<any> {
    const YOUTUBE_API = "https://youtube.googleapis.com/youtube/v3/videos";
    const YOUTUBE_KEY = "AIzaSyA2UEjRCI--QCtdYoA_jeN5s84htgXNyF0";

    try {
      const res = await fetch(
        `${YOUTUBE_API}?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${YOUTUBE_KEY}`,
      );
      return res.json();
    } catch (error: any) {
      console.error("Error fetching:", error.message);
      throw error;
    }
  }
}

export const api: APIService = new APIService();
