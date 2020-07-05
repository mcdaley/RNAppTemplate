//-----------------------------------------------------------------------------
// src/api/authAPI.js
//-----------------------------------------------------------------------------
import AsyncStorage from '@react-native-community/async-storage'

/**
 * User authentication API
 */
const authAPI = {  
  /**
   * Sign up a user for a new account. It will call the API to register the
   * account and then set the user token in local-storage. If it fails then
   * it returns an error.
   * 
   * NOTE:
   * This is just a dummy implementation for rapid prototyping.
   * 
   * @param   {String}  email 
   * @param   {String}  password
   * @returns {Promise} Returns user if successful, otherwise returns error
   */
  register(email, password) {
    return new Promise( async (resolve, reject) => {
      try {
        // mockResult would be result of login api call.
        const mockUser = {email: email, token: 'xxx'}
        await setJSONValue('@userToken', mockUser)
        
        resolve(mockUser)
      }
      catch(error) {
        reject(error)
      }
    })
  },
  /**
   * Attempts to sign in the user. If successful then it creates a user token
   * in local storage and returns true. If it fails then it returns an error.
   * 
   * NOTE:
   * Current version doesn't check the email and password and just sets the
   * userToken. When implementing a real version the API will need to call
   * in the Apps login API.
   * 
   * @param   {String}  email 
   * @param   {String}  password
   * @returns {Promise} User is login was successful, otherwise the error
   */
  login(email = 'mlevy@bills.com', password) {
    return new Promise( async (resolve, reject) => {
      try {
        // mockResult would be result of login api call.
        const mockUser = {email: email, token: 'xxx'}
        await setJSONValue('@userToken', mockUser)
        
        resolve(mockUser)
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
      try {
        const result = await AsyncStorage.removeItem('@userToken')
        //* console.log(`[debug] logout user, result= `, result)
        resolve(true)
      }
      catch(error) {
        console.log(`[error] Failed to logout the user, error= `, error)
        resolve(false)
      }
    })
  },
  /**
   * Checks to see if the user is logged into the app. Returns true if the
   * user is logged in, otherwise it returns false.
   * 
   * @returns {Object} Current user w/ email and token.
   */
  isLoggedIn() {
    return new Promise( async (resolve, reject) => {

      const user = await getJSONValue('@userToken')
      if(user) {
        //* console.log(`[debug] User is logged in, user= `, user)
        resolve(user)
      } 
      else {
        //* console.log(`[debug] User is NOT logged in, user= `, user)
        resolve(null)
      } 
    })
  }
}

/**
 * Helper function to store an object in local storage. It converts the
 * object to a JSON string and stores the string in the local storage. When
 * retrieving the object, you need to convert the JSON string to an object
 * using JSON.parse.
 * @param {String} key 
 * @param {Object} value 
 */
const setJSONValue = (key, value) => {
  return new Promise( async (resolve, reject) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonValue)

      resolve(true)
    }
    catch(err) {
      console.log(`[error] Failed to set ${key} in AsyncStorage, err= `, err)
      reject(err)
    }
  })
}

/**
 * Get an object from the AsyncStorage that is encoded as a JSON string for
 * a key. Converts the JSON string to an object and returns the object.
 * @param   {String} key 
 * @returns {Object} Value stored in local-storage for the key.
 */
const getJSONValue = (key) => {
  return new Promise( async (resolve, reject) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      if(jsonValue) {
        const value = JSON.parse(jsonValue)
        resolve(value)
      }
      else {
        resolve(null)
      }
    }
    catch(err) {
      reject(err)
    }
  })
}

// Export the authAPI
export default authAPI