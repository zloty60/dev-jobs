import { firebaseInit } from "../config/index";
import { setUserProfileData } from "../services/user";

export async function registerInFirebase(creds) {
  try {
    const result = await firebaseInit
      .auth()
      .createUserWithEmailAndPassword(creds.email, creds.password);
    await result.user.updateProfile({
      displayName: creds.displayName,
    });

    return await setUserProfileData(result.user);
  } catch (error) {
    throw error;
  }
}

export function signInWithEmail(creds) {
  return firebaseInit
    .auth()
    .signInWithEmailAndPassword(creds.email, creds.password);
}

export function listenToAuthState(fn) {
  return firebaseInit.auth().onAuthStateChanged((user) => {
    fn(user);
  });
}

export function signOutUser() {
  return firebaseInit.auth().signOut();
}
