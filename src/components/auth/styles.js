//-----------------------------------------------------------------------------
// src/components/auth/styles.js
//-----------------------------------------------------------------------------
import { StyleSheet }   from 'react-native'
import { ui }           from '../../styles/ui'

const styles = StyleSheet.create({
  container: {
    marginTop:        20, 
    marginBottom:     20
  },
  icon: {
    ...ui.form.icon,
  },
  iconContainer: {
    ...ui.form.iconContainer,
  },
  errorMessage: {
    ...ui.form.errorMessage,
  },
  primaryButton: {
    ...ui.button.primary,
  },
  primaryButtonTitle: {
    ...ui.button.primarytitle,
  },
  buttonContainer: {
    padding:          10,  
  },
  signInContainer: {
    flexDirection:      'row',
    alignItems:         'center',
    marginLeft:         10,      
  },
  signInLabel: {
    fontSize:           20,
    color:              '#555555',
    justifyContent:     'center'
  }
})

// Export the authentication form styles
export default styles