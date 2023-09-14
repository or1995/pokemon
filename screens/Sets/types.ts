import {ISetSummaryRecord} from '../../services/pokemonSets/types';

export interface ISetsStateProps {
  sets: ISetSummaryRecord[];
  isSetsLoaded: boolean;
}

export interface ISetsDispatchProps {
  onLoadData: () => void;
}

export interface ISetsProps extends ISetsStateProps, ISetsDispatchProps {}
