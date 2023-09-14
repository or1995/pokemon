import {ISerieSummaryRecord} from '../../services/pokemonSeries/types';

export interface ISeriesStateProps {
  series: ISerieSummaryRecord[];
  isSeriesLoaded: boolean;
}

export interface ISeriesDispatchProps {
  onLoadData: () => void;
}

export interface ISeriesProps extends ISeriesStateProps, ISeriesDispatchProps {}
