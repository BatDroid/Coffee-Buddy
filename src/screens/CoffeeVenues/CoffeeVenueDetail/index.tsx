import React from 'react';
import {VenueType} from '../../../redux/coffeeVenue/actions/types';
import {NavigationScreenProp} from 'react-navigation';
import {View, SafeAreaView, Dimensions, StyleSheet} from 'react-native';
import Header from './Header';
import Contact from './Contact';
import Location from './Location';

const {height} = Dimensions.get('window');

type NavigationParams = {
  venue: VenueType;
};
type NavigationType = NavigationScreenProp<Props, NavigationParams>;

interface Props {
  navigation: NavigationType;
}

const CoffeeVenueDetail = (props: Props) => {
  const {navigation} = props;
  const venue = navigation.getParam('venue');
  const {image_url, name, rating, phone, url, coordinates} = venue;
  return (
    <SafeAreaView>
      <Header name={name} imageUrl={image_url} rating={rating} />
      <View style={styles.contentContainer}>
        <Contact phone={phone} webUrl={url} />
        <Location coordinates={coordinates} />
      </View>
    </SafeAreaView>
  );
};

CoffeeVenueDetail.navigationOptions = {
  headerTransparent: true,
};

export default CoffeeVenueDetail;

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: height * 0.3,
  },
});
