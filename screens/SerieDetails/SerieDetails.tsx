import React from 'react';
import {AppDispatch, RootState} from '../../store/types';
import {connect} from 'react-redux';
import {Text, View} from 'react-native';
import {
  ISerieDetailsDispatchProps,
  ISerieDetailsProps,
  ISerieDetailsStateProps,
} from './types';

const SerieDetails = (props: ISerieDetailsProps) => {
  return (
    <View>
      <Text>SerieDetails</Text>
    </View>
  );
};

const mapStateToProps = (state: RootState): ISerieDetailsStateProps => ({});

const mapDispatchToProps = (
  dispatch: AppDispatch,
): ISerieDetailsDispatchProps => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SerieDetails);
