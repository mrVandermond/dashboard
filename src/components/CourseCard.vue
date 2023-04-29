<template>
    <v-card class="mx-auto" color="white" theme="dark" max-width="400" :prepend-icon="course.icon" :title="course.name">
        <template v-slot:prepend>
            <v-icon size="x-large"></v-icon>
        </template>

        <v-card-text class="text-h5 py-2">
            "{{ course.description }}" <br>
            <v-container>
                <v-row>
                    <v-col>
                        <v-card color="white" theme="dark">
                            {{ course.deadline }}
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card color="white" theme="dark">
                            {{ course.budget }}
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>

            <v-progress-linear style="margin-top: 20px;" :model-value="course.progress" :height="7" rounded rounded-bar
                color="blue" />

        </v-card-text>

        <v-card-actions>
            <v-list-item class="w-100">
                <template v-slot:prepend>
                    <v-avatar color="grey-darken-3" :image="user.avatarLink"></v-avatar>
                    <v-avatar color="grey-darken-3" :image="user.avatarLink"></v-avatar>
                    <v-avatar color="grey-darken-3" :image="user.avatarLink"></v-avatar>
                </template>
            </v-list-item>
        </v-card-actions>
    </v-card>
</template>

<script setup lang='ts'>
const course = {
    name: 'Какой то курс',
    avatar: 'link',
    description: 'описание курса с описанием курса и в котором описан курс',
    icon: 'iconlink',
    progress: 80,
    deadline: '19 августа хзкакого года',
    budget: 'сколько то баксов 1111'
}
const user = {
    avatarLink: 'link',
}
</script>

<style lang="scss"></style>