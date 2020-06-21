//-----------------------------------------------------------------------------
// src/screens/settings/Settings.js
//-----------------------------------------------------------------------------
import React from 'react'
import {
  View,
}                 from 'react-native'
import {
  Button,
  Text,
}                 from 'react-native-elements'

/**
 * 
 */
const ScreensSettingsSettings = ({navigation}) => {

  return (
    <View>
      <Text h2>Settings Screen</Text>
      <Button 
        title   = 'Go Back'
        style   = {{padding: 10}} 
        onPress = {()=> navigation.goBack()} 
      />
    </View>
  )
}

// Export the Settings screen
export default ScreensSettingsSettings