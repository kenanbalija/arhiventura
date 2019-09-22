<template>
  <div id="app">
    <NavBar />
    <router-view />
    <footer :class="{ absolute: isHome }">
      Arhiventura  &copy;{{ date }}
    </footer>
  </div>
</template>
<script>
  import NavBar from "./components/Nav/NavBar";

  export default {
    name: 'App',
    components: {
      NavBar
    },
    data() {
      return {
        date: '',
        isHome: true
      }
    },
    created() {
      this.date = new Date().getFullYear();
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

  footer {
    color: #fff;
    text-align: center;
    width: 100%;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 0.5px;
  }

  .absolute {
    position: absolute;
    bottom: 5px;
  }
</style>
