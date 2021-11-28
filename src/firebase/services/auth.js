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
