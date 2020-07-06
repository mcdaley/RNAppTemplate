//-----------------------------------------------------------------------------
// src/screens/settings/Screens.js
//-----------------------------------------------------------------------------
import React                      from 'react'
import { createStackNavigator }   from '@react-navigation/stack'

import ScreensSettingsProfile     from './Profile'
import ScreensSettingsSettings    from './Settings'
import { ui }                     from '../../styles/ui'

/**
 * Define the Settings navigation stack which contains all of the screens in the 
 * settings navigation stack. It also contains the styling for all 
 * of the headers in the settings navigation.
 */
const    SettingsStack = createStackNavigator()
function SettingsScreen() {
  return (
    <SettingsStack.Navigator
      initialRouteName = 'Profile'
      screenOptions    = {ui.header}
    >
      <SettingsStack.Screen 
        name      = 'Profile' 
        component = {ScreensSettingsProfile} 
      />
      <SettingsStack.Screen 
        name      = 'Settings'
        component = {ScreensSettingsSettings}
      />
    </SettingsStack.Navigator>
  )
}

// Export the stack of settings screens
export default SettingsScreen