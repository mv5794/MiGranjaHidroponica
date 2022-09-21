<template>
  <ion-card class="card">
    <ion-card-header>
      <ion-card-subtitle>{{ props.cardDetail.name }}</ion-card-subtitle>
      <ion-card-title class="value-card">{{
        props.cardDetail.value
      }}</ion-card-title>
    </ion-card-header>
    <ion-card-content> </ion-card-content>
  </ion-card>
</template>
<script lang="ts" setup>
import { IStats } from "../model/IStats";
import { defineProps, onMounted, ref } from "vue";

const color = ref("white");

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
});
</script>
<style scoped>
.value-card {
  color: v-bind('color');
  font-weight: bolder;
}



.card {
  display: flex;
  height: 150px;
  width: 150px;
  background-color: #17141d;
  border-radius: 20px;
  box-shadow: -1rem 0 3rem #000;
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

</style>
