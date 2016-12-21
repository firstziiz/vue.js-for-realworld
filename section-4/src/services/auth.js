import firebase from 'firebase'

const getCurrentUser = () => {
  return firebase.auth().currentUser
}

const requireUser = () => {
  return new Promise((resolve, reject) => {
    const cancel = firebase.auth().onAuthStateChanged((user) => {
      cancel()
      if (user) {
        resolve(user)
        return
      }
      reject()
    })
  })
}

const auth = () => firebase.auth()

const google = () => auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())

export default {
  getCurrentUser,
  requireUser,
  auth,
  google
}
