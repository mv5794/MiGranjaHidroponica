<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/historic/humidity">
          <ion-icon :icon="contrast" />
          <ion-label>Humedad</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/historic/ph">
          <ion-icon :icon="speedometerSharp" />
          <ion-label>PH</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/historic/temperatures">
          <ion-icon :icon="thermometerSharp" />
          <ion-label>Agua y aire</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import {IonRouterOutlet, IonPage} from "@ionic/vue";
import {IonTabBar, IonTabButton, IonTabs, IonIcon, IonLabel} from "@ionic/vue";
import {contrast, speedometerSharp, thermometerSharp, triangle} from 'ionicons/icons';

</script>

<style scoped>

</style>
