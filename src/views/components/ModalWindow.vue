<template>
    <teleport to='body'>
        <transition  name="modal">
            <div v-if="show" class="modal-shadow" @click.self="$emit(`close`)">
                <div class="modal">
                    <div class="modal-close" @click=" $emit(`close`)">&#10006;</div>
                    <component :is="component">
                        <template v-slot:header>
                            <!-- <h3 class="modal-title"></h3> -->
                        </template>
                        <template v-slot:body>
                            <!-- <div class="modal-content">
                                тут будет дефолтный контент модального окна
                            </div> -->
                        </template>
                        <template v-slot:footer>
                            <!-- <div class="modal-footer">
                                <button class="modal-footer__button" @click="$emit(`close`)">
                                    кнопка
                                </button>
                            </div> -->
                        </template>
                    </component>
                </div>
            </div>
        </transition>
    </teleport>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Component } from 'vue';

const name = "ModalWindow"

defineEmits<{
    (e:'close'):void
}>()

const props = defineProps <{
    draw: Boolean,
    component: Component,
}>()

console.log(props.draw)
computed(() => console.log(show))
const show = computed(() => props.draw)
const component = computed(() => props.component)


</script>
 
<style lang="scss">
.modal-enter-active,
.modal-leave-active {
    transition: opacity 2s
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0
}

body {
    font-family: 'Source Sans Pro', sans-serif;
    margin: 0;
    padding: 0;
    height: 100vh;
}

.page {
    position: relative;
    width: 100%;
    min-height: 100%;
}

.modal-shadow {
    background-color: rgb(252, 251, 251);
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
}
</style>