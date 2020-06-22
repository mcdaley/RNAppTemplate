//-----------------------------------------------------------------------------
// src/screens/auth/Loading.js
//-----------------------------------------------------------------------------
import React            from 'react'
import {
  ActivityIndicator,
  StatusBar,
  View,
}                       from 'react-native'
import {
  Text,
}                       from 'react-native-elements'

const ScreensAuthLoading = () => {
  return (
    <View style={styles.container}>
      <Text h4 style={{padding: 10}}>
        Loading App Template...
      </Text>
      <ActivityIndicator />
      <StatusBar barStyle='default' />
    </View>
  )
}

styles = {
  container: {
    flex:             1,
    flexDirection:    'column',
    justifyContent:   'center',
    alignItems:       'center',
  }
}

// Export the authentication loading screen
export default ScreensAuthLoading