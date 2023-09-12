import {createAsyncThunk} from '@reduxjs/toolkit';
import {IErrorResponse} from '../../../services/types';
import {
  ISetDetailsRecord,
  ISetSummaryRecord,
} from '../../../services/pokemonSets/types';
import {PokemonSetsRequests} from '../../../services/pokemonSets/pokemonSetsRequests';

export const getAllSetsThunk = createAsyncThunk(
  'sets/getAll',
  async (): Promise<ISetSummaryRecord[]> => {
    const response = await PokemonSetsRequests.getAllSets();
    if (!(response as IErrorResponse).error) {
      return response as ISetSummaryRecord[];
    }
    return Promise.reject();
  },
);

export const getSetDetailsThunk = createAsyncThunk(
  'sets/getDetails',
  async (id: string): Promise<ISetDetailsRecord> => {
    const response = await PokemonSetsRequests.getSingleSet(id);
    if (!(response as IErrorResponse).error) {
      return response as ISetDetailsRecord;
    }
    return Promise.reject();
  },
);
