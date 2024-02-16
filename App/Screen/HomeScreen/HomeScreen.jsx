import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function HomeScreen() {
//    const {user, isLoading}=useUser();
  return (
    <View>
        <View style={styles.Container}>
            <Image source={require('./../../../assets/Images/user.png')}
            style={styles.UserImage}/>
            <Text>Username</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    UserImage:{width:50, height:50, borderRadius:99},
    Container:{padding:20, paddingRight:330}
})