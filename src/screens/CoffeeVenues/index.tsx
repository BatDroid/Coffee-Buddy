import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';

import {Dispatch, bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getCoffeeVenues} from '../../redux/coffeeVenue/actions';
import {VenuesStoreType} from '../../redux/coffeeVenue/reducers';
import {ScreenLoading, ServerError} from '../../components';
import VenuesList from './VenuesList';
import {VenueType} from '../../redux/coffeeVenue/actions/types';

interface Props extends VenuesStoreType {
  getVenues: Function;
}

const CoffeeVenues = (props: Props) => {
  const {getVenues, isFetching, venues, errorStatus} = props;
  useEffect(() => {
    getVenues();
  }, []);
  if (isFetching || !venues) return <ScreenLoading />;
  if (errorStatus) return <ServerError />;
  return (
    <SafeAreaView style={{flex: 1}}>
      <VenuesList data={venues} onItemPressed={(i: VenueType) => {}} />
    </SafeAreaView>
  );
};

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({getVenues: getCoffeeVenues}, dispatch);
}

function mapStateToProps({coffeeVenues}: {coffeeVenues: VenuesStoreType}) {
  return {
    ...coffeeVenues,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CoffeeVenues);
