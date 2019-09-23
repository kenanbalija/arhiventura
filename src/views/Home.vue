<template>
  <section class="home">
    <b-container>
      <b-row>
        <b-col @mouseover='hoverEffect' @mouseleave="leaveHoverEffect" class="link-box" v-for="(link, index) in links" :key="link.value" :sm="index === 4 ? 12 : 6" :md="index > 2 ? 6 : 4">
          <router-link :to="link.path">
            <article  :class="['link-box__container link-'+index , link.value, { overlay: isHovered }]">
              <div class="link-box__container__footer">{{ link.name }}</div>
            </article>
          </router-link>
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
      isHovered: false
    }
  },
  methods: {
    activate(path) {
      console.log(path);
    },
    hoverEffect(e) {
      this.isHovered = true;
      this.$nextTick(() => {
       e.target.classList.remove('overlay');
      })
    },
    leaveHoverEffect(e) {
        this.isHovered = false;
    }
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
        background-color: rgba(69, 64, 59,0.6);
        color: #fff;
        text-transform: uppercase;
        font-weight: 700;
        pointer-events: none;
      }

      .overlay {
         -webkit-filter: brightness(50%);
      }

      .noOverlay {
        filter: none !important;
      }

      .procjene { 
        background-image: url('../assets/deal.jpeg');       
      }

      .vjestacenje {
        background-image: url('../assets/arch-4.jpg');       
      }

      .etaziranje {
        background-image: url('../assets/architecture.jpg');       
      }

      .projektovanje {
        background-image: url('../assets/projecting.jpg');       
      }

      .kontakt {
        background-image: url('../assets/contact.jpg');       
      }
    }
  }
</style>