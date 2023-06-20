<script setup lang="ts">
import SideMenu from '@/views/components/SideMenu.vue';
</script>

<template>
  <main>
    <SideMenu />
  </main>

  <div class="mainview">
    <RouterView />
  </div>
</template>

<style scoped>
.mainview {
  display: flex;
  flex-wrap: wrap;
}
</style>
