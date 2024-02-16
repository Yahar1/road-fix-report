import { View, Text, Image, Button, Linking } from 'react-native';
import React, { useCallback } from 'react';

const images = {
  1: require('../img/ถนนพัง1.jpg'),
  2: require('../img/ถนนพัง2.jpg'),
  3: require('../img/ถนนพัง3.jpg'),
};

const Detail = ({ navigation, route }) => {
  const { id, latitude, longitude } = route.params; // Destructure the params object

  const handleMap = useCallback(async () => {
    await Linking.openURL(`https://maps.google.com/maps?q=${latitude},${longitude}`);
  }, [latitude, longitude]);

  return (
    <View>
      <Image source={images[id]} style={{ width: '100%', height: 333 }} />
      <Text style={{ fontSize: 20, marginTop: 10, padding: 10 }}>ตำแหน่ง GPS</Text>
      <Button title="Map" onPress={handleMap} />
    </View>
  );
};

export default Detail;
