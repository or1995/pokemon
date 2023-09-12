import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  ICardDetailsRecord,
  ICardSummaryRecord,
} from '../../../services/pokemonCards/types';
import {PokemonCardRequests} from '../../../services/pokemonCards/pokemonCardsRequests';
import {IErrorResponse} from '../../../services/types';

export const getAllCardsThunk = createAsyncThunk(
  'cards/getAll',
  async (): Promise<ICardSummaryRecord[]> => {
    const response = await PokemonCardRequests.getAllCards();
    if (!(response as IErrorResponse).error) {
      return response as ICardSummaryRecord[];
    }
    return Promise.reject();
  },
);

export const getCardDetailsThunk = createAsyncThunk(
  'cards/getDetails',
  async (id: string): Promise<ICardDetailsRecord> => {
    const response = await PokemonCardRequests.getSingleCard(id);
    if (!(response as IErrorResponse).error) {
      return response as ICardDetailsRecord;
    }
    return Promise.reject();
  },
);
