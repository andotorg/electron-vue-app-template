<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" style="width: 300px;">
    <HelloWorld msg="Welcome to Your Vue.js Electorn App"/>
    <img alt="andotorg logo" src="../assets/andotorg-logo.png" style="width: 80px;">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
