<script setup lang="ts">
import { RouterView } from 'vue-router';
import SideMenu from './views/components/SideMenu.vue';
</script>

<template>
  <div>
    <RouterView />
    <SideMenu />
  </div>
</template>

<style scoped>
div {
  display: flex;
}
</style>
