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
    ...ui.icon,
  },
  iconContainer: {
    ...ui.leftInputIcon,
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
  error: {
    ...ui.errorStyle,
  }
})

// Export the authentication form styles
export default styles