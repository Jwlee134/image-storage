import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { photos } from "../api";
import { IState, SearchParams } from "../types";

const initialState: IState = {
  home: {
    list: [],
    error: null,
    loading: true,
  },
  search: {
    searchList: [],
    error: null,
    loading: false,
  },
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

export const fetchSearchList = createAsyncThunk(
  "home/fetchSearchList",
  async ({ page, term }: SearchParams, { rejectWithValue }) => {
    try {
      const {
        data: { results },
      } = await photos.search(page, term);
      return results;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchMoreSearchList = createAsyncThunk(
  "home/fetchMoreSearchList",
  async ({ page, term }: SearchParams, { rejectWithValue }) => {
    try {
      const {
        data: { results },
      } = await photos.search(page, term);
      return results;
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
        state.home.list.push(...action.payload);
        state.home.loading = false;
      })
      .addCase(fetchHomeList.rejected, (state, action) => {
        state.home.error = action.payload as string;
      })
      .addCase(fetchSearchList.pending, (state, action) => {
        state.search.loading = true;
      })
      .addCase(fetchSearchList.fulfilled, (state, action) => {
        state.search.searchList = action.payload;
        state.search.loading = false;
      })
      .addCase(fetchSearchList.rejected, (state, action) => {
        state.search.error = action.payload as string;
      })
      .addCase(fetchMoreSearchList.fulfilled, (state, action) => {
        state.search.searchList.push(...action.payload);
        state.search.loading = false;
      })
      .addCase(fetchMoreSearchList.rejected, (state, action) => {
        state.search.error = action.payload as string;
      });
  },
});

export default homeSlice.reducer;
