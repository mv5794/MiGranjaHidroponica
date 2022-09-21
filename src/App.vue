<template>
  <ion-app class="ionic-app">
    <Menu />
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import Menu from "@/components/menu/Menu.vue";

export default defineComponent({
  name: 'App',
  components: {
    Menu,
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
