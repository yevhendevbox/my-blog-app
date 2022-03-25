import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-dMtV3Kav3_uXCK72ZlmERPxkIMx2e94",
  authDomain: "myfireblogs.firebaseapp.com",
  projectId: "myfireblogs",
  storageBucket: "myfireblogs.appspot.com",
  messagingSenderId: "857203150193",
  appId: "1:857203150193:web:9d344486a5e6f8a4d37ad0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase?.firestore.FieldValue.ServerTimestamp;

export { timestamp };
export default firebaseApp?.firestore();
