//-----------------------------------------------------------------------------
// src/screens/app/Screens.js
//-----------------------------------------------------------------------------
import React                      from 'react'
import { createStackNavigator }   from '@react-navigation/stack'
import { Icon }                   from 'react-native-elements'

import ScreensAppHome             from './Home'
import ScreensAppInbox            from './Inbox'
import { ui }                     from '../../styles/ui'

/**
 * Define the App navigation stack which contains all of the screens in the 
 * main application navigation stack. It also contains the styling for all 
 * of the headers in the main app navigation.
 */
const    AppStack = createStackNavigator();
function AppScreens() {
  return (
    <AppStack.Navigator
      initialRouteName = 'Home'
      screenOptions    = {ui.header}
    >
      <AppStack.Screen 
        name      = 'Home'  
        component = {ScreensAppHome} 
        options   = {{
          headerRight: () => (
            <Icon
              name            = 'ios-cog'
              type            = 'ionicon'
              color           = '#fff'
              size            = {30}
              containerStyle  = {{paddingRight: 20}}
            />
          )
        }}
      />
      <AppStack.Screen
        name      = 'Inbox'
        component = {ScreensAppInbox}
        options   = {
          ({route, navigation}) => ({ 
            headerRight: () => (
              <Icon
                name            = 'ios-beer'
                type            = 'ionicon'
                color           = '#fff'
                size            = {30}
                containerStyle  = {{paddingRight: 20}}
                onPress         = {() => navigation.navigate('Home')}
              />
            )
          })
        }
      />
    </AppStack.Navigator>
  )
}

// Export the AppScreens
export default AppScreens