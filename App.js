import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './Screens/Splash';
import Login from './Screens/Login';
import Sign_Up from './Screens/Sign_Up';

import General from './Screens/General';
import Detail from './Screens/Detail';
import Home from './Screens/Home';

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
          title:'Road Fix Report',
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
          name="Login"
          component={Login}
          options={{ title: 'Sign In' }}
        />
        <Stack.Screen
          name="Sign_Up"
          component={Sign_Up}
          options={{ title: 'Sign In' }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="General"
          component={General}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App