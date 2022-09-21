<template>
  <IonPage class="indicatorsPage">
    <div class="page-cnt">
      <div class="gallery">
        <div v-for="stat in currentStats" :key="stat.name" class="">
          <CardIndicator :cardDetail="stat" />
        </div>
      </div>
      <div class="graph-cnt">
        <SplineGraph
          class="grapgh-class"
          :card-time-series="historicWholeData"
          ref="graphReference"
        />
      </div>
    </div>
  </IonPage>
</template>

<script lang="ts" setup>
import { IonPage } from "@ionic/vue";
import { reactive, ref } from "vue";
import statsController from "./model/Stats";
import CardIndicator from "./components/CardIndicator.vue";
import { ICardTimeSeries } from "@/components/highchart/splineGraph/splineController";
import SplineGraph from "@/components/highchart/splineGraph/splineGraph.vue";
const currentStats = reactive(statsController.getFakeData());

const historicWholeData: ICardTimeSeries = reactive({
  series: statsController.getFakeWholeGraph(),
});
const graphReference = ref<InstanceType<typeof SplineGraph> | null>(null);
</script>

<style scoped>
@media (width >= 800px) {
  .gallery {
    position: absolute;
    height: 300px;
    width: 600px;
    top: 60px;
    left: calc(50% - 300px);
    display: flex;
  }
  .indicatorsPage {
    margin-top: 8vh;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    margin-bottom: 5vh;
  }
}

@media (width < 800px) {
  .graph-cnt {
    position: absolute;
    visibility: hidden;
    display: none;
  }
  .indicatorsPage{
    justify-content: center;
    align-items: center;
  }
}
</style>
