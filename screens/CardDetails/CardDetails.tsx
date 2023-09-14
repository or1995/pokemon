import React, {useEffect} from 'react';
import {AppDispatch, RootState} from '../../store/types';
import {connect} from 'react-redux';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {
  ICardDetailsDispatchProps,
  ICardDetailsProps,
  ICardDetailsStateProps,
} from './types';
import {
  getCardDetails,
  getIsCardDetailsLoaded,
} from '../../store/slices/pokemonCards/selector';
import {getCardDetailsThunk} from '../../store/slices/pokemonCards/thunks';
import {colors} from '../../constants/colors';
import {HeaderBar} from '../../components/headerBar/headerBar';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {Loader} from '../../components/loader/loader';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {clearCardDetails} from '../../store/slices/pokemonCards/pokemonCardsSlice';
import {InfoBox} from '../../components/infoBox/infoBox';

const CardDetails = (props: ICardDetailsProps) => {
  const cardId: string = props.route.params?.id;
  useEffect(() => {
    props.onLoadData(cardId);
    return () => {
      props.onClearData();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return props.isCardDetailsLoaded && props.cardDetails ? (
    <View style={styles.container}>
      <HeaderBar backButton={true} title="Card Details" />
      <ScrollView>
        <View style={styles.data}>
          <View style={styles.image_container}>
            <Image
              style={styles.image}
              width={widthPercentageToDP(44)}
              height={widthPercentageToDP(60.5)}
              source={
                props.cardDetails.image
                  ? {uri: props.cardDetails.image + '/high.png'}
                  : require('../../assets/images/placeholder.jpg')
              }
            />
          </View>
          <InfoBox label="Name" value={props.cardDetails.name} />
          <InfoBox label="Category" value={props.cardDetails.category} />
          <InfoBox label="Rarity" value={props.cardDetails.rarity} />
          <InfoBox label="HP" value={props.cardDetails.hp} />
          <InfoBox label="Stage" value={props.cardDetails.stage} />
        </View>
      </ScrollView>
    </View>
  ) : (
    <Loader />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: widthPercentageToDP(2),
    width: widthPercentageToDP(100),
  },
  data: {
    flex: 1,
    paddingTop: widthPercentageToDP(8),
    width: widthPercentageToDP(94),
    paddingHorizontal: widthPercentageToDP(4),
    alignItems: 'center',
    paddingBottom: widthPercentageToDP(25),
  },
  image_container: {
    width: widthPercentageToDP(94),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: widthPercentageToDP(4),
  },
  image: {
    width: widthPercentageToDP(55),
    height: widthPercentageToDP(75.625),
    borderRadius: widthPercentageToDP(2),
  },
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

const mapStateToProps = (state: RootState): ICardDetailsStateProps => ({
  cardDetails: getCardDetails(state),
  isCardDetailsLoaded: getIsCardDetailsLoaded(state),
});

const mapDispatchToProps = (
  dispatch: AppDispatch,
): ICardDetailsDispatchProps => ({
  onLoadData: id => dispatch(getCardDetailsThunk(id)),
  onClearData: () => dispatch(clearCardDetails),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardDetails);
