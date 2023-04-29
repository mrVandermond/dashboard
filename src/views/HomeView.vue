<script setup lang="ts">
import SideMenu from '@/views/components/SideMenu.vue';
import TableVue from "@/components/tablevue.vue"
</script>

<template>
  <main>
    <SideMenu />
  </main>

  <div style="display: flex; flex-wrap: wrap;">
    <RouterView />
  </div>
</template>

<style scoped></style>