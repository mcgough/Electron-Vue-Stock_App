<template>
  <div>
    <div class="data-title">
      <h4>{{ data.title }}</h4>
    </div>
    <ul v-if="isObject(data.recent)">
      <li v-for="(value, prop) in data.recent">
        {{ prop }} : {{ value }}
      </li>
    </ul>
    <ul v-else>
      <li>
        {{ data.recent }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'data-card',
    props: ['data'],
    methods: {
      isObject(val) {
        return val === Object(val);
      },
    },
  };
</script>

<style scoped>
  .data-title {
    margin-bottom: .2em;
  }
  ul {
    margin-bottom: 1.5em;
    list-style-type: none;
  }
  li {
    margin-left: 10px;
  }
</style>
