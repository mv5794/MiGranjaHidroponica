<template>
  <ion-app class="ionic-app">
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  }
});
</script>

<style scoped>
  .ionic-app{
    background-color: rgb(0, 0, 0);
  }
</style>