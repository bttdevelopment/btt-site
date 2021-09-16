<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container is-widescreen">
      <div id="navbar-brand" class="navbar-brand" style="margin-left: 0;">
        <div id="brand-logo-container">
        <router-link to="/"
          ><img class="ml-3 mt-1" src="../assets/bttlogo_original.png"
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
          <!-- <div class="navbar-item"> -->
            
            <router-link class="navbar-item" to="/our_company">About</router-link>
          <!-- </div> -->
          <!-- <div class="navbar-item"> -->
            <div class="navbar-item has-dropdown is-hoverable">
              <router-link class="navbar-link is-arrowless" to="treatments">Treatments
              </router-link>
              <div class="navbar-dropdown">
                <router-link class="navbar-item" to="/what-we-treat">What We Treat</router-link>
                <router-link class="navbar-item" to="treatments">Treatment Methods</router-link>
                <hr class="navbar-divider">
                <router-link class="navbar-item" to="testimonials">Patient Testimonials</router-link>
              </div>
            </div>
            <router-link class="navbar-item" to="/research-publication"
              >Publications</router-link
            >
          <!-- </div> -->
          <div class="navbar-item has-dropdown is-hoverable">
            <div class="navbar-link is-arrowless">Media</div>
              <div class="navbar-dropdown">
                <router-link class="navbar-item" to="media"
              >Media Coverage</router-link>
              
                <router-link class="navbar-item" to="news"
              >News</router-link>
              </div>
          </div>
          <!-- <div class="navbar-item"> -->
            <router-link class="navbar-item" to="contact">Contact Us</router-link>
          <!-- </div> -->
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

.hero .navbar {
  background-color: rgba(255, 255, 255) !important;
}

.navbar-item, .navbar-link {
  color: #008f89 !important;
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
