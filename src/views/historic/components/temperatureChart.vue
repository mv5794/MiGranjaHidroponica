<template>
  <ion-page>
    <div class="range-container">
      <ion-list class="rangeSelector">
        <ion-item>
          <ion-select
            interface="action-sheet"
            placeholder="Seleccionar rango"
            @ionChange="selectRange($event)"
          >
            <ion-select-option value="apples">1 año</ion-select-option>
            <ion-select-option value="oranges">6 mese</ion-select-option>
            <ion-select-option value="bananas">3 meses</ion-select-option>
          </ion-select>
        </ion-item>
      </ion-list>
    </div>

    <div class="card-container">
      <ion-card class="card-tmp">
        <ion-card-header>
          <ion-card-title>Temperatura de agua</ion-card-title>
        </ion-card-header>
        <ion-card-content class="card-content-chart">
          <SplineGraph :card-time-series="chartOptions" ref="graphReference" />
        </ion-card-content>
      </ion-card>
    </div>
  </ion-page>
</template>

<script lang="ts" setup>
import {
  IonCard,
  IonCardContent,
  IonPage,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/vue";
import { reactive, ref } from "vue";
import { ICardTimeSeries } from "@/components/highchart/splineGraph/splineController";
import SplineGraph from "@/components/highchart/splineGraph/splineGraph.vue";

const selectRange = (e: any) => {
  const seriesModify: Array<Array<any>> = chartOptions.series[0].data;


    seriesModify.length = 7


  //getCurrentInstance()?.proxy?.$forceUpdate();
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  graphReference.value!.m_timeSeries.m_series = seriesModify;
};

const graphReference = ref<InstanceType<typeof SplineGraph> | null>(null);

let chartOptions: ICardTimeSeries = reactive({
  series: [
    {
      data: [
        [Date.UTC(2022, 9, 24), 0],
        [Date.UTC(2022, 9, 27), 0.12],
        [Date.UTC(2022, 9, 30), 0.09],
        [Date.UTC(2022, 10, 3), 0.13],
        [Date.UTC(2022, 10, 6), 0.12],
        [Date.UTC(2022, 10, 9), 0.13],
        [Date.UTC(2022, 10, 12), 0.13],
        [Date.UTC(2022, 10, 15), 0.16],
        [Date.UTC(202, 10, 18), 0.19],
        [Date.UTC(1970, 10, 21), 0.25],
        [Date.UTC(2022, 10, 24), 0.26],
        [Date.UTC(2022, 10, 27), 0.24],
        [Date.UTC(2022, 10, 30), 0.25],
        [Date.UTC(2022, 11, 3), 0.26],
        [Date.UTC(2022, 11, 6), 0.36],
        [Date.UTC(2022, 11, 9), 0.43],
        [Date.UTC(2022, 11, 12), 0.32],
        [Date.UTC(2022, 11, 15), 0.48],
        [Date.UTC(2022, 11, 18), 0.5],
        [Date.UTC(2022, 11, 21), 0.44],
        [Date.UTC(2022, 11, 24), 0.43],
        [Date.UTC(2022, 11, 27), 0.45],
        [Date.UTC(2022, 11, 30), 0.4],
        [Date.UTC(2022, 0, 3), 0.39],
        [Date.UTC(2022, 0, 6), 0.56],
        [Date.UTC(2022, 0, 9), 0.57],
        [Date.UTC(2022, 0, 12), 0.68],
        [Date.UTC(2022, 0, 15), 0.93],
        [Date.UTC(2022, 0, 18), 1.11],
        [Date.UTC(2022, 0, 21), 1.01],
        [Date.UTC(2022, 0, 24), 0.99],
        [Date.UTC(2022, 0, 27), 1.17],
        [Date.UTC(2022, 0, 30), 1.24],
        [Date.UTC(2022, 1, 3), 1.41],
        [Date.UTC(2022, 1, 6), 1.47],
        [Date.UTC(2022, 1, 9), 1.4],
        [Date.UTC(2022, 1, 12), 1.92],
        [Date.UTC(2022, 1, 15), 2.03],
        [Date.UTC(2022, 1, 18), 2.46],
        [Date.UTC(2022, 1, 21), 2.53],
        [Date.UTC(2022, 1, 24), 2.73],
        [Date.UTC(2022, 1, 27), 2.67],
        [Date.UTC(2022, 2, 3), 2.65],
        [Date.UTC(2022, 2, 6), 2.62],
        [Date.UTC(2022, 2, 9), 2.79],
        [Date.UTC(2022, 2, 13), 2.93],
        [Date.UTC(2022, 2, 20), 3.09],
        [Date.UTC(2022, 2, 27), 2.76],
        [Date.UTC(2022, 2, 30), 2.73],
        [Date.UTC(2022, 3, 4), 2.9],
        [Date.UTC(2022, 3, 9), 2.77],
        [Date.UTC(2022, 3, 12), 2.78],
        [Date.UTC(2022, 3, 15), 2.76],
        [Date.UTC(2022, 3, 18), 2.76],
        [Date.UTC(2022, 3, 21), 2.7],
        [Date.UTC(2022, 3, 24), 2.61],
        [Date.UTC(2022, 3, 27), 2.52],
        [Date.UTC(2022, 3, 30), 2.53],
        [Date.UTC(2022, 4, 3), 2.55],
        [Date.UTC(2022, 4, 6), 2.52],
        [Date.UTC(2022, 4, 9), 2.44],
        [Date.UTC(2022, 4, 12), 2.43],
        [Date.UTC(2022, 4, 15), 2.43],
        [Date.UTC(2022, 4, 18), 2.48],
        [Date.UTC(2022, 4, 21), 2.41],
        [Date.UTC(2022, 4, 24), 2.16],
        [Date.UTC(2022, 4, 27), 2.01],
        [Date.UTC(2022, 4, 30), 1.88],
        [Date.UTC(2022, 5, 2), 1.62],
        [Date.UTC(2022, 5, 6), 1.43],
        [Date.UTC(2022, 5, 9), 1.3],
        [Date.UTC(2022, 5, 12), 1.11],
        [Date.UTC(2022, 5, 15), 0.84],
        [Date.UTC(2022, 5, 18), 0.54],
        [Date.UTC(2022, 5, 21), 0.19],
        [Date.UTC(2022, 5, 23), 0],
      ],
    },
  ],
  title: "Temperatura",
});
</script>

<style scoped>
.card-tmp {
  max-width: fit-content;
  padding: 20px;
  max-height: fit-content;
  border-radius: 20px;
}

.card-container {
  display: flex;
  justify-content: center;
  vertical-align: center;
  margin-top: auto;
  margin-bottom: auto;
}
.rangeSelector {
  position: absolute;
  top: 7vh;
  max-width: fit-content;
  border-radius: 20px;
}
.range-container {
  display: flex;
  justify-content: center;
}
</style>
