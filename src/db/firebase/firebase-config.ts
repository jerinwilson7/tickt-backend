import * as admin from "firebase-admin";
import { FIREBASE_SERVICE_ACCOUNT } from "../../constants";

const serviceAccountString = atob(FIREBASE_SERVICE_ACCOUNT?.toString() ?? "");

console.log("port :",process.env.FIREBASE_SERVICE_PORT)
console.log("env :",process.env.FIREBASE_SERVICE_ACCOUNT)
console.log("12345 :",FIREBASE_SERVICE_ACCOUNT)
console.log("SERCICE :",serviceAccountString)

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(serviceAccountString)),
  });
}

const auth = admin.auth();

export default admin;
