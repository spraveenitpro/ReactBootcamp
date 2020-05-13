import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyD7VgQLW9nObGidttKj-QWM2Jha5rXB7FM",
  authDomain: "reactfirebase-aafc0.firebaseapp.com",
  databaseURL: "https://reactfirebase-aafc0.firebaseio.com",
  projectId: "reactfirebase-aafc0",
  storageBucket: "reactfirebase-aafc0.appspot.com",
  messagingSenderId: "964099744523",
  appId: "1:964099744523:web:8a7ba05ade580274aab80e",
};

var fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
