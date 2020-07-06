//-----------------------------------------------------------------------------
// src/screens/settings/Settings.js
//-----------------------------------------------------------------------------
import React      from 'react'
import {
  View,
}                 from 'react-native'
import {
  Button,
  Text,
}                 from 'react-native-elements'
import PropTypes  from 'prop-types'

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

// ScreensSettingsSettings PropTypes
ScreensSettingsSettings.propTypes = {
  navigation: PropTypes.object.isRequired,
}

// Export the Settings screen
export default ScreensSettingsSettings