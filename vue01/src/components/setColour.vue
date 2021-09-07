<template>
<div>
  <ul>
    <li v-for="(item,idx) in arr" :key="idx" :class="{active:idx===currentIndex}" @click="setColour(idx)">{{idx}}-->{{item}}</li>
  </ul>
</div>
</template>

<script>
export default {
  name: "setColour",
  data(){
    return{
      currentIndex:'',
      arr:['星际穿越','海王','进击的巨人','绿野仙踪','生化危机'],

    }

  },
  methods:{
    setColour(idx){
     return  this.currentIndex=idx
    }
  }


}
</script>

<style scoped>
.active{color: red}
</style>
