<template>
  <main style="display: none;">
    <SideMenu />
    <RouterView />
  </main>
  <h1 style="width: 100%;" >
    Overview
  </h1>
  <div style="display: flex; flex-wrap: wrap; gap: 10px; margin: 10px; ">
    <template v-for="course in courses">
      <CourseCard
      :="course"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SideMenu from '@/views/components/SideMenu.vue';
import CourseCard from "@/components/CourseCard.vue"
import { getAllCourses } from '@/firebase/requestCourses';

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

getAllCourses
.then(
data=> courses.value = data
)
</script>
