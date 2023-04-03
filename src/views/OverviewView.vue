<template>
  <main>
    <SideMenu />
    <RouterView />
  </main>
  <h1>Overview</h1>
</template>

<script setup lang="ts">
import SideMenu from '@/views/components/SideMenu.vue';
</script>
