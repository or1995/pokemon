import {IErrorResponse} from '../types';
import {ICardDetailsRecord, ICardSummaryRecord} from './types';
import axios from 'axios';

export const PokemonCardRequests = {
  getAllCards(): Promise<ICardSummaryRecord[] | IErrorResponse> {
    return axios.get(`https://api.tcgdex.net/v2/en/cards`);
  },
  getSingleCard(id: string): Promise<ICardDetailsRecord | IErrorResponse> {
    return axios.get(`https://api.tcgdex.net/v2/:lang/cards/${id}`);
  },
};
