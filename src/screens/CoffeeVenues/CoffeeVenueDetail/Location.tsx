import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import {CoordinateType} from '../../../redux/coffeeVenue/actions/types';
import { Dimensions } from 'react-native';

const {height} = Dimensions.get("window");
interface Props {
  coordinates: CoordinateType;
}

export default (props: Props) => {
  const {coordinates} = props;
  return (
    <MapView
      provider={null}
      style={{
        width: '100%',
        height: height * 0.2,
      }}
      initialRegion={{
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      <Marker coordinate={coordinates} />
    </MapView>
  );
};
