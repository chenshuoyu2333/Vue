<template>
  <div>
    <h2  v-once>{{num}}</h2>
    <h2>{{num}}</h2>
  </div>

</template>

<script>
export default {
  name: "v-once",
  data(){
    return{
      num:2
    }
  }
}
</script>

<style scoped>

</style>
