<template>
  <main>
    <SideMenu />
    <RouterView />
  </main>
  <h1 style="width: 100%;" >Overview</h1>
  <div style="display: flex; flex-wrap: wrap; gap: 10px; margin: 10px; ">

        <CourseCard style="min-width: 25vw;" />
        <CourseCard style="min-width: 25vw;" />
        <CourseCard style="min-width: 25vw;" />
        <CourseCard style="min-width: 25vw;" />
        <CourseCard style="min-width: 25vw;" />
        <CourseCard style="min-width: 25vw;" />

  </div>
</template>

<script setup lang="ts">
import SideMenu from '@/views/components/SideMenu.vue';
import CourseCard from "@/components/CourseCard.vue"
</script>
