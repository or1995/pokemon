import {
  ICardDetailsRecord,
  ICardSummaryRecord,
} from '../../../services/pokemonCards/types';

export interface IPokemonCardsState {
  cardsRecords: ICardSummaryRecord[];
  isCardsRecordsLoaded: boolean;
  cardDetails?: ICardDetailsRecord;
  isCardDetailsLoaded: boolean;
  cardFilterValue?: string;
}
