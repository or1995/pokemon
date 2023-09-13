import React from 'react';
import {AppDispatch, RootState} from '../../store/types';
import {connect} from 'react-redux';
import {Text, View} from 'react-native';
import {ICardsDispatchProps, ICardsProps, ICardsStateProps} from './types';

const Cards = (props: ICardsProps) => {
  return (
    <View>
      <Text>Cards</Text>
    </View>
  );
};

const mapStateToProps = (state: RootState): ICardsStateProps => ({});

const mapDispatchToProps = (dispatch: AppDispatch): ICardsDispatchProps => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
