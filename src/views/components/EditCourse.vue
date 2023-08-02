<template>
        <slot  name="header">
            <h1>Внесите изменения курса</h1>
        </slot>

        <slot name="body">
            <CourseCard :="courses[courseId]" />

        </slot>

        <slot name="footer">
            <v-btn>save</v-btn>
            <v-btn>discard</v-btn>
            <v-btn>cancel</v-btn>
        </slot>
</template>



<script setup lang='ts'>
import type { Course } from '@/plugins/types/Course';
import CourseCard from '../CourseCard.vue';
import  {inject , ref}  from 'vue'
// если не получили курсы то рендерим ошибку
const courses : Array<Course> = inject('courses', [ ])
const courseId : number = inject('courseId',0)


function editCourse() {
    //function changes course
}

function applyChanges() {
    // function that applies changes to firebase
}
</script>

<style scoped></style>