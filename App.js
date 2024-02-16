import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Screen/LoginScreen/Login';
import HomeScreen from './App/Screen/HomeScreen/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen/>
      <StatusBar style="auto" />
      <Text GG />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop:20,
  },
});
