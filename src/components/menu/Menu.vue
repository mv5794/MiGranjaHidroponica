<template>
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu Content</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-list>
        <ion-item  v-for="route in visibleRoutes" :key="route.path" @click="navigateToRoute(route.path)">
          <ion-icon :icon="route.meta.icon" />
          <ion-label>{{route.name}}</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
  <ion-page id="main-content" style="background-color: transparent">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button @click="showMenu"></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
  </ion-page>
</template>

<script lang="ts" setup>
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar, menuController, useIonRouter
} from '@ionic/vue';
import Router from "@/router";

const ionRouter = useIonRouter();
const visibleRoutes = Router.getRoutes().filter(e => e.meta.visible);


const showMenu = () => {
  menuController.open("main-content")
}



console.log(visibleRoutes);
const navigateToRoute= (route: string) => {
  menuController.close("main-content")
  ionRouter.push(route);
   //Router.push(route );
}
</script>

<style scoped>
ion-menu::part(backdrop) {
  background-color: rgba(255, 0, 255, 0.5);
}

ion-menu::part(container) {
  border-radius: 0 20px 20px 0;

  box-shadow: 4px 0px 16px rgba(255, 0, 255, 0.18);
}
#main-content{
  z-index: 9999;
}
</style>
