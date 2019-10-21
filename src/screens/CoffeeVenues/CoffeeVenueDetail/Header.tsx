import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {ProgressImage} from '../../../components';

const {height} = Dimensions.get('window');

interface Props {
  imageUrl: string;
  name: string;
  rating: number;
}

export default (props: Props) => {
  const {imageUrl, name, rating} = props;
  return (
    <ProgressImage source={{uri: imageUrl}} style={styles.image}>
      <View style={styles.overlay}>
        <View style={styles.basicInfoContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.rateTitle}>
            Rate: <Text>{rating}</Text>
          </Text>
        </View>
      </View>
    </ProgressImage>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: height * 0.35,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  overlay: {
    backgroundColor: '#ccc6',
    flex: 1,
    justifyContent: 'flex-end',
  },
  name: {
    fontSize: 25,
    color: 'white',
  },
  rateTitle: {
    fontSize: 20,
    color: 'white',
  },
  basicInfoContainer: {
    marginBottom: height * 0.02,
    marginLeft: 10,
  },
});
