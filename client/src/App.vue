
<script lang="ts">
import { defineComponent } from 'vue';
import CalculatorPanel from './components/CalculatorPanel.vue';

export default defineComponent({
  name: 'App',
  components: {
    CalculatorPanel
  }
});
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <calculator-panel />
</template>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
