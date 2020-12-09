<template>
  <!-- <transition :name="transitionName"> -->
  <video-background
    :src="require(`../assets/neuronsloop1.mp4`)"
    poster="../assets/herohome.png"
  >
    <section
    id="bttHero"
    class="hero btt-border-radius-l"
      :class="{ 'is-fullheight': heroFull }"
  >
    <div class="hero-head">
      <!-- <TopBar /> -->
      <NavigationBar />
    </div>
    <div class="hero-body">
      <div class="container has-text-left has-text-black">
        <div class="columns">
          <div class="column is-7 is-offset-1">
            <h2 class="title has-text-bttgreen">
              Brain Tunnelgenix Technologies, Corp.
            </h2>
            <div style="max-width: 600px">
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
    </video-background>
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
  data() {
    return {
      heroFull: false,
      // heroMedium: true,
      // transitionName: null
    };
  },
  watch: {
    $route(to) {
      if (to.path === "/") {
        // this.heroMedium = false;
        // this.transitionName = "fade";
        this.heroFull = true;
        console.log("its at home");
      } 
      else{
        // this.transitionName = "fade";
        this.heroFull = false;
        // this.heroMedium = true;
        console.log("its not at home");
      }
    }
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

.hero-small{
  max-heigt:200px;
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