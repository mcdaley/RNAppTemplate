//-----------------------------------------------------------------------------
// src/screens/auth/Login.js
//-----------------------------------------------------------------------------
import React            from 'react'
import {
  View,
}                       from 'react-native'
import {
  Button,
  Text,
}                       from 'react-native-elements'

import { AuthContext }  from '../../../App'

/**
 * 
 * @param {*} param0 
 */
const ScreensAuthLogin = ({navigation}) => {
  const authContext = React.useContext(AuthContext)

  return (
    <>
      <View>
        <Text h2>
          Login Screen
        </Text>
        <Button 
          title   = 'Sign In'
          style   = {{padding: 5}}
          onPress = {() => authContext.signIn('marv@bills.com', 'password')} 
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