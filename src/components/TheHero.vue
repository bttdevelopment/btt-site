<template>
  <section
    class="hero btt-border-radius-l"
    :class="{ 'is-fullheight': heroFull }"
  >
    <div class="hero-head">
      <TopBar />
      <NavigationBar />
    </div>
    <div class="hero-body">
      <div class="container has-text-left has-text-black">
        <div class="columns">
          <div class="column">
            <h1 class="title is-success has-text-bttgreen">
              Preserve, Protect, Prolong Life
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              dolorum cum totam rem unde consequuntur explicabo numquam.
            </p>
          </div>
          <div class="column">
            <img />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TopBar from "./TopBar";
import NavigationBar from "./NavigationBar";

export default {
  name: "Hero",
  components: {
    TopBar,
    NavigationBar
  },
  data() {
    return {
      heroFull: false
    };
  },
  watch: {
    $route() {
      if (this.$route.path === "/") {
        this.heroFull = true;
        console.log("its at home");
      } else {
        this.heroFull = false;
        console.log("its not at home");
      }
    }
  }
};
</script>
<style>
section.hero {
  background-image: url("../assets/herohome.png");
  background-position: left;
  background-size: cover;
  background-repeat: no-repeat;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.column .title {
  font-family: "Comfortaa", cursive;
}
</style>
