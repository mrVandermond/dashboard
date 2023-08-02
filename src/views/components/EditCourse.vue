<template>
        <slot  name="header">
            <h1>Внесите изменения курса</h1>
        </slot>

        <slot name="body">
            <CourseCard :course="courses[courseId]" />

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

const courses : Array<Course> = inject('courses', [{
    name: 'Error',
    description: 'Error',
    icon: "mdi-cloud-upload",
    progress: 80,
    deadline: 'Error',
    budget: 'Error',
    avatarLink: 'https://randomuser.me/api/portraits/men/85.jpg',
    id: 0
}])
const courseId : number = inject('courseId',0)


function editCourse() {
    //function changes course
}

function applyChanges() {
    // function that applies changes to firebase
}
</script>

<style scoped></style>