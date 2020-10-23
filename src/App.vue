<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Test msg="Welcome to Your Vue.js App"/>
    <Test2>
        <template  v-slot:aa="dd">  <!-- v-slot必须放在template -->
            <span>{{dd.data[0]}}</span>
            <span>2</span>
            <span>3</span>
        </template>
        <template #cc="ee">这里是CC{{ee.eee[4]}}</template>
        <div slot="bb" slot-scope="dd">
            这是这是{{dd.data[3]}}
        </div>
    </Test2>
  </div>
</template>

<script>
import Test from './components/test.vue'
import Test2 from './components/test2.vue'

export default {
  name: 'app',
  components: {
    Test,
    Test2
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
