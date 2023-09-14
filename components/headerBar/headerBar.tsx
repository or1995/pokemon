import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {IHeaderBarProps} from './types';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {colors} from '../../constants/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

export const HeaderBar = (props: IHeaderBarProps) => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      {props.backButton && (
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <View style={styles.back}>
            <Icon
              name="arrow-back-ios-new"
              size={widthPercentageToDP(5)}
              color={colors.SOFT_BLACK}
            />
          </View>
        </Pressable>
      )}
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP(100),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: widthPercentageToDP(2),
    paddingHorizontal: widthPercentageToDP(4),
    backgroundColor: colors.WHITE,
    fontFamily: 'Work Sans',
  },
  title: {
    fontSize: RFPercentage(4),
    fontWeight: '700',
    color: colors.SOFT_BLACK,
  },
  back: {
    marginRight: widthPercentageToDP(2),
  },
});
