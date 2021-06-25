import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";


import movieReducer from "./movies"

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    movieSearch: movieReducer
  },
});

export default store;