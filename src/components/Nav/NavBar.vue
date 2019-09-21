<template>
  <b-container>
    <b-navbar toggleable="lg" type="dark" variant="faded">
      <b-navbar-brand href="#">
        <router-link to="/">
          Arhiventura
        </router-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item v-for="link in links" :key="link.path">
            <router-link :to="link.path">{{ link.name }}</router-link>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">
            <i class="fab fa-facebook-f"></i>
          </b-nav-item>
          <b-nav-item href="#">
            <i class="fab fa-instagram"></i>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
</template>

<script>
  import { navigation } from "../../static/links";

  export default {
    name: "NavBar",
    data() {
      return {
        links: navigation
      }
    }
  }
</script>

<style lang="scss" scoped>
  $color: #fff;
  $active: #00FFA8;

  a {
    text-transform: capitalize;
    color: $color;
    transition: all 0.5s;
    font-weight: 700;
    &:visited {
      color: $color;
    }
    &:hover {
      color: $active;
      text-decoration: none;
    }
    &:active {
      color: $active;
    }
  }

  #nav-collapse {
    padding-left: 5rem;
  }
  a.router-link-exact-active {
    color: $active;
  }
</style>