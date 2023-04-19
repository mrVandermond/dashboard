<script setup lang="ts">
import SideMenu from '@/views/components/SideMenu.vue';
import  TableVue  from "@/components/tablevue.vue"
</script>

<template>
  <main>
    <SideMenu />
    <RouterView />
  </main>
  <TableVue/>
  <h1>Home</h1>
</template>

