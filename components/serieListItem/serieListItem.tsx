import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {ISerieListItemProps} from './types';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {colors} from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';
import {screens} from '../../constants/routes';

export const SerieListItem = (props: ISerieListItemProps) => {
  const navigation = useNavigation<any>();

  return (
    <Pressable
      onPress={() => {
        navigation.navigate(screens.SET_DETAILS, {id: props.serie.id});
      }}>
      <View style={styles.container}>
        <View style={styles.image_container}>
          <Image
            style={styles.image}
            width={widthPercentageToDP(80)}
            height={widthPercentageToDP(80)}
            resizeMode={'contain'}
            source={
              props.serie.logo
                ? {uri: props.serie.logo + '.png'}
                : require('../../assets/images/placeholderTwo.jpg')
            }
          />
        </View>
        <Text style={styles.title}>{props.serie.name}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: widthPercentageToDP(46),
    width: widthPercentageToDP(42),
    margin: widthPercentageToDP(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: '300',
    marginLeft: widthPercentageToDP(3),
    marginBottom: widthPercentageToDP(1),
    marginTop: widthPercentageToDP(3),
  },
  image: {
    flex: 1,
    width: widthPercentageToDP(40),
    height: widthPercentageToDP(40),
  },
  image_container: {
    height: widthPercentageToDP(30),
    width: widthPercentageToDP(30),
    borderRadius: widthPercentageToDP(18),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.LIGHT_BLUE,
    elevation: 2,
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
});
