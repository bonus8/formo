import firebase from 'firebase';
import { FIREBASE_CONFIG } from 'config';


firebase.initializeApp(FIREBASE_CONFIG);

export const database = firebase.database();
export const auth = firebase.auth();
