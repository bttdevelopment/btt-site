<template>
  <section class="section has-text-left">
    <div class="container">
      <h1 class="title">
        Our Institute
      </h1>
      <div>
        <p class="block">
          The BTT™ Biomedical and Research Institute was created to harness the
          brain’s innate abilities, eliminating the need to penetrate the
          blood-brain barrier.
        </p>
        <p class="block">
          The human brain contains approximately 400 miles of blood vessels.
          These blood vessels are lined by closely linked endothelial cells to
          form the blood-brain barrier (BBB). The blood-brain barrier protects
          the brain from toxins by tightly regulating the transfer of proteins,
          nutrients, and waste products.
        </p>

        <p class="block">
          Delivering therapeutics across the BBB has been a major obstacle to
          successful drug development in neurodegeneration and is crucial to
          providing effective treatment.
        </p>
      </div>
      <div class="container is-max-desktop mt-6">
        <figure class="image is-3by1">
          <img src="https://bulma.io/images/placeholders/720x240.png" />
        </figure>
      </div>
      <div class="has-text-centered mt-6">
        <p class="is-size-4">We are providing treatment of the Future</p>
        <p>
          Our treatment is noninvasive, no anesthesia and has no side effects.
        </p>
      </div>
    </div>
    <div class="container mt-6">
      <h1 class="title">BTT™ Heat Shock or Hyperthermia Treatment</h1>
      <div class="container is-max-desktop mt-6">
        <figure class="image is-2by1">
          <img src="https://bulma.io/images/placeholders/640x320.png" />
        </figure>
      </div>
      <div class="mt-6">
        <p class="text-indented block">
          Using BTT™ Corp’s. innovative technology, the BTT ™ Biomedical and
          Research Institute treats historically incurable neurodegenerative
          diseases with the objective of inducing heat shock protein production
          through brain-guided hyperthermia.
        </p>
        <p class="block">
          BTT™ Brain-guided Advanced Hyperthermia (BgAH) is based on technology
          derived from the FDA-Cleared Abreu BTT™ 700 System, which is the
          driver of the continuous brain temperature monitoring by the BTT™
          Module.
        </p>
        <p class="block">
          The BTT™ BgAH System consists of 2 interdependent modules: the BTT™
          Control Module and the BTT™ Heat Shock Unit. In this treatment, Dr.
          Abreu treats the individual with whole body hyperthermia for extended
          periods of time with the goal of inducing heat shock proteins, the
          human bodies most ubiquitous proteins, to unfold the misfolded
          proteins causing the neurodegenerative disease.
        </p>
        <p class="block">
          We have treated multiple diseases using this treatment, such as
          Parkinson’s Disease, Huntington’s Disease, Alzheimer’s Disease, Ataxia
          and Lyme’s Disease.
        </p>
      </div>
    </div>
    <div class="container mt-6">
      <h1 class="title">BTT™ Hypothermia Treatment</h1>
      <div class="container is-max-desktop mt-6">
        <figure class="image is-2by1">
          <img src="https://bulma.io/images/placeholders/640x320.png" />
        </figure>
      </div>
      <div class="mt-6">
        <p class="text-indented block">
          BTT™ Biomedical and Research Institute also treats patients through
          cooling, or hypothermia. One of the main applications of cooling is to
          treat Multiple Sclerosis (MS). Patients who have MS have damage to the
          sleeves of fatty tissue (myelin sheaths) that protect nerve cells in
          the central nervous system. Cooling is believed to help restore the
          myelin sheath. Cooling the brain is also used to improve sleep, reduce
          anxiety, and alleviate depression.
        </p>
      </div>
    </div>
    <div class="container is-max-desktop has-text-centered mt-6">
      <h1 class="subtitle is-1 has-text-bttblue">Patient Stories</h1>
      <carousel class="carousel-container" @next="next" @prev="prev">
        <carousel-slide
          v-for="(slide, index) in slides"
          :key="slide"
          :index="index"
          :visibleSlide="visibleSlide"
          :direction="direction"
          class="columns is-mobile is-centered"
        >
            <div id="carousel-items" class="column is-9">
              <div>
                <p class="block mt-5 mb-0">
                  "{{slide[0]}}"
                </p>
                <p class="has-text-weight-bold mt-6">
                 {{slide[1]}}
                </p>
              </div>
            </div>
        </carousel-slide>
      </carousel>
    </div>
  </section>
</template>
<script>
import Carousel from '../components/Carousel.vue';
import CarouselSlide from '../components/CarouselSlide.vue';
export default {
  data() {
    return {
      slides: [
        ["I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.", "John, 32"],
        ["I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.", "Jane, 42"],
        ["I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.", "Jay, 60"]
      ],
      visibleSlide : 0,
      direction: "left",
    }
  },
  computed: {
    slidesLen() {
      return this.slides.length;
    }
  },
  methods: {
    next() {
      if(this.visibleSlide >= this.slides.length - 1){
          this.visibleSlide = 0
       }else{
          this.visibleSlide++
        }
        this.direction = "left"
    },
    prev() {
      if(this.visibleSlide <= 0) {
        this.visibleSlide = this.slidesLen - 1;
      }else{
        this.visibleSlide--;
      }
      this.direction = "right"
    }
  },
  components: {
    Carousel,
    CarouselSlide
  }
}
</script>

<style>
  #carousel-items {
    background-color:rgba(255, 255, 255, 0.8);
    min-height: 200px;
    
  }
  .border-gradient-green {
    border:10px solid;
    border-image-source: linear-gradient(45deg,#169E78,  #008f89);
  border-image-slice: 1;
}

  .carousel-container {
    border:10px solid;
    border-image-source: linear-gradient(45deg,#008f89,  #169E78);
  border-image-slice: 1;
  }
</style>