//-----------------------------------------------------------------------------
// src/screens/settings/Profile.js
//-----------------------------------------------------------------------------
import React from 'react'
import {
  View,
}                 from 'react-native'
import {
  Button,
  Header,
  Text,
}                 from 'react-native-elements'

/**
 * 
 */
const ScreensSettingsProfile = ({route, navigation}) => {
  const { itemId, otherParam } = route.params

  return (
    <View>
      <Text h2>Profile Screen</Text>
      <Text>itemId:     {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>

      <Button title='Go to Home' onPress={() => navigation.navigate('Home')} />
      <Button title='Go Back' onPress={()=> navigation.goBack()} style={{paddingTop: 5}} />
    </View>
  )
}

// Export the Profile screen
export default ScreensSettingsProfile