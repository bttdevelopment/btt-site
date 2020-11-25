<template>
  <TheHero />
  <transition class="fade">
    <router-view :key="$route.fullPath" />
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
  }
};
</script>
<style>
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
