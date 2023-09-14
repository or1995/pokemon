import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';

export const LogoBar = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/images/logo.png')}
      />
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
  },
  image: {
    width: widthPercentageToDP(20),
    height: widthPercentageToDP(8),
  },
});
