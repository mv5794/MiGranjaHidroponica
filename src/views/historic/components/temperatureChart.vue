<template>
  <ion-page>
  <div class="card-container">
  <ion-card class="card-tmp">
    <ion-card-header>
      <ion-card-title>Temperatura de agua</ion-card-title>
    </ion-card-header>
    <ion-card-content class="card-content-chart">
      <SplineGraph :card-time-series="chartOptions" />
    </ion-card-content>
  </ion-card>
  </div>
  </ion-page>
</template>

<script lang="ts" setup>
import {IonCard, IonCardContent,IonPage, IonCardHeader, IonCardTitle} from "@ionic/vue";
import {reactive} from "vue";
import {ICardTimeSeries} from "@/components/highchart/splineGraph/splineController";
import SplineGraph from "@/components/highchart/splineGraph/splineGraph.vue";



let chartOptions: ICardTimeSeries = reactive({
  series: [
    {
      data: [{
        y: 1,
        name: "Point2",
        color: "#00FF00",
        selected: false,
        marker: {
          symbol: 'diamond'
        }
      }, {
        y: 0,
        name: "Point1",
        color: "#FF00FF"
      },
        {
          y: 5,
          name: "Point1",
          color: "#525616"
        },
        {
          y: 2,
          name: "Point1",
          color: "#00ffb2"
        },
        {
          y: 10,
          name: "Point1",
          color: "#be86be"
        },
        {
          y: 8,
          name: "Point1",
          color: "#FF00FF"
        }]
    }
  ],
  title: 'Temperatura'

})

</script>

<style scoped>
.card-tmp {
  max-width: fit-content;
  padding: 20px;
  max-height: fit-content;
  border-radius: 20px;
}

.card-container{
  display: flex;
  justify-content: center;
  vertical-align: center;
  margin-top: auto;
  margin-bottom: auto;
}
</style>
