import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  ISetDetailsRecord,
  ISetSummaryRecord,
} from '../../../services/pokemonSets/types';
import {PokemonSetsRequests} from '../../../services/pokemonSets/pokemonSetsRequests';

export const getAllSetsThunk = createAsyncThunk(
  'sets/getAll',
  async (): Promise<ISetSummaryRecord[]> => {
    const response = await PokemonSetsRequests.getAllSets();
    if (!response.error) {
      return response.data;
    }
    return Promise.reject();
  },
);

export const getSetDetailsThunk = createAsyncThunk(
  'sets/getDetails',
  async (id: string): Promise<ISetDetailsRecord> => {
    const response = await PokemonSetsRequests.getSingleSet(id);
    if (!response.error) {
      return response.data;
    }
    return Promise.reject();
  },
);
