import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  ISerieDetailsRecord,
  ISerieSummaryRecord,
} from '../../../services/pokemonSeries/types';
import {PokemonSeriesRequests} from '../../../services/pokemonSeries/pokemonSeriesRequests';

export const getAllSeriesThunk = createAsyncThunk(
  'series/getAll',
  async (): Promise<ISerieSummaryRecord[]> => {
    const response = await PokemonSeriesRequests.getAllSeries();
    if (!response.error) {
      return response.data;
    }
    return Promise.reject();
  },
);

export const getSerieDetailsThunk = createAsyncThunk(
  'series/getDetails',
  async (id: string): Promise<ISerieDetailsRecord> => {
    const response = await PokemonSeriesRequests.getSingleSerie(id);
    if (!response.error) {
      return response.data;
    }
    return Promise.reject();
  },
);
