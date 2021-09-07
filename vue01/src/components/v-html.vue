<template>
  <div>
    <h2>不使用v-html</h2>
    <h2>{{url}}</h2>
    <h2>使用v-html，直接插入html</h2>
    <h2 v-html="url"></h2>

  </div>
</template>

<script>
export default {
  name: "v-html",
  data(){
    return{

    message:"你好啊",
    url:"<a href='http://www.baidu.com'>百度一下</a>"
  }

  }
}
</script>

<style scoped>

</style>
