<template>
  <IonPage class="indicatorsPage">
    <div class="page-cnt">
      <div class="gallery">
        <CardIndicator :cardDetail="humedad"/>
        <CardIndicator :cardDetail="ph"/>
        <CardIndicator :cardDetail="tmpAire"/>
        <CardIndicator :cardDetail="tmpAgua"/>
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
import {IonPage} from "@ionic/vue";
import {reactive, ref, watch} from "vue";
import statsController from "./model/Stats";
import CardIndicator from "./components/CardIndicator.vue";
import {ICardTimeSeries} from "@/components/highchart/splineGraph/splineController";
import SplineGraph from "@/components/highchart/splineGraph/splineGraph.vue";
import {IStats} from "@/views/currentStats/model/IStats";
import {ReactiveVariable} from "vue/macros";

const currentStats = reactive(statsController.getFakeData());

const historicWholeData: ICardTimeSeries = reactive({
  series: statsController.getFakeWholeGraph(),
});

let humedad: ReactiveVariable<IStats> = reactive({sensor: 'humedad', value: NaN});
let ph: ReactiveVariable<IStats> = reactive({sensor: 'ph', value: NaN});
let tmpAire: ReactiveVariable<IStats> = reactive({sensor: 'temp_aire', value: NaN});
let tmpAgua: ReactiveVariable<IStats> = reactive({sensor: 'temp_agua', value: NaN});

const cardDataArra = reactive([humedad, ph, tmpAire, tmpAgua]);

const graphReference = ref<InstanceType<typeof SplineGraph> | null>(null);

const socketBaseUrl = new URL(process.env.VUE_APP_WEB_SOCKET_BASE_URL);

const humedadSocket = new WebSocket(socketBaseUrl + 'humedad');
const phSocket = new WebSocket(socketBaseUrl + 'ph');
const tmpAireSocket = new WebSocket(socketBaseUrl + 'temperatura/aire');
const tmpAguaSocket = new WebSocket(socketBaseUrl + 'temperatura/agua');

humedadSocket.addEventListener("message", function (event) {
  Object.assign(humedad, JSON.parse(event.data))
});
phSocket.addEventListener("message", function (event) {
  Object.assign(ph, JSON.parse(event.data))
});
tmpAireSocket.addEventListener("message", function (event) {
  Object.assign(tmpAire, JSON.parse(event.data))
});
tmpAguaSocket.addEventListener("message", function (event) {
  Object.assign(tmpAgua, JSON.parse(event.data))
});


watch(
    humedad,
    () => {
      console.log(humedad)
    },
    {deep: true, immediate: true}
)
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

  .indicatorsPage {
    justify-content: center;
    align-items: center;
  }
}
</style>
