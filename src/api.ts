import axios from "axios";
import { photoApi } from "./types";

const api = axios.create({
  baseURL: "https://api.unsplash.com",
  params: {
    client_id: process.env.REACT_APP_API_KEY,
  },
});

export const photos: photoApi = {
  getList: (page = 1) =>
    api.get("/photos", {
      params: {
        per_page: 20,
        page,
      },
    }),
  getOne: (id: string) => api.get(`/photos/${id}`),
};
