import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-dMtV3Kav3_uXCK72ZlmERPxkIMx2e94",
  authDomain: "myfireblogs.firebaseapp.com",
  projectId: "myfireblogs",
  storageBucket: "myfireblogs.appspot.com",
  messagingSenderId: "857203150193",
  appId: "1:857203150193:web:9d344486a5e6f8a4d37ad0",
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export default firebaseApp;
