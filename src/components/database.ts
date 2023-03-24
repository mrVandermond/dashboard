import { initializeApp } from "firebase/app";
import { get, getDatabase, limitToFirst, ref, set, query, orderByKey, child, update} from "firebase/database";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
};

const firebaseApp = initializeApp(firebaseConfig);
const DB = getDatabase(firebaseApp);
const dbRef = ref(DB);


const getUsers =  get(child(dbRef, `/`))
export default getUsers
.then((data) => {
  if (data.exists()) {
    console.log(data.val())
    data.val();
  } else {
    console.log("No data available");
  }
})
.catch((error) => {
  console.error(error);
});