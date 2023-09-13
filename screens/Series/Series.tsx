import React from 'react';
import {AppDispatch, RootState} from '../../store/types';
import {connect} from 'react-redux';
import {Text, View} from 'react-native';
import {ISeriesDispatchProps, ISeriesProps, ISeriesStateProps} from './types';

const Series = (props: ISeriesProps) => {
  return (
    <View>
      <Text>Series</Text>
    </View>
  );
};

const mapStateToProps = (state: RootState): ISeriesStateProps => ({});

const mapDispatchToProps = (
  dispatch: AppDispatch,
): ISeriesDispatchProps => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Series);
