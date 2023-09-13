import React from 'react';
import {AppDispatch, RootState} from '../../store/types';
import {connect} from 'react-redux';
import {Text, View} from 'react-native';
import {ISetsDispatchProps, ISetsProps, ISetsStateProps} from './types';

const Sets = (props: ISetsProps) => {
  return (
    <View>
      <Text>Sets</Text>
    </View>
  );
};

const mapStateToProps = (state: RootState): ISetsStateProps => ({});

const mapDispatchToProps = (dispatch: AppDispatch): ISetsDispatchProps => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Sets);
