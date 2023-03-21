<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
          title="John Leider"
          nav
        >
          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            v-for="item in items"
            :prepend-icon="item.icon"
            :title="item.title"
            :value="item.id"
            :key="item.id"
          >
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px"></v-main>
    </v-layout>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const drawer = ref(true);
const items = ref([
  { title: 'Overview', icon: 'mdi-home-city', id: 1 },
  { title: 'Dashboard', icon: 'mdi-account', id: 2 },
  { title: 'All Charts', icon: 'mdi-account-group-outline', id: 3 },
  { title: 'Analyze', icon: 'mdi-account-group-outline', id: 4 },
]);
const rail = ref(false);
</script>

<style scoped></style>
