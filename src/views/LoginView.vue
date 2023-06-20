<template>
  <v-row justify="center" align="center" class="fill-height">
    <v-col class="flex-grow-1" cols="12" sm="6" md="4">
      <v-alert v-if="isAlert" :type="alertType" :text="alertText"></v-alert>

      <v-card>
        <v-card-text>
          <v-text-field
            v-model="email"
            label="Email"
            type="email"
            :rules="emailRules"
            required
          />

          <!-- <v-text-field
              v-model="password"
              label="Password"
              type="password"
              :rules="[passwordRules]"
            /> -->

          <v-row>
            <v-col cols="12" class="text-center">
              <v-btn color="primary" @click.prevent="login"> Login </v-btn>
            </v-col>
          </v-row>

          <!-- <v-row>
              <v-col cols="12" class="text-center">
                <v-btn text @click="forgotPassword"> Forgot password? </v-btn>
              </v-col>
            </v-row> -->
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { checkEmailExists } from '@/firebase/checkUserIsExists';

const router = useRouter();

const email = ref('');
// const password = ref('');
const isAlert = ref(false);
const alertType = ref();
const alertText = ref('');

const emailRules = [
  (value: string) => !!value || 'E-mail is required',
  (value: string) => /.+@.+\..+/.test(value) || 'E-mail must be valid',
];

// const passwordRules = [
//   (v) => !!v || 'Password is required',
//   (v) => v.length >= 8 || 'Password must be at least 8 characters',
// ];

async function login() {
  if (!emailRules.every((rule) => rule(email.value) === true)) {
    return;
  }

  const result = await checkEmailExists(email.value);
  isAlert.value = true;
  if (result) {
    alertType.value = 'success';
    alertText.value = 'You are log in!';
    setTimeout(async () => {
      await router.push('/');
    }, 1150);
  } else {
    alertType.value = 'error';
    alertText.value = 'This email not found!';
    console.warn(email.value, 'this email not found');
  }
}
// function forgotPassword() {
//   //Добавьте ваш код для обработки забытого пароля
//   //e.g. перенаправление на страницу сброса пароля
// }
</script>
<style lang="scss" scoped></style>
