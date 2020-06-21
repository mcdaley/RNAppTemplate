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
          title   = 'Inbox'
          style   = {{padding: 10}}
          onPress = {() => navigation.navigate('Inbox', {
              itemId:     78,
              otherParam: 'Bruce Smith'
            })
          }
        />
      </View>
    </>
  )
}

// Export the Home screen
export default ScreensAppHome

