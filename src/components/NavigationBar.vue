<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container is-fullhd">
      <div id="navbar-brand" class="navbar-brand" style="margin-left: 0;">
        <div id="brand-logo-container">
        <router-link to="/"
          ><img class="ml-3 mt-1" src="../assets/bttlogo_text_gradient.png"
        /></router-link>
        </div>
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
            <router-link to="/our_company">About Us</router-link>
          </div>
          <div class="navbar-item">
            <router-link to="/research-publication"
              >Research, Publications</router-link
            >
          </div>
          <div class="navbar-item">
            <router-link to="/news">Media</router-link>
          </div>
          <div class="navbar-item">
            <router-link to="contact">Contact Us</router-link>
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <router-link to="/medical-institute">
              <button class="button is-rounded is-bttgreen is-outlined">
               Medical Institute
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
  color:#f35e19;
}
.hero .navbar {
  background-color: white !important;
}
nav a {
  color: #008f89;
}

nav a img {
  max-height: 33px;
}
#navbar-brand {
    align-content: center;
    /* commenting this out, the multiple lines will have gaps */
    align-items: center;
    /* commenting this out, the one-line will not align */
}
#brand-logo-container {
  margin-right: 5em;
}
.navbar-burger {
  color: #008f89 !important;
}
</style>
