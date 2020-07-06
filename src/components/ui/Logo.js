//-----------------------------------------------------------------------------
// src/components/ui/Logo.js
//-----------------------------------------------------------------------------
import React    from 'react'
import {
  View,
}               from 'react-native'
import {
  Text,
}               from 'react-native-elements'
import styles   from './styles'

const UILogo = ({title}) => (
  <View style={styles.logoContainer}>
    <Text style={styles.logoTitle}>{title}</Text>
  </View>
)

// Export the logo
export default UILogo