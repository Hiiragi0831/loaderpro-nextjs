// import { Article } from "@/common/types/Article";
import { Brand, PageBrands } from "@/common/types/Brand";
import { Product, Products, SingleProduct } from "@/common/types/Product";
import { notFound } from "next/navigation";
// import { User } from "@/common/types/User";

class APIService {
  public async getAllProductsLink(url?: string): Promise<Products> {
    const link = url ? url : "";
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_HOST}/catalog/${link}`,
      );
      return res.json();
    } catch (error: any) {
      console.error("Error fetching:", error.message);
      throw error;
    }
  }

  public async getAllProducts(url?: string): Promise<Product[]> {
    try {
      const res = await fetch(
        url ? url : `${process.env.NEXT_PUBLIC_API_HOST}/catalog/all/`,
      );
      return res.json();
    } catch (error: any) {
      console.error("Error fetching:", error.message);
      throw error;
    }
  }

  public async getProduct(id: string | string[]): Promise<SingleProduct> {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_HOST}/catalog/${id}`,
      );
      return res.json();
    } catch (error: any) {
      console.error("Error fetching:", error.message);
      throw error;
    }
  }

  // public async getArticles(): Promise<Article[]> {
  //   try {
  //     const res = await fetch("https://76fbb2aa70af7ba2.mokky.dev/articles");
  //     return res.json();
  //   } catch (error: any) {
  //     console.error("Error fetching:", error.message);
  //     throw error;
  //   }
  // }
  //
  // public async getUsers(): Promise<User[]> {
  //   try {
  //     const res = await fetch("https://76fbb2aa70af7ba2.mokky.dev/users/");
  //     return res.json();
  //   } catch (error: any) {
  //     console.error("Error fetching:", error.message);
  //     throw error;
  //   }
  // }

  public async getBasketStatus() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_HOST}/basket_status/`,
      );
      return res.json();
    } catch (error: any) {
      console.error("Error fetching:", error.message);
      throw error;
    }
  }

  public async getSearchResult(data: any) {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_HOST}/catalog/search_catalog/${data}`,
      );
      return res.json();
    } catch (error: any) {
      console.error("Error fetching:", error.message);
      throw error;
    }
  }

  public async postBasket(data: any) {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_HOST}/Main/orders/`,
        {
          method: "POST",
          body: JSON.stringify(data),
        },
      );
      return res.json();
    } catch (error: any) {
      console.error("Error fetching:", error.message);
      throw error;
    }
  }

  public async postQueryTs(data: any) {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_HOST}/Main/query_ts/`,
        {
          method: "POST",
          body: JSON.stringify(data),
        },
      );
      return res.json();
    } catch (error: any) {
      console.error("Error fetching:", error.message);
      throw error;
    }
  }

  public async postQueryZp(data: any) {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_HOST}/Main/query_catalog/`,
        {
          method: "POST",
          body: JSON.stringify(data),
        },
      );
      return res.json();
    } catch (error: any) {
      console.error("Error fetching:", error.message);
      throw error;
    }
  }

  public async postCB(data: any) {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_HOST}/Main/call_back/`,
        {
          method: "POST",
          body: JSON.stringify(data),
        },
      );
      return res.json();
    } catch (error: any) {
      console.error("Error fetching:", error.message);
      throw error;
    }
  }

  public async getAllBrand(): Promise<Brand[]> {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/brands/`);
      return res.json();
    } catch (error: any) {
      console.error("Error fetching:", error.message);
      throw error;
    }
  }

  public async getBrand(id: number | undefined): Promise<Brand> {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_HOST}/brands/${id}`,
      );
      return res.json();
    } catch (error: any) {
      console.error("Error fetching:", error.message);
      throw error;
    }
  }

  public async getPageBrand(url?: string): Promise<PageBrands> {
    const link = url ? url : "";
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_HOST}/brands_products/${link}`,
      );

      if (res.status === 404) {
        notFound();
      }

      return res.json();
    } catch (error: any) {
      console.error("Error fetching:", error.message);
      throw error;
    }
  }

  public async getReviews(id: string | undefined): Promise<any> {
    try {
      const res = await fetch(
        `https://app.reviewlab.ru/api/v1/widgets/widget/${id}/reviews/remote?limit=15`,
      );
      return res.json();
    } catch (error: any) {
      console.error("Error fetching:", error.message);
      throw error;
    }
  }

  public async getReviewCompany(id: string | undefined): Promise<any> {
    try {
      const res = await fetch(
        `https://app.reviewlab.ru/api/v1/widgets/widget/${id}/remote`,
      );
      return res.json();
    } catch (error: any) {
      console.error("Error fetching:", error.message);
      throw error;
    }
  }

  public async getRutubeVideos(): Promise<any> {
    try {
      const res = await fetch(
        `https://rutube.ru/api/playlist/custom/595683/videos/`,
        { mode: "no-cors" },
      );
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

  public async getLocalVideos(): Promise<any> {
    try {
      const res = await fetch(`/data/videos.json`);
      return res.json();
    } catch (error: any) {
      console.error("Error fetching:", error.message);
      throw error;
    }
  }
}

export const api: APIService = new APIService();
