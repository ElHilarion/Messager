import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
firebase.initializeApp(
    {
        apiKey: "AIzaSyA7CiPXq3eYEH7SNzsjwOdThfSi2s629Mk",
        authDomain: "reactmessage-c3e6d.firebaseapp.com",
        projectId: "reactmessage-c3e6d",
        storageBucket: "reactmessage-c3e6d.appspot.com",
        messagingSenderId: "220009467485",
        appId: "1:220009467485:web:af7894e4ea751cc5c187b4",
        measurementId: "G-D5G2Z37XBN"
    }
);


export const Context = createContext(null);
const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App />
    </Context.Provider>,

  document.getElementById('root')
);

