import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  NativeEventEmitter,
  Dimensions,
  NativeModules,
} from 'react-native';
import {Text, Button} from 'react-native-elements';
import {ProgressImage} from '../../../components';

const {height} = Dimensions.get('window');

const mockIntialData = [
  'https://s3-media3.fl.yelpcdn.com/bphoto/awl6IdmjH7RJu_8qwGj_DQ/o.jpg',
  'https://s3-media4.fl.yelpcdn.com/bphoto/0VlZLjS9qGmJlFYjUpFuxw/o.jpg',
];

function renderItem({item}: {item: string}) {
  return <ProgressImage source={{uri: item}} style={styles.image} />;
}

export default () => {
  const images = useCameraManager(mockIntialData);
  return (
    <View style={styles.root}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Images</Text>
        <Button
          onPress={() => {
            NativeModules.CameraManager.takeImage();
          }}
          type="clear"
          icon={{name: 'add', color: '#007AFF'}}
        />
      </View>
      <FlatList
        data={images}
        keyExtractor={i => i}
        renderItem={renderItem}
        horizontal
      />
    </View>
  );
};

function useCameraManager(initialImages: string[]): string[] {
  let [images, setImages] = useState(initialImages);
  const listener = (res: {image: string}) => {
    if (res && res.image) {
      setImages([...images, res.image]);
    }
  };
  useEffect(() => {
    const cameraEvent = new NativeEventEmitter(NativeModules.CameraManager);
    cameraEvent.addListener('onImagePicked', listener);
    return () => {
      cameraEvent.removeListener("onImagePicked", listener);
    };
  }, [images]);
  return images;
}

const styles = StyleSheet.create({
  root: {},
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 3,
    marginLeft: 10,
    color: '#666',
  },
  image: {
    height: height * 0.25,
    width: height * 0.25,
  },
});
