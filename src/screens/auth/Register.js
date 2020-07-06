//-----------------------------------------------------------------------------
// src/screens/auth/Register.js
//-----------------------------------------------------------------------------
import React                    from 'react'
import {
  View,
}                               from 'react-native'
import PropTypes                from 'prop-types'

import { AuthContext }          from '../context/AuthContext'
import AuthSignUpForm           from '../../components/auth/SignUpForm'
import AuthFormLink             from '../../components/auth/FormLink'
import UILogo                   from '../../components/ui/Logo'
import UIErrorAlert             from '../../components/ui/ErrorAlert'
import styles                   from './styles'


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

  /**
   * Render the account sign up screen.
   */
  return (
    <>
      <View style={styles.container}>
        {/* App Logo */}
        <UILogo title='RNAppTemplate' />
        
        {/* SignUp Form */}
        <View style={styles.authFormContainer}>
          {error && <UIErrorAlert message={error.message} />}
          <AuthSignUpForm onSubmit={handleSubmit} />
        </View>
        
        {/* Link to sign-in */}
        <AuthFormLink 
          message     = 'Already have an account?'
          title       = 'Sign In'
          screen      = 'Login'
          navigation  = {navigation}
        />
      </View>
    </>
  )
}

// ScreensAuthRegister PropTypes
ScreensAuthRegister.propTypes = {
  navigation: PropTypes.object.isRequired,
}

// Export the user registration screen
export default ScreensAuthRegister