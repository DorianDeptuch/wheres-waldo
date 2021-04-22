import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase/app";

firebase.initializeApp({
  apiKey: "AIzaSyDHY47kOvzPxay52MGLh30zCI3LfniwBIg",
  authDomain: "wheres-waldo-b13bd.firebaseapp.com",
  projectId: "wheres-waldo-b13bd",
  storageBucket: "wheres-waldo-b13bd.appspot.com",
  messagingSenderId: "155503493717",
  appId: "1:155503493717:web:191582f940a698ceee0adc",
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
