import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getAllCardsThunk, getCardDetailsThunk} from './thunks';
import {IPokemonCardsState} from './types';

export const pokemonCardsInitialState: IPokemonCardsState = {
  cardsRecords: [],
  isCardsRecordsLoaded: false,
  isCardDetailsLoaded: false,
};

const pokemonCardsSlice = createSlice({
  name: 'pokemonCards',
  initialState: pokemonCardsInitialState,
  reducers: {
    setCardFilterValue(state, action: PayloadAction<string>) {
      state.cardFilterValue = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getAllCardsThunk.fulfilled, (state, action) => {
      state.cardsRecords = action.payload;
      state.isCardsRecordsLoaded = true;
    });
    builder.addCase(getAllCardsThunk.pending, state => {
      state.isCardsRecordsLoaded = false;
    });
    builder.addCase(getAllCardsThunk.rejected, state => {
      state.isCardsRecordsLoaded = true;
    });
    builder.addCase(getCardDetailsThunk.fulfilled, (state, action) => {
      state.cardDetails = action.payload;
      state.isCardDetailsLoaded = true;
    });
    builder.addCase(getCardDetailsThunk.pending, state => {
      state.isCardDetailsLoaded = false;
    });
    builder.addCase(getCardDetailsThunk.rejected, state => {
      state.isCardDetailsLoaded = true;
    });
  },
});

export const {setCardFilterValue} = pokemonCardsSlice.actions;
export default pokemonCardsSlice.reducer;
