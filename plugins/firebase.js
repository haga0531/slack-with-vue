import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if (!firebase.apps.length) {
 const config = {
   apiKey: "AIzaSyAFRJ3pSvH3a-67l3504B6FykKdxMCdQMM",
   authDomain: "slack-vue-app.firebaseapp.com",
   databaseURL: "https://slack-vue-app.firebaseio.com",
   projectId: "slack-vue-app",
   storageBucket: "slack-vue-app.appspot.com",
   messagingSenderId: "7186343491"
 }
 firebase.initializeApp(config)
}

const db = firebase.firestore()
export {
 firebase,
 db
}