import {
  ISerieDetailsRecord,
  ISerieSummaryRecord,
} from '../../../services/pokemonSeries/types';

export interface IPokemonSeriesState {
  seriesRecords: ISerieSummaryRecord[];
  isSeriesRecordsLoaded: boolean;
  SerieDetails?: ISerieDetailsRecord;
  isSerieDetailsLoaded: boolean;
}
