<template>
  <IonPage class="indicatorsPage">
    <div class="gallery">
      <div v-for="stat in currentStats" :key="stat.name" class="">
        <CardIndicator :cardDetail="stat" />
      </div>
    </div>
  </IonPage>
</template>

<script lang="ts" setup>
import { IonPage } from '@ionic/vue';
import { reactive } from 'vue';
import statsController from './model/Stats';
import CardIndicator from './components/CardIndicator.vue';
const currentStats = reactive(statsController.getFakeData());
</script>

<style scoped>
.gallery{
  position: absolute;
  height: 300px;
  width: 600px;
  top: 60px;
  left: calc(50% - 300px);
  display: flex;
}
.indicatorsPage{
  margin-top: 8vh;
}
</style>