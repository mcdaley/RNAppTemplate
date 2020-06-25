//-----------------------------------------------------------------------------
// src/api/__tests__/authAPI.test.js
//-----------------------------------------------------------------------------
import AsyncStorageMock from '@react-native-community/async-storage/jest/async-storage-mock';
import authAPI          from '../authAPI'

/**
 * NOTE:
 * Leveraged interesting posting in StackOverflow to make the local-storage by
 * using an object, if I ever get more ambitous the link to the posting is:
 * 
 * https://stackoverflow.com/questions/40952566/how-to-test-async-storage-with-jest#:~:text=With%20Jest%20setup%20file&text=Inside%20your%20setup%20file%2C%20set,'%2C%20()%20%3D%3E%20mockAsyncStorage)%3B
 */
describe('authAPI', () => {
  const user          = { email: 'kgun@bills.com', pasword: 'password123' }
  const currentUser   = { email: 'marv@bills.com', token: 'secret-token' }
  const token         = JSON.stringify(currentUser)
  let   localStorage  = { '@userToken': token }       // Fake local-storage.

  // Mock AsychStorage.setItem()
  AsyncStorageMock.setItem = jest.fn( (key, value) => {
    console.log(`[debug] AsynchStorageMock, value= `, value)
    return new Promise( (resolve, reject) => {
      return (typeof key !== 'string' || typeof value !== 'string')
        ? reject(new Error('key and value must be a string'))
        : resolve({[key]: value})
    })
  })

  // Mock AsynchStorage.getItem()
  AsyncStorageMock.getItem = jest.fn((key) => {
    return new Promise((resolve) => {
      return localStorage.hasOwnProperty(key)
        ? resolve(localStorage[key])
        : resolve(null);
    });
  });

  // Mock AsynchStorage.removeItem()
  AsyncStorageMock.removeItem = jest.fn((key) => {
    return new Promise((resolve) => {
      if(localStorage.hasOwnProperty(key)) {
        delete localStorage[key]
        resolve(true)
      }
      else {
        resolve(false)
      }
    });
  });

  describe('login', () => {
    it('Signs user into the app', async () => {
      
      const result = await authAPI.login(user.email, user.password)
      expect(result.email).toBe(user.email)
      expect(result.token).toBe('xxx')
    })
  })

  describe('isLoggedIn', () => {
    it('Returns authenticated user\'s token', async () => {
      const user = await authAPI.isLoggedIn()
      expect(user.email).toBe(currentUser.email)
      expect(user.token).toBe(currentUser.token)
    })

    it('Returns null for a user the is not signed-in to the app', async () => {
      delete localStorage['@userToken']   // Clear the local-storage
      const user   = await authAPI.isLoggedIn()
      expect(user).toBe(null)
    })
  })

  describe('logout', () => {
    it('Clears the local-storage', async () => {
      const result = await authAPI.logout()
      expect(result).toBe(true)
      expect(localStorage.hasOwnProperty('@userTOken')).toBe(false)
    })
  })
})