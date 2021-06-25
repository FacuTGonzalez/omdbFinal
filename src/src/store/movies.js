import axios from "axios";
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

/* export const getMoviesRequest = createAsyncThunk("Movies", (inputMovie) => {
  return axios.get(`https://www.omdbapi.com/?apikey=20dac387&s=${inputMovie}`).then((r) => {r.data});
}); */
// https://www.omdbapi.com/?apikey=20dac387&s=batman

const movieReducer = createReducer([], {
  /* [getMoviesRequest.fulfilled]: (state, action) => action.payload, */
});

export default movieReducer;