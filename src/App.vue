<script setup lang="ts">
import { RouterView } from 'vue-router';
import SideMenu from './views/components/SideMenu.vue';
</script>

<template>
  <div>
    <SideMenu></SideMenu>
    <RouterView />
  </div>
</template>

<style scoped>
div {
  display: flex;
}
</style>
