//-----------------------------------------------------------------------------
// src/components/auth/LoginForm.js
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
}                               from 'react-native-elements'
import PropTypes                from 'prop-types'

import styles                   from './styles'

// Define login form validation schema
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
 * 
 * @param {*} props 
 */
const AuthLoginForm = (props) => {
  // Setup react-hook-form
  const { control, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  })

  /**
   * Attempt to sign in the user with the email and password.
   * @param {Object} data - submitted form data, email & password
   */
  const onSubmit = ({email, password} = {}) => {
    Keyboard.dismiss()
    props.onSubmit(email, password)
  }

  /**
   * Render the sign-in form
   */
  return (
    <>
      <View style={styles.container}>
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
                  type            = 'ionicon'
                  name            = 'ios-mail'
                  iconStyle       = {styles.icon}
                  containerStyle  = {styles.iconContainer}
                />
              }
              keyboardType      = 'email-address'
              textContentType   = 'emailAddress'
              autoCapitalize    = 'none'
              autoCompleteType  = 'email'
              errorStyle        = {styles.errorMessage}
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
                  type            = 'ionicon'
                  name            = 'ios-lock'
                  iconStyle       = {styles.icon}
                  containerStyle  = {styles.iconContainer}
                />
              }
              secureTextEntry   = {true}
              keyboardType      = 'default'
              textContentType   = 'password'
              autoCapitalize    = 'none'
              autoCompleteType  = 'password'
              errorStyle        = {styles.error}
              errorMessage      = {errors.password && errors.password.message}
            />
          )}
          name          = 'password'
          defaultValue  = ''
        />
        
        <Button 
          title           = 'Sign In'
          titleStyle      = {styles.primaryButtonTitle}
          buttonStyle     = {styles.primaryButton}
          containerStyle  = {styles.buttonContainer}
          onPress         = {handleSubmit(onSubmit)} 
        />
      </View>
    </>
  )
}

// AuthLoginForm PropTypes
AuthLoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

// Export the Login Form
export default AuthLoginForm