// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './assets/Loginpage';
import RegisterPage from './assets/RegisterPage';
// import { SafeAreaView } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  return (
    // <SafeAreaView>
       <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Register" component={RegisterPage} />
    </Stack.Navigator>
  </NavigationContainer>
  // </SafeAreaView>
   
  );
};

export default App;
