import firebase from 'firebase/app'
import 'firebase/auth'



var firebaseConfig = {
  apiKey: "AIzaSyBT8xVubb1PHm6dqKKgAqRTlVifmw0tc2I",
  authDomain: "all-news-8.firebaseapp.com",
  databaseURL: "https://all-news-8.firebaseio.com",
  projectId: "all-news-8",
  storageBucket: "",
  messagingSenderId: "294845320116",
  appId: "1:294845320116:web:509207cd82b31dba"
};
  
export default  firebase.initializeApp(firebaseConfig);
