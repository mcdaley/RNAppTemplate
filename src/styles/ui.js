//-----------------------------------------------------------------------------
// src/styles/ui.js
//-----------------------------------------------------------------------------

import { BorderlessButton } from "react-native-gesture-handler"

// Brand Colors
const bdazzledBlue    = '#3D5A80'
const paleCerulean    = '#98C1D9'
const lightCyan       = '#E0FBFC'
const burntSienna     = '#EE6C4D'
const gunmetal        = '#293241'

// Font Colors
const black           = '#000000'
const darkerGray      = '#222222'
const white           = '#FFFFFF'

// Information Colors
const error           = '#FA0000'

// Color Palette
const color_1         = bdazzledBlue
const color_2         = burntSienna
const color_3         = lightCyan
const color_4         = gunmetal
const color_5         = paleCerulean

// Header Colors
const headerBackgroundColor   = color_1
const headerTextColor         = white
const inactiveHeaderTextColor = color_3

// Footer Colors
const activeTintColor         = color_2
const inactiveTintColor       = paleCerulean

/**
 * Define the UI styles for the app.
 */
export const ui = {
  header: {
    headerStyle:        { backgroundColor:  headerBackgroundColor },
    headerTintColor:    headerTextColor,
    headerTitleStyle:   { fontWeight: 'bold' },
  },
  tabBarOptions: {
    activeTintColor:    activeTintColor,
    inactiveTintColor:  inactiveTintColor,
  },
  form: {
    icon: {
      color:              color_1,
      fontSize:           24,
    },
    iconContainer: {
      paddingRight:       10,
    },
    errorMessage: {
      color:              error,
    },
  },
  button: {
    primary: {
      backgroundColor:  color_2,
    }, 
    primarytitle: {
      color:            white,
      fontWeight:       'bold',
    }
  },
  link: {
    primary: {
      color:            color_1,
      fontWeight:       'bold',
      fontSize:         20,
    },
    container: {
      padding:          10,
    }
  },
  alert: {
    container: {
      flexDirection:    'column',
      justifyContent:   'center',
      alignItems:       'center',
      borderWidth:      1,
      borderRadius:     5,
      marginTop:        10,
      marginBottom:     10,
      padding:          10,
    },
    message: {
      fontSize:         18,
    },
    error: {
      message: {
        color:          error,
      },
      container: {
        borderColor:      '#FA0000',
        backgroundColor:  'pink',
      },
    },
  }
}