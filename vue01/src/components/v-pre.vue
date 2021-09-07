<template>
  <div >
    <h2 v-pre>{{msg}}</h2>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
export default {

  name: 'v-pre',
  data () {
    return {
      msg: 'Welcome '
    }
  }
}
</script>
