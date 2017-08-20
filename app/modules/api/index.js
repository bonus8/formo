import { auth, database } from 'utils/firebase';


export const createUser = formData => auth.createUserWithEmailAndPassword(formData.email, formData.password);
export const signIn = formData => auth.signInWithEmailAndPassword(formData.email, formData.password);
export const signOut = () => auth.signOut();
export const observeSession = cb => auth.onAuthStateChanged(cb);
