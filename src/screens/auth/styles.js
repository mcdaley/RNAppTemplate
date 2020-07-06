//-----------------------------------------------------------------------------
// src/screens/auth/styles.js
//-----------------------------------------------------------------------------
import { StyleSheet }   from 'react-native'
import { ui }           from '../../styles/ui'

const styles = StyleSheet.create({
  container: {
    margin:             10,
  },
  authFormContainer: {
    flexDirection:      'column',
    flexBasis:          '60%',
    justifyContent:     'flex-end',
  },
  primaryLink: {
    ...ui.link.primary,
  },
  buttonContainer: {
    padding:            5,
  },
  alertContainer: {
    ...ui.alert.error.container
  },
  alertTitle: {
    ...ui.alert.error.title,
  },
})

// Export authentication screen styles
export default styles