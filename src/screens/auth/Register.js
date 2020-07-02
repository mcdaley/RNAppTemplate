//-----------------------------------------------------------------------------
// src/screens/auth/Register.js
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
  Input,
  Icon,
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
      .required('Password is required'),
  confirmPassword:
    yup.string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
})

/**
 * Account registration screen.
 * @param {*} param0 
 */
const ScreensAuthRegister = ({navigation}) => {
  // Setup react-hook-form
  const { control, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  })

  // Authentication context
  const authContext = React.useContext(AuthContext)

  /**
   * Attempt to register the user account with their email and password.
   * @param {Object} data - submitted form data, email & password
   */
  const onSubmit = ({email, password} = {}) => {
    Keyboard.dismiss()
    authContext.signUp(email, password)
  }


  /**
   * Render the account sign up screen.
   */
  return (
    <>
      <View>
        <Text h2>
          Register Screen
        </Text>
        <View style={{marginTop: 20, marginBottom: 20}}>
          {/* Email Input */}
          <Controller 
            control       = {control}
            name          = 'email'
            defaultValue  = ''
            render        = { ({onChange, onBlur, value}) => (
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
                errorMessage      = {errors.email ? errors.email.message : null}
              />
            )}
          />
          
          {/* Password Input */}
          <Controller 
            control       = {control}
            name          = 'password'
            defaultValue  = ''
            render        = { ({onChange, onBlur, value}) => (
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
                errorMessage      = {errors.password ? errors.password.message : null}
              />
            )}
          />

          {/* Confirm Password Input */}
          <Controller 
            control       = {control}
            name          = 'confirmPassword'
            defaultValue  = ''
            render        = { ({onChange, onBlur, value}) => (
              <Input
                value         = {value}
                placeholder   = 'Confirm password'
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
                errorMessage      = {errors.confirmPassword ? errors.confirmPassword.message : null}
              />
            )}
          />
        </View>
        
        {/* Submit button */}
        <Button 
          title   = 'Sign Up'
          style   = {{padding: 10}}
          onPress = {handleSubmit(onSubmit)} 
        />

        {/* Link back to sign-in */}
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