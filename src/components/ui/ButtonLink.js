//-----------------------------------------------------------------------------
// src/components/ui/ButtonLink.js
//-----------------------------------------------------------------------------
import React      from 'react'
import {
  Button,
}                 from 'react-native-elements'

import styles     from './styles'

/**
 * Render a button that looks like a html link.
 * @param {*} props 
 */
const UIButtonLink = ({title, onPress}) => {

  const handlePress = () => {
    onPress()
  }

  return (
    <Button 
      title           = {title}
      type            = 'clear'
      titleStyle      = {styles.buttonLink}
      containerStyle  = {styles.buttonContainer}
      onPress         = {handlePress}
    />
  )
}

// Export the link
export default UIButtonLink