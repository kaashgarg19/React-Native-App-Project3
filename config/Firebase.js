import firebase from 'firebase'
import 'firebase/firestore'
// firebase api key and project database id

  const firebaseConfig = {
    apiKey: "AIzaSyCChn8RmGGIlrTrXJRfXSF6s1X0Dj8laIs",
    authDomain: "kaash-event.firebaseapp.com",
    databaseURL: "https://kaash-event.firebaseio.com",
    projectId: "kaash-event",
    storageBucket: "kaash-event.appspot.com",
    messagingSenderId: "868486316310",
    appId: "1:868486316310:web:fe4abcd5d2aa56f8595037",
    
  };
// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()

export default Firebase;
  

