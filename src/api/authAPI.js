//-----------------------------------------------------------------------------
// src/api/authAPI.js
//-----------------------------------------------------------------------------
import AsyncStorage from '@react-native-community/async-storage'

/**
 * User authentication API
 */
const authAPI = {
  register(email, password) {
    console.log(`[debug]: authAPI.register not implemented yet`)
  },
  /**
   * Attempts to sign in the user. If successful then it creates a user token
   * in local storage and returns true. If it fails then it returns an error.
   * 
   * NOTE:
   * Current version doesn't check the email and password and just sets the
   * userToken.
   * 
   * @param {String} email 
   * @param {String} password
   */
  login(email = 'mlevy@bills.com', password) {
    return new Promise( async (resolve, reject) => {
      try {
        const result = await AsyncStorage.setItem('@userToken', email)
        const user   = { email: email}
        resolve(user)
      }
      catch(error) {
        reject(error)
      }
    })
  },
  /**
   * Logs a user out of the application by removing the user token.
   * @returns {Boolean} True if user is logged out, otherwise false.
   */
  logout() {
    return new Promise( async (resolve, reject) => {
      const result = await AsyncStorage.removeItem('@userToken')
      resolve(true)
    })
  },
  /**
   * Checks to see if the user is logged into the app. Returns true if the
   * user is logged in, otherwise it returns false.
   * 
   * @returns {Boolean} True is logged-in, otherwise false.
   */
  isLoggedIn() {
    return new Promise( async (resolve, reject) => {
      const result = await AsyncStorage.getItem('@userToken')
      if(result == null) {
        resolve(false)
      }
      else {
        resolve(true)
      }
    })
  }
}

// Export the authAPI
export default authAPI