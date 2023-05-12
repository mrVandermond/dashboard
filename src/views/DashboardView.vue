<template>
  <main style="display: none;">
    <SideMenu />
    <RouterView />
  </main>
  <h1>Dashboard</h1>
  <div >
    <TableVue/>
  </div>
</template>

<script setup lang="ts">
import SideMenu from '@/views/components/SideMenu.vue';
import TableVue from "@/components/tablevue.vue"
</script>
