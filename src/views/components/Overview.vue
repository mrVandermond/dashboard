<template >
    <div class="coursecards"><template v-for="course in courses" :key="course.id">
            <CourseCard :="course"  @modal="dropDownClick" />
        </template>
    </div>
    <ModalWindow>
    <title>
      {{ dropdownProps.title }}
    </title>

    <body>
      {{ dropdownProps.body }}
    </body>

    <footer>
      {{ dropdownProps.footer }}
    </footer>

  </ModalWindow>
</template>

<script setup lang='ts'>
import { ref } from "vue";
import CourseCard from "@/views/CourseCard.vue";
import { getAllCourses } from "@/firebase/requestCourses";
import ModalWindow from '../components/ModalWindow.vue';
import type { MyEvent } from '../../plugins/types/event';
const dropdownProps = ref()

const courses = ref([]);

function dropDownClick(event: MyEvent<HTMLElement> , id:number) {
  console.log(event, id)
  switch (event.target.innerText) {
    case 'add':
      console.log(event.target)
      console.log('1')
      break;
    case 'delete':
      console.log('2')
      break;
    case 'edit':
      console.log('3')
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