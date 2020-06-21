//-----------------------------------------------------------------------------
// src/screens/auth/Logout.js
//-----------------------------------------------------------------------------
import React    from 'react'
import {
  View,
}               from 'react-native'
import {
  Button,
  Text,
}               from 'react-native-elements'

/**
 * 
 * @param {*} param0 
 */
const ScreensAuthLogout = ({navigation}) => {
  return (
    <>
      <View>
        <Text h2>
          Logout Screen
        </Text>
        <Button 
          title   = 'Go Home' 
          onPress = {() => navigation.navigate('Home')} 
        />
      </View>
    </>
  )
}

// Export the Logout screen
export default ScreensAuthLogout