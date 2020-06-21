//-----------------------------------------------------------------------------
// src/screens/settings/Profile.js
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
const ScreensSettingsProfile = ({navigation}) => {

  return (
    <View>
      <Text h2>Profile Screen</Text>
      <Button 
        title   = 'Go to App Settings' 
        style   = {{padding: 10}}
        onPress = {() => navigation.navigate('Settings')} 
      />
    </View>
  )
}

// Export the Profile screen
export default ScreensSettingsProfile