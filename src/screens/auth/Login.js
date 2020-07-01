//-----------------------------------------------------------------------------
// src/screens/auth/Login.js
//-----------------------------------------------------------------------------
import React, { useState }            from 'react'
import {
  Keyboard,
  View,
}                       from 'react-native'
import {
  Button,
  Icon,
  Input,
  Text,
}                       from 'react-native-elements'

import { AuthContext }  from '../context/AuthContext'

/**
 * 
 * @param {*} param0 
 */
const ScreensAuthLogin = ({navigation}) => {
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')

  const authContext = React.useContext(AuthContext)

  const handleChangeEmail = (text) => {
    setEmail(text)
  }

  const handleChangePassword = (text) => {
    setPassword(text)
  }

  const handleSubmit = () => {
    Keyboard.dismiss()
    //* alert(`Sign in: email=${email}, password=${password}`)
    authContext.signIn(email, password)
  }

  /**
   * Render the sign-in form
   */
  return (
    <>
      <View>
        <Text h2>
          Login Screen
        </Text>
        <View style={{marginTop: 20, marginBottom: 20}}>
          <Input
            name          = 'email'
            value         = {email}
            placeholder   = 'Email address'
            onChangeText  = {handleChangeEmail}
            leftIcon      = {
              <Icon
                type  = 'ionicon'
                name  = 'ios-mail'
                style = {{size: 24, paddingRight: 5}}
              />
            }
            keyboardType      = 'email-address'
            textContentType   = 'emailAddress'
            autoCapitalize    = 'none'
            autoCompleteType  = 'email'
            errorStyle        = {{ color: 'red' }}
            errorMessage      = {'Email is required'}
          />
          <Input
            name          = 'password'
            value         = {password}
            placeholder   = 'Password'
            onChangeText  = {handleChangePassword}
            leftIcon      = {
              <Icon 
                type  = 'ionicon'
                name  = 'ios-lock'
                style = {{size: 24, paddingRight: 10}}
              />
            }
            secureTextEntry   = {true}
            keyboardType      = 'default'
            textContentType   = 'password'
            autoCapitalize    = 'none'
            autoCompleteType  = 'password'
          />
          <Button 
            title   = 'Sign In'
            style   = {{padding: 5}}
            onPress = {handleSubmit} 
          />
        </View>
        <Button 
          title   = 'Sign up for an account'
          type    = 'clear'
          style   = {{padding: 5}}
          onPress = {() => navigation.navigate('Register')}
        />
      </View>
    </>
  )
}

// Export the Login screen
export default ScreensAuthLogin