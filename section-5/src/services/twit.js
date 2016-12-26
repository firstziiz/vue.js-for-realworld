import firebase from 'firebase'
import Me from './me'

const list = (callback) => {
  firebase.database().ref('twit')
    .on('value', (snapshot) => {
      const result = []
      snapshot.forEach((snapshot) => {
        result.push(snapshot.val())
      })
      callback(result.reverse())
    })
}

const post = (content) => {
  return firebase.database().ref('twit').push({
    owner: Me.getId(),
    content,
    timestamp: firebase.database.ServerValue.TIMESTAMP
  })
}

export default {
  list,
  post
}
