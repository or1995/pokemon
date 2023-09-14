import {ICardSummaryRecord} from '../../services/pokemonCards/types';

export interface ICardsStateProps {
  cards: ICardSummaryRecord[];
  isCardsLoaded: boolean;
  cardFilterValue?: string;
}

export interface ICardsDispatchProps {
  onLoadData: () => void;
  onSetCardFilterValue: (val: string) => void;
}

export interface ICardsProps extends ICardsStateProps, ICardsDispatchProps {}
