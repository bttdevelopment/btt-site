<template>
  <transition name="slide-up">

<video-background
    :src="require(`./assets/brain.mp4`)"
    v-if="isHome"
    style="height: 100vh;"
    :loop="false"
    
  >
    <TheHero :heroFull="true" heroTitle="Brain Tunnelgenix Technologies"/>
</video-background>
  <TheHero v-else :heroFull="false" :heroTitle="this.heroTitle"/>
  </transition>
  <!-- <transition name="fade" mode="out-in">
    <router-view />
  </transition> -->
    <transition name="fade" mode="out-in">
        <router-view></router-view>
    </transition>

  <TheFooter />
</template>
<script>
import TheHero from "@/components/TheHero.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
  name: "app",
  components: {
    TheHero,
    TheFooter
  },
  data() {
    return {
      isHome: Boolean,
      heroFull: null,
      heroTitle: "Brain Tunnelgenix Technologies",
      heroBackgroundImage: null
    }
  },
  watch: {
    $route(to) {
      if (to.path === "/") {
        // this.heroMedium = false;
        // this.transitionName = "fade";
        this.isHome = true;
      } else {
        // this.transitionName = "fade";
        this.isHome = false;
        // this.heroMedium = true;
        if (to.name == "about") {
          this.heroTitle = "About Us";
        } else if (to.name == "testimonials") {
          this.heroTitle = "Patient Testimonials";
        } else if (to.name == "researchPublication") {
          this.heroTitle = "Research and Publications";
        } else if (to.name == "newsMedia") {
          this.heroTitle = "News and Media";
        } else if (to.name == "contact") {
          this.heroTitle = "Contact Us";
        } else if (to.name == "news") {
          this.heroTitle = "News";
        } else if (to.name == "media") {
          this.heroTitle = "Media Coverage";
        } else if (to.name == "treatments") {
          this.heroTitle = "BTT Treatment Methods";
        } else if (to.name == "whatWeTreat") {
          this.heroTitle = "Conditions We Treat";
        }
      }
    }
  }
};
</script>
<style>
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #096047;
}

.fade-enter-active {
  transition: all 0.3s;
}

.fade-leave-active {
  transition: all 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s;
}
</style>
