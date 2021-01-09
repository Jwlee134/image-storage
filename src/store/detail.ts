import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { photos } from "../api";
import { Photo } from "../types";

interface IState {
  item: Photo | null;
  loading: boolean;
  error: string | null;
}

const initialState: IState = {
  item: null,
  loading: false,
  error: null,
};

export const fetchItem = createAsyncThunk(
  "detail/fetchItem",
  async (id: string, { rejectWithValue }) => {
    try {
      const { data } = await photos.getOne(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItem.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchItem.fulfilled, (state, action) => {
        state.item = action.payload;
        console.log(action.payload);
        state.loading = false;
      })
      .addCase(fetchItem.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export default detailSlice.reducer;
