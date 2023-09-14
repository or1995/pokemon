import React, {useEffect} from 'react';
import {AppDispatch, RootState} from '../../store/types';
import {connect} from 'react-redux';
import {FlatList, StyleSheet, View} from 'react-native';
import {ISetsDispatchProps, ISetsProps, ISetsStateProps} from './types';
import {
  getAllSets,
  getIsSetsRecordsLoaded,
} from '../../store/slices/pokemonSets/selector';
import {getAllSetsThunk} from '../../store/slices/pokemonSets/thunks';
import {SetListItem} from '../../components/setListItem/setListItem';
import {colors} from '../../constants/colors';
import {HeaderBar} from '../../components/headerBar/headerBar';
import {Loader} from '../../components/loader/loader';

const Sets = (props: ISetsProps) => {
  useEffect(() => {
    props.onLoadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return props.isSetsLoaded ? (
    <View style={styles.container}>
      <HeaderBar title="Sets" />
      <FlatList
        data={props.sets}
        renderItem={({item}) => <SetListItem set={item} />}
        keyExtractor={item => item.id}
        extraData={props.sets}
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

const mapStateToProps = (state: RootState): ISetsStateProps => ({
  sets: getAllSets(state),
  isSetsLoaded: getIsSetsRecordsLoaded(state),
});

const mapDispatchToProps = (dispatch: AppDispatch): ISetsDispatchProps => ({
  onLoadData: () => {
    dispatch(getAllSetsThunk());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Sets);
