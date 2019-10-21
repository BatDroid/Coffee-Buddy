import React from 'react';
import {
  FlatListProps,
  FlatList,
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';
import {VenueType} from '../../redux/coffeeVenue/actions/types';
import {ProgressImage} from '../../components';
import {TouchableHighlight} from 'react-native-gesture-handler';

const {height} = Dimensions.get('window');
const ITEM_HEIGHT = height * 0.25;

interface Props extends Omit<FlatListProps<VenueType>, 'renderItem'> {
  onItemPressed: (item: VenueType) => void;
}

function renderItem(item: VenueType, onItemPressed: (item: VenueType) => void) {
  const {image_url, name} = item;
  const onPress = () => {
    onItemPressed(item);
  };
  return (
    <TouchableHighlight onPress={onPress}>
      <View>
        <ProgressImage style={styles.image} source={{uri: image_url}}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{name}</Text>
          </View>
        </ProgressImage>
      </View>
    </TouchableHighlight>
  );
}

export default (props: Props) => {
  const {onItemPressed, ...listProps} = props;
  const rItem = ({item}: {item: VenueType}) => renderItem(item, onItemPressed);
  return (
    <FlatList
      keyExtractor={i => i.id}
      renderItem={rItem}
      getItemLayout={(_, index) => ({
        length: ITEM_HEIGHT,
        offset: ITEM_HEIGHT * index,
        index,
      })}
      {...listProps}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: height * 0.25,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  nameContainer: {
    alignSelf: 'flex-end',
    backgroundColor: '#aaaa',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20%',
    width: '100%',
  },
  name: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
