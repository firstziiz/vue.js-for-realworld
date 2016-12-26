import firebase from 'firebase'

const get = (id) => {
  return firebase.database()
    .ref(`users/${id}`)
    .once('value')
    .then((snapshot) => {
      return snapshot.val()
    })
}

const set = (id, data) => {
  return firebase.database().ref(`users/${id}`).set(data)
}

const getRealtime = (id, callback) => {
  firebase.database()
    .ref(`users/${id}`)
    .on('value', (snapshot) => {
      console.log(snapshot.val())
      callback(snapshot.val())
    })
}

const list = (callback) => {
  firebase.database().ref('users')
    .on('value', (snapshot) => {
      const result = []
      snapshot.forEach((snapshot) => {
        const user = snapshot.val()
        user.$id = snapshot.key
        result.push(user)
      })
      callback(result)
    })
}

export default {
  get,
  set,
  getRealtime,
  list
}
