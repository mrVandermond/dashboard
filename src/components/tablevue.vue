<template>
  <v-table fixed-header density="compact">
    <thead>
      <tr>
        <th><v-icon/></th>
        <th class="text-left" v-for="item in headers" :key="item">
          {{item}}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in users">
        <td><v-checkbox></v-checkbox></td>
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
        <v-pagination v-model="page" :length="8" v-on:next="nextPage()" v-on:prev="prevPage()" v-on:update:model-value="callPage()"></v-pagination>
      </tr>
    </tfoot>
  </v-table>
</template>



<script setup lang="ts">

import { ref } from 'vue'
import { getAllUsers, getPage } from '@/firebase/requsetusers'
import { onValue } from '@firebase/database';
const headers = ref(['Name',`Surname`,`country`,`duties`,`email`,`id`,`post`,`role`,`skills`,`status`,`timestamp`])
const users = ref([]);
let page:number;
/* getAllUsers.then(val => {
  val.users.forEach((el, i) => {
    users[i] = el
    headers[i] = el.Name
  })
}) */
onValue(getPage(0, 7), (snapshot) => {
  let data = snapshot.val()
  Object.values(data).forEach((element:object, i:number) => {
    users.value.push(element)
  });;
  console.log(Object.values(data))
})
let now: number = 0;
let shift: number = 7;
function nextPage() {
  console.log(now,shift);
  onValue(getPage(now, shift), (snapshot) => {
    let data = snapshot.val()
    users.value = Object.values(data);
  })
  now += shift;
}

function prevPage() {

  onValue(getPage(now, shift), (snapshot) => {
    let data = snapshot.val()
    users.value = Object.values(data);
  })
  now -= shift;
}
function callPage() {
  now = page*shift-shift;
  onValue(getPage(now, shift), (snapshot) => {
    let data = snapshot.val()
    users.value = Object.values(data);
  })
}


</script>



<style scoped>
.tableFooter {
  background-color: rgb(238, 69, 69);
}
</style>

