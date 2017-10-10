<template>
  <div id="wrapper">
    <main>
      <div>
        <div>
          <symbol-input></symbol-input>
        </div>
        <div v-if="symbol" class="landing-page-body">
          <symbol-name></symbol-name>
          <symbol-details></symbol-details>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import SymbolInput from './LandingPage/SymbolInput';
  import SymbolName from './LandingPage/SymbolName';
  import SymbolDetails from './LandingPage/SymbolDetails';

  export default {
    name: 'landing-page',
    components: { SymbolInput, SymbolName, SymbolDetails },
    created() {
      this.$store.dispatch('fetchSymbolData', 'HMNY');
    },
    methods: {},
    computed: {
      ...mapState({
        symbol: state => state.Symbol.symbol,
      }),
    },
  };
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; color: #fff; background: #222; }

  #wrapper {
    height: 100vh;
    width: 100vw;
  }
  
  form {
    border-bottom: 1px solid #fff;
  }
  input {
    width: 100%;
    background: transparent;
    border: none;    
    color: #fff;
    font-size: 3em;
    text-transform: uppercase;
    padding: .25em;
    outline: none;
  }
  button {
    visibility: hidden;
  }
  .landing-page-body {
    margin: 0 15px;
  }
  .symbol {
    font-size: 6em;
  }
</style>
