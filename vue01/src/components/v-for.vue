<template>
 <div id="vFor">
  <ul>
      <li v-for="(index,item) in msg" :key="index">{{item}}</li>
  </ul>
 </div>
</template>

<script>
export default {

  name: 'v-for',
  data () {
    return {
      msg: ['a','b','c','d','e']
    }
  }
}
</script>
<style scoped>
   #vFor {
       width: 100px;
       height: 100px;

   }
</style>
