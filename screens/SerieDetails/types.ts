import {NavigationProp, RouteProp} from '@react-navigation/native';
import {ISerieDetailsRecord} from '../../services/pokemonSeries/types';

export interface ISerieDetailsStateProps {
  serieDetails?: ISerieDetailsRecord;
  isSerieDetailsLoaded: boolean;
}

export interface ISerieDetailsDispatchProps {
  onLoadData: (id: string) => void;
  onClearData: () => void;
}

export interface ISerieDetailsProps
  extends ISerieDetailsStateProps,
    ISerieDetailsDispatchProps {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any, any>;
}
