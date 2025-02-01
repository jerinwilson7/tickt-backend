
import { FIREBASE_SERVICE_ACCOUNT } from "../../constants";
import * as admin from "firebase-admin";

if (!FIREBASE_SERVICE_ACCOUNT) {
  throw new Error("FIREBASE_SERVICE_ACCOUNT is not defined.");
}

try {
  console.log("FIREBASE_SERVICE_ACCOUNT:", FIREBASE_SERVICE_ACCOUNT);

  const serviceAccountString = atob(FIREBASE_SERVICE_ACCOUNT.toString());
  console.log("Decoded serviceAccountString:", serviceAccountString);

  const serviceAccount = JSON.parse(serviceAccountString);
  console.log("Parsed serviceAccount:", serviceAccount);

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
} catch (error) {
  console.error("Error initializing Firebase Admin SDK:", error);
  throw error; // Re-throw the error to stop the application
}

export default admin;