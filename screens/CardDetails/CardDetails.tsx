import React from 'react';
import {AppDispatch, RootState} from '../../store/types';
import {connect} from 'react-redux';
import {Text, View} from 'react-native';
import {
  ICardDetailsDispatchProps,
  ICardDetailsProps,
  ICardDetailsStateProps,
} from './types';

const CardDetails = (props: ICardDetailsProps) => {
  return (
    <View>
      <Text>CardDetails</Text>
    </View>
  );
};

const mapStateToProps = (state: RootState): ICardDetailsStateProps => ({});

const mapDispatchToProps = (
  dispatch: AppDispatch,
): ICardDetailsDispatchProps => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CardDetails);
