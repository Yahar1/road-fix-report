import { View, Text, ScrollView, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'

const General_Users = ({ route }) => {
  const { imageNumber } = route.params;

  const getImageData = (number) => {
    // นำเลขรูปมาเป็นตัวเลือกในการระบุข้อมูลรูป
    switch (number) {
      case 1:
        return {
          imageSource: require(`../img/ถนนพัง1.jpg`),
          tambon: 'น้ำรึม',
          moo: '1',               
          latitude: '35°07\'52"N',  
          longitude: '136°55\'11"E',    
        };
      case 2:     
        // จะทำเช่นเดียวกันสำหรับรูปที่ 2      
        return {
          imageSource: require(`../img/ถนนพัง2.jpg`),
          tambon: 'น้ำลึก',
          moo: '2',
          latitude: '36°08\'53"N',
          longitude: '137°56\'12"E',
        };
      case 3:
        // จะทำเช่นเดียวกันสำหรับรูปที่ 3
        return {
          imageSource: require(`../img/ถนนพัง3.jpg`),
          tambon: 'น้ำวน',
          moo: '3',
          latitude: '37°09\'54"N',
          longitude: '138°57\'13"E',
        };
      default:
        return null;
    }
  };

  const imageData = getImageData(imageNumber);

  if (!imageData) {
    return (
      <View>
        <Text>No data found for image {imageNumber}</Text>
      </View>
    );
  }

  const handleMapPress = () => {
    const { latitude, longitude } = imageData;
    const url = `https://www.google.com/maps/place/${latitude}+${longitude}`;
    Linking.openURL(url); //---------------------------------------------------------- RUL
  };

  return (
    <ScrollView style={{ padding: 10 }}>
      <View>
        <Text style={{ fontSize: 20 }}> รูปที่ {imageNumber} </Text>
      </View>
      <View style={{ margin: 10 }}>
        <Image source={imageData.imageSource} style={{ width: '100%', height: 300 }} />
        <Text style={{ fontSize: 20, marginTop: 10 }}> ตำบล : {imageData.tambon} </Text>
        <Text style={{ fontSize: 20, marginTop: 10 }}> หมู่ : {imageData.moo} </Text>
        <Text style={{ fontSize: 20, marginTop: 10 }}> Latitude : {imageData.latitude} </Text>
        <Text style={{ fontSize: 20, marginTop: 10 }}> Longitude : {imageData.longitude} </Text>

        <Button 
          title="Map"
          onPress={handleMapPress}
          color="blue"
        />

      </View>
    </ScrollView>
  );
}

export default General_Users;
