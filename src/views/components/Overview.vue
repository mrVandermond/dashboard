<template >
    <div class="coursecards"><template v-for="course in courses" :key="course.id">
            <CourseCard :="course" />
        </template>
    </div>
</template>

<script setup lang='ts'>
import { ref } from "vue";
import CourseCard from "@/views/CourseCard.vue";
import { getAllCourses } from "@/firebase/requestCourses";

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
</style>