<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button
          router-link="/historic/humidity"
          tab="tab1"
          href="/historic/humidity"
          @click="goToRoute('/historic/humidity')"
        >
          <ion-icon :icon="contrast" />
          <ion-label>Humedad</ion-label>
        </ion-tab-button>

        <ion-tab-button
          router-link="/historic/ph"
          tab="tab2"
          href="/historic/ph"
          @click="goToRoute('/historic/ph')"
        >
          <ion-icon :icon="speedometerSharp" />
          <ion-label>PH</ion-label>
        </ion-tab-button>

        <ion-tab-button
          router-link="/historic/temperatures"
          tab="tab3"
          href="/historic/temperatures"
          @click="goToRoute('/historic/temperatures')"
        >
          <ion-icon :icon="thermometerSharp" />
          <ion-label>Agua y aire</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-router-outlet>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonRouterOutlet, IonPage, useIonRouter } from "@ionic/vue";
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonIcon,
  IonLabel,
} from "@ionic/vue";
import {
  contrast,
  speedometerSharp,
  thermometerSharp,
} from "ionicons/icons";

const goToRoute = (route: string) => {
  console.log("sdsda");
  useIonRouter().push(route);
};
</script>

<style scoped></style>
