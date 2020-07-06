//-----------------------------------------------------------------------------
// src/components/ui/ErrorAlert.js
//-----------------------------------------------------------------------------
import React        from 'react'
import {
  View,
}                   from 'react-native'
import {
  Text,
}                   from 'react-native-elements'
import PropTypes    from 'prop-types'

import styles       from './styles'

/**
 * Renders an error alert message.
 * @props {String} message
 */
const UIErrorAlert = ({message}) => (
  <View style={styles.errorAlertContainer}>
    <Text style={styles.errorAlertMessage}>
      {message}
    </Text>
  </View>
)

// UIErrorAlert PropTypes
UIErrorAlert.propTypes = {
  message:  PropTypes.string.isRequired,
}

// Export the error alert
export default UIErrorAlert