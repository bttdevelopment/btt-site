<template>
    <section
    id="bttHero"
    class="hero btt-border-radius-l"
    :class="{ 'is-fullheight': heroFull }"
  >
    <div class="hero-head">
      <!-- <TopBar /> -->
      <NavigationBar />
    </div>
    <div id="hero-body" class="hero-body">
      <div class="container has-text-left has-text-white">
        <div class="columns">
          <div class="column is-7 is-offset-1">
            <transition name="slide-fade" mode="out-in">
              <h1 class="title has-text-white" :key="$route.path">
                {{ heroTitle }}
              </h1>
            </transition>
            <div  class="btt-border-radius-m" style="max-width: 600px;" v-if="heroFull">
            <p class="block">
              World's first noninvasive and continuous technology 
            </p>
              <ul class="block">
                <li>to track human brain temparature</li>
                <li>to detect infectious diseases</li>
                <li>to treat neorodegenerative disease through the <strong>Brain Thermal Tunnel</strong></li>
              </ul>
            <p>
              Our Mission: <strong>Protect, Preserve, Prolong Life</strong>
            </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
// import TopBar from "./TopBar";
import NavigationBar from "./NavigationBar";

export default {
  name: "Hero",
  components: {
    // TopBar,
    NavigationBar
  },
  props: {
    heroFull: Boolean,
    heroTitle: String
  }
};
</script>
<style>
.hero {
  /* background-image: url("../assets/herohome.png");
  background-position: left;
  background-size: cover;
  background-repeat: no-repeat; */
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  height: 300px;
}
.column .title {
  font-family: "Comfortaa", cursive;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
#abstract-bg {
  background-image: url("../assets/abstract.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 1em 0 1em 1em;
}

p strong, ul strong {
  color:white;
}
</style>