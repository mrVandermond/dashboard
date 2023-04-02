<template>
  <v-card>
    <v-layout>
      <keep-alive>
        <v-navigation-drawer
          v-model="drawer"
          :rail="rail"
          permanent
          @click="rail = false"
          class="d-flex align-start flex-column"
          include="SideMenu"
        >
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
            title="Brian Ford"
            subtitle="brianford@lok.com"
            nav
            class="ma-2"
          />
          <v-list density="compact" class="ma-2" nav>
            <v-list-item type="subheader" title="ANALYSIS" />
            <v-list-item
              v-for="item in ANALYSIS"
              :prepend-icon="item.icon"
              :title="item.title"
              :key="item.id"
              link
              :to="item.path"
              :nav="true"
            />
          </v-list>
          <v-list density="compact" class="ma-2" nav>
            <v-list-item type="subheader" title="DATA MANAGEMENT" />
            <v-list-item
              v-for="item in DATA_MANAGEMENT"
              :prepend-icon="item.icon"
              :title="item.title"
              :key="item.id"
              link
              :to="item.path"
              :nav="true"
            />
          </v-list>
          <template v-slot:append>
            <div class="ma-2">
              <v-list density="compact" nav>
                <v-list-item type="subheader" title="ADMINISTRATION" />
                <v-list-item
                  v-for="item in ADMINISTRATION"
                  :prepend-icon="item.icon"
                  :title="item.title"
                  :key="item.id"
                  link
                  :to="item.path"
                  :nav="true"
                />
              </v-list>
            </div>
          </template>
        </v-navigation-drawer>
      </keep-alive>
      <v-main style="height: 250px"></v-main>
    </v-layout>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const drawer = ref(true);
const ANALYSIS = ref([
  // { title: 'ANALYSIS', id: 0, icon: '' },
  { title: 'Overview', icon: 'mdi-home-city', id: 1, path: '/overview' },
  { title: 'Dashboard', icon: 'mdi-view-dashboard', id: 2, path: '/dashboard' },
  {
    title: 'All Charts',
    icon: 'mdi-chart-pie-outline',
    id: 3,
    path: '/charts',
  },
  { title: 'Analyze', icon: 'mdi-poll', id: 4, path: '/analyze' },
]);
const DATA_MANAGEMENT = ref([
  // { title: 'ANALYSIS', id: 0, icon: '' },
  { title: 'Explore Events', icon: 'mdi-earth', id: 1, path: '/events' },
  {
    title: 'Payment Inforamtion',
    icon: 'mdi-wallet-outline',
    id: 2,
    path: '/payment',
  },
  {
    title: 'Visual Labeling',
    icon: 'mdi-label',
    id: 3,
    path: '/visuallabeling',
  },
  {
    title: 'Live Data Feed',
    icon: 'mdi-view-grid-outline',
    id: 4,
    path: '/livedatafeed',
  },
]);
const ADMINISTRATION = ref([
  // { title: 'ANALYSIS', id: 0, icon: '' },
  {
    title: 'Updates',
    icon: 'mdi-flag-variant-outline',
    id: 1,
    path: '/updates',
  },
  {
    title: 'Integrations',
    icon: 'mdi-star-outline',
    id: 2,
    path: '/integrations',
  },
  { title: 'Support', icon: 'mdi-headphones', id: 3, path: '/support' },
  { title: 'Account', icon: 'mdi-account-outline', id: 4, path: '/account' },
  { title: 'Sign out', icon: 'mdi-exit-to-app', id: 5, path: '/signout' },
]);

const rail = ref(false);
</script>

<style scoped>
v-navigation-drawer > v-list:last-of-type() {
  margin-top: auto;
}
</style>
