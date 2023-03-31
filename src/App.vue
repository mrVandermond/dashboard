<script setup lang="ts">
import { RouterView } from 'vue-router';
import SideMenu from './views/components/SideMenu.vue';
</script>

<template>
  <div>
    <SideMenu />
    <RouterView />
  </div>
</template>

<style scoped>
div {
  display: flex;
}
</style>

<!-- <keep-alive>
  <SideMenu />
</keep-alive>
<RouterView v-slot="{ Component }">
  <keep-alive>
    <component :is="Component" />
  </keep-alive>
</RouterView> -->
