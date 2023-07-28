<template >
  <div class="coursecards"><template v-for="course in courses" :key="course.id">
      <CourseCard :="course" @modal="dropDownClick" />
    </template>
  </div>
  <ModalWindow>
    <component :is='getComponent()'></component>
  </ModalWindow>
</template>

<script setup lang='ts'>
import { ref } from "vue";
import CourseCard from "@/views/CourseCard.vue";
import { getAllCourses } from "@/firebase/requestCourses";
import ModalWindow from '../components/ModalWindow.vue';
import type { MyEvent } from '../../plugins/types/event';
import AddCourse from "./AddCourse.vue";
import DeleteCourse from "./DeleteCourse.vue";
import EditCourse from "./EditCourse.vue";
import type { Component } from "vue";
const component = ref<Component>(EditCourse)
const courses = ref([]);


function getComponent() {
  return component.value
}

function dropDownClick(event: MyEvent<HTMLElement>, id: number) {
  console.log(event, id)
  if (event.target === null) {
    return
  }
  switch (event.target.innerText) {
    case 'add':
      return component.value = AddCourse
      break;
    case 'delete':
      return component.value = DeleteCourse
      break;
    case 'edit':
      return component.value = EditCourse
      break;
    default:
      console.log('ШЕФ УСЕ ПРОПАЛО1111')
      break;
  }
}


getAllCourses.then((data) => (courses.value = data));
</script>

<style scoped>
.coursecards {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px;
}
</style>