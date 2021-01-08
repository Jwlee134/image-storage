import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { photos } from "../api";
import { PhotoLists } from "../types";

interface IState {
  list: PhotoLists[];
  loading: boolean;
  error: string | null;
}

const initialState: IState = {
  list: [],
  error: null,
  loading: true,
};

export const fetchHomeList = createAsyncThunk(
  "home/fetchHomeList",
  async (page: number, { rejectWithValue }) => {
    try {
      const { data } = await photos.getList(page);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeList.fulfilled, (state, action) => {
        state.list.push(...action.payload);
        state.loading = false;
      })
      .addCase(fetchHomeList.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export default homeSlice.reducer;
