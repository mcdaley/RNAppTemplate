//-----------------------------------------------------------------------------
// src/screens/auth/Login.js
//-----------------------------------------------------------------------------
import React    from 'react'
import {
  View,
}               from 'react-native'
import {
  Button,
  Header,
  Text,
}               from 'react-native-elements'

/**
 * 
 * @param {*} param0 
 */
const ScreensAuthLogin = ({navigation}) => {
  return (
    <>
      <View>
        <Text h2>
          Login Screen
        </Text>
        <Button 
          title   = 'Go Home' 
          onPress = {() => navigation.navigate('Home')} 
        />
      </View>
    </>
  )
}

// Export the Login screen
export default ScreensAuthLogin