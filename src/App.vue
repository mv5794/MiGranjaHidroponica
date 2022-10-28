<template>
  <ion-app class="ionic-app">
  <ion-header>
        <ion-toolbar class="menu-btn">
<!--          <ion-title>Menu Content</ion-title>-->
<!--          <ion-list>-->
<!--            <ion-item  v-for="route in routes" :key="route.path"  @click="navigateToRoute(route.path)" >-->
<!--              <ion-label>{{route.name}}</ion-label>-->
<!--            </ion-item>-->
<!--          </ion-list>-->
          <div class="cnt-menu">
          <div v-for="route in routes" :key="route.path">
            <button  @click="navigateToRoute(route.path)" >{{route.name}}</button>
          </div>
          </div>
        </ion-toolbar>
  </ion-header>

  <ion-content class="ion-padding">

      <ion-router-outlet />
  </ion-content>


  </ion-app>
</template>

<script lang="ts" setup>
import {IonApp, IonRouterOutlet} from '@ionic/vue';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonList,
  IonItem,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar, menuController, useIonRouter
} from '@ionic/vue';
import { defineComponent } from 'vue';
import Menu from "@/components/menu/Menu.vue";
const ionRouter = useIonRouter();
const routes = [{name: 'PH', path:'/historic/ph'}, {name: 'Temperatures', path:'/historic/temperatures'}, {name: 'Humidity', path:'/historic/humidity'}, {name: 'Profile', path: '/profile'}, {name: 'Stats', path: '/stats'}]

// console.log(visibleRoutes);
const navigateToRoute= (route: string) => {
  menuController.close("main-content")
  ionRouter.push(route);
  //Router.push(route );
}
</script>

<style scoped>
  .ionic-app{
    background-color: rgb(0, 0, 0);
  }
  .menu-btn{

  }

  .cnt-menu{
    display: flex;
    justify-content: space-around;
  }
</style>
