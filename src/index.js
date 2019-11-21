import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from "firebase/app";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA-Z8BwKNYWX3ChFbAIxVcqebitlpJ4FTA",
    authDomain: "print-destroyer.firebaseapp.com",
    databaseURL: "https://print-destroyer.firebaseio.com",
    projectId: "print-destroyer",
    storageBucket: "print-destroyer.appspot.com",
    messagingSenderId: "300078778310",
    appId: "1:300078778310:web:2f1e48bc3a9fd6b08494c7",
    measurementId: "G-V7ZJ8B5LQY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

ReactDOM.render(
    <Router>
        <printDestroyer />
    </Router>
        , document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();