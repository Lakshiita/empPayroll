
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; // <- needed if using firestore
// import 'firebase/functions' // <- needed if using httpsCallable
import { createStore, combineReducers, compose } from 'redux'
import {
  ReactReduxFirebaseProvider,
  firebaseReducer
} from 'react-redux-firebase'
 import { createFirestoreInstance, firestoreReducer } from 'redux-firestore' // <- needed if using firestore
import {composeWithDevTools} from "redux-devtools-extension";
const fbConfig = {
    apiKey: "AIzaSyAoI3H2SdgbW5RuzquOOJPW-djkj9tedZA",
  authDomain: "emp-payroll-153e4.firebaseapp.com",
  projectId: "emp-payroll-153e4",
  storageBucket: "emp-payroll-153e4.appspot.com",
  messagingSenderId: "98286862311",
  appId: "1:98286862311:web:afa408e2e53439d6a28742",
  measurementId: "G-GLD6CG8N65",
}

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
 useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

// Initialize firebase instance
firebase.initializeApp(fbConfig)

// Initialize other services on firebase instance
 firebase.firestore() // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
   firestore: firestoreReducer // <- needed if using firestore
})

// Create store with reducers and initial state
const initialState = {}
const store = createStore(rootReducer, initialState,composeWithDevTools())

export const  rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
    createFirestoreInstance // <- needed if using firestore
}

export default store;