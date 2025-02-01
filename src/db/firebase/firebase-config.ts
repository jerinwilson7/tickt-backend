import { FIREBASE_SERVICE_ACCOUNT } from "../../constants";
import * as admin from 'firebase-admin'
export const serviceAccountString = atob(FIREBASE_SERVICE_ACCOUNT?.toString() ?? "");

admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(serviceAccountString)),
});

export default admin