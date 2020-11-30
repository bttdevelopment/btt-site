<template>
    <TheHero />
  <transition name="fade" appear>
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

.fade-enter-active {
  transition: all 0.6s;
}

.fade-leave-active {
  transition: all 0.6s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
