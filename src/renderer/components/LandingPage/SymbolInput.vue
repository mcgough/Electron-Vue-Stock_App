<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input type="text" v-model="symbolInput" placeholder="Search by Symbol">
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        symbolInput: '',
      };
    },
    methods: {
      handleSubmit() {
        this.$store.dispatch('fetchSymbolData', this.symbolInput);
        this.symbolInput = '';
      },
    },
  };
</script>

<style>

</style>