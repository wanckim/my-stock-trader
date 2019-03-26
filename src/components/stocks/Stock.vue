<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>(Price: {{ stock.price }})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input  type="number"
                  class="form-control"
                  placeholder="Quantity"
                  v-model.number="quantity"
                  :class="{danger: exceedsMaxFunds}">
        </div>
        <div class="pull-right">
          <button class="btn btn-primary"
                  @click="buyStock"
                  :disabled="exceedsMaxFunds || quantity <= 0 || !Number.isInteger(quantity)"
                  >{{ exceedsMaxFunds ? "Too much" : "Buy"}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['stock'],
    data() {
      return {
        quantity: 0
      }
    },
    computed: {
      funds() {
        return this.$store.getters.funds;
      },
      exceedsMaxFunds() {
        return this.stock.price * this.quantity > this.funds;
      }
    },
    methods: {
      buyStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        };
        this.$store.dispatch('buyStock', order);
        this.quantity = 0;
      }
    }
  }
</script>

<style scoped>
  .danger {
    border: 1.5pt solid red;
  }
</style>
