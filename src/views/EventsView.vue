<template>
  <div class="main">
    <div class="controls">
      <v-btn class="btn" :width="buttonWidth"
        @click="component = 'Add'">
        Add New Course
      </v-btn>
      <v-btn class="btn" :width="buttonWidth"
        @click="component = 'Edit'">
        Edit Course
      </v-btn>
      <v-btn class="btn" :width="buttonWidth"
        @click="component = 'Delete'">
        Delete Course
      </v-btn>
      <v-btn class="btn" :width="buttonWidth"
        @click="component = 'Overview'">
        Overview
      </v-btn>
    </div>
    <component :is="tabs[component]" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Overview from './components/Overview.vue'
import Add from './components/AddCourse.vue'
import Edit from './components/EditCourse.vue'
import Delete from './components/DeleteCourse.vue'


const buttonWidth = '200px';

const component = ref('Overview')
const tabs = {
  Overview,
  Add,
  Edit,
  Delete,
}


</script>

<style lang="scss" scoped>
.btn {
  margin-right: 10px;
  margin-bottom: 10px;
}

.controls {
  margin: 20px;
}

main {
  display: inline-block;
}

h1 {
  text-align: center;
}
</style>
