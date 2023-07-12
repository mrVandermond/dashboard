<template>
  <v-card class="mx-auto" color="white" theme="light" max-width="400" :title="name" :prepend-icon="icon">
    <template v-slot:prepend>
      <v-icon size="x-large" :icon="icon"> </v-icon>
    </template>

    <template v-slot:append>
      <v-btn @click="dotsMenu" ref="dushnoeDotsMenu" icon="mdi-dots-vertical">{{ menu }}</v-btn>
      <div class="iconWrapper" :class="{ 'iconWrapper--noTitle': !menuTitle }">
        <div class="bar1" :class="{ 'bar1--open': isOpen, 'bar1--dark': isDarkMode }" />
        <div class="bar2" :class="{ 'bar2--open': isOpen, 'bar2--dark': isDarkMode }" />
        <div class="bar3" :class="{ 'bar3--open': isOpen, 'bar3--dark': isDarkMode }" />
      </div>

      <section class="dropdownMenu" v-if="isOpen" :class="{ 'dropdownMenu--dark': isDarkMode }">
        <div class="menuArrow" :class="{ 'menuArrow--dark': isDarkMode }" />
        <slot />
      </section>

    </template>

    <v-card-text class="text-h5 py-2">
      "{{ description }}"
      <div class="describeContainer">
        <div class="describeContainer__item">
          <div class="content">
            {{ deadline }}
          </div>
          <div class="subtitle">Deadline</div>
        </div>
        <div class="describeContainer__item">
          <div class="content">
            {{ budget }}
          </div>
          <div class="subtitle">Budget</div>
        </div>
      </div>
      <v-progress-linear class="progress" :model-value="progress" :height="7" rounded rounded-bar color="blue" />
    </v-card-text>

    <v-card-actions>
      <v-list-item class="w-100">
        <template v-slot:prepend>
          <v-avatar color="indigo-accent-1" :image="avatarLink"> </v-avatar>
          <v-avatar color="indigo-accent-1" :image="avatarLink"> </v-avatar>
          <v-avatar color="indigo-accent-1" :image="avatarLink"> </v-avatar>
        </template>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Course } from '../plugins/types/Course'
import { toRefs } from 'vue'
import type { Ref } from 'vue';
import type { MyEvent } from '../plugins/types/event';

let isOpen: boolean
const props = defineProps<Course>()
const menu = ref(['add', 'delete', 'edit'])
const dushnoeDotsMenu = ref(null)
function dotsMenu() {
  const closeListener = (event: MyEvent<HTMLElement>) => {
    if (outside(event, dushnoeDotsMenu)) {
      window.removeEventListener('click', closeListener)
    }
  }

  window.addEventListener('click', closeListener)
  isOpen = !isOpen

  const outside = (e: MyEvent<HTMLElement>) => {
    if (e.target?.closest(`dushnoeDotsMenu`)) {
      return false
    }
    if (isOpen && e.target?.closest(`dushnoeDotsMenu`)) {
      return true
    }
  }
}
</script>
 
<style lang="scss">
.describeContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
}

.describeContainer__item {
  border: solid 1px rgb(206, 206, 206);
  padding: 5px;
  border-radius: 10px;
  box-shadow: 1px 2px 2px rgb(68, 66, 66);
}

.subtitle {
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
}

.progress {
  margin-top: 20px
}
</style>
