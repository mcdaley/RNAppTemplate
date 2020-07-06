//-----------------------------------------------------------------------------
// src/screens/app/Home.js
//-----------------------------------------------------------------------------
import React            from 'react'
import {
  StatusBar,
  View,
}                       from 'react-native'
import {
  Button,
  Text,
}                       from 'react-native-elements'
import PropTypes        from 'prop-types'

import { AuthContext }  from '../context/AuthContext'
import styles           from './styles'

/**
 * 
 */
const ScreensAppHome = ({navigation}) => {
  const authContext       = React.useContext(AuthContext)
  const [error, setError] = React.useState(null)

  const handleError = (err) => {
    setError(err)
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
          onPress = {() => authContext.signOut(handleError)}
        />
      </View>
    </>
  )
}

// ScreensAppHome PropTypes
ScreensAppHome.propTypes = {
  navigation: PropTypes.object.isRequired,
}

// Export the Home screen
export default ScreensAppHome

