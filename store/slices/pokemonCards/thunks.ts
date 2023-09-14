import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  ICardDetailsRecord,
  ICardSummaryRecord,
} from '../../../services/pokemonCards/types';
import {PokemonCardRequests} from '../../../services/pokemonCards/pokemonCardsRequests';
import {RootState} from '../../types';
import {getCardFilterValue} from './selector';

export const getAllCardsThunk = createAsyncThunk(
  'cards/getAll',
  async (_, thunkAPI): Promise<ICardSummaryRecord[]> => {
    const rootState: RootState = thunkAPI.getState() as RootState;
    const filterValue = getCardFilterValue(rootState);
    let response;
    let data: ICardSummaryRecord[];
    if (filterValue && filterValue !== '') {
      response = await PokemonCardRequests.getFilteredCards(filterValue);
      data = response.data.cards;
    } else {
      response = await PokemonCardRequests.getAllCards();
      data = response.data;
    }
    if (!response.error) {
      return data;
    }
    return Promise.reject();
  },
);

export const getCardDetailsThunk = createAsyncThunk(
  'cards/getDetails',
  async (id: string): Promise<ICardDetailsRecord> => {
    const response = await PokemonCardRequests.getSingleCard(id);
    if (!response.error) {
      return response.data;
    }
    return Promise.reject();
  },
);
