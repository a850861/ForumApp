
import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
const firebaseConfig = {
  apiKey: "AIzaSyCbS8aVyjEZXFGMo8z4xhmgwBzziVtCU5g",
  authDomain: "smapp-c7bb2.firebaseapp.com",
  projectId: "smapp-c7bb2",
  storageBucket: "smapp-c7bb2.appspot.com",
  messagingSenderId: "403031203322",
  appId: "1:403031203322:web:26ebedfd19ae2f79e49843"
};
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}
export {firebase}
