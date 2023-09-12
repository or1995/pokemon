import {ISetSummaryRecord} from '../pokemonSets/types';

export interface ISerieSummaryRecord {
  id: string;
  name: string;
}

export interface ISerieDetailsRecord {
  id: string;
  logo: string;
  name: string;
  sets: ISetSummaryRecord[];
}
