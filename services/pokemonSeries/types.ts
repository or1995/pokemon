import {ISetSummaryRecord} from '../pokemonSets/types';

export interface ISerieSummaryRecord {
  id: string;
  name: string;
  logo: string;
}

export interface ISerieDetailsRecord {
  id: string;
  logo: string;
  name: string;
  sets: ISetSummaryRecord[];
}

export interface IGetSeriesResponse {
  data: ISerieSummaryRecord[];
  error?: string;
}

export interface ISerieDetailsResponse {
  data: ISerieDetailsRecord;
  error?: string;
}
