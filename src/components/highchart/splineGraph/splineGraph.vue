<template>
  <div :id="divId" style="height:100%; width:100%;"></div>
</template>

<script setup lang="ts">
import SplineController, {ICardTimeSeries} from "@/components/highchart/splineGraph/splineController";
import {onMounted, watch} from "vue";
import {defineProps, defineExpose} from "vue";

const props = defineProps<{
  cardTimeSeries: ICardTimeSeries;
}>();

const divId: string = '_' + Math.random().toString(36).substring(2, 9);
const m_timeSeries: SplineController = new SplineController (divId);

watch(
    () => props.cardTimeSeries.series,
    () => {
      m_timeSeries.m_series = props.cardTimeSeries.series
    },
    { immediate: true, deep: true },
);
onMounted(()=> {
  m_timeSeries.createChart();
})

defineExpose({
  m_timeSeries
})
</script>

<style scoped>

</style>
