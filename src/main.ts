import { createApp } from "vue";
import { createPinia } from "pinia";
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import App from "@/App.vue";
import '@mdi/font/css/materialdesignicons.css'
import router from "@/router";


const app = createApp(App);
const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
});

app.use(createPinia());
app.use(router);
app.use(vuetify);

app.mount("#app");



