import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import React from 'react';

const Splash = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.main}>
        <View style={styles.header}>
          <View style={styles.reportedFrame}>
            <Text style={styles.pressableBtn}>Reported</Text>
            <Text style={styles.pressableBtn}>Reported</Text>
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
  pressableBtn: {
    backgroundColor: '#BEBEBE',
    color: '#fff',
    padding: 10,
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
    borderWidth: 2,
    borderColor: '#FFDEAD',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#FFDEAD',
  },
  viewMoreContainer: {
    marginTop: 40,
  },
});

export default Splash;
