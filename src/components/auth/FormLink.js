//-----------------------------------------------------------------------------
// src/components/auth/FormLink.js
//-----------------------------------------------------------------------------
import React          from 'react'
import {
  View, 
}                     from 'react-native'
import {
  Text,
}                     from 'react-native-elements'
import PropTypes      from 'prop-types'

import UIButtonLink   from '../ui/ButtonLink'
import styles         from './styles'

/**
 * Link to redirect users to the SignIn or SignUp form when the users are
 * either signing into the app or signing up for a new account.
 * @props   {String}     message
 * @props   {String}     title
 * @props   {String}     screen
 * @returns {Component}  Link to either sign-in or sign-up form
 */
const AuthFormLink = ({message, title, screen, navigation}) => (
  <View style={styles.signInContainer}>
    <Text style={styles.signInLabel}>
      {message}
    </Text>
    <UIButtonLink 
      title   = {title}
      onPress = {() => navigation.navigate(screen)}
    />
  </View> 
)

// AuthFormLink PropTypes
AuthFormLink.propTypes = {
  message:    PropTypes.string.isRequired,
  title:      PropTypes.string.isRequired,
  screen:     PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
}

// Export the sign-in/sign-up redirect link
export default AuthFormLink