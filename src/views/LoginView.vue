<template>
  <v-row justify="center" align="center" class="fill-height">
    <v-col class="flex-grow-1" cols="12" sm="6" md="4">
      <v-card>
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="email"
              label="Email"
              type="email"
              :rules="[emailRules]"
              required
            />

            <v-text-field
              v-model="password"
              label="Password"
              type="password"
              :rules="[passwordRules]"
            />

            <v-row>
              <v-col cols="12" class="text-center">
                <v-btn color="primary" @click.prevent="login"> Login </v-btn>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" class="text-center">
                <v-btn text @click="forgotPassword"> Forgot password? </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
};

const firebaseApp = initializeApp(firebaseConfig);
const DB = getDatabase(firebaseApp);

const router = useRouter();

const email = ref('');
const password = ref('');

const emailRules = [
  (v) => !!v || 'E-mail is required',
  (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
];

const passwordRules = [
  (v) => !!v || 'Password is required',
  (v) => v.length >= 8 || 'Password must be at least 8 characters',
];

function login() {
  // const emailRef = firebase
  //   .database()
  //   .ref('users')
  //   .orderByChild('email')
  //   .equalTo(email.value);
  // emailRef.once('value', (snapshot) => {
  //   if (snapshot.exists()) {
  //     // email найден в базе данных
  //     // перенаправляем пользователя на главную страницу
  //     router.push('/');
  //   } else {
  //     // email не найден в базе данных
  //     // выдаем ошибку
  //     alert('Email not found');
  //   }
  // });
}
function forgotPassword() {
  //Добавьте ваш код для обработки забытого пароля
  //e.g. перенаправление на страницу сброса пароля
}
</script>
<style lang="scss" scoped></style>
