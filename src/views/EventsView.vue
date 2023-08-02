<template>
  <div class="main">
    <Overview />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Overview from './components/Overview.vue'
import { getAllCourses } from "@/firebase/requestCourses";

const courses = ref([]);
getAllCourses.then((data) => (courses.value = data));

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
