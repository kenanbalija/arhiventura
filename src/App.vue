<template>
  <div id="app">
    <NavBar />
    <router-view />
    <footer :class="{ absolute: isHome }">
<!--      <img id="logo" src="./assets/logo_final.jpg">-->
      ARHINVENTURA d.o.o.
      <span class="ml-2">
        &copy;{{ date }}
      </span>
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

    #logo {
      max-height: 150px;
      display: block;
      margin: 0 auto;
    }
  }

  .absolute {
    /*position: absolute;*/
    /*bottom: 5px;*/
    padding-bottom: 5px;
  }
</style>
