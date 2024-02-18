import { View, Text, Image, Button, Linking, StyleSheet } from 'react-native';
import React, { useCallback } from 'react';
import data from './Data.json'

const Detail = ({ navigation, route }) => {
  let d = data.find(o => o.id == route.params.id)

  const handleMap = useCallback(async () => {
    await Linking.openURL('https://maps.google.com/maps?q='+d.latitude+','+d.longitude);
  })

  return (
    <View>
      <Image style={styles.coverImage} source={{ uri: d.coverimage }} />
      <View style={styles.textBox}>
        <Text style={{ fontSize: 20 }}>{d.name}</Text>
        <Text>{d.detail}</Text>
        <Text>{d.latitude}</Text>
        <Text>{d.longitude}</Text>
        <Button title="Map" onPress={handleMap} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  coverImage: {
    width: '100%',
    height: 300,
  },
  textBox: {
    margin: 10,
  },
});

export default Detail;
