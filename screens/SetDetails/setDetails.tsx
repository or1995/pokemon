import React, {useEffect} from 'react';
import {AppDispatch, RootState} from '../../store/types';
import {connect} from 'react-redux';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {
  ISetDetailsDispatchProps,
  ISetDetailsProps,
  ISetDetailsStateProps,
} from './types';
import {colors} from '../../constants/colors';
import {HeaderBar} from '../../components/headerBar/headerBar';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {Loader} from '../../components/loader/loader';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {getSetDetailsThunk} from '../../store/slices/pokemonSets/thunks';
import {
  getIsSetDetailsLoaded,
  getSetDetails,
} from '../../store/slices/pokemonSets/selector';
import {clearSetDetails} from '../../store/slices/pokemonSets/pokemonSetsSlice';
import {InfoBox} from '../../components/infoBox/infoBox';

const SetDetails = (props: ISetDetailsProps) => {
  const setId: string = props.route.params?.id;
  useEffect(() => {
    props.onLoadData(setId);
    return () => {
      props.onClearData();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return props.isSetDetailsLoaded && props.setDetails ? (
    <View style={styles.container}>
      <HeaderBar backButton title="Set Details" />
      <ScrollView>
        <View style={styles.data}>
          <View style={styles.image_container}>
            <Image
              style={styles.image}
              width={widthPercentageToDP(44)}
              height={widthPercentageToDP(44)}
              resizeMode="contain"
              source={
                props.setDetails.logo
                  ? {uri: props.setDetails.logo + '.png'}
                  : require('../../assets/images/placeholder.jpg')
              }
            />
          </View>
          <InfoBox label="Name" value={props.setDetails.name} />
          <InfoBox
            label="Total Card Count"
            value={props.setDetails.cardCount.total}
          />
          <InfoBox label="Serie" value={props.setDetails.serie.name} />
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
  },
  image_container: {
    width: widthPercentageToDP(94),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: widthPercentageToDP(4),
  },
  image: {
    width: widthPercentageToDP(55),
    height: widthPercentageToDP(55),
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

const mapStateToProps = (state: RootState): ISetDetailsStateProps => ({
  setDetails: getSetDetails(state),
  isSetDetailsLoaded: getIsSetDetailsLoaded(state),
});

const mapDispatchToProps = (
  dispatch: AppDispatch,
): ISetDetailsDispatchProps => ({
  onLoadData: id => dispatch(getSetDetailsThunk(id)),
  onClearData: () => dispatch(clearSetDetails),
});

export default connect(mapStateToProps, mapDispatchToProps)(SetDetails);
