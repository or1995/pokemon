import {NavigationProp, RouteProp} from '@react-navigation/native';
import {ISetDetailsRecord} from '../../services/pokemonSets/types';

export interface ISetDetailsStateProps {
  setDetails?: ISetDetailsRecord;
  isSetDetailsLoaded: boolean;
}

export interface ISetDetailsDispatchProps {
  onLoadData: (id: string) => void;
  onClearData: () => void;
}

export interface ISetDetailsProps
  extends ISetDetailsStateProps,
    ISetDetailsDispatchProps {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any, any>;
}
