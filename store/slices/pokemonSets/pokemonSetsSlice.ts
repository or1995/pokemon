import {createSlice} from '@reduxjs/toolkit';
import {getAllSetsThunk, getSetDetailsThunk} from './thunks';
import {IPokemonSetsState} from './types';

export const pokemonSetsInitialState: IPokemonSetsState = {
  setsRecords: [],
  isSetsRecordsLoaded: false,
  isSetDetailsLoaded: false,
};

const pokemonSetsSlice = createSlice({
  name: 'pokemonSets',
  initialState: pokemonSetsInitialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllSetsThunk.fulfilled, (state, action) => {
      state.setsRecords = action.payload;
      state.isSetsRecordsLoaded = true;
    });
    builder.addCase(getAllSetsThunk.pending, state => {
      state.isSetsRecordsLoaded = false;
    });
    builder.addCase(getAllSetsThunk.rejected, state => {
      state.isSetsRecordsLoaded = true;
    });
    builder.addCase(getSetDetailsThunk.fulfilled, (state, action) => {
      state.SetDetails = action.payload;
      state.isSetDetailsLoaded = true;
    });
    builder.addCase(getSetDetailsThunk.pending, state => {
      state.isSetDetailsLoaded = false;
    });
    builder.addCase(getSetDetailsThunk.rejected, state => {
      state.isSetDetailsLoaded = true;
    });
  },
});

export const {} = pokemonSetsSlice.actions;
export default pokemonSetsSlice.reducer;
