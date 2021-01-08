import { combineReducers, configureStore } from "@reduxjs/toolkit";
import home from "./home";
import detail from "./detail";

const rootReducer = combineReducers({
  home,
  detail,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
