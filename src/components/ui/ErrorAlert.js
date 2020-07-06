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

import styles       from './styles'

const UIErrorAlert = ({message}) => (
  <View style={styles.errorAlertContainer}>
    <Text style={styles.errorAlertMessage}>
      {message}
    </Text>
  </View>
)

// Export the error alert
export default UIErrorAlert