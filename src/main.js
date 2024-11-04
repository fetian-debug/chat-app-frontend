import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Pusher from 'pusher-js';

// Initialize Pusher
const pusher = new Pusher('fcbb3283a93e7841f699', {
  cluster: 'eu',
});

// Create the Vue application
const app = createApp(App);

// Attach Pusher instance to the app's config for global access
app.config.globalProperties.$pusher = pusher;

// Use the router
app.use(router);

// Mount the app
app.mount('#app');