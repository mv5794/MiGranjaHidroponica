<template>
  <ion-page>
    <div class="range-container">
      <ion-list class="rangeSelector">
        <!--<DatesRangeComponent />  --> 
      </ion-list>
    </div>

    <div class="card-container">
      <ion-card class="card-tmp">
        <ion-card-header>
          <ion-card-title>Temperatura de agua</ion-card-title>
        </ion-card-header>
        <ion-card-content class="card-content-chart">
          <SplineGraph :card-time-series="chartOptions" ref="graphReference"/>
        </ion-card-content>
      </ion-card>
    </div>
  </ion-page>
</template>


<script lang="ts"  setup>
import {IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonPage,} from "@ionic/vue";
import {computed, onMounted, ref} from "vue";
import {ICardTimeSeries} from "@/components/highchart/splineGraph/splineController";
import SplineGraph from "@/components/highchart/splineGraph/splineGraph.vue";
import historicController from "@/views/historic/components/historicController";
import {ComputedVariable} from "vue/macros";
import { GenericCallType } from "@/services/historic.services";
import { getCurrentEpochTime } from '../../../utils/dates';

// const selectRange = (e: any) => {
//   const seriesModify: Array<Array<any>> = chartOptions.series[0].data;
//   seriesModify.length = 7
//   //getCurrentInstance()?.proxy?.$forceUpdate();
//   // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
//   graphReference.value!.m_timeSeries.m_series = seriesModify;
// };

const graphReference = ref<InstanceType<typeof SplineGraph> | null>(null);

let chartOptions: ComputedVariable<ICardTimeSeries> | any= computed(()=> historicController.humiditySeries);

onMounted(async () => {
  await historicController.loadHumidity(GenericCallType.PerHour,1665014400, getCurrentEpochTime());
})



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
