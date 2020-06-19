//-----------------------------------------------------------------------------
// src/screens/app/Home.js
//-----------------------------------------------------------------------------
import React      from 'react'
import {
  StatusBar,
  View,
}                 from 'react-native'
import {
  Button,
  Header,
  Text,
}                 from 'react-native-elements'

import styles     from './styles'

/**
 * 
 */
const ScreensAppHome = ({navigation}) => {
  return (
    <>
      <View>
        <Text h2>
          Home Screen
        </Text>
        <Button 
          title   = 'Go to Profile' 
          onPress = {
            () => navigation.navigate('Profile', {
              itemId:     86,
              otherParam: 'Lorem ipsum, Dude'
            })
          } 
        />
      </View>
    </>
  )
}

// Export the Home screen
export default ScreensAppHome

