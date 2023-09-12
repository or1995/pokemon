import {
  ISetDetailsRecord,
  ISetSummaryRecord,
} from '../../../services/pokemonSets/types';

export interface IPokemonSetsState {
  setsRecords: ISetSummaryRecord[];
  isSetsRecordsLoaded: boolean;
  SetDetails?: ISetDetailsRecord;
  isSetDetailsLoaded: boolean;
}
