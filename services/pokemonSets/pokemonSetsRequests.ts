import {IErrorResponse} from '../types';
import {ISetDetailsRecord, ISetSummaryRecord} from './types';
import axios from 'axios';

export const PokemonSetsRequests = {
  getAllSets(): Promise<ISetSummaryRecord[] | IErrorResponse> {
    return axios.get(`https://api.tcgdex.net/v2/en/sets`);
  },
  getSingleSet(id: string): Promise<ISetDetailsRecord | IErrorResponse> {
    return axios.get(`https://api.tcgdex.net/v2/en/sets/${id}`);
  },
};
