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
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { checkEmailExists } from '@/firebase/checkUserIsExists.ts';

const router = useRouter();

const email = ref('');
const password = ref('');

const emailRules = [
  (v) => !!v || 'E-mail is required',
  (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
];

// const passwordRules = [
//   (v) => !!v || 'Password is required',
//   (v) => v.length >= 8 || 'Password must be at least 8 characters',
// ];

async function login() {
  if (!email.value) return;
  const result = await checkEmailExists(email.value);

  if (result) {
    return await router.push('/');
  }
  console.warn(email.value, 'this email not found');
}
// function forgotPassword() {
//   //Добавьте ваш код для обработки забытого пароля
//   //e.g. перенаправление на страницу сброса пароля
// }
</script>
<style lang="scss" scoped></style>
