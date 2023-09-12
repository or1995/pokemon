import {
  ISerieDetailsRecord,
  ISerieSummaryRecord,
} from '../../../services/pokemonSeries/types';
import {RootState} from '../../types';

export const getAllSeries = (state: RootState): ISerieSummaryRecord[] =>
  state.pokemonSeriesSlice.seriesRecords;

export const getIsSeriesRecordsLoaded = (state: RootState): boolean =>
  state.pokemonSeriesSlice.isSeriesRecordsLoaded;

export const getSerieDetails = (
  state: RootState,
): ISerieDetailsRecord | undefined => state.pokemonSeriesSlice.SerieDetails;

export const getIsSerieDetailsLoaded = (state: RootState): boolean =>
  state.pokemonSeriesSlice.isSerieDetailsLoaded;
