import DB from "./database";
import { get, limitToFirst, startAt, ref, set, query, orderByKey, child, update, orderByValue, onValue, orderByChild } from "firebase/database";

const dbRef = ref(DB);

const getPage = function (startKey: number, itemCount: number) {
  let startParamQuery = query(getPageRef, startAt(startKey));
  return  query(startParamQuery, limitToFirst(itemCount))
}

const getPageRef = query(ref(DB,'users'),orderByChild('id'));

const getAllUsers = get(child(dbRef, `/`))
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




/* getAllUsers.then(val => {
  val.users.forEach((el, i) => {
    users[i] = el
    headers[i] = el.Name
  })
}) */

export  { getAllUsers, getPage };