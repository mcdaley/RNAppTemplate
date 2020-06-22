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

import authAPI  from '../../api/authAPI'

/**
 * 
 * @param {*} param0 
 */
const ScreensAuthLogin = ({navigation}) => {
  const signIn = async () => {
    const user = await authAPI.login()
    console.log(`[debug] Signed in user= `, user)
  }

  return (
    <>
      <View>
        <Text h2>
          Login Screen
        </Text>
        <Button 
          title   = 'Sign In'
          style   = {{padding: 5}}
          onPress = {signIn} 
        />
        <Button 
          title   = 'Sign up for an account'
          style   = {{padding: 5}}
          onPress = {() => navigation.navigate('Register')}
        />
      </View>
    </>
  )
}

// Export the Login screen
export default ScreensAuthLogin