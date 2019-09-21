<template>
  <section class="home">
    <b-container>
      <b-row>
        <b-col class="link-box" v-for="(link, index) in links" :key="link.value" :sm="index === 4 ? 12 : 6" :md="index > 2 ? 6 : 4">
          <article :class="'link-box__container link-'+index" @click="activate(link.path)">
            <div class="link-box__container__footer">{{ link.name }}</div>
          </article>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import NavBar from "../components/Nav/NavBar";
import { navigation } from "../static/links";

export default {
  name: 'home',
  components: {
    NavBar
  },
  data() {
    return {
      links: navigation,
    }
  },
  methods: {
    activate(path) {
      console.log(path);
    },
  }
}
</script>
<style scoped lang="scss">
  .home {
    position: relative;
    margin: 0 auto;
    min-height: calc(100vh - 56px);
    display: flex;
    align-items: center;

    .link-box {
      padding-top: 15px;
      padding-bottom: 15px;

      .link-box__container {
        cursor: pointer;
        height: 300px;
        position: relative;
        background-image: url('../assets/procjene.jpg');
        background-size: cover;
        background-position: center;
      }

      .no-hov {

      }

      .link-box__container__footer {
        width: 100%;
        height: 50px;
        position: absolute;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #45403B;
        color: #00FFA8;
        text-transform: uppercase;
        font-weight: 700;
      }
    }
  }
</style>