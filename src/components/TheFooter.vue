<template>
  <footer
    id="bttFooter"
    class="footer btt-border-radius-m btt-gradient-background-vertical"
  >
    <div class="container has-text-white">
      <div class="columns is-mobile is-gapless">
        <div class="column is-2 has-text-right">
          <img src="../assets/bttlogo_white.png" />
        </div>
        <div class="column is-10">
<<<<<<< HEAD
          <h5 class="title is-5 has-text-white">
=======
          <h5 class="title is-5 blue has-text-white">
>>>>>>> pre-netlify-deploy
            Following our purpose to Protect, Preserve and Prolong life
          </h5>
        </div>
      </div>
      <div class="columns is-multiline is-centered">
        <div class="column is-half">  
          <div class="columns is-mobile">  
            <div class="column">
              <h5 class="title is-5">Explore BTT</h5>
              <ul>

                <li>
                  <router-link to="/our-company">Our Company</router-link>
                </li>
                <li>
                  <router-link to="/medical-institute">BTT Medical Institute</router-link>
                </li>
                <li>
                  <router-link to="/research-publication">Research Publication</router-link>
                </li>
                <li>
                  <router-link to="/news">News and Media</router-link>
                </li>
              </ul>
            </div>
            <div class="column">
              <h5 class="title is-5">Visit BTT</h5>
              <ul>
                <li>
                  <a href="https://goo.gl/maps/PU1Us2uh8niZvzyV9">
                  17501 Biscayne Blvd, Ste 470<br/>
                  Aventura, FL 33160
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="column is-half">
          <div class="columns is-mobile">
            <div class="column is narrow">
              <h5 class="title is-5">Contact Us</h5>
              <ul>
                <li>
                  (786)440-5136
                </li>
                <li>
                  info@bttcorp.com
                </li>
                <li>
                  <span class="icon is-large">
                  <a href="https://www.linkedin.com/company/bttcorp/">
                    <i class="fab fa-linkedin fa-2x"></i>
                  </a>
                  </span>
                  <span class="icon is-large">
                  <a href="https://www.youtube.com/user/BTTBrainTemperature">
                    <i class="fab fa-youtube-square fa-2x"></i>
                  </a>
                  </span>
                </li>
              </ul>
            </div>
            <div class="column is narrow">
              <h5 class="title is-5">Legal</h5>
              <ul>
                <li>
                  Terms
                </li>
                <li>
                  Privacy
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="content mt-3">
        <p>
          Copyright 2020 Brain Tunnelgenix Technologies Corp - All Rights
          Reserved. Terms of Use - Privacy Policy
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter"
};
</script>
<style>
footer div img {
  max-height: 50px;
  }
#bttFooter {
  padding-bottom: 1rem;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
footer .title,
footer .subtitle,
footer a {
  color: white !important;
}
footer ul li {
  margin-bottom: 20px;
}
</style>