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
    flexDirection:      'column',
    justifyContent:     'center',
    alignItems:         'center',
    borderColor:        '#FA0000',
    backgroundColor:    'pink',
    borderWidth:        2,
    borderRadius:       5,
    marginTop:          10,
    marginBottom:       10,
    padding:            10,
  },
  errorAlertMessage: {
    fontSize:           20,
    color:              '#FA0000',
    fontWeight:         'bold',
  },
})

// Export UI component styles
export default styles