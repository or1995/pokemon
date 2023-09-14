import {IGetSetsResponse, ISetDetailsResponse} from './types';
import axios from 'axios';

export const PokemonSetsRequests = {
  getAllSets(): Promise<IGetSetsResponse> {
    return axios.get(`https://api.tcgdex.net/v2/en/sets`);
  },
  getSingleSet(id: string): Promise<ISetDetailsResponse> {
    return axios.get(`https://api.tcgdex.net/v2/en/sets/${id}`);
  },
};
