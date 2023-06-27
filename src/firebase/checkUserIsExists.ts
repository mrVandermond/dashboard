import DB from './database';
import { ref, query, equalTo, orderByChild, get } from 'firebase/database';

const dbRef = ref(DB);

async function checkEmailExists(email: string): Promise<boolean> {
  const usersRef = ref(DB, 'users');

  const emailQuery = query(usersRef, orderByChild('email'), equalTo(email));
  const snapshot = await get(emailQuery);

  if (snapshot.exists()) {
    const users = snapshot.val();
    const userKeys = Object.keys(users);

    for (const userKey of userKeys) {
      const userData = users[userKey];
      if (userData.email === email) return true;
    }
  }
  return false;
}

export { checkEmailExists };
