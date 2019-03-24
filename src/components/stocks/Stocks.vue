<template>
  <div>
    <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
  </div>
</template>

<script>
  import Stock from './Stock.vue';

  export default {
    data() {
      return {
        stocks: [
          { id: 1, name: 'dummy_1', price: 100 },
          { id: 2, name: 'dummy_2', price: 100 },
          { id: 3, name: 'dummy_3', price: 100 },
          { id: 4, name: 'dummy_4', price: 100 }
        ]
      }
    },
    components: {
      appStock: Stock
    }
  }
</script>
