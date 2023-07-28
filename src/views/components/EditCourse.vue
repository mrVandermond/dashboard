<template>
    <ModalWindow>
        <template v-slot:header>
            <H1>Внесите изменения курса</H1>
        </template>

        <template v-slot:body>
            <CourseCard :="course" />

        </template>

        <template v-slot:footer>
            <v-btn>save</v-btn>
            <v-btn>discard</v-btn>
            <v-btn>cancel</v-btn>
        </template>
    </ModalWindow>
</template>



<script setup lang='ts'>
import type { Course } from '@/plugins/types/Course';
import CourseCard from '../CourseCard.vue';
import ModalWindow from './ModalWindow.vue';

const course = defineProps<Course>()

function editCourse() {
    //function changes course
}

function applyChanges() {
    // function that applies changes to firebase
}
</script>

<style scoped></style>