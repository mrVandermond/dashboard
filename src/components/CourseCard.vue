<template>
    <v-card
    :prepend-icon="icon"
    class="mx-auto"
    color="white"
    theme="dark"
    max-width="400"
    :title="name">
        <template
        v-slot:prepend>
            <v-icon
            size="x-large">
            </v-icon>
        </template>

        <v-card-text
        class="text-h5 py-2">
            "{{ description }}" <br>
            <v-container>
                <v-row>
                    <v-col>
                        <v-card
                        color="white"
                        theme="dark">
                            {{ deadline }}
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card
                        color="white"
                        theme="dark">
                            {{ budget }}
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
            <v-progress-linear
            style="margin-top: 20px;"
            :model-value="progress"
            :height="7"
            rounded rounded-bar
            color="blue"
            />

        </v-card-text>

        <v-card-actions>
            <v-list-item
            class="w-100">
                <template
                v-slot:prepend>
                    <v-avatar
                    color="indigo-accent-1"
                    :image="avatarLink">
                    </v-avatar>
                    <v-avatar color="indigo-accent-1"
                    :image="avatarLink">
                    </v-avatar>
                    <v-avatar
                    color="indigo-accent-1"
                    :image="avatarLink">
                    </v-avatar>
                </template>
            </v-list-item>
        </v-card-actions>
    </v-card>
</template>

<script setup lang='ts'>
defineProps({
        name: String ,
        description: String ,
        icon: String,
        progress: Number,
        deadline: String,
        budget: String,
        avatarLink : String,
})
</script>

<style lang="scss">

</style>