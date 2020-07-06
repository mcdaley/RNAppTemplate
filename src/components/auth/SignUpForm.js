//-----------------------------------------------------------------------------
// src/components/auth/SignUpForm.js
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
import PropTypes                from 'prop-types'

import styles                   from './styles'

// Define sign-up form validation schema
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
 * 
 * @param {*} props 
 */
const AuthSignUpForm = (props) => {
  // Setup react-hook-form
  const { control, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  })

  /**
   * Attempt to register the user account with their email and password.
   * @param {Object} data - submitted form data, email & password
   */
  const onSubmit = ({email, password} = {}) => {
    Keyboard.dismiss()
    props.onSubmit(email, password)
  }

  /**
   * Render the sign-up form
   */
  return (
    <>
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
              errorStyle        = {styles.errorMessage}
              errorMessage      = {errors.password && errors.password.message}
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
              errorStyle        = {styles.errorMessage}
              errorMessage      = {errors.confirmPassword && errors.confirmPassword.message}
            />
          )}
        />

        {/* Submit button */}
        <Button 
          title           = 'Sign Up'
          titleStyle      = {styles.primaryButtonTitle}
          buttonStyle     = {styles.primaryButton}
          containerStyle  = {styles.buttonContainer}
          onPress         = {handleSubmit(onSubmit)} 
        />
      </View>
    </>
  )
}

// AuthSignUpForm PropTypes
AuthSignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

// Export the sign-up form
export default AuthSignUpForm
