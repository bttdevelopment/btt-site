<template>
<div class="container is-italic is-max-desktop mt-6">
      <p class=" has-text-weight-bold" style="font-size:500%; height:80px;">
        "
      </p>
      <p class="has-text-centered is-size-3">
        "Future Medicine will be the Medicine of Frequencies"
      </p>
      <p class=" has-text-weight-bold has-text-right is-offset-11" style="font-size:500%;  height:80px; position:relative; top: -25px;">
        "
      </p>
      <p class="has-text-centered is-size-4 has-text-weight-semibold">
        - Albert Einstein
      </p>
    </div>
<div class="container is-hidden-mobile carousel-container is-max-widescreen mt-6">
    <Carousel :autoplay="4000" :wrap-around="false">
      <Slide v-for="slide in slides" :key="slide" class="slide-container"  v-bind:id="slide.image" >
          <span class="the-slide ml-6 white-shadow">
            <h1 class="is-size-1 has-text-weight-bold white has-text-bttblue">{{slide.text}}</h1>
            <p class="mt-4 is-size-5 has-text-weight-semibold has-text-bttgreen" style="max-width: 500px">This text isn't within a block either. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</p>
          </span>
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </div>
  <section class="section is-widescreen mt-4 has-text-left">
    <!-- <div class="container is-widescreen btt-margin has-text-left"> -->
    
    <div class="container is-max-widescreen mt-5">
      <h2 class="title has-text-bttgreen is-2" style="margin-bottom:2em;">
        Brain Tunnelgenix Technologies, Corp.
      </h2>
    </div>
    <div class="container mb-6 is-max-widescreen">
      <div class="container parallax-bg">
        <div class="column parallax-bg-item"></div>
      </div>
      <div class="container is-max-widescreen">
        <div class="columns is-vcentered mt-6 has-text-justified">
          <div
            class="column is-6 extra-padding btt-lightblue-bg" style="margin-top: 100px;"
          >
            <h4 class="title is-4">Who we are</h4>
            <p>
              I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
            </p>
          </div>
          <div
            class="column is-6 extra-padding btt-lightblue-bg" style="margin-top: 100px;"
          >
            <h4 class="title is-4">What we do</h4>
            <p>
              I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
            </p>
          </div>
        </div>
        <div class="columns is-vcentered has-text-justified">
          <div
            class="column is-6 extra-padding btt-lightblue-bg"
          >
            <h4 class="title is-4">BTT wellness</h4>
            <p>
              I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
            </p>
          </div>
          <div
            class="column is-6 extra-padding btt-lightblue-bg"
          >
            <h4 class="title is-4">BTT Medical</h4>
            <p>
              I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
            </p>
          </div>
        </div>
        <div class="columns is-vcentered has-text-justified">
          <div
            class="column is-6 extra-padding btt-lightblue-bg"
          >
            <h4 class="title is-4">What we offer</h4>
            <p>
              I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
            </p>
          </div>
          <div
            class="column is-6 extra-padding btt-lightblue-bg"
          >
            <h4 class="title is-4">Brain Thermal Tunnel</h4>
            <p>
              I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
            </p>
          </div>
        </div>
      <!-- </div> -->
      <!-- <div class="block"></div> -->
    </div>
    </div>
  </section>
  <section id="parallax" class="section has-text-left">
    <div class="container is-max-widescreen mt-5">
      <h2 class="title has-text-bttgreen">
        What We Offer
      </h2>
    </div>
    <div
      class="container is-max-widescreen"
    >
      <div class="columns is-vcentered">
        <div class="column mt-6 has-text-right">
          <h1 class="subtitle">
            Our Products
          </h1>
          <p>
            I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
          </p>
        </div>
        <div class="column">
          <figure class="image has-text-centered" style="max-height:350px;">
            <img src="../assets/woman.jpg">
          </figure>
        </div>
        <div class="column mt-6 has-text-left">
          <h1 class="subtitle">
            Our Products
          </h1>
          <p>
            I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="has-text-left section mb-6">
    <div class="container is-max-widescreen">
    <h1 class="title ">BTT Wellness Platform</h1>
      <div class="columns is-vcentered mb-6">
        <div class="column mt-6 is-half glass-bg btt-border-radius-m" style="max-height:250px;">
          <figure class="image">
            <img src="../assets/glasso_purp.png" style="max-width:400px;position:relative;left:10%;">
          </figure>
        </div>
        <div class="column mt-6 is-half">
          <div class="block mx-5">
          <h1 class="subtitle">BTT Wearables</h1>
          <p class="is-size-7">
            We are developing the industry’s only wearable devices engineered to
            measure the skin temperature at the smo site for optimal brain
            control. Our products revolutionize how people do fitness, monitor
            viruses, ____ what else? In addition to wearable devices, we have a
            thermometer specifically designed to measure the smo site of a
            person to get the most accurate temperature possible.
          </p>
          </div>
        </div>
      </div>
      <div class="columns is-vcentered">
        <div class="column mt-6 is-half">
          <div class="block mx-5">
          <h1 class="subtitle">BTT Wellness App</h1>
          <p class="is-size-7">
              This is a placeholder. Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam
              malesuada erat ut turpis. Suspendisse urna nibh, viverra non,
              semper suscipit, posuere a, pede. Donec nec justo eget felis
              facilisis fermentum. Aliquam porttitor mauris sit amet orci.
              Aenean dignissim pellentesque felis.
          </p>
          </div>
        </div>
        <div class="column mt-6 is-half iphone-bg btt-border-radius-m" style="max-height:250px;">
          <figure class="image">
            <img src="../assets/app.png" style="max-width:180px;position:relative;left:5em;bottom:4em">
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'Autoplay',
  data() {
    return {
      slides: [
        {image: "slide1_bg", text: "this is Slide 1"},
        {image: "slide2_bg", text: "this is Slide 2"},
        {image: "slide3_bg", text: "this is Slide 3"},
        {image: "slide4_bg", text: "this is Slide 4"}
      ]
    }
  },
  components: {
    Carousel,
    Slide,
    Pagination,
  },
});
</script>
<style scoped>
  .btt-hippocampus-img{
    background-image: url("../assets/green_hippocampus.png");
    background-position: 10% 100%;
    background-attachment: fixed;
    background-size: auto;
    background-repeat: no-repeat;
    min-height: 400px;
  }
  .text-indented {
    text-indent: 2em;
}
.parallax-bg{
  position: absolute;
  width: 100%;

}
#parallax {
  padding:1.25rem;
}
.parallax-bg-item {
  height: 100vh;
  width: 90%;
  margin-left: 15%;
  background-image: url("../assets/thermometer_bg.jpg");
  background-attachment: fixed;
  background-size: contain;
  /* background-repeat: no-repeat; */
  min-height: 500px;
  max-height: 700px;
}

.glass-bg{
  background-image: url("../assets/abstract_bg.jpg");
  background-size: cover;
  background-position: 5%;
}

.iphone-bg{
  background-image: url("../assets/abstract_3.jpg");
  background-size: cover;
  background-position: 5%;
}

.slide-container {
  width: 100%;
  min-height: 500px;
  height:80vh;
  background-size:cover;
  background-position: center;
  border-radius: 3em;
  justify-content: left !important;
  
}
#slide1_bg{
  background-image: url("../assets/treatment.jpg")
}
#slide2_bg{
  background-image: url("../assets/thermometer_bg.jpg")
}

#slide3_bg{
  background-image: url("../assets/abstract_3.jpg");
}

#slide4_bg{
  background-image: url("../assets/medical-partners.jpg");
}
.slide-container:after {
  content: '';
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  background: radial-gradient(circle, transparent 75%, #008f89 200%);
  mix-blend-mode: revert;
  border-radius: 3em
}
.slide-container:hover:after {
  background: none;
}
.the-slide {
  text-align: left !important;
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
}


@media (max-width: 600px) {

      .parallax-bg {
            display:none;
       }

}
</style>
