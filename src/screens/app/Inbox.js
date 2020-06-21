//-----------------------------------------------------------------------------
// src/screens/app/Inbox.js
//-----------------------------------------------------------------------------
import React      from 'react'
import {
  View,
}                 from 'react-native'
import {
  Button,
  Text,
}                 from 'react-native-elements'

import styles     from './styles'

/**
 * 
 */
const ScreensAppInbox = ({route, navigation}) => {
  const { itemId, otherParam } = route.params

  return (
    <>
      <View>
        <Text h2>
          Inbox Screen
        </Text>
        <Text>Item ID = {itemId}</Text>
        <Text>Other Param = {otherParam}</Text>
        <Button 
          title   = 'Go Home'
          style   = {{padding: 10}}
          onPress = {() => navigation.navigate('Home')} 
        />
        <Button
          title   = 'Go Back'
          style   = {{padding: 10}}
          onPress = {() => navigation.goBack()}
        />
      </View>
    </>
  )
}

// Export the Inbox screen
export default ScreensAppInbox

