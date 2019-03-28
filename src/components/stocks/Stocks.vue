<template>
  <div>
    <app-chart type="LineChart" :data="chartData" :options="chartOptions"></app-chart>
    <hr>
    <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
  </div>
</template>

<script>
  import Stock from './Stock.vue';
  import { GChart } from 'vue-google-charts';

  export default {
    data() {
      return {
        chartData: [],
        chartOptions: {
          chart: {
            title: 'Company Stocks'
          }
        }
      }
    },
    components: {
      appStock: Stock,
      appChart: GChart
    },
    computed: {
      stocks() {
        this.chartData = this.$store.getters.chartArr;
        return this.$store.getters.stocks;
      }
    }
  }
</script>
