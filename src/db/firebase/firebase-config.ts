import { FIREBASE_SERVICE_ACCOUNT } from "../../constants";

const admin = require("firebase-admin");
const serviceAccountString = atob(FIREBASE_SERVICE_ACCOUNT?.toString() ?? "");

admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(serviceAccountString)),
});

export default admin