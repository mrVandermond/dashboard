import { get, getDatabase, limitToFirst, ref, set, query, orderByKey, child, update} from "firebase/database";

const dbRef = ref(getDatabase());
export default  get(child(dbRef, `/`))
.then((data) => {
  if (data.exists()) {
   return data.val();
  } else {
    console.log("No data available");
  }
})
.catch((error) => {
  console.error(error);
});

