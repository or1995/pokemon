import {NavigationProp, RouteProp} from '@react-navigation/native';
import {ICardDetailsRecord} from '../../services/pokemonCards/types';

export interface ICardDetailsStateProps {
  cardDetails?: ICardDetailsRecord;
  isCardDetailsLoaded: boolean;
}

export interface ICardDetailsDispatchProps {
  onLoadData: (id: string) => void;
  onClearData: () => void;
}

export interface ICardDetailsProps
  extends ICardDetailsStateProps,
    ICardDetailsDispatchProps {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any, any>;
}
