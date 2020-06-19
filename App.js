//-----------------------------------------------------------------------------
// App.js
//-----------------------------------------------------------------------------
import 'react-native-gesture-handler'

import React                    from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
}                               from 'react-native'
import {
  Button,
}                               from 'react-native-elements'
import Icon                     from 'react-native-vector-icons/FontAwesome'
import { NavigationContainer }  from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import ScreensAppHome           from './src/screens/app/Home'
import ScreensSettingsProfile   from './src/screens/settings/Profile'

// Configure the stack navigation
const Stack = createStackNavigator()

/**
 * 
 */
const App   = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName = 'Home'
        screenOptions    = {{
          title:  'Home',
          headerStyle:  {
            backgroundColor:  '#f4511e',
          },
          headerTintColor:  '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name        = 'Home' 
          component   = {ScreensAppHome}
          options     = {{
            headerLeft: () => (
              <Button title = 'Press Me' onPress = {() => alert('Clicked Me')} />
            ),
          }}
        />
        <Stack.Screen name='Profile' component={ScreensSettingsProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  
  footer: {
    color: 'navy',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

// Export the App
export default App;
