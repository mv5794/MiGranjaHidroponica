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
          <SplineGraph :card-time-series="chartOptions" ref="graphReference"/>
        </ion-card-content>
      </ion-card>
    </div>
  </ion-page>
</template>


<script lang="ts"  setup>
import {IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonPage,} from "@ionic/vue";
import {computed, onMounted, reactive, ref, watch} from "vue";
import {ICardTimeSeries} from "@/components/highchart/splineGraph/splineController";
import SplineGraph from "@/components/highchart/splineGraph/splineGraph.vue";
import historicController from "@/views/historic/components/historicController";
import {ComputedVariable, ReactiveVariable} from "vue/macros";

// const selectRange = (e: any) => {
//   const seriesModify: Array<Array<any>> = chartOptions.series[0].data;
//   seriesModify.length = 7
//   //getCurrentInstance()?.proxy?.$forceUpdate();
//   // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
//   graphReference.value!.m_timeSeries.m_series = seriesModify;
// };

const graphReference = ref<InstanceType<typeof SplineGraph> | null>(null);

let chartOptions: ComputedVariable<ICardTimeSeries> | any= computed(()=> historicController.temperatureSeries);

onMounted(async () => {
  await historicController.loadData();
})

watch(
    chartOptions,
    () => {
      console.log('pepito pues', chartOptions);
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
