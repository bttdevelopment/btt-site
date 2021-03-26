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
            
            <router-link class="navbar-item" to="/our_company">About Us</router-link>
          <!-- </div> -->
          <!-- <div class="navbar-item"> -->
            <router-link class="navbar-item" to="/research-publication"
              >Research, Publications</router-link
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
        <div class="navbar-end">
          <div class="navbar-item is-right">
            <router-link class="navbar-link is-arrowless" to="/medical-institute">
               <span class="icon-text">
                <span class='mr-1'>BTT™ BioMedical, Research Institute</span>  
                <!-- <span class="icon is-medium"><i class="fas fa-bars"></i></span> -->
               </span>
            </router-link>
            <!-- <div class="navbar-dropdown">
              <div class="navbar-item">
                Our Institute
              </div>
              <hr class="navbar-divider">
              <div class="navbar-item">
                Neurological Diseases
              </div>
              <hr class="navbar-divider">
              <div class="navbar-item">
                Infectious Diseases
              </div>
              <hr class="navbar-divider">
            </div> -->
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
