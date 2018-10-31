import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyA2VRd2MBjnKhKpqkPYvczT7QjR41zwais',
  authDomain: 'catch-of-the-day-pvlatin.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-pvlatin.firebaseio.com',
})

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }

export default base