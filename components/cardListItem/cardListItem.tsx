import React from 'react';
import {Pressable, StyleSheet, View, Image, Text} from 'react-native';
import {ICardListItemProps} from './types';
import {colors} from '../../constants/colors';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {screens} from '../../constants/routes';

export const CardListItem = (props: ICardListItemProps) => {
  const navigation = useNavigation<any>();

  return (
    <Pressable
      onPress={() => {
        //navigation.navigate(screens.CARD_DETAILS, { id: props.card.id });
        navigation.navigate(screens.CARD_DETAILS, {
          id: props.card.id,
        });
      }}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          width={widthPercentageToDP(44)}
          height={widthPercentageToDP(60.5)}
          source={
            props.card.image
              ? {uri: props.card.image + '/low.png'}
              : require('../../assets/images/placeholder.jpg')
          }
        />
      </View>
      <Text style={styles.title}>
        {props.card.name.length > 15
          ? props.card.name.slice(0, 15) + '...'
          : props.card.name}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: widthPercentageToDP(60.5),
    width: widthPercentageToDP(44),
    margin: widthPercentageToDP(2),
    backgroundColor: colors.BLUE,
    borderRadius: widthPercentageToDP(2),
    //overflow: 'hidden',
    elevation: 2,
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  title: {
    fontWeight: '300',
    marginLeft: widthPercentageToDP(3),
    marginBottom: widthPercentageToDP(1),
  },
  image: {
    flex: 1,
    width: widthPercentageToDP(44),
    height: widthPercentageToDP(60.5),
    borderRadius: widthPercentageToDP(2),
  },
});
