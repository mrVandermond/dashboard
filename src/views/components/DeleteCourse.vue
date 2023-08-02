<template>
        <slot name='header'>
            <h1>Выберите удаляемый курс</h1>
        </slot>

        <slot name='body'>
            <div v-for="course in courses" :key="course.id">
                <CourseCard :="course" />
            </div>
        </slot>

        <slot name="footer">
            <v-btn>Delete</v-btn>
            <v-btn>Clear Selection</v-btn>
        </slot>
</template>


<script setup lang='ts'>
import { inject } from 'vue';
import type { Course } from '@/plugins/types/Course';
import CourseCard from '../CourseCard.vue';

const courses: Array<Course> = inject('courses', [{
    name: 'Какой то курс',
    description: 'описание курса с описанием курса и в котором описан курс',
    icon: "mdi-cloud-upload",
    progress: 80,
    deadline: '19 августа хзкакого года',
    budget: 'сколько то баксов 1111',
    avatarLink: 'https://randomuser.me/api/portraits/men/85.jpg',
    id: 1
}])
</script>

<style scoped></style>