import {IErrorResponse} from '../types';
import {ISerieDetailsRecord, ISerieSummaryRecord} from './types';
import axios from 'axios';

export const PokemonSeriesRequests = {
  getAllSeries(): Promise<ISerieSummaryRecord[] | IErrorResponse> {
    return axios.get(`https://api.tcgdex.net/v2/en/series`);
  },
  getSingleSerie(id: string): Promise<ISerieDetailsRecord | IErrorResponse> {
    return axios.get(`(https://api.tcgdex.net/v2/en/series/${id}`);
  },
};
