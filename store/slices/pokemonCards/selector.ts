import {
  ICardDetailsRecord,
  ICardSummaryRecord,
} from '../../../services/pokemonCards/types';
import {RootState} from '../../types';

export const getAllCards = (state: RootState): ICardSummaryRecord[] =>
  state.pokemonCardsSlice.cardsRecords;

export const getIsCardsRecordsLoaded = (state: RootState): boolean =>
  state.pokemonCardsSlice.isCardsRecordsLoaded;

export const getCardDetails = (
  state: RootState,
): ICardDetailsRecord | undefined => state.pokemonCardsSlice.cardDetails;

export const getIsCardDetailsLoaded = (state: RootState): boolean =>
  state.pokemonCardsSlice.isCardDetailsLoaded;

export const getCardFilterValue = (state: RootState): string | undefined =>
  state.pokemonCardsSlice.cardFilterValue;
