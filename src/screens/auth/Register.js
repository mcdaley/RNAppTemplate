//-----------------------------------------------------------------------------
// src/screens/auth/Register.js
//-----------------------------------------------------------------------------
import React            from 'react'
import {
  View,
}                       from 'react-native'
import {
  Button,
  Text,
}                       from 'react-native-elements'

import { AuthContext }  from '../context/AuthContext'

/**
 * Account registration screen.
 * @param {*} param0 
 */
const ScreensAuthRegister = ({navigation}) => {
  const authContext = React.useContext(AuthContext)

  /**
   * Render the account sign up screen.
   */
  return (
    <>
      <View>
        <Text h2>
          Register Screen
        </Text>
        <Button 
          title   = 'Sign Up'
          style   = {{padding: 10}}
          onPress = {() => authContext.signUp('marv@bills.com', 'password')} 
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