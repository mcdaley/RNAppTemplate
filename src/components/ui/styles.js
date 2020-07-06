//-----------------------------------------------------------------------------
// src/components/ui/styles.js
//-----------------------------------------------------------------------------
import { StyleSheet }   from 'react-native'
import { ui }           from '../../styles/ui'

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection:      'column',
    justifyContent:     'center',
    alignItems:         'center',
    flexBasis:          '20%',
    backgroundColor:    '#98C1D9',
    borderColor:        '#293241',
    borderWidth:        2,
    borderRadius:       5,
    marginTop:          10,
    marginBottom:       10,
    padding:            5,
  },
  logoTitle: {
    fontSize:           34,
    color:              '#293241',
    fontWeight:         'bold',
  },
  errorAlertContainer: {
    ...ui.alert.container,
    ...ui.alert.error.container,
  },
  errorAlertMessage: {
    ...ui.alert.message,
    ...ui.alert.error.message,
  },
  buttonLink: {
    ...ui.link.primary,
  },
  buttonContainer: {
    ...ui.link.container,
  }
})

// Export UI component styles
export default styles