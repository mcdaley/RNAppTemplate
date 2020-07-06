//-----------------------------------------------------------------------------
// src/components/ui/Logo.js
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

const UILogo = ({title}) => (
  <View style={styles.logoContainer}>
    <Text style={styles.logoTitle}>{title}</Text>
  </View>
)

// UILogo PropTypes
UILogo.propTypes = {
  title:  PropTypes.string.isRequired,
}

// Export the logo
export default UILogo