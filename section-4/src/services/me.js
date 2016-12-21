import User from './user'
import Auth from './auth'

const getId = () => {
  return Auth.getCurrentUser().uid
}

const get = (callback) => {
  return User.get(getId())
}

const set = (data) => {
  return User.set(getId(), data)
}

const logout = () => Auth.auth().signOut()

export default {
  get,
  set,
  logout
}
