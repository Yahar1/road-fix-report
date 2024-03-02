import { View, Text, StyleSheet, Pressable, ImageBackground, ScrollView, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

const Splash = () => {
  const navigation = useNavigation();

  const handlePress = (imageNumber) =>
    navigation.navigate('General_Users', { imageNumber });

  return (
    <ScrollView>
    <View style={styles.main}>
      <View style={styles.header}>
        <View style={styles.reportedFrame}>
        
         <Pressable onPress={() => handlePress(1)} style={{ marginBottom: 15  }}>    
            <ImageBackground
              source={require('../img/ถนนพัง1.jpg')} 
              resizeMode="cover"
              style={{ borderRadius: 15, overflow: 'hidden', borderStartWidth: 10, flex: 1 ,  }}
            >
              <View>
                <Text style={styles.pressableBtn1}>     ตำบล ....... หมู่ ......</Text>
                <Text style={styles.pressableBtn2}>       Reported</Text>
              </View>
            </ImageBackground>
          </Pressable>

          <Pressable onPress={() => handlePress(2)} style={{ marginBottom: 15 }}>
            <ImageBackground
              source={require('../img/ถนนพัง2.jpg')} 
              resizeMode="cover"
              style={{ borderRadius: 15, overflow: 'hidden', borderStartWidth: 10, flex: 1 }} 
            >
              <View>
                <Text style={styles.pressableBtn1}>     ตำบล ....... หมู่ ......</Text>
                <Text style={styles.pressableBtn2}>       Reported</Text>
              </View>
            </ImageBackground>
          </Pressable>

          <Pressable onPress={() => handlePress(3)} style={{ marginBottom: 15 }}>
            <ImageBackground
              source={require('../img/ถนนพัง3.jpg')} 
              resizeMode="cover"
              style={{ borderRadius: 15, overflow: 'hidden', borderStartWidth: 10, flex: 1 }} 
            >
              <View>
                <Text style={styles.pressableBtn1}>     ตำบล ....... หมู่ ......</Text>
                <Text style={styles.pressableBtn2}>       Reported</Text>
              </View>
            </ImageBackground>
          </Pressable>
          <Text style={styles.pressableBtn}>Reported</Text>
          <Text style={styles.pressableBtn}>Reported</Text>
          <Text style={styles.pressableBtn}>Reported</Text>
          <Text style={styles.pressableBtn}>Reported</Text>
          <Text style={styles.pressableBtn}>Reported</Text>
          <Text style={styles.pressableBtn}>Reported</Text>
          <Text style={styles.pressableBtn}>Reported</Text>
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  pressableBtn2: {
    color: '#fff',
    margin: 8,
    fontSize: 16,
    textAlign: 'left',
    shadowColor: '#000',
    borderRadius: 10,
  },
  pressableBtn1: {
    color: '#fff',
    margin: 8,
    fontSize: 24,
    textAlign: 'left',
    shadowColor: '#000',
    borderRadius: 10,
  },
  pressableBtn: {                           //------------------------------------ ปรับ
    backgroundColor: '#BEBEBE',
    color: '#fff',
    padding: 20,                         
    margin: 10,
    fontSize: 24,
    textAlign: 'center',
    shadowColor: '#000',
    elevation: 4,
    borderRadius: 10,
                  
  },
  viewMoreBtn: {
    backgroundColor: '#CD853F',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#D3D3D3',
    padding: 20,
  },
  reportedFrame: {
    borderWidth: 20,
    borderColor: '#FFDEAD',
    padding: 0,
    borderRadius: 2,
    backgroundColor: '#FFDEAD',
  },
  viewMoreContainer: {
    marginTop: 40,
  },
});

export default Splash;
