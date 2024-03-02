import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './Screens/Splash';
import General_Users from './Screens/General_Users';
import Login from './Screens/Login';
import Sign_Up from './Screens/Sign_Up';

import General from './Screens/General';
import Detail from './Screens/Detail';

const Stack = createNativeStackNavigator();

const App = () => {
  const onPress = () => {
    console.log('Pressed');
  };
  
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Splash"
          component={Splash}
          options={({ navigation }) => ({
          headerStyle: { backgroundColor: '#D2691E' },
          headerTitleStyle: { color: '#FFFFFF' },
          title:'   แจ้งซ่อมถนน',
          headerLeft: () => (
            <Image
                source={require('./img/Logomain.png')}
                style={{ width: 40, height: 40, paddingLeft:20 }}
              />
          ),
          headerRight: () => (
            <Pressable
              onPress={() => {
                // Implement your navigation logic here
                navigation.navigate('Login');
              }}
              style={{ marginRight: 10 }}
            >
              <Image
                source={require('./img/Login.png')}
                style={{ width: 40, height: 40 }}
              />
            </Pressable>
          ),
        })}

        />
        <Stack.Screen
          name="General_Users"
          component={General_Users}
          options={{ title: 'Back' }}             //======================================= 
        
        />                                      
        <Stack.Screen
          name="Login"
          component={Login}
          options={({ navigation }) => ({
          headerStyle: { backgroundColor: '#FFA07A' },
          headerTitleStyle: { color: '#FFFFFF' },
          title:'   แจ้งซ่อมถนน',
          headerLeft: () => (
            <Pressable
              onPress={() => {
                // Implement your navigation logic here
                navigation.navigate('Splash');
              }}
              style={{ marginRight: 10 }}
            >
              <Image
                source={require('./img/Logomain.png')}
                style={{ width: 40, height: 40, paddingLeft:20 }}
              />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable
              onPress={() => {
                // Implement your navigation logic here
                navigation.navigate('Login');
              }}
              style={{ marginRight: 10 }}
            >
              {/* <Image
                source={require('./img/operator.png')}
                style={{ width: 40, height: 40 }}
              /> */}
            </Pressable>
          ),
        })}

        />
        <Stack.Screen
          name="Sign_Up"
          component={Sign_Up}
          options={{ title: 'Sign In' }}
        />

        <Stack.Screen
          name="General"
          component={General}
          options={({ navigation }) => ({
          headerStyle: { backgroundColor: '#1E90FF' },
          headerTitleStyle: { color: '#FFFFFF' },
          title:'   แจ้งซ่อมถนน',
          headerLeft: () => (
            <Image
                source={require('./img/user.png')}
                style={{ width: 40, height: 40, paddingLeft:20 }}
              />
          ),
          headerRight: () => (
            <Pressable
              onPress={() => {
                // Implement your navigation logic here
                navigation.navigate('Login');
              }}
              style={{ marginRight: 10 }}
            >
              <Image
                source={require('./img/logout.png')}
                style={{ width: 40, height: 40 }}
              />
            </Pressable>
          ),
        })}

        />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App