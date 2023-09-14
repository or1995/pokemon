import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {colors} from '../../constants/colors';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {IInfoBoxProps} from './types';

export const InfoBox = (props: IInfoBoxProps) => {
  return (
    <View style={styles.info}>
      <Text style={styles.label}>{props.label}</Text>
      <Text style={styles.value}>{props.value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  info: {
    width: widthPercentageToDP(94),
    backgroundColor: colors.GRAY,
    borderRadius: 10,
    marginBottom: widthPercentageToDP(4),
    padding: widthPercentageToDP(4),
  },
  label: {
    fontSize: RFPercentage(2),
  },
  value: {
    fontSize: RFPercentage(3),
    marginBottom: widthPercentageToDP(2),
  },
});
