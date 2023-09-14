import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {screens} from '../../constants/routes';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {INavigationBarProps} from './types';
import PokeIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../constants/colors';

export const NavigationBar = (props: INavigationBarProps) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          props.navigation.navigate(screens.ALL_CARDS);
        }}>
        <View
          style={
            props.state.index === 0 ? styles.tabButton_active : styles.tabButton
          }>
          <PokeIcon
            name="pokeball"
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
        }}>
        <View
          style={
            props.state.index === 1 ? styles.tabButton_active : styles.tabButton
          }>
          <PokeIcon
            name="animation-outline"
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
        }}>
        <View
          style={
            props.state.index === 2 ? styles.tabButton_active : styles.tabButton
          }>
          <PokeIcon
            name="pokemon-go"
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
    width: widthPercentageToDP(94),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: widthPercentageToDP(1),
    gap: widthPercentageToDP(1),
    backgroundColor: colors.WHITE,
    borderRadius: widthPercentageToDP(5),
    position: 'absolute',
    bottom: widthPercentageToDP(3),
    left: widthPercentageToDP(3),
    elevation: 3,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: heightPercentageToDP(0.5),
    paddingVertical: widthPercentageToDP(2),
    borderRadius: 4,
    width: widthPercentageToDP(30),
  },
  tabButton_active: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: heightPercentageToDP(0.5),
    paddingVertical: widthPercentageToDP(2),
    borderRadius: 18,
    width: widthPercentageToDP(30),
    backgroundColor: colors.SMOKE_WHITE,
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
