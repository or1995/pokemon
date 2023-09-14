import {IGetSeriesResponse, ISerieDetailsResponse} from './types';
import axios from 'axios';

export const PokemonSeriesRequests = {
  getAllSeries(): Promise<IGetSeriesResponse> {
    return axios.get(`https://api.tcgdex.net/v2/en/series`);
  },
  getSingleSerie(id: string): Promise<ISerieDetailsResponse> {
    return axios.get(`https://api.tcgdex.net/v2/en/series/${id}`);
  },
};
