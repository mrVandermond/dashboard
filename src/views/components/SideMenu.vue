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
          title="Brian Ford"
          subtitle="brianford@lok.com"
          nav
        >
        </v-list-item>
        <v-list density="compact" class="" nav>
          <v-list-item type="subheader" title="ANALYSIS"></v-list-item>
          <v-list-item
            v-for="item in ANALYSIS"
            :prepend-icon="item.icon"
            :title="item.title"
            :key="item.id"
            link
          >
          </v-list-item>

          <v-list-item type="subheader" title="DATA MANAGEMENT"></v-list-item>
          <v-list-item
            v-for="item in DATA_MANAGEMENT"
            :prepend-icon="item.icon"
            :title="item.title"
            :key="item.id"
            link
          >
          </v-list-item>
        </v-list>

        <v-list density="compact" class="mt-auto" nav>
          <v-list-item type="subheader" title="ADMINISTRATION"></v-list-item>
          <v-list-item
            v-for="item in ADMINISTRATION"
            :prepend-icon="item.icon"
            :title="item.title"
            :key="item.id"
            link
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
const ANALYSIS = ref([
  // { title: 'ANALYSIS', id: 0, icon: '' },
  { title: 'Overview', icon: 'mdi-home-city', id: 1 },
  { title: 'Dashboard', icon: 'mdi-view-dashboard', id: 2 },
  { title: 'All Charts', icon: 'mdi-chart-pie-outline', id: 3 },
  { title: 'Analyze', icon: 'mdi-poll', id: 4 },
]);
const DATA_MANAGEMENT = ref([
  // { title: 'ANALYSIS', id: 0, icon: '' },
  { title: 'Explore Events', icon: 'mdi-earth', id: 1 },
  { title: 'Payment Inforamtion', icon: 'mdi-wallet-outline', id: 2 },
  { title: 'Visual Labeling', icon: 'mdi-label', id: 3 },
  { title: 'Live Data Feed', icon: 'mdi-view-grid-outline', id: 4 },
]);
const ADMINISTRATION = ref([
  // { title: 'ANALYSIS', id: 0, icon: '' },
  { title: 'Updates', icon: 'mdi-flag-variant-outline', id: 1 },
  { title: 'Integrations', icon: 'mdi-star-outline', id: 2 },
  { title: 'Support', icon: 'mdi-headphones', id: 3 },
  { title: 'Account', icon: 'mdi-account-outline', id: 4 },
  { title: 'Sign out', icon: 'mdi-exit-to-app', id: 5 },
]);

const rail = ref(false);
</script>

<style scoped></style>
