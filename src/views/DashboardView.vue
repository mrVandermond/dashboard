<template>
  <main>
    <SideMenu />
    <RouterView />
  </main>
  <h1>Dashboard</h1>
</template>

<script setup lang="ts">
import SideMenu from '@/views/components/SideMenu.vue';
</script>
