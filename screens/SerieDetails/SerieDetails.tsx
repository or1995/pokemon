import React, {useEffect} from 'react';
import {AppDispatch, RootState} from '../../store/types';
import {connect} from 'react-redux';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {
  ISerieDetailsDispatchProps,
  ISerieDetailsProps,
  ISerieDetailsStateProps,
} from './types';
import {colors} from '../../constants/colors';
import {HeaderBar} from '../../components/headerBar/headerBar';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {Loader} from '../../components/loader/loader';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {
  getIsSerieDetailsLoaded,
  getSerieDetails,
} from '../../store/slices/pokemonSeries/selector';
import {getSerieDetailsThunk} from '../../store/slices/pokemonSeries/thunks';
import {clearSerieDetails} from '../../store/slices/pokemonSeries/pokemonSeriesSlice';
import {InfoBox} from '../../components/infoBox/infoBox';

const SetDetails = (props: ISerieDetailsProps) => {
  const serieId: string = props.route.params?.id;
  useEffect(() => {
    props.onLoadData(serieId);
    return () => {
      props.onClearData();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return props.isSerieDetailsLoaded && props.serieDetails ? (
    <View style={styles.container}>
      <HeaderBar backButton title="Serie Details" />
      <ScrollView>
        <View style={styles.data}>
          <View style={styles.image_container}>
            <Image
              style={styles.image}
              width={widthPercentageToDP(44)}
              height={widthPercentageToDP(44)}
              resizeMode="contain"
              source={
                props.serieDetails.logo
                  ? {uri: props.serieDetails.logo + '.png'}
                  : require('../../assets/images/placeholder.jpg')
              }
            />
          </View>
          <InfoBox label="Name" value={props.serieDetails.name} />
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

const mapStateToProps = (state: RootState): ISerieDetailsStateProps => ({
  serieDetails: getSerieDetails(state),
  isSerieDetailsLoaded: getIsSerieDetailsLoaded(state),
});

const mapDispatchToProps = (
  dispatch: AppDispatch,
): ISerieDetailsDispatchProps => ({
  onLoadData: id => dispatch(getSerieDetailsThunk(id)),
  onClearData: () => dispatch(clearSerieDetails),
});

export default connect(mapStateToProps, mapDispatchToProps)(SetDetails);
