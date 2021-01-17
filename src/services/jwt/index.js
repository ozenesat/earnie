import apiClient from 'services/axios'
import store from 'store'

let userId
export async function login(email, password) {
  return apiClient
    .post('/api/login', {
      email,
      password,
    })
    .then(response => {
      if (response) {
        const accessToken = response.data.access_token
        userId = response.data.user.id
        console.log('RESPONSE: ', userId)
        if (accessToken) {
          store.set('accessToken', accessToken)
        }
        return response.data
      }
      return false
    })
    .catch(err => console.log(err))
}

export async function register(email, password, name) {
  return apiClient
    .post('/auth/register', {
      email,
      password,
      name,
    })
    .then(response => {
      if (response) {
        const { accessToken } = response.data
        if (accessToken) {
          store.set('accessToken', accessToken)
        }
        return response.data
      }
      return false
    })
    .catch(err => console.log(err))
}

export async function currentAccount() {
  return apiClient
    .get(`/api/get_user_details/${userId}`)
    .then(response => {
      if (response) {
        const { accessToken } = response.data
        if (accessToken) {
          store.set('accessToken', accessToken)
        }
        return response.data
      }
      return false
    })
    .catch(err => console.log(err))
}

export async function logout() {
  return apiClient
    .get('/auth/logout')
    .then(() => {
      store.remove('accessToken')
      return true
    })
    .catch(err => {
      console.log(err)
      store.remove('accessToken')
      return true
    })
}
