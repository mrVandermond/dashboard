<template>
  <v-table fixed-header>
    <thead>
      <tr v-for="item in headers" :key="item">
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Calories
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in users" >
        <td>{{ item.Name }}</td>
        <td>{{ item.Surname }}</td>
        <td>{{ item.country }}</td>
        <td>{{ item.duties }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.id }}</td>
        <td>{{ item.post }}</td>
        <td>{{ item.role }}</td>
        <td>{{ item.skills }}</td>
        <td>{{ item.status }}</td>
        <td>{{ item.timestamp }}</td>
      </tr>
    </tbody>
    <tfoot class="tableFooter">
      <tr>
        <v-pagination :length="5"></v-pagination>
      </tr>
    </tfoot>
  </v-table>
</template>



<script setup lang="ts">

import { ref } from 'vue'
import  { getAllUsers, getPage } from '@/firebase/requsetusers'
import { onValue } from '@firebase/database';
const headers = ref([])
const users = ref([]);
/* getAllUsers.then(val => {
  val.users.forEach((el, i) => {
    users[i] = el
    headers[i] = el.Name
  })
}) */
onValue(getPage(0,7), (snapshot)=>{
  let data = snapshot.val()
  Object.values(data).forEach((element,i) => {
    users.value.push(element)
  });;
  console.log(Object.values(data))
} )

console.log(users)


</script>



<style scoped>
.tableFooter {
  background-color: rgb(238, 69, 69);
}
</style>

