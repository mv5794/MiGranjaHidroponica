<template>
  <ion-page>
    <div class="card-container">
    <ion-card class="card-tmp">
      <ion-card-header>
        <ion-card-title>Temperaturas de agua y aire</ion-card-title>
      </ion-card-header>
      <ion-card-content class="card-content-chart">

        <SplineGraph :card-time-series="chartOptions" ref="graphTemperatureReference" />
      </ion-card-content>
    </ion-card>
    </div>

  </ion-page>
</template>

<script setup lang="ts">
import {IonCard, IonCardContent,IonPage, IonCardHeader, IonCardTitle} from "@ionic/vue";
import SplineGraph from "@/components/highchart/splineGraph/splineGraph.vue";
import {ICardTimeSeries} from "@/components/highchart/splineGraph/splineController";
import { GenericCallType } from "@/services/historic.services";
import { ref, computed, onMounted, watch } from "vue";
import { ComputedVariable } from "vue/macros";
import historicController from "./historicController";
import { getCurrentEpochTime } from '../../../utils/dates';

const graphTemperatureReference = ref<InstanceType<typeof SplineGraph> | null>(null);

let chartOptions: ComputedVariable<ICardTimeSeries> | any= computed(()=> historicController.temperatureSeries);

onMounted(async () => {
  await historicController.loadTemperature(GenericCallType.PerHour,1665014400, getCurrentEpochTime());
})

watch(
    chartOptions,
    () => {
      console.log('chart option de temperature', chartOptions);
    },
    {deep: true, immediate: true}
)

</script>

<style scoped>

.card-tmp {
  max-width: fit-content;
  padding: 20px;
  max-height: fit-content;
  border-radius: 20px;
}

.card-container{
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  justify-content: center;
}
</style>
