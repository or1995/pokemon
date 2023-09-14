import React, {useEffect} from 'react';
import {AppDispatch, RootState} from '../../store/types';
import {connect} from 'react-redux';
import {FlatList, StyleSheet, View} from 'react-native';
import {ISeriesDispatchProps, ISeriesProps, ISeriesStateProps} from './types';
import {
  getAllSeries,
  getIsSeriesRecordsLoaded,
} from '../../store/slices/pokemonSeries/selector';
import {getAllSeriesThunk} from '../../store/slices/pokemonSeries/thunks';
import {SerieListItem} from '../../components/serieListItem/serieListItem';
import {colors} from '../../constants/colors';
import {Loader} from '../../components/loader/loader';
import {HeaderBar} from '../../components/headerBar/headerBar';

const Series = (props: ISeriesProps) => {
  useEffect(() => {
    props.onLoadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return props.isSeriesLoaded ? (
    <View style={styles.container}>
      <HeaderBar title="Series" />
      <FlatList
        data={props.series}
        renderItem={({item}) => <SerieListItem serie={item} />}
        keyExtractor={item => item.id}
        extraData={props.series}
        horizontal={false}
        numColumns={2}
      />
    </View>
  ) : (
    <Loader />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    alignItems: 'center',
  },
});

const mapStateToProps = (state: RootState): ISeriesStateProps => ({
  series: getAllSeries(state),
  isSeriesLoaded: getIsSeriesRecordsLoaded(state),
});

const mapDispatchToProps = (dispatch: AppDispatch): ISeriesDispatchProps => ({
  onLoadData: () => {
    dispatch(getAllSeriesThunk());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Series);
