import DB from "./database";
import { get, limitToFirst, startAt, ref, set, query, orderByKey, child, update, orderByValue, onValue, orderByChild } from "firebase/database";

const dbRef = ref(DB);

const getAllCourses = get(child(dbRef, `courses`))
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


export  { getAllCourses };