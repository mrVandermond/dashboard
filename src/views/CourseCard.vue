<template>
  <v-card
    class="mx-auto"
    color="white"
    theme="light"
    max-width="400"
    :title="name"
    :prepend-icon="icon"
  >
    <template v-slot:prepend>
      <v-icon size="x-large" :icon="icon"> </v-icon>
    </template>

    <template v-slot:append>
      <v-btn @click = "" icon="mdi-dots-vertical"></v-btn>
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
      <v-progress-linear
        class="progress"
        :model-value="progress"
        :height="7"
        rounded
        rounded-bar
        color="blue"
      />
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
import type { Course } from '../plugins/types/Course'
const props = defineProps<Course>()
function menu(){

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

.subtitle{
    text-align: center;
    color: rgba(0, 0, 0, 0.5);
}

.progress{
    margin-top: 20px
}
</style>
