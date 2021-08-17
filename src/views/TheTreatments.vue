<template>
    <section class="section is-max-desktop  has-text-left">
    <div class=" container notification btt-lightblue-bg is-max-desktop">
      <div class="columns is-vcentered">
        <div class="column is-half" >
        <h1 class="title is-4 has-text-bttgreen">Hyperthermia Machine</h1>
        <p class="is-size-6 mb-5 has-text-grey-dark is-size-7">
            Using BTT™ Corp’s. innovative technology, the BTT™ Medical Institute
            successfully treats previously considered incurable
            neurodegenerative diseases with the objective of inducing heat shock
            protein production through brain guided hyperthermia.
          </p>
          <div class="modal">
            <div class="modal-background"></div>
            <div class="modal-content">
              <HyperThermia />
            </div>
            <button class="button is-outlined is-bttgreen is-size-7">
          <span>Learn More  </span><span class="icon"><i class="fas fa-arrow-alt-circle-right"></i></span>
        </button>
        </div>
        </div>
        <div class="column is-half" style="max-height: 300px;">
          <figure class="image hyperthermia-img-figure">
            <img src="../assets/hyperthermia.png" >
          </figure>
        </div>
      </div>
    </div>
    <div class="container mt-6 notification btt-lightblue-bg is-max-desktop" style="margin-bottom:70px;">
      <div class="columns is-vcentered">
        <div class="column is-half" >
        <h1 class="title is-4 has-text-bttgreen ">Hypothermia Machine</h1>
        <p class="is-size-6 mb-5 has-text-grey-dark is-size-7">
          BTT™ Corp. also treats patients through cooling, or hypothermia. One
          of the main applications of cooling is to treat Multiple Sclerosis
          (MS). Patients who have MS have damage to the sleeves of fatty tissue
          that protect nerve cells in their brain, called myelin sheaths.
          Cooling is believed to help restore the myelin sheath. Cooling the
          brain is also used to improve sleep, reduce anxiety, and depression.
        </p>
        <button class="button is-outlined is-bttgreen is-size-7">
          <span>Learn More  </span><span class="icon"><i class="fas fa-arrow-alt-circle-right"></i></span>
        </button>
        </div>
        <div class="column is-half" style="max-height: 300px;">
          <figure class="image hypothermia-img-figure">
            <img src="../assets/hypothermia.png" >
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import HyperThermia from "../components/HyperThermia.vue";
export default {
  name: "TheTreatments"
}
</script>

<style scoped>
.hypothermia-img-figure {
  min-width: 100px;
  max-width: 400px;
  left: 0;
  top: -100px;  
}
.hypothermia-img-figure {
  min-width: 100px;
  max-width: 400px;
}
</style>