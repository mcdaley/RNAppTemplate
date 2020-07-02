//-----------------------------------------------------------------------------
// src/screens/auth/Login.js
//-----------------------------------------------------------------------------
import React                    from 'react'
import { useForm, Controller }  from 'react-hook-form'
import { yupResolver }          from '@hookform/resolvers'
import * as yup                 from 'yup'
import {
  Keyboard,
  View,
}                               from 'react-native'
import {
  Button,
  Icon,
  Input,
  Text,
}                               from 'react-native-elements'

import { AuthContext }          from '../context/AuthContext'

// Define form validation schema
const schema = yup.object().shape({
  email:  
    yup.string()
      .email('Must be a valid email address')
      .max(128, 'Email must be 128 characters or less')
      .required('Email is require'),
  password:
    yup.string()
      .max(128, 'Email must be 128 characters or less')
      .required('Password is required')
})

/**
 * Sign In screen
 * @param {*} param0 
 */
const ScreensAuthLogin = ({navigation}) => {
  // Setup react-hook-form
  const { control, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  })

  // Authentication context
  const authContext = React.useContext(AuthContext)

  /**
   * Attempt to sign in the user with the email and password.
   * @param {Object} data - submitted form data, email & password
   */
  const onSubmit = ({email, password} = {}) => {
    Keyboard.dismiss()
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
          <Controller 
            control = {control}
            render  = { ({onChange, onBlur, value}) => (
              <Input 
                value         = {value}
                placeholder   = 'Email address'
                onBlur        = {onBlur}
                onChangeText  = {(value) => onChange(value)}
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
                errorMessage      = {errors.email && errors.email.message}
              />
            )}
            name          = 'email'
            defaultValue  = ''
          />
          
          <Controller 
            control = {control}
            render  = { ({onChange, onBlur, value}) => (
              <Input
                value         = {value}
                placeholder   = 'Password'
                onBlur        = {onBlur}
                onChangeText  = {(value) => onChange(value)}
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
                errorStyle        = {{ color: 'red' }}
                errorMessage      = {errors.password && errors.password.message}
              />
            )}
            name          = 'password'
            defaultValue  = ''
          />
          
          <Button 
            title   = 'Sign In'
            style   = {{padding: 5}}
            onPress = {handleSubmit(onSubmit)} 
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