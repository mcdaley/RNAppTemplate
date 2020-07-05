//-----------------------------------------------------------------------------
// src/screens/auth/Register.js
//-----------------------------------------------------------------------------
import React                    from 'react'
import {
  View,
}                               from 'react-native'
import {
  Button,
  Input,
  Icon,
  Text,
}                               from 'react-native-elements'

import AuthSignUpForm           from '../../components/auth/SignUpForm'
import { AuthContext }          from '../context/AuthContext'


/**
 * Account registration screen.
 * @param {*} param0 
 */
const ScreensAuthRegister = ({navigation}) => {
  // Authentication context & error state
  const authContext       = React.useContext(AuthContext)
  const [error, setError] = React.useState(null)

  /**
   * Handle sign-in errors returned by the authAPI.signIn API. Need to 
   * pass a callback to handle the errors, so that the error can be 
   * displayed on the Login screen. 
   * @param {Error} error 
   */
  const errorHandler = (error) => {
    setError(error)
  }

  /**
   * Attempt to register the user account with their email and password.
   * @param {Object} data - submitted form data, email & password
   */
  const handleSubmit = (email, password) => {
    authContext.signUp(email, password, errorHandler)
  }

  /////////////////////////////////////////////////////////////////////////////
  // TODO: 07/05/20
  // REFACTOR INTO AN ALERT COMPONENT
  /////////////////////////////////////////////////////////////////////////////
  const errorAlert = () => {
    return (
      <Text style={{color: 'red', fontSize: 24, margin: 10}}>
        {error.message}
      </Text>
    )
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

        {error && errorAlert()}
        <AuthSignUpForm onSubmit={handleSubmit} />

        {/* Link back to sign-in */}
        <Button 
          title   = 'Sign into your account'
          type    = 'clear'
          style   = {{padding: 10}}
          onPress = {() => navigation.navigate('Login')}
        />
      </View>
    </>
  )
}

// Export the user registration screen
export default ScreensAuthRegister