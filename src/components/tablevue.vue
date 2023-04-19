<template>
  <table>
    <caption>
      <div class="name">
        Team
      </div>
    </caption>
    <thead>
      <tr>
        <th style="width:50px"><v-checkbox density="compact" hide-details="" /></th>
        <th class="text-left" v-for="user in headers" :key="user">
          {{ user }}
        </th>
      </tr>
    </thead>
    <tfoot class="tableFooter">
      <td colspan="12">
        <v-pagination v-model="page" :length="8" v-on:next="nextPage" v-on:prev="prevPage"
          v-on:update:model-value="callPage" show-first-last-page density="compact">
        </v-pagination>
      </td>
    </tfoot>
    <tbody>
      <tr v-for="user in users" style="width:100px ;">
        <td><v-checkbox density="compact" hide-details=""></v-checkbox></td>
        <template v-for="property in user">
          <td v-if="property == user[`skills levels`]">
            <v-progress-linear color="blue" :model-value="user[`skills levels`]" :height="5"></v-progress-linear>
          </td>
          <td v-else>
            {{ property }}
          </td>
        </template>
      </tr>
    </tbody>
  </table>
</template>



<script setup lang="ts">

import { ref } from 'vue'
import { getPage } from '@/firebase/requsetusers'
import { onValue } from '@firebase/database';



const headers = ref([])
const users = ref([]);

let page: number;
let now: number = 0;
const shift: number = 7;


function getUserValues(now: number, shift: number) {
  onValue(getPage(now, shift), (snapshot) => {
    let data = snapshot.val()
    users.value = Object.values(data);
    headers.value = Object.keys(data[now]);
  })
}

//init first page
getUserValues(0, 7)

function nextPage() {
  getUserValues(now, shift)
  now += shift;
}

function prevPage() {
  getUserValues(now, shift)
  now -= shift;
}

function callPage() {
  now = page * shift - shift;
  getUserValues(now, shift)
}

</script>



<style scoped>
table {
  display: block;
  border-radius: 20px;
  border-collapse: collapse;
  border: 2px solid rgba(0, 0, 0, 0.17)
}

th {
  font-weight: normal;
  color: rgb(13, 13, 14);
  padding: 2px;
  text-transform: capitalize;
  border-top: 2px solid rgba(0, 0, 0, 0.17);
}

td {
  color: rgb(0, 0, 0);
  padding: 5px;
  border-top: 2px solid rgba(0, 0, 0, 0.17);
}

tr:hover td {
  background: #0000000e;
}

.name {
  height: 40px;
  text-transform: capitalize;
}
</style>

