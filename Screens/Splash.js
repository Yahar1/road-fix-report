import { View, Text, StyleSheet, Image, Pressable, ImageBackground } from 'react-native';
import React from 'react';

const Splash = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate('Login');
  };

  return (
    
    <View style={styles.main}>
        <View style={styles.header}>
          <View style={styles.reportedFrame}>
            <ImageBackground
              source={require('./../img/ถนนพัง1.jpg')} 
              resizeMode="cover"
              style={{borderRadius:99, borderStartWidth:10,}} 
            >
          <View>
            <Text style={styles.pressableBtn1}>     ตำบล ....... หมู่ ......</Text>
            <Text style={styles.pressableBtn2}>       Reported</Text>
        </View>
          </ImageBackground>

            <Text style={styles.pressableBtn}>Reported</Text>
            <Text style={styles.pressableBtn}>Reported</Text>
            <Text style={styles.pressableBtn}>Reported</Text>
            <Text style={styles.pressableBtn}>Reported</Text>
          </View>
        </View>
        <View style={styles.viewMoreContainer}>
          <Text style={[styles.pressableBtn, styles.viewMoreBtn]}>View More...</Text>
        </View>
    </View>
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
  pressableBtn: {
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
