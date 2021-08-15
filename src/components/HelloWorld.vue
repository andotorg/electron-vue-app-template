<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Vue CLI Plugin Electron Builder</p>
    <p>
      Easily Build Your Vue.js App For Desktop With Electron.
      <a href="https://nklayman.github.io/vue-cli-plugin-electron-builder/" target="_blank" rel="noopener">Vue CLI Plugin Electron Builder documentation</a>.
    </p>
    <h3></h3>
    <ul>
      <li><a href="https://andotorg.com" target="_blank" rel="noopener">Personal Blog</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
