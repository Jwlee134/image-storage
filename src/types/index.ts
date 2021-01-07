import { AxiosResponse } from "axios";

export interface PhotoLists {
  id: string;
  urls: {
    small: string;
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
  links: {
    download: string;
  };
  user: {
    username: string;
  };
}

export interface photoApi {
  getList: (page: number) => Promise<AxiosResponse<PhotoLists[]>>;
  getOne: (id: string) => Promise<AxiosResponse<APhoto>>;
}
