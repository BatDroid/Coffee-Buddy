import React from 'react';
import {View, StyleSheet, Linking, Platform} from 'react-native';
import {Button} from 'react-native-elements';

interface Props {
  webUrl: string;
  phone: string;
}

export default (props: Props) => {
  const {webUrl, phone} = props;

  return (
    <View style={styles.root}>
      <Button
        onPress={() => {
          let url = `${Platform.OS === 'ios' ? 'telprompt:' : 'tel:'}${phone}`;
          openLink(url);
        }}
        type="clear"
        icon={{name: 'phone', color: '#007AFF'}}
      />
      <Button
        type="clear"
        icon={{name: 'public', color: '#007AFF'}}
        onPress={() => {
          openLink(webUrl);
        }}
      />
    </View>
  );
};

function openLink(url: string) {
  Linking.canOpenURL(url)
    .then(canOpen => {
      if (!canOpen) {
        console.log("can't open");
      } else {
        return Linking.openURL(url).catch(err => Promise.reject(err));
      }
    })
    .catch(e => {
      console.log(e);
    });
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ccc',
  },
});
