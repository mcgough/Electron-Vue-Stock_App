<template>
  <div>
    <span class="symbol">{{ symbol }}</span>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    computed: {
      ...mapState({
        symbol: state => state.Symbol.symbol,
      }),
    },
  };
</script>

<style>

</style>