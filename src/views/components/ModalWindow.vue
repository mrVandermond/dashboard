<template>
    <teleport to='body'>
    <transition name="modal">
        <div v-if="show" class="modal-shadow" @click.self="closeModal">
            <div class="modal">
                <div class="modal-close" @click="closeModal">&#10006;</div>
                <slot name="title">
                    <h3 class="modal-title"></h3>
                </slot>
                <slot name="body">
                    <div class="modal-content">
                        <!-- тут будет дефолтный контент модального окна -->
                    </div>
                </slot>
                <slot name="footer">
                    <div class="modal-footer">
                        <button class="modal-footer__button" @click="closeModal">
                            <!-- кнопка -->
                        </button>
                    </div>
                </slot>
            </div>
        </div>
    </transition>
    </teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const name = "ModalWindow"

const props = defineProps({
    show: {
        type: Boolean,
        default: false,
    }
})
let show = ref(true)
function closeModal() {
    show.value = false
}

</script>
 
<style lang="scss">
.modal-enter-active,
.modal-leave-active {
    transition: opacity 2s
}

.modal-enter,
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
</style>