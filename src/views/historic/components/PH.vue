<template>
  <ion-page>
    <div class="card-container">
    <ion-card class="card-tmp">
      <ion-card-header>
        <ion-card-title>Nieveles de PH</ion-card-title>
      </ion-card-header>
      <ion-card-content class="card-content-chart">

        <SplineGraph :card-time-series="chartOptions" />
      </ion-card-content>
    </ion-card>
    </div>

  </ion-page>
</template>

<script setup lang="ts">
import {IonCard, IonCardContent,IonPage, IonCardHeader, IonCardTitle} from "@ionic/vue";
import SplineGraph from "@/components/highchart/splineGraph/splineGraph.vue";
import {ICardTimeSeries} from "@/components/highchart/splineGraph/splineController";




const chartOptions: ICardTimeSeries = {
  title: "asdasdd",
  series: [
    {
      data: [{
        y: 10,
        name: "Point2",
        color: "#00FF00",
        selected: false,
        marker: {
          symbol: 'diamond'
        }
      }, {
        y: 5,
        name: "Point1",
        color: "#FF00FF"
      },
        {
          y: 5,
          name: "Point1",
          color: "#525616"
        },
      ]
    }
  ]
}




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
