import axios from "axios";
import { PhotoApi } from "./types";

const api = axios.create({
  baseURL: "https://api.unsplash.com",
  params: {
    client_id: process.env.REACT_APP_API_KEY,
  },
});

export const photos: PhotoApi = {
  getList: (page = 1) =>
    api.get("/photos", {
      params: {
        per_page: 30,
        page,
      },
    }),
  getOne: (id) => api.get(`/photos/${id}`),
  search: (page = 1, term) =>
    api.get("/search/photos", {
      params: {
        query: term,
        per_page: 30,
        page,
      },
    }),
};
