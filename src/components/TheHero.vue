<template>
  <!-- <transition :name="transitionName"> -->
    <section
    id="bttHero"
    class="hero btt-border-radius-l"
      :class="{ 'is-fullheight': heroFull}"
  >
    <div class="hero-head">
      <!-- <TopBar /> -->
      <NavigationBar />
    </div>
    <div class="hero-body">
      <div class="container has-text-left has-text-white">
        <div class="columns">
          <div class="column is-7 is-offset-1">
            <h1 class="title has-text-bttgreen" v-if="heroFull">
              Brain Tunnelgenix Technologies, Corp.
            </h1>
            
            <div style="max-width: 600px" v-if="heroFull">
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
  <!-- </transition> -->
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
    heroFull: Boolean
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
}
.column .title {
  font-family: "Comfortaa", cursive;
}
/* .fade-enter-active {
  transition: all 0.3s;
}

.fade-leave-active {
  transition: all 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
} */

</style>