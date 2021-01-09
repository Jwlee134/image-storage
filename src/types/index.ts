import { AxiosResponse } from "axios";

export interface IState {
  home: {
    list: Photo[];
    loading: boolean;
    error: string | null;
  };
  search: {
    searchList: Photo[];
    loading: boolean;
    error: string | null;
  };
}

export interface SearchParams {
  page: number;
  term: string;
}

export interface Photo {
  id: string;
  downloads?: number;
  description: string;
  exif?: {
    model?: string;
  };
  location?: {
    city?: string;
    country?: string;
  };
  user: {
    username: string;
    profile_image: {
      medium: string;
    };
    instagram_username: string;
  };
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    thumb: string;
  };
  width: number;
  height: number;
}

export interface Search {
  results: Photo[];
}

export interface PhotoApi {
  getList: (page: number) => Promise<AxiosResponse<Photo[]>>;
  getOne: (id: string) => Promise<AxiosResponse<Photo>>;
  search: (page: number, term: string) => Promise<AxiosResponse<Search>>;
}
