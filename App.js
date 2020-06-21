//-----------------------------------------------------------------------------
// App.js
//-----------------------------------------------------------------------------
import 'react-native-gesture-handler'

import React                    from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
}                                   from 'react-native'
import {
  Button,
  Icon,
}                                   from 'react-native-elements'
import { NavigationContainer }      from '@react-navigation/native'
import { createStackNavigator }     from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import ScreensAppHome               from './src/screens/app/Home'
import ScreensAppInbox              from './src/screens/app/Inbox'
import ScreensSettingsProfile       from './src/screens/settings/Profile'
import ScreensSettingsSettings      from './src/screens/settings/Settings'

// Configure the stack navigation
const Stack = createStackNavigator()

// Configure App stack navigation
const    AppStack = createStackNavigator();
function AppStackScreen() {
  return (
    <AppStack.Navigator
      initialRouteName = 'Home'
      screenOptions    = {{
        headerStyle:  {
          backgroundColor:  '#f4511e',
        },
        headerTintColor:  '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
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
  );
}

// Configure Settings stack navigation
const    SettingsStack = createStackNavigator()
function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator
      initialRouteName = 'Profile'
      screenOptions    = {{
        headerStyle:  {
          backgroundColor:  '#f4511e',
        },
        headerTintColor:  '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
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

const Tab = createBottomTabNavigator()

/**
 * 
 */
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return (
              <Icon 
                name  = {iconName} 
                type  = 'ionicon' 
                size  = {size}
                color = {color} 
              />
            )
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home"     component={AppStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}


// Styles
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  
  footer: {
    color: 'navy',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

// Export the App
export default App;
