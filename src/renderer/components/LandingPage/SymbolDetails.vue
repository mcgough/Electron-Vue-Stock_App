<template>
  <div>
    <div class="time-series-container">
      <data-card :data="timeSeries.Daily"></data-card>
    </div>
    <div class="indicators-container">
      <data-card :data="indicators.MOM"></data-card>
      <data-card :data="indicators.SMA"></data-card>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import DataCard from "./DataCard";

export default {
  components: { DataCard },
  computed: {
    ...mapState({
      timeSeries: state => state.Symbol.timeSeries,
      indicators: state => state.Symbol.indicators
    })
  }
};
</script>

<style>
</style>