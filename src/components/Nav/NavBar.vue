<template>
  <b-container>
    <b-navbar toggleable="lg" type="dark" variant="faded">
      <b-navbar-brand href="#">
        <router-link id="brand" to="/">
            <div>ARH<span class="invent">INVENT</span>URA</div>
        </router-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item class="links" v-for="link in links" :key="link.path">
            <router-link class="text-uppercase" :to="link.path">{{ link.name }}</router-link>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <section class="socialParent">
          <b-navbar-nav id="socialLinks" class="ml-auto">
            <b-nav-item class="social-link" target="_blank" href="https://www.linkedin.com/in/jelena-obradovic-balavac-23b9b71a/">
              <i class="fab fa-linkedin-in"></i>
            </b-nav-item>
          </b-navbar-nav>
        </section>
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
    /*padding-left: 5rem;*/
  }
  a.router-link-exact-active {
    color: $active;
  }

  .fa-linkedin-in {
    transition: all 300ms !important;
  }

  .fa-linkedin-in:hover {
    color: #fff;
  }

  #brand {
    font-size: 15px;
    color: #fff;
    font-weight: 900;
  }

  #logo {
    width: 120px;
  }

  .links {
    padding-left: 8px;
    font-size: 15px;
    border: 1px solid white
  }

  .invent {
    color: $active;
  }

  #socialLinks {
    padding-left: 0.5rem;
  }

</style>
