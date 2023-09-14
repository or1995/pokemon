import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {ISearchInputProps} from './types';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {colors} from '../../constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

export const SearchInput = (props: ISearchInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={props.onChange}
        placeholder={props.placeholder}
        placeholderTextColor="#94989B"
        keyboardType="numeric"
      />
      <View style={styles.searchIcon}>
        <Icon
          name="search"
          size={widthPercentageToDP(5)}
          color={colors.SOFT_BLACK}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: widthPercentageToDP(90),
    height: widthPercentageToDP(10),
    backgroundColor: colors.GRAY,
    borderRadius: widthPercentageToDP(5),
    paddingHorizontal: widthPercentageToDP(10),
    marginBottom: heightPercentageToDP(2),
    marginTop: heightPercentageToDP(2),
  },
  searchIcon: {
    position: 'absolute',
    left: widthPercentageToDP(8),
    top: heightPercentageToDP(3),
    zIndex: 2,
  },
});
