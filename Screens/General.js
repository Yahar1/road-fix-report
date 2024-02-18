import { View, Text, StyleSheet, Image, Pressable, Button } from 'react-native'
import React from 'react'

const General = ({ navigation }) => {
    const onPress = () => {
      navigation.navigate('Detail');
    };

  return (
    <View style={styles.main}>
      <Pressable
        onPress={onPress}  // Call the onPress function when Pressable is pressed
        onLongPress={() => console.warn('long press')}
      >
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
          <Text style={[styles.pressableBtn, styles.viewMoreBtn]}>Add More Report...</Text>
        </View>
      </Pressable>
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
    shadowColor: '#fff',
    elevation: 4,
    borderRadius: 10,
  },
  viewMoreBtn: {
    backgroundColor: '#4169E1',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#D3D3D3',
    padding: 20,
  },
  reportedFrame: {
    borderWidth: 2,
    borderColor: '#87CEFA',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#87CEFA',
  },
  viewMoreContainer: {
    marginTop: 40,
  },
});

export default General