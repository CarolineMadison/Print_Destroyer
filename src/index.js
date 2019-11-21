import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import * as firebase from "firebase/app";
import PrintDestroyer from './components/PrintDestroyer';

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

ReactDOM.render(
  <Router>
    <PrintDestroyer />
  </Router>
  , document.getElementById('root'))

