//-----------------------------------------------------------------------------
// src/screens/auth/Register.js
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

import authAPI  from '../../api/authAPI'

/**
 * 
 * @param {*} param0 
 */
const ScreensAuthRegister = ({navigation}) => {
  const signUp = () => {
    authAPI.login()
  }

  return (
    <>
      <View>
        <Text h2>
          Register Screen
        </Text>
        <Button 
          title   = 'Sign Up'
          style   = {{padding: 10}}
          onPress = {signUp} 
        />
        <Button 
          title   = 'Sign into your account'
          style   = {{padding: 10}}
          onPress = {() => navigation.navigate('Login')}
        />
      </View>
    </>
  )
}

// Export the user registration screen
export default ScreensAuthRegister