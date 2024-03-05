// HomeScreen.js

import React from 'react';
import { View, Button } from 'react-native';

const LoginPage = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default LoginPage;
