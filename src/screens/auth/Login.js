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
import UILogo                   from '../../components/ui/Logo'
import UIErrorAlert             from '../../components/ui/ErrorAlert'
import { AuthContext }          from '../context/AuthContext'
import styles                   from './styles'


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
    //* authContext.signIn(email, password, errorHandler)
    setError(new Error('Enter valid email/password, Dude'))
  }

  /**
   * Render the sign-in form
   */
  return (
    <>
      <View style={styles.container}>
        <UILogo title='RNAppTemplate' />
        <View style={styles.authFormContainer}>
          {error && <UIErrorAlert message={error.message} />}
          <AuthLoginForm onSubmit={handleSubmit} />
        </View>
        <Button 
          title           = 'Sign up for an account'
          type            = 'clear'
          titleStyle      = {styles.primaryLink}
          containerStyle  = {styles.buttonContainer}
          onPress         = {() => navigation.navigate('Register')}
        />
      </View>
    </>
  )
}

// Export the Login screen
export default ScreensAuthLogin