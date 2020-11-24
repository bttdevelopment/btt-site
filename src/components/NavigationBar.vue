<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container is-fullhd">
      <div id="logoContainer" class="navbar-brand" style="margin-left: 0;">
        <router-link to="/"
          ><img class="mt-3 ml-3" src="../assets/bttlogo.png"
        /></router-link>
        <a
          role="button"
          class="navbar-burger"
          :class="{ 'is-active': isHamburgerOpen }"
          @click="openHamburgerMenu"
          data-target="navMenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
      <div
        id="navMenu"
        class="navbar-menu"
        :class="{ 'is-active': isHamburgerOpen }"
      >
        <div
          class="navbar-start"
          style="flex-grow: 1; justify-content: center;"
        >
          <div class="navbar-item">
            <router-link to="/our_company">Our Company</router-link>
          </div>
          <div class="navbar-item">
            <router-link to="/innovation">Innovation</router-link>
          </div>
          <div class="navbar-item">
            <router-link to="/what_we_offer">What We Offer</router-link>
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <router-link to="/apply_for_treatment">
              <button class="button is-rounded is-bttgreen is-outlined">
                Apply For Treatment
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      isHamburgerOpen: false
    };
  },
  methods: {
    openHamburgerMenu() {
      this.isHamburgerOpen = !this.isHamburgerOpen;
    }
  }
};
</script>
<style>
nav a.router-link-exact-active {
  color: #008f89;
}

nav a {
  color: black;
}

nav a img {
  max-height: 40px;
}
</style>
