import { AxiosResponse } from "axios";

export interface PhotoLists {
  id: string;
  urls: {
    small: string;
    thumb: string;
  };
}

export interface APhoto {
  id: string;
  downloads: number;
  description: string;
  exif: {
    model: string;
  };
  location: {
    city: string;
    country: string;
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
  };
  width: number;
  height: number;
}

export interface photoApi {
  getList: (page: number) => Promise<AxiosResponse<PhotoLists[]>>;
  getOne: (id: string) => Promise<AxiosResponse<APhoto>>;
}
