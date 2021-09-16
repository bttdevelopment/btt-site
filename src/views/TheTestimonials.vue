<template>
    <div class=" container is-max-desktop has-text-bttblue has-text-centered" style="margin-top: 10vh;height:100vh;">
      <h1 class="subtitle is-1 has-text-bttblue">Patient Stories</h1>
        <Carousel class="mx-4">
            <Slide v-for="slide in testimonialSlides" :key="slide" class="slide-container carousel-container">
                <span style="max-width: 60%;">
                <p class="block mt-5 mb-0">
                  "{{slide[0]}}"
                </p>
                <p class="has-text-weight-bold mt-4">
                 {{slide[1]}}
                </p>
                </span>
            </Slide>
            <template #addons>
                <Navigation/>
                <Pagination/>
            </template>
        </Carousel>
    </div>
</template>
<script>
import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default ({
    data() {
        return {
            testimonialSlides: [
                ["Testimonial 1. I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.", "John, 36"],
                ["Testimonial 2. I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.", "Jane, 23"],
                ["Testimonial 3. I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.", "Jay, 33"]
            ]
        }
    },
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation
    }
})
</script>
<style>
  .carousel-container {
    border:1px solid;
    border-image-source: linear-gradient(45deg,#00fe84,  #00fefc);
  border-image-slice: 1;
  height: 60vh;
  }
  
  .slide-container{

  }
</style>
