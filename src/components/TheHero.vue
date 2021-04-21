<template>
    <section
    id="bttHero"
    class="hero btt-border-radius-l"
    :style=" heroFull ? {'background-image': 'none'} : {'background-repeat': `no-repeat`}"
    :class="{ 'is-fullheight': heroFull }"
  >
    <div class="hero-head">
      <!-- <TopBar /> -->
      <NavigationBar />
    </div>
    <div id="hero-body" class="hero-body">
      <div class="container has-text-left has-text-bttblue">
        <div class="columns">
          <div class="column is-7 is-offset-1">
            <transition name="slide-fade" mode="out-in">
              <h1
                class="title"
                :class="{ 'has-text-bttblue': heroFull, 'has-text-bttgreen': !heroFull }"
                :key="$route.path"
              >
                {{ heroTitle }}
              </h1>
            </transition>
            <div  class="hero-text btt-border-radius-m" style="max-width: 600px;" v-if="heroFull">
            <p class="block">
              World's first noninvasive and continuous technology 
            </p>
              <ul class="block">
                <li>to track human brain temparature</li>
                <li>to detect infectious diseases</li>
                <li>to treat neorodegenerative disease through the <strong class="has-text-bttblue">Brain Thermal Tunnel</strong></li>
              </ul>
            <p>
              Our Mission: <strong class="has-text-bttblue">Protect, Preserve, Prolong Life</strong>
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
  data() {
    return {
      heroBackground: {
        atAboutUs: false,
        atMedical: false,
        atMedia: false,
        atResearch: false
      }
    }
  },
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
  background-image: url("../assets/medical-partners.jpg");
  background-position: left;
  background-size: cover;
  background-repeat: no-repeat;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  height: 300px;
}
.hero-text {
  font-size:1.2em;
  font-weight:550;
}
.column .title, h5 {
  font-family: "Work Sans", sans-serif;
  font-size: 3rem;
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

.is-fullheight .column {
  background-color: rgba(255, 255, 255, 0.9);
}

.herofull strong,
ul strong {
  color:white;
}
</style>