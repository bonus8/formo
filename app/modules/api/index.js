import { auth, database } from 'utils/firebase';


export const registerUser = formData => {
  return auth.createUserWithEmailAndPassword(formData.email, formData.password);
}

export const authenticateUser = formData => {
  return auth.signInWithEmailAndPassword(formData.email, formData.password);
}
