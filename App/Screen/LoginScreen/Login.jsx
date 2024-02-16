import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <View style={{alignItem:'center'}}>
      <Image source={require('./../../../assets/Images/construck.png')}
        styles={styles.ConstruckImage}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    ConstruckImage:{width:230, height:450, marginTop:70, boradWidth:4, boradColor:'#000'}
})
