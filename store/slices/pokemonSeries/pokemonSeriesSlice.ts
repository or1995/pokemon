import {createSlice} from '@reduxjs/toolkit';
import {getAllSeriesThunk, getSerieDetailsThunk} from './thunks';
import {IPokemonSeriesState} from './types';

export const pokemonSeriesInitialState: IPokemonSeriesState = {
  seriesRecords: [],
  isSeriesRecordsLoaded: false,
  isSerieDetailsLoaded: false,
};

const pokemonSeriesSlice = createSlice({
  name: 'pokemonSeries',
  initialState: pokemonSeriesInitialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllSeriesThunk.fulfilled, (state, action) => {
      state.seriesRecords = action.payload;
      state.isSeriesRecordsLoaded = true;
    });
    builder.addCase(getAllSeriesThunk.pending, state => {
      state.isSeriesRecordsLoaded = false;
    });
    builder.addCase(getAllSeriesThunk.rejected, state => {
      state.isSeriesRecordsLoaded = true;
    });
    builder.addCase(getSerieDetailsThunk.fulfilled, (state, action) => {
      state.SerieDetails = action.payload;
      state.isSerieDetailsLoaded = true;
    });
    builder.addCase(getSerieDetailsThunk.pending, state => {
      state.isSerieDetailsLoaded = false;
    });
    builder.addCase(getSerieDetailsThunk.rejected, state => {
      state.isSerieDetailsLoaded = true;
    });
  },
});

export const {} = pokemonSeriesSlice.actions;
export default pokemonSeriesSlice.reducer;
