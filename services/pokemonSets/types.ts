import {ICardSummaryRecord} from '../pokemonCards/types';

export interface ISetSummaryRecord {
  id: string;
  name: string;
  logo: string;
  symbol: string;
  cardCount: {
    total: number;
    official: number;
  };
}

export interface ISetDetailsRecord {
  cardCount: {
    firstEd: number;
    holo: number;
    normal: number;
    official: number;
    reverse: number;
    total: number;
  };
  cards: ICardSummaryRecord[];
  id: string;
  legal: {
    expanded: boolean;
    standard: boolean;
  };
  logo: string;
  name: string;
  releaseDate: string;
  serie: {
    id: string;
    name: string;
  };
  symbol: string;
}

export interface IGetSetsResponse {
  data: ISetSummaryRecord[];
  error?: string;
}

export interface ISetDetailsResponse {
  data: ISetDetailsRecord;
  error?: string;
}
