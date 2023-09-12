import {
  ISetDetailsRecord,
  ISetSummaryRecord,
} from '../../../services/pokemonSets/types';
import {RootState} from '../../types';

export const getAllSets = (state: RootState): ISetSummaryRecord[] =>
  state.pokemonSetsSlice.setsRecords;

export const getIsSetsRecordsLoaded = (state: RootState): boolean =>
  state.pokemonSetsSlice.isSetsRecordsLoaded;

export const getSetDetails = (
  state: RootState,
): ISetDetailsRecord | undefined => state.pokemonSetsSlice.SetDetails;

export const getIsSetDetailsLoaded = (state: RootState): boolean =>
  state.pokemonSetsSlice.isSetsRecordsLoaded;
