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
  Text,
}                 from 'react-native-elements'

import authAPI    from '../../api/authAPI'
import styles     from './styles'

/**
 * 
 */
const ScreensAppHome = ({navigation}) => {
  const logout = async () => {
    await authAPI.logout()
  }

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
              itemId:     34,
              otherParam: 'Thurmon Thomas'
            })
          }
        />
        <Button
          title   = 'Logout'
          style   = {{padding: 10}}
          onPress = {logout}
        />
      </View>
    </>
  )
}

// Export the Home screen
export default ScreensAppHome

