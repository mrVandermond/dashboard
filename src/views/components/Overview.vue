<template >
  <ModalWindow @close="closeModal" :draw="draw" :component="component" >
  </ModalWindow>
  <div class="coursecards"><template v-for="course in courses" :key="course.id">
      <CourseCard :="course" @modal="dropDownClick" />
    </template>
  </div>
</template>

<script setup lang='ts'>
import { ref, computed, provide, shallowRef } from "vue";
import CourseCard from "@/views/CourseCard.vue";
import { getAllCourses } from "@/firebase/requestCourses";
import ModalWindow from '../components/ModalWindow.vue';
import AddCourse from "./AddCourse.vue";
import DeleteCourse from "./DeleteCourse.vue";
import EditCourse from "./EditCourse.vue";
import type { Component } from "vue";
import type { Course } from "@/plugins/types/Course";


const component = shallowRef<Component>(EditCourse)
const draw = ref<boolean>(false)
const courses = ref <Course>();
const courseId = ref<number>(0)

provide('courses', courses)
provide('courseId', courseId)

function closeModal() {
  return draw.value = false
}

function dropDownClick(title: string, id: number) {
  console.log(title, id)
  courseId.value = id
  if (title === null) {
    return
  }
  switch (title) {
    case 'add':
      draw.value = true
      console.log(draw.value)
      return component.value  = AddCourse
      break;
    case 'delete':
      draw.value = true
      console.log(draw.value)
      return component.value  = DeleteCourse
      break;
    case 'edit':
      draw.value = true
      console.log(draw.value)
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