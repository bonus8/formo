import firebase from 'firebase';
import { FIREBASE_BASEURL } from 'config';


firebase.initializeApp({
  databaseURL: FIREBASE_BASEURL
});

const database = firebase.database();

export const registerUser = formData => {
  return database.ref('users').push(formData);
}
