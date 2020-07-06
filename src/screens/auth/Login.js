//-----------------------------------------------------------------------------
// src/screens/auth/Login.js
//-----------------------------------------------------------------------------
import React                from 'react'
import {
  View,
}                           from 'react-native'

import { AuthContext }      from '../context/AuthContext'
import AuthLoginForm        from '../../components/auth/LoginForm'
import AuthFormLink         from '../../components/auth/FormLink'
import UILogo               from '../../components/ui/Logo'
import UIErrorAlert         from '../../components/ui/ErrorAlert'
import styles               from './styles'


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
    authContext.signIn(email, password, errorHandler)
    //* setError(new Error('Enter valid email/password, Dude'))
  }

  /**
   * Render the sign-in form
   */
  return (
    <>
      <View style={styles.container}>
        {/* App Logo */}
        <UILogo title='RNAppTemplate' />

        {/* SignIn Form */}
        <View style={styles.authFormContainer}>
          {error && <UIErrorAlert message={error.message} />}
          <AuthLoginForm onSubmit={handleSubmit} />
        </View>

        {/* Link to SignUp */}
        <AuthFormLink 
          message     = 'Need an account?'
          title       = 'Sign Up'
          screen      = 'Register'
          navigation  = {navigation}
        />
      </View>
    </>
  )
}

// Export the Login screen
export default ScreensAuthLogin