import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyBjiERknI0hAjJebtl5cgPsVYEPU5_uhSo",
  authDomain: "my-dropbox-8cb2e.firebaseapp.com",
  databaseURL: "https://my-dropbox-8cb2e-default-rtdb.firebaseio.com",
  projectId: "my-dropbox-8cb2e",
  storageBucket: "my-dropbox-8cb2e.appspot.com",
  messagingSenderId: "785303432686",
  appId: "1:785303432686:web:745d4ffc8735efac2632ff"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: (doc) => {
    return { id: doc.id, ...doc.data() };
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
};

const storage = firebase.storage();
const auth = firebase.auth();

export { database, storage, auth };
export default firebase;