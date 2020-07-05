//-----------------------------------------------------------------------------
// src/screens/auth/Login.js
//-----------------------------------------------------------------------------
import React                    from 'react'
import {
  View,
}                               from 'react-native'
import {
  Button,
  Text,
}                               from 'react-native-elements'

import AuthLoginForm            from '../../components/auth/LoginForm'
import { AuthContext }          from '../context/AuthContext'


/**
 * Sign In screen
 * @param {*} param0 
 */
const ScreensAuthLogin = ({navigation}) => {
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
   * Attempt to sign in the user with the email and password. Need to pass an
   * callback to the signIn api, so that we can show a login error returned
   * by the API on the login screen.
   * @param {String} email
   * @param {String} password
   */
  const handleSubmit = (email, password) => {
    //* authContext.testError(errorHandler)
    authContext.signIn(email, password, errorHandler)
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
   * Render the sign-in form
   */
  return (
    <>
      <View>
        <Text h2>
          Login Screen
        </Text>
        {error && errorAlert()}
        <AuthLoginForm onSubmit={handleSubmit} />
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