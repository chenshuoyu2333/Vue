<template>
    <div id="v-bind">
      <div :class='{colour:isColour}'>{{counter}}</div>
      <button @click="add">+</button>
      <button @click="sub">-</button>

    </div>
</template>

<script>
export default {
  name: "v-bind",

  data(){
    return {
      counter :0,
      isColour:true
    }

  },
  methods:{
    add(){
      this.counter++
      console.log('add()执行了');
    },
    sub(){
      this.counter--
      console.log('sub()执行了');
    }
  }
}
</script>

<style scoped>
.colour{color: red}

div{
  width: 100px;
  height: 100px;

  }
</style>
