import { View, Text, ScrollView, Image, Pressable } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  const onPressItem = (id, name) => {
    navigation.navigate('Detail', {id: id, name: name})
  }

  return (
    <ScrollView style={{padding: 10}}>
      <View>
        <Text style={{fontSize: 30}}>ถนน</Text>
      </View>

      <View style={{marginTop: 10}}> 
       <Pressable onPress={() => onPressItem(1, 'ตำแหน่ง GPS')}>                                                          
        <Image source={require('../img/ถนนพัง1.jpg')} style={{width: '100%', height: 333}} />
       <Text style={{fontSize: 20, marginTop: 10}}>ตำแหน่ง GPS</Text>                          
       <Text>รายละเอียดในเพื้นที่</Text>                                                              
       </Pressable>    
      </View>

      <View style={{marginTop: 10}}> 
      <Pressable onPress={() => onPressItem(2, 'ตำแหน่ง GPS')}> 
        <Image source={require('../img/ถนนพัง2.jpg')} style={{width: '100%', height: 333}} />
       <Text style={{fontSize: 20, marginTop: 10}}>ตำแหน่ง GPS</Text>                              
       <Text>รายละเอียดในเพื้นที่</Text>                                  
       </Pressable>                         
      </View>
      
      <View style={{marginTop: 10}}> 
      <Pressable onPress={() => onPressItem(3, 'ตำแหน่ง GPS')}> 
        <Image source={require('../img/ถนนพัง3.jpg')} style={{width: '100%', height: 333}} />
       <Text style={{fontSize: 20, marginTop: 10}}>ตำแหน่ง GPS</Text>                          
       <Text>รายละเอียดในเพื้นที่</Text>    
       </Pressable>                                                       
      </View>
    </ScrollView>
  )
}

export default Home