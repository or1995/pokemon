import {
  ICardDetailsResponse,
  IGetCardsResponse,
  IGetFilteredCardsResponse,
} from './types';
import axios from 'axios';

export const PokemonCardRequests = {
  getAllCards(): Promise<IGetCardsResponse> {
    return axios.get(`https://api.tcgdex.net/v2/en/cards`);
  },
  getSingleCard(id: string): Promise<ICardDetailsResponse> {
    return axios.get(`https://api.tcgdex.net/v2/en/cards/${id}`);
  },
  getFilteredCards(value: string): Promise<IGetFilteredCardsResponse> {
    return axios.get(`https://api.tcgdex.net/v2/en/hp/${value}`);
  },
};
