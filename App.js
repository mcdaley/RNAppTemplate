//-----------------------------------------------------------------------------
// App.js
//-----------------------------------------------------------------------------
import 'react-native-gesture-handler'

import React, { useEffect }             from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
}                                       from 'react-native'
import {
  Button,
  Icon,
}                                       from 'react-native-elements'
import { NavigationContainer }          from '@react-navigation/native'
import { createStackNavigator }         from '@react-navigation/stack'
import { createBottomTabNavigator }     from '@react-navigation/bottom-tabs'

import ScreensAuthLoading               from './src/screens/auth/Loading'
import ScreensAuthLogin                 from './src/screens/auth/Login'
import ScreensAuthRegister              from './src/screens/auth/Register'

import AppScreens                       from './src/screens/app/Screens'
import SettingsScreens                  from './src/screens/settings/Screens'

import { AuthContext }                  from './src/screens/context/AuthContext'
import authAPI                          from './src/api/authAPI'
import { ui }                           from './src/styles/ui'

// Authentication stack navigation
const     AuthStack = createStackNavigator()
function  AuthStackScreens() {
  return (
    <AuthStack.Navigator
      initialRouteName  = 'Login'
      screenOptions     = {ui.header}
    >
      <AuthStack.Screen
        name      = 'Login'
        component = {ScreensAuthLogin}
      />
      <AuthStack.Screen 
        name      = 'Register'
        component = {ScreensAuthRegister}
      />
    </AuthStack.Navigator>

  )
}

const Tab = createBottomTabNavigator()

// Setup authentication logic
let   initialState = {
  isLoading:    true,
  isLoggedIn:   false,
  token:        null,
  error:        null,
}

const reducer = (state, action) => {
  function getPayload(payload, field) {
    return (payload == null || payload[field] == null) ? null : payload[field]
  }

  switch(action.type) {
    case 'RESTORE_TOKEN':
      console.log(`[debug] RESTORE_TOKEN, action= `, action)
      return {
        ...state,
        isLoggedIn: getPayload(action.payload, 'email'),
        token:      getPayload(action.payload, 'token'),
        isLoading:  false,
      }
    case 'SIGN_UP':
      console.log(`[debug] reducer SIGN_UP, action= `, action)
      return {
        ...state,
        isLoading:  false,
        isLoggedIn: getPayload(action.payload, 'email'),
        token:      getPayload(action.payload, 'token'),
      }
    case 'SIGN_IN':
      console.log(`[debug] reducer SIGN_IN, action= `, action)
      return {
        ...state,
        isLoading:  false,
        isLoggedIn: getPayload(action.payload, 'email'),
        token:      getPayload(action.payload, 'token'),
      }
    case 'SIGN_OUT':
      return {
        ...state,
        isLoggedIn: false,
        token:      null,
      }
    default:
      return state
  }
}

/**
 * 
 */
const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  /**
   * When page loads, check if the user is logged in. If yes then updated the
   * isLoggedIn state and render the app home page. If the user is not logged-in
   * then render the login screen.
   */
  useEffect( () => {
    const isSignedIn = async () => {
      const user = await authAPI.isLoggedIn()
      dispatch({type: 'RESTORE_TOKEN', payload: user})
      
    }
    setTimeout(isSignedIn, 1000)  // Sleep for 1 second for debugging!
    //* isSignedIn()
  }, [])
 
  const authContext = React.useMemo(
    () => ({
      testError: async (onError) => {
        try {
          await authAPI.testError()
        }
        catch(err) {
          console.log(`[error] Testing error= `, err)          
          onError(err)
        }
      },
      signIn: async (email, password, onError) => {
        try {
          const user = await authAPI.login(email, password)
          dispatch({ type: 'SIGN_IN', payload: user})
        }
        catch(err) {
          console.log(`[error] Failed to sign-in user=[${email}], error= `, err)
          onError(err)
        }
      },
      signUp: async (email, password, onError) => {
        try {
          const user = await authAPI.register(email, password)
          dispatch({ type: 'SIGN_UP', payload: user})
        }
        catch(err) {
          console.log(`[error] Failed to sign up user=[${email}], error= `, err)
          onError(err)
        }
      },
      signOut: async (onError) => {
        try {
          await authAPI.logout()
          dispatch({ type: 'SIGN_OUT' })
        }
        catch(err) {
          console.log(`[error] Failed to sign out user, error= `, err)
          onError(err)
        }
      }
    }),
    []
  )
  
  /**
   * Render the loading screen while the App is checking if the user is
   * authenticated in the useEffect hook.
   */
  if(state.isLoading) {
    return <ScreensAuthLoading />
  }

  /**
   * Render the sign-in screen if the user is not authenticated, otherwise
   * render the App home screen.
   */
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {state.isLoggedIn ? (
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'Home') {
                  iconName = focused
                    ? 'ios-home'
                    : 'ios-home';
                } 
                else if (route.name === 'Settings') {
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
            tabBarOptions={ui.tabBarOptions}
          >
            <Tab.Screen name="Home"     component={AppScreens} />
            <Tab.Screen name="Settings" component={SettingsScreens} />
          </Tab.Navigator>
          ) : (
            AuthStackScreens()
          )
        }
      </NavigationContainer>
    </AuthContext.Provider>
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
