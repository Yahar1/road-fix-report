import { View, Text, ScrollView, StyleSheet, Image, Button } from 'react-native'
import React from 'react'
import data from './Data.json'

const Home = () => {
  return (
    <ScrollView>
      {data.map(d => (
        <View key={d.id} style = {{ marginBottom: 10}}>
        <Image
          style={styles.coverImage}         
          source={{ uri: d.coverimage }}                          //รูปภาพไม่ขึ้น
        /> 
        <View style = {styles.textBox}>
          <Text style = {{ fontSize: 20}}>{d.name}</Text>
          <Text>{d.detail}</Text>                  
        </View>
      </View>        
      ))}          
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    coverImage: {
        width: "100%",
        height: 300,
    },
    textBox: {
      margin: 10
    }
})

export default Home