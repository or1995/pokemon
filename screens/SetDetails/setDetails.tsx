import React from 'react';
import {AppDispatch, RootState} from '../../store/types';
import {connect} from 'react-redux';
import {Text, View} from 'react-native';
import {
  ISetDetailsDispatchProps,
  ISetDetailsProps,
  ISetDetailsStateProps,
} from './types';

const SetDetails = (props: ISetDetailsProps) => {
  return (
    <View>
      <Text>SetDetails</Text>
    </View>
  );
};

const mapStateToProps = (state: RootState): ISetDetailsStateProps => ({});

const mapDispatchToProps = (
  dispatch: AppDispatch,
): ISetDetailsDispatchProps => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SetDetails);
