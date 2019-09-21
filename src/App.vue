<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>
<script>
  import NavBar from "./components/Nav/NavBar";

  export default {
    name: 'App',
    components: {
      NavBar
    }
  }
</script>
<style lang="scss">
  #app {
    font-family: 'Nunito Sans', sans-serif;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.35)), url('./assets/arch-2.jpg') center;
    background-size: cover;
    min-height: 100vh;
  }
</style>
