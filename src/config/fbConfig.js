import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth' ;


var config = {
    apiKey: "AIzaSyCPybJg5JBFQkZLwZKO3vzdlAItZtpVvAI",
    authDomain: "trip-planner-aafaf.firebaseapp.com",
    databaseURL: "https://trip-planner-aafaf.firebaseio.com",
    projectId: "trip-planner-aafaf",
    storageBucket: "trip-planner-aafaf.appspot.com",
    messagingSenderId: "114233828455"
  };
  firebase.initializeApp(config);

  firebase.firestore().settings({timestampsInSnapshots:true});

  export default firebase;