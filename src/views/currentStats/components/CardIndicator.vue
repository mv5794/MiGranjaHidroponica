<template>
  <ion-card class="card">
    <ion-card-header>
      <ion-card-subtitle>{{ tittle }}</ion-card-subtitle>
      <ion-card-title class="value-card">{{
          isNaN(props.cardDetail.value) ? '...' : props.cardDetail.value
        }}
      </ion-card-title>
    </ion-card-header>
    <ion-card-content></ion-card-content>
  </ion-card>
</template>
<script lang="ts" setup>
import {IStats} from "../model/IStats";
import {defineProps, onMounted, ref} from "vue";

const color = ref("white");
const tittle = ref('');

const props = defineProps<{
  cardDetail: IStats;
}>();
onMounted(() => {
  if (props.cardDetail.maxValue && props.cardDetail.minValue) {
    if (
        props.cardDetail.value >= props.cardDetail.minValue! &&
        props.cardDetail.value <= props.cardDetail.maxValue!
    ) {
      color.value = "green";
    } else {
      color.value = "red";
    }
  }

  switch (props.cardDetail.sensor) {
    case'temp_agua':
      tittle.value= 'Temperatura de agua'
      break;
    case 'temp_aire':
      tittle.value='Temperatura de aire'
      break;
    default:
      tittle.value= props.cardDetail.sensor.charAt(0).toUpperCase() + props.cardDetail.sensor.slice(1);
      break;
  }
});
</script>
<style scoped>
.value-card {
  color: v-bind('color');
  font-weight: bolder;
}

.card{
  display: flex;
  height: 150px;
  width: 150px;
  background-color: #17141d;
  border-radius: 20px;
  box-shadow: -1rem 0 3rem #000;
}

@media(width >= 800px){
  .card {
  /*   margin-left: -50px; */
  transition: 0.4s ease-out;
  position: relative;
  left: 0px;
}

.card:not(:first-child) {
  margin-left: -50px;
}

.card:hover {
  transform: translateX(-20px);
  transition: 0.5s ease-out;
}

.card:hover ~ .card {
  position: relative;
  left: 50px;
  transition: 0.4s ease-out;
}
}



</style>
