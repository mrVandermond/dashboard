<template>
  <main>
    <h1>Analyze</h1>
    <div class="coursecards">
      <template v-for="course in courses" :key="course.id">
        <CourseCard :="course" />
      </template>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CourseCard from "@/views/CourseCard.vue";
import { getAllCourses } from "@/firebase/requestCourses";

/* const course = {
    name: 'Какой то курс',
    description: 'описание курса с описанием курса и в котором описан курс',
    icon: "mdi-cloud-upload",
    progress: 80,
    deadline: '19 августа хзкакого года',
    budget: 'сколько то баксов 1111',
    avatarLink: 'https://randomuser.me/api/portraits/men/85.jpg',
    id:0
} */
const courses = ref([]);

getAllCourses.then((data) => (courses.value = data));
</script>

<style scoped>
.coursecards {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px;
}
main {
  display: inline-block;
}
h1 {
  text-align: center;
}
</style>
