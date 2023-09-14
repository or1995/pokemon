import React, {useEffect} from 'react';
import {AppDispatch, RootState} from '../../store/types';
import {connect} from 'react-redux';
import {FlatList, StyleSheet, View} from 'react-native';
import {ICardsDispatchProps, ICardsProps, ICardsStateProps} from './types';
import {
  getAllCards,
  getCardFilterValue,
  getIsCardsRecordsLoaded,
} from '../../store/slices/pokemonCards/selector';
import {getAllCardsThunk} from '../../store/slices/pokemonCards/thunks';
import {CardListItem} from '../../components/cardListItem/cardListItem';
import {HeaderBar} from '../../components/headerBar/headerBar';
import {colors} from '../../constants/colors';
import {SearchInput} from '../../components/searchInput/searchInput';
import {Loader} from '../../components/loader/loader';
import {setCardFilterValue} from '../../store/slices/pokemonCards/pokemonCardsSlice';

const Cards = (props: ICardsProps) => {
  useEffect(() => {
    props.onLoadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.cardFilterValue]);

  return (
    <View style={styles.container}>
      <HeaderBar title="Cards" />
      <SearchInput
        onChange={val => {
          props.onSetCardFilterValue(val);
        }}
        placeholder="Find card by HP"
      />
      {props.isCardsLoaded ? (
        <FlatList
          data={props.cards}
          renderItem={({item}) => <CardListItem card={item} />}
          keyExtractor={item => item.id}
          extraData={[props.cards, props.cardFilterValue]}
          horizontal={false}
          numColumns={2}
        />
      ) : (
        <Loader />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    alignItems: 'center',
  },
});

const mapStateToProps = (state: RootState): ICardsStateProps => ({
  cards: getAllCards(state),
  isCardsLoaded: getIsCardsRecordsLoaded(state),
  cardFilterValue: getCardFilterValue(state),
});

const mapDispatchToProps = (dispatch: AppDispatch): ICardsDispatchProps => ({
  onLoadData: () => {
    dispatch(getAllCardsThunk());
  },
  onSetCardFilterValue: val => {
    dispatch(setCardFilterValue(val));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
