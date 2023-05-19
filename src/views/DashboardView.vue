<template>
  <main>
    <h1>Dashboard</h1>
    <div>
      <TableVue />
    </div>
  </main>
</template>

<script setup lang="ts">
import TableVue from "@/components/tablevue.vue";
</script>

<style scoped>
main{
  display: inline-block;
}
h1 {
  text-align: center;
}
</style>
