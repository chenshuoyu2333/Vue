<template>
  <div id="app">
<!--    <HelloWorld></HelloWorld>-->
<!--     <VFor></VFor>-->
<!--    <vBind></vBind>-->
<!--    <vOnce></vOnce>-->
<!--    <vHtml></vHtml>-->
<!--    <vPre></vPre>-->
<setColour></setColour>
  </div>
</template>

<script>
 import HelloWorld from './components/HelloWorld.vue'
import VFor from './components/v-for.vue'
import VBind from  './components/v-bind.vue'
 import vOnce from  './components/v-once.vue'
 import  vHtml from './components/v-html.vue'
 import  vPre from './components/v-pre'
import setColour from "./components/setColour";

export default {
  components: {
    HelloWorld,
    VFor,VBind,vOnce,vHtml,vPre,setColour},
  name: 'App'
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
