import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {screens} from '../../tabNavigations/routes';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {INavigationBarProps} from './types';
import Icon from 'react-native-vector-icons/Feather';
import {colors} from '../../constants/colors';

export const NavigationBar = (props: INavigationBarProps) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          props.navigation.navigate(screens.ALL_CARDS);
          console.log(props.state.index);
        }}>
        <View style={styles.tabButton}>
          <Icon
            name="layers"
            size={widthPercentageToDP(6)}
            color={props.state.index === 0 ? colors.BLUE : colors.SOFT_BLACK}
          />
          <Text
            style={
              props.state.index === 0
                ? styles.tabButton_text_active
                : styles.tabButton_text
            }>
            Cards
          </Text>
        </View>
      </Pressable>
      <Pressable
        onPress={() => {
          props.navigation.navigate(screens.ALL_SETS);
          console.log(props.state.index);
        }}>
        <View style={styles.tabButton}>
          <Icon
            name="database"
            size={widthPercentageToDP(6)}
            color={props.state.index === 1 ? colors.BLUE : colors.SOFT_BLACK}
          />
          <Text
            style={
              props.state.index === 1
                ? styles.tabButton_text_active
                : styles.tabButton_text
            }>
            Sets
          </Text>
        </View>
      </Pressable>
      <Pressable
        onPress={() => {
          props.navigation.navigate(screens.ALL_SERIES);
          console.log(props.state.index);
        }}>
        <View style={styles.tabButton}>
          <Icon
            name="archive"
            size={widthPercentageToDP(6)}
            color={props.state.index === 2 ? colors.BLUE : colors.SOFT_BLACK}
          />
          <Text
            style={
              props.state.index === 2
                ? styles.tabButton_text_active
                : styles.tabButton_text
            }>
            Series
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP(100),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: widthPercentageToDP(15),
    paddingVertical: widthPercentageToDP(3),
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: heightPercentageToDP(0.5),
    paddingVertical: widthPercentageToDP(1),
    paddingHorizontal: widthPercentageToDP(2),
    borderRadius: 2,
  },
  tabButton_text: {
    fontWeight: '500',
    color: colors.SOFT_BLACK,
  },
  tabButton_text_active: {
    fontWeight: '500',
    color: colors.BLUE,
  },
});
